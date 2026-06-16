'use client';

import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 32;

type Particle = {
  el: HTMLDivElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  active: boolean;
};

export default function CustomCursor() {
  const shipRef = useRef<HTMLDivElement>(null);
  const flameRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const layer = layerRef.current;
    const ship = shipRef.current;
    const flame = flameRef.current;
    if (!layer || !ship || !flame) return;

    // --- particle pool (exhaust trail) ---
    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const el = document.createElement('div');
      el.className = 'ship-particle';
      el.style.opacity = '0';
      layer.appendChild(el);
      particles.push({ el, x: 0, y: 0, vx: 0, vy: 0, life: 0, maxLife: 1, active: false });
    }
    let pIndex = 0;

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { x: mouse.x, y: mouse.y };
    let prevX = pos.x;
    let prevY = pos.y;
    let angle = 0; // radians, ship facing
    let raf = 0;
    let lastT = performance.now();

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      const el = e.target as HTMLElement;
      const interactive = !!el.closest('a, button, [data-cursor="grow"], input, textarea');
      ship.classList.toggle('cursor-ship--lock', interactive);
    };

    const spawn = (x: number, y: number, dirX: number, dirY: number, speed: number) => {
      const p = particles[pIndex];
      pIndex = (pIndex + 1) % PARTICLE_COUNT;
      // shoot opposite to travel direction with a little spread
      const spread = (Math.random() - 0.5) * 0.7;
      const perpX = -dirY;
      const perpY = dirX;
      const back = 1 + speed * 0.12;
      p.x = x;
      p.y = y;
      p.vx = -dirX * back + perpX * spread;
      p.vy = -dirY * back + perpY * spread;
      p.life = 0;
      p.maxLife = 0.35 + Math.random() * 0.3;
      p.active = true;
      const size = 3 + Math.random() * 4 + speed * 0.15;
      p.el.style.width = `${size}px`;
      p.el.style.height = `${size}px`;
    };

    const tick = (t: number) => {
      const dt = Math.min(0.05, (t - lastT) / 1000);
      lastT = t;

      // ship eases toward the cursor -> momentum / "building thrust" feel
      pos.x += (mouse.x - pos.x) * 0.16;
      pos.y += (mouse.y - pos.y) * 0.16;

      const dx = pos.x - prevX;
      const dy = pos.y - prevY;
      prevX = pos.x;
      prevY = pos.y;
      const speed = Math.hypot(dx, dy);

      if (speed > 0.4) {
        angle = Math.atan2(dy, dx);
      }
      const deg = (angle * 180) / Math.PI;
      ship.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%) rotate(${deg}deg)`;

      // thrust drives the flame length + opacity
      const thrust = Math.min(1, speed / 16);
      flame.style.transform = `scaleX(${0.3 + thrust * 1.8}) scaleY(${0.6 + thrust * 0.6})`;
      flame.style.opacity = `${0.25 + thrust * 0.75}`;

      // emit exhaust from the tail
      const dirX = Math.cos(angle);
      const dirY = Math.sin(angle);
      if (speed > 1.2) {
        const tailX = pos.x - dirX * 20;
        const tailY = pos.y - dirY * 20;
        const emits = speed > 8 ? 2 : 1;
        for (let i = 0; i < emits; i++) spawn(tailX, tailY, dirX, dirY, speed);
      }

      // update particles
      for (const p of particles) {
        if (!p.active) continue;
        p.life += dt;
        if (p.life >= p.maxLife) {
          p.active = false;
          p.el.style.opacity = '0';
          continue;
        }
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.92;
        p.vy *= 0.92;
        const k = 1 - p.life / p.maxLife; // 1 -> 0
        p.el.style.transform = `translate(${p.x}px, ${p.y}px) translate(-50%, -50%) scale(${k})`;
        p.el.style.opacity = `${k}`;
      }

      raf = requestAnimationFrame(tick);
    };

    const onLeave = () => { ship.style.opacity = '0'; };
    const onEnter = () => { ship.style.opacity = '1'; };

    document.body.classList.add('has-custom-cursor');
    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    raf = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(raf);
      particles.forEach((p) => p.el.remove());
    };
  }, []);

  return (
    <>
      <div ref={layerRef} className="ship-layer" aria-hidden />
      <div ref={shipRef} className="cursor-ship" aria-hidden>
        <div ref={flameRef} className="cursor-flame" />
        <svg width="48" height="28" viewBox="0 0 34 20" fill="none" className="cursor-ship-svg">
          {/* fins */}
          <path d="M8 3 L2 0 L12 7 Z" fill="#6366f1" />
          <path d="M8 17 L2 20 L12 13 Z" fill="#6366f1" />
          {/* body */}
          <path d="M4 10 C10 4, 22 4, 32 10 C22 16, 10 16, 4 10 Z" fill="#e5e7eb" />
          {/* nose */}
          <path d="M24 6 C30 8, 32 9, 33.5 10 C32 11, 30 12, 24 14 Z" fill="#22d3ee" />
          {/* window */}
          <circle cx="20" cy="10" r="2.4" fill="#0ea5e9" stroke="#bae6fd" strokeWidth="0.8" />
        </svg>
      </div>
    </>
  );
}
