"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!blobRef.current) return;
      const { clientX: x, clientY: y } = e;
      blobRef.current.style.transform = `translate(${x * 0.04}px, ${y * 0.04}px)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="blob-one absolute rounded-full opacity-30"
          style={{
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
            filter: "blur(80px)",
            top: "-100px",
            left: "-200px",
          }}
        />
        <div
          className="blob-two absolute rounded-full opacity-20"
          style={{
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, #0ea5e9 0%, transparent 70%)",
            filter: "blur(80px)",
            top: "30%",
            right: "-150px",
          }}
        />
        <div
          className="blob-three absolute rounded-full opacity-20"
          style={{
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, #8083ff 0%, transparent 70%)",
            filter: "blur(80px)",
            bottom: "0",
            left: "30%",
          }}
        />
        {/* Mouse-tracking accent blob */}
        <div
          ref={blobRef}
          className="absolute rounded-full opacity-15 transition-transform duration-700 ease-out"
          style={{
            width: "350px",
            height: "350px",
            background: "radial-gradient(circle, #89ceff 0%, transparent 70%)",
            filter: "blur(60px)",
            top: "20%",
            left: "40%",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Floating label badge */}
        <div className="mb-6 animate-fade-up opacity-0 animate-float" style={{ animationFillMode: "forwards" }}>
          <span className="tech-badge">
            <span className="material-symbols-outlined mr-1" style={{ fontSize: "14px" }}>terminal</span>
            Software Engineer (Frontend Developer)
          </span>
        </div>

        {/* Headline with shimmer gradient */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] animate-fade-up delay-100 opacity-0"
          style={{ animationFillMode: "forwards" }}
        >
          <span className="text-[#dae2fd]">Narun Aswin</span>
          <br />
          <span className="gradient-text-animated cursor-blink">Kannan</span>
        </h1>

        {/* Subtitle */}
        <p
          className="mt-6 max-w-2xl mx-auto text-lg text-[#c7c4d7] leading-relaxed animate-fade-up delay-200 opacity-0"
          style={{ animationFillMode: "forwards" }}
        >
          Building scalable and production-ready web applications with a focus on
          technical precision and user-centric design.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up delay-300 opacity-0"
          style={{ animationFillMode: "forwards" }}
        >
          <Link href="/#projects" className="btn-primary flex items-center gap-2">
            View Projects
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>arrow_forward</span>
          </Link>
          <Link href="/#contact" className="btn-ghost">
            Contact Me
          </Link>
        </div>

        {/* Scroll hint */}
        <div
          className="mt-20 animate-fade-up delay-500 opacity-0 flex flex-col items-center gap-2"
          style={{ animationFillMode: "forwards" }}
        >
          <span className="font-label text-xs text-[#464554] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 relative overflow-hidden">
            <div
              className="absolute inset-x-0 top-0 w-full"
              style={{
                background: "linear-gradient(to bottom, transparent, #6366f1, transparent)",
                height: "200%",
                animation: "scroll-line 1.5s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-line {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}
