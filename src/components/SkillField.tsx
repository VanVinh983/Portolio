'use client';

import React, { useEffect, useRef } from 'react';
import { IconType } from 'react-icons';
import {
  SiFlutter, SiReact, SiDart, SiNextdotjs, SiBlazor, SiNestjs, SiDotnet,
  SiSpring, SiFlask, SiPostgresql, SiMysql, SiTypescript, SiJavascript,
  SiPython, SiSharp, SiFirebase, SiGit, SiRedux,
} from 'react-icons/si';
import { FaAndroid } from 'react-icons/fa';

type Group = 'FE' | 'BE';
type Skill = { icon: IconType; label: string; color: string; group: Group };

// Frontend / mobile cluster -> "FE"  |  Backend / data / tools -> "BE"
const skills: Skill[] = [
  { icon: SiReact, label: 'React', color: '#61DAFB', group: 'FE' },
  { icon: SiReact, label: 'React Native', color: '#61DAFB', group: 'FE' },
  { icon: SiNextdotjs, label: 'Next.js', color: '#ffffff', group: 'FE' },
  { icon: SiFlutter, label: 'Flutter', color: '#02569B', group: 'FE' },
  { icon: FaAndroid, label: 'Android', color: '#3DDC84', group: 'FE' },
  { icon: SiBlazor, label: 'Blazor', color: '#8b5cf6', group: 'FE' },
  { icon: SiTypescript, label: 'TypeScript', color: '#3178C6', group: 'FE' },
  { icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E', group: 'FE' },
  { icon: SiDart, label: 'Dart', color: '#0175C2', group: 'FE' },
  { icon: SiRedux, label: 'Redux', color: '#764ABC', group: 'FE' },
  { icon: SiNestjs, label: 'NestJS', color: '#E0234E', group: 'BE' },
  { icon: SiDotnet, label: '.NET', color: '#a78bfa', group: 'BE' },
  { icon: SiSpring, label: 'Spring', color: '#6DB33F', group: 'BE' },
  { icon: SiFlask, label: 'Flask', color: '#e5e7eb', group: 'BE' },
  { icon: SiPython, label: 'Python', color: '#3776AB', group: 'BE' },
  { icon: SiSharp, label: 'C#', color: '#c084fc', group: 'BE' },
  { icon: SiPostgresql, label: 'Postgres', color: '#4169E1', group: 'BE' },
  { icon: SiMysql, label: 'MySQL', color: '#4479A1', group: 'BE' },
  { icon: SiFirebase, label: 'Firebase', color: '#FFCA28', group: 'BE' },
  { icon: SiGit, label: 'Git', color: '#F05032', group: 'BE' },
];

type Star = { x: number; y: number; vx: number; vy: number; tx: number; ty: number; r: number; left: boolean };
type Chip = { el: HTMLDivElement | null; x: number; y: number; vx: number; vy: number; tx: number; ty: number; group: Group };

export default function SkillField() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chipRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const coarse = window.matchMedia('(pointer: coarse)').matches;
    let hovered = coarse; // assemble by default on touch (no hover)
    let W = 0, H = 0;
    let stars: Star[] = [];
    let chips: Chip[] = [];
    let raf = 0;

    // Render "FE" (left) and "BE" (right) to an offscreen canvas, sample filled pixels.
    const sampleTargets = () => {
      const off = document.createElement('canvas');
      off.width = W;
      off.height = H;
      const octx = off.getContext('2d');
      if (!octx) return { fe: [] as number[][], be: [] as number[][] };
      octx.fillStyle = '#fff';
      octx.textAlign = 'center';
      octx.textBaseline = 'middle';
      const fs = Math.min(H * 0.74, W * 0.27);
      // NOTE: canvas cannot resolve CSS variables — use a concrete font family.
      octx.font = `bold ${fs}px Arial, Helvetica, sans-serif`;
      octx.fillText('FE', W * 0.27, H * 0.5);
      octx.fillText('BE', W * 0.73, H * 0.5);
      const data = octx.getImageData(0, 0, W, H).data;
      const fe: number[][] = [];
      const be: number[][] = [];
      const stride = 5;
      for (let y = 0; y < H; y += stride) {
        for (let x = 0; x < W; x += stride) {
          if (data[(y * W + x) * 4 + 3] > 128) {
            (x < W / 2 ? fe : be).push([x, y]);
          }
        }
      }
      return { fe, be };
    };

    const assignSpread = (list: Chip[], pts: number[][]) => {
      if (!pts.length) return;
      const sorted = [...pts].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
      for (let i = 0; i < list.length; i++) {
        const p = sorted[Math.floor(((i + 0.5) / list.length) * sorted.length)];
        list[i].tx = p[0];
        list[i].ty = p[1];
      }
    };

    const build = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      W = container.clientWidth;
      H = container.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const { fe, be } = sampleTargets();
      const all = [...fe, ...be];

      const starCount = Math.min(650, Math.max(260, Math.floor(W * 0.55)));
      stars = [];
      for (let i = 0; i < starCount; i++) {
        const t = all[Math.floor(Math.random() * all.length)] || [W / 2, H / 2];
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          tx: t[0],
          ty: t[1],
          r: Math.random() * 1.6 + 0.5,
          left: t[0] < W / 2,
        });
      }

      chips = skills.map((s, i) => ({
        el: chipRefs.current[i],
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        tx: 0,
        ty: 0,
        group: s.group,
      }));
      assignSpread(chips.filter((c) => c.group === 'FE'), fe);
      assignSpread(chips.filter((c) => c.group === 'BE'), be);
    };

    const floatStep = (o: { x: number; y: number; vx: number; vy: number }) => {
      o.x += o.vx;
      o.y += o.vy;
      if (o.x < 0 || o.x > W) o.vx *= -1;
      if (o.y < 0 || o.y > H) o.vy *= -1;
      o.x = Math.max(0, Math.min(W, o.x));
      o.y = Math.max(0, Math.min(H, o.y));
    };

    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      for (const s of stars) {
        if (hovered) {
          s.x += (s.tx - s.x) * 0.09;
          s.y += (s.ty - s.y) * 0.09;
        } else {
          floatStep(s);
        }
        const near = hovered ? 1 : 0.55;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.left
          ? `rgba(34, 211, 238, ${near})`
          : `rgba(168, 130, 255, ${near})`;
        ctx.fill();
      }

      for (const c of chips) {
        if (hovered) {
          c.x += (c.tx - c.x) * 0.1;
          c.y += (c.ty - c.y) * 0.1;
        } else {
          floatStep(c);
        }
        if (c.el) {
          c.el.style.transform = `translate(${c.x}px, ${c.y}px) translate(-50%, -50%)`;
        }
      }

      raf = requestAnimationFrame(loop);
    };

    const onEnter = () => { hovered = true; container.classList.add('assembled'); };
    const onLeave = () => { if (!coarse) { hovered = false; container.classList.remove('assembled'); } };
    const onResize = () => build();

    if (coarse) container.classList.add('assembled');
    build();
    loop();
    container.addEventListener('pointerenter', onEnter);
    container.addEventListener('pointerleave', onLeave);
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      container.removeEventListener('pointerenter', onEnter);
      container.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="skill-field relative w-full h-[380px] sm:h-[460px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
      data-cursor="grow"
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
      {skills.map((s, i) => (
        <div
          key={`${s.label}-${i}`}
          ref={(el) => { chipRefs.current[i] = el; }}
          className="skill-chip absolute top-0 left-0 flex items-center px-2.5 py-1.5 rounded-lg bg-white/10 border border-white/15 backdrop-blur-sm text-xs whitespace-nowrap will-change-transform pointer-events-none"
        >
          <s.icon className="w-4 h-4 shrink-0" style={{ color: s.color }} />
          <span className="skill-chip-label ml-1.5 font-medium text-white">{s.label}</span>
        </div>
      ))}
      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 cosmic-label pointer-events-none">
        ✦ hover to assemble · FE / BE
      </span>
    </div>
  );
}
