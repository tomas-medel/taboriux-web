"use client";

import { useEffect, useRef } from "react";

export function MouseLight() {
  const lightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover || !lightRef.current) return;

    let rafId = 0;
    let x = -9999;
    let y = -9999;

    const paint = () => {
      rafId = 0;
      if (!lightRef.current) return;
      lightRef.current.style.transform = `translate3d(${x - 140}px, ${y - 140}px, 0)`;
    };

    const onMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (rafId) return;
      rafId = window.requestAnimationFrame(paint);
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[2] hidden md:block" aria-hidden>
      <div ref={lightRef} className="mouse-light" />
    </div>
  );
}
