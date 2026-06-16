'use client';

import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const cometRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (barRef.current) barRef.current.style.width = `${p * 100}%`;
      if (cometRef.current) cometRef.current.style.left = `${p * 100}%`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] pointer-events-none">
      <div
        ref={barRef}
        className="h-full"
        style={{
          width: '0%',
          background: 'linear-gradient(90deg, #22d3ee, #8b5cf6, #e879f9)',
        }}
      />
      <div
        ref={cometRef}
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
        style={{ left: '0%' }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_4px_rgba(34,211,238,0.8)]" />
      </div>
    </div>
  );
}
