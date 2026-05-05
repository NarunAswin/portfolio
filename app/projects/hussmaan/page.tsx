import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/ui/GlassCard";
import TechBadge from "@/components/ui/TechBadge";

const stack = ["TypeScript", "React Three Fiber", "Framer Motion", "Material UI", "Vercel"];

const foundationStats = [
  { label: "60FPS", desc: "Frame Consistency" },
  { label: "12ms", desc: "Input Latency" },
  { label: "Low Poly", desc: "Optimized Assets" },
];

const components = [
  {
    icon: "grid_view",
    title: "Atomic Library",
    desc: "A custom design system with over 50+ tested primitives. Everything from typography tokens to complex data tables follows strict accessibility standards.",
  },
  {
    icon: "api",
    title: "Seamless APIs",
    desc: "Robust integration with headless CMS and real-time databases via a middleware layer that ensures zero UI lag during heavy data fetching.",
  },
  {
    icon: "animation",
    title: "Dynamic UI",
    desc: "Physics-based animations using Framer Motion. UI elements respond to user intent with natural, spring-based movement curves.",
  },
];

const glassmorphismPoints = [
  "Adaptive Glass Opacity",
  "Sub-pixel Border Rendering",
  "Dynamic Luminance Balancing",
];

const results = [
  { value: "98/100", label: "Lighthouse Score" },
  { value: "0.8s", label: "LCP Time" },
  { value: "50k+", label: "Daily Requests" },
];

const configSnippet = `const HussmaanConfig = {
  renderMode: 'spatial',
  physics: true,
  integrations: [
    'REST_API',
    'WebSockets'
  ],
};`;

