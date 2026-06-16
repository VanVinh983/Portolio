"use client";
import { useEffect, useRef } from "react";

export default function MouseFollowLayout({ children }: { children: React.ReactNode }) {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip the cursor spotlight on touch devices.
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { ...target };
    let frameId: number;

    const handleMouseMove = (event: MouseEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
    };

    const tick = () => {
      // Ease toward the cursor and write to a CSS variable — no React re-render.
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(circle at ${current.x}px ${current.y}px, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0) 45vh)`;
      }
      frameId = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", handleMouseMove);
    frameId = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="relative w-full">
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 z-[1]"
        aria-hidden
      />
      <div className="relative z-0 w-full">{children}</div>
    </div>
  );
}
