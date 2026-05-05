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
    <header
      className="glass-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        height: scrolled ? "56px" : "64px",
        boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-label text-sm tracking-widest text-[#c0c1ff] hover:text-white transition-colors relative group"
        >
          NAK
          <span
            className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#6366f1] transition-all duration-300 group-hover:w-full"
          />
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative group text-sm font-medium text-[#c7c4d7] hover:text-white transition-colors"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#6366f1] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="mailto:hello@narunaswin.com"
          className="btn-primary text-sm py-2 px-5"
          style={{ animation: "none" }}
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}
