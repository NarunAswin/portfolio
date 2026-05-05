"use client";

import { useEffect, useState } from "react";

export default function AmbientBackground() {
  const [pos, setPos] = useState({ x: 50, y: 30 });

  useEffect(() => {
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setPos({ x, y });
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="ambient-grid" />
      <div
        className="ambient-spotlight"
        style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
      />

      <span className="ambient-particle p1" />
      <span className="ambient-particle p2" />
      <span className="ambient-particle p3" />
      <span className="ambient-particle p4" />
      <span className="ambient-particle p5" />
      <span className="ambient-particle p6" />
    </div>
  );
}
