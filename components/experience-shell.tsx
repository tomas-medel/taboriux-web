"use client";

import { useEffect, useRef } from "react";

export function ExperienceShell() {
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let scrollRaf = 0;
    let moveRaf = 0;
    let lastX = 50;
    let lastY = 50;

    const applyScroll = () => {
      scrollRaf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const normalized = max > 0 ? window.scrollY / max : 0;
      const clamped = Math.max(0, Math.min(1, normalized));

      if (progressRef.current) {
        progressRef.current.style.width = `${clamped * 100}%`;
      }

      document.documentElement.style.setProperty("--sy", `${window.scrollY}px`);
      document.documentElement.style.setProperty("--sp", `${clamped}`);
    };

    const onScroll = () => {
      if (scrollRaf) return;
      scrollRaf = window.requestAnimationFrame(applyScroll);
    };

    const applyMove = () => {
      moveRaf = 0;
      document.documentElement.style.setProperty("--mx", `${lastX}%`);
      document.documentElement.style.setProperty("--my", `${lastY}%`);
    };

    const onMove = (event: MouseEvent) => {
      lastX = (event.clientX / window.innerWidth) * 100;
      lastY = (event.clientY / window.innerHeight) * 100;
      if (moveRaf) return;
      moveRaf = window.requestAnimationFrame(applyMove);
    };

    applyScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (canHover) {
      window.addEventListener("mousemove", onMove, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (canHover) {
        window.removeEventListener("mousemove", onMove);
      }
      if (scrollRaf) window.cancelAnimationFrame(scrollRaf);
      if (moveRaf) window.cancelAnimationFrame(moveRaf);
    };
  }, []);

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-[70] h-[2px] bg-white/5">
        <div
          ref={progressRef}
          className="h-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 shadow-[0_0_16px_rgba(84,197,255,0.95)] transition-[width] duration-150"
          style={{ width: "0%" }}
        />
      </div>
      <div className="pointer-events-none fixed inset-0 z-[1]">
        <div className="cursor-light" />
      </div>
    </>
  );
}
