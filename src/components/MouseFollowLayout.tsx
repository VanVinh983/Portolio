"use client";
import { useEffect, useState } from "react";

export default function MouseFollowLayout({ children }: { children: React.ReactNode }) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Use pageX/pageY instead of clientX/clientY so that the position
      // reflects the cursor's location within the entire document.
      setCursorPosition({
        x: event.pageX,
        y: event.pageY,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const updateSmoothPosition = () => {
      setSmoothPosition((prev) => {
        const dx = cursorPosition.x - prev.x;
        const dy = cursorPosition.y - prev.y;
        const easingFactor = 0.05;

        return {
          x: Math.round(prev.x + dx * easingFactor),
          y: Math.round(prev.y + dy * easingFactor),
        };
      });
      animationFrameId = requestAnimationFrame(updateSmoothPosition);
    };

    animationFrameId = requestAnimationFrame(updateSmoothPosition);

    return () => cancelAnimationFrame(animationFrameId);
  }, [cursorPosition]);

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `radial-gradient(
            circle at ${smoothPosition.x}px ${smoothPosition.y}px,
            rgba(59, 130, 246, 0.3) 0%,
            rgba(59, 130, 246, 0) 50vh
          )`,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div style={{ position: "relative", zIndex: 0 }}>{children}</div>
    </div>
  );
}
