"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div
        className="max-w-6xl mx-auto rounded-full transition-all duration-300"
        style={{
          background: "rgba(22, 30, 52, 0.85)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: scrolled
            ? "0 16px 40px rgba(0,0,0,0.45)"
            : "0 10px 28px rgba(0,0,0,0.3)",
        }}
      >
        <div className="h-14 px-4 sm:px-5 flex items-center justify-between gap-4">
          {/* Minimal brand icon */}
          <Link
            href="/"
            className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
            style={{
              background: "linear-gradient(135deg,#1f4ea8,#315ed0)",
              border: "1px solid rgba(255,255,255,0.22)",
            }}
            aria-label="Home"
          >
            <span className="text-white text-sm font-semibold">N</span>
          </Link>

          {/* Center links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-[#c7c4d7] hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              aria-label="Theme"
              className="w-9 h-9 rounded-full flex items-center justify-center text-[#c7c4d7] hover:text-white transition-colors"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                dark_mode
              </span>
            </button>
            <Link
              href="/#contact"
              className="h-9 px-4 rounded-full flex items-center gap-1.5 text-sm font-medium text-white transition-all hover:brightness-110"
              style={{
                background: "linear-gradient(135deg,#1f4ea8,#315ed0)",
                border: "1px solid rgba(255,255,255,0.22)",
              }}
            >
              Contact us
              <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
                north_east
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
