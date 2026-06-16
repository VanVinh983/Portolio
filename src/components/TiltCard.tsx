'use client';

import React, { useRef } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Max tilt in degrees */
  max?: number;
};

export default function TiltCard({ children, className = '', max = 7 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 2 * max;
    const rotateX = -(py - 0.5) * 2 * max;
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.015)`;
    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(96,165,250,0.18), transparent 55%)`;
      glareRef.current.style.opacity = '1';
    }
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = 'perspective(900px) rotateX(0) rotateY(0) scale(1)';
    if (glareRef.current) glareRef.current.style.opacity = '0';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`relative transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
      <div
        ref={glareRef}
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200"
        aria-hidden
      />
    </div>
  );
}
