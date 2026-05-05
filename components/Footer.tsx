import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{ background: "rgba(6, 14, 32, 0.9)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      className="py-10"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-label text-sm tracking-widest text-[#c0c1ff]">NAK</span>
          <span className="text-[#464554]">|</span>
          <span className="text-sm text-[#908fa0]">Narun Aswin Kannan</span>
        </div>

        <p className="text-sm text-[#908fa0]">
          © {new Date().getFullYear()} Narun Aswin Kannan. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <Link href="/#about" className="text-sm text-[#908fa0] hover:text-[#c0c1ff] transition-colors">About</Link>
          <Link href="/#projects" className="text-sm text-[#908fa0] hover:text-[#c0c1ff] transition-colors">Projects</Link>
          <Link href="/#contact" className="text-sm text-[#908fa0] hover:text-[#c0c1ff] transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