export default function HussmaanPage() {
  return (
    <main style={{ background: "#0b1326", minHeight: "100vh" }}>
      <Navbar />
      <div className="pt-16">
        {/* Hero */}
        <section className="relative section-gap px-6 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              background: "radial-gradient(ellipse at 50% 0%, #ffb783 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-[#908fa0] hover:text-[#c0c1ff] transition-colors mb-8"
            >
              <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>arrow_back</span>
              Back to Portfolio
            </Link>

            <div className="mb-5">
              <span className="font-label text-xs uppercase tracking-widest" style={{ color: "#ffb783" }}>
                Case Study
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#dae2fd] tracking-tight mb-6">
              Hussmaan
            </h1>

            <p className="text-lg text-[#c7c4d7] leading-relaxed max-w-2xl mb-8">
              Logistics and inventory management portal for industrial refrigeration solutions.
              Built with a "Tactile Digitality" philosophy — bridging flat layouts and spatial
              computing through React Three Fiber and physics-based animations.
            </p>

            <div className="flex flex-wrap gap-3">
              {stack.map((t) => (
                <TechBadge key={t} label={t} />
              ))}
            </div>
          </div>
        </section>

        {/* 3D Foundations */}
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <GlassCard className="p-8 md:p-12 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 80% 20%, #ffb783 0%, transparent 50%)",
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(255,183,131,0.15)" }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "20px", color: "#ffb783" }}
                    >
                      deployed_code
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-[#dae2fd]">Immersive 3D Foundations</h2>
                </div>

                <p className="text-[#c7c4d7] leading-relaxed mb-8">
                  The core identity of Hussmaan revolves around &ldquo;Tactile Digitality.&rdquo; We
                  integrated React Three Fiber to create a world where UI elements respond to depth
                  and cursor movement, bridging the gap between flat layouts and spatial computing.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {foundationStats.map(({ label, desc }) => (
                    <div
                      key={label}
                      className="text-center p-4 rounded-xl"
                      style={{ background: "rgba(255,183,131,0.08)", border: "1px solid rgba(255,183,131,0.15)" }}
                    >
                      <p className="text-lg font-bold" style={{ color: "#ffb783" }}>{label}</p>
                      <p className="font-label text-xs text-[#908fa0] mt-1">{desc}</p>
                    </div>
                  ))}
                </div>

                {/* Config snippet */}
                <div
                  className="rounded-xl overflow-hidden"
                  style={{ background: "rgba(11,19,38,0.7)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    <span className="ml-3 font-label text-xs text-[#464554]">config.ts</span>
                  </div>
                  <pre
                    className="p-5 text-sm overflow-x-auto"
                    style={{
                      fontFamily: "var(--font-space-grotesk, monospace)",
                      color: "#c7c4d7",
                      lineHeight: "1.7",
                    }}
                  >
                    <code>{configSnippet}</code>
                  </pre>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Technical Core */}
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <GlassCard className="p-8 mb-8">
              <h2 className="text-xl font-bold text-[#dae2fd] mb-3">Technical Core</h2>
              <p className="text-[#908fa0] text-sm leading-relaxed">
                Strict TypeScript implementation with a custom state management layer for
                predictable data flow across complex 3D scene interactions.
              </p>
            </GlassCard>

            <h2 className="text-2xl font-bold text-[#dae2fd] mb-6">Scalable Component Architecture</h2>
            <p className="text-[#c7c4d7] mb-8 leading-relaxed">
              Built with a &ldquo;Primitives First&rdquo; philosophy. Every UI element in Hussmaan is a
              decoupled, atomic component designed for maximum reusability and performance testing.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {components.map(({ icon, title, desc }) => (
                <GlassCard key={title} hover className="p-7">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: "rgba(255,183,131,0.1)" }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "20px", color: "#ffb783" }}
                    >
                      {icon}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#dae2fd] text-sm mb-2">{title}</h3>
                  <p className="text-xs text-[#908fa0] leading-relaxed">{desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Glassmorphism */}
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <GlassCard className="p-8 md:p-12 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ background: "radial-gradient(circle at 20% 80%, #c0c1ff, transparent 50%)" }}
              />
              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold text-[#dae2fd] mb-4">
                    Visual Cohesion &amp; Glassmorphism
                  </h2>
                  <p className="text-[#c7c4d7] leading-relaxed mb-6">
                    By utilizing high-diffuse shadows and backdrop blurs, we created an interface
                    that feels lightweight yet structured. The &ldquo;Frost&rdquo; layer allows content to
                    pop without visual clutter.
                  </p>
                  <ul className="space-y-3">
                    {glassmorphismPoints.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-sm text-[#c7c4d7]">
                        <span
                          className="material-symbols-outlined text-[#c0c1ff]"
                          style={{ fontSize: "16px" }}
                        >
                          check_circle
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="rounded-2xl p-8 text-center"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  <p className="text-4xl font-extrabold gradient-text mb-2">Frost</p>
                  <p className="text-sm text-[#908fa0]">Glass Layer System</p>
                  <div className="mt-6 space-y-3">
                    {[
                      { label: "Background Blur", value: "12px" },
                      { label: "Opacity", value: "0.6" },
                      { label: "Border", value: "rgba(255,255,255,0.08)" },
                    ].map(({ label, value }) => (
                      <div
                        key={label}
                        className="flex justify-between items-center text-xs"
                        style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", paddingBottom: "8px" }}
                      >
                        <span className="text-[#908fa0]">{label}</span>
                        <span className="text-[#c0c1ff] font-mono">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Results */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[#dae2fd] mb-4">The Result</h2>
            <p className="text-[#c7c4d7] mb-8 max-w-2xl">
              Hussmaan stands as a testament to the power of modern web technologies. We
              achieved a 40% improvement in perceived performance while doubling user
              engagement through interactive 3D storytelling.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {results.map(({ value, label }) => (
                <GlassCard key={label} className="p-8 text-center relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{ background: "radial-gradient(circle, #ffb783 0%, transparent 60%)" }}
                  />
                  <p
                    className="text-3xl font-extrabold mb-2"
                    style={{
                      background: "linear-gradient(135deg, #ffb783, #c0c1ff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {value}
                  </p>
                  <p className="font-label text-xs text-[#908fa0] uppercase tracking-wider">{label}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
