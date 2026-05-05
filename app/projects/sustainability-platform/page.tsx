import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/ui/GlassCard";
import TechBadge from "@/components/ui/TechBadge";
import AnimateIn from "@/components/ui/AnimateIn";

const stack = ["React", "TypeScript", "D3.js", "Supabase", "Tailwind CSS", "Vercel"];

const metrics = [
  { value: "40+", label: "Corporate Clients" },
  { value: "12k", label: "Tons CO₂ Tracked" },
  { value: "99.9%", label: "Uptime SLA" },
];

const overviewCards = [
  {
    icon: "analytics",
    title: "The Challenge",
    body: "Enterprises lacked a unified, real-time view of their sustainability KPIs. Data was scattered across spreadsheets, ERP exports, and manual audits — making it impossible to track carbon reduction commitments or generate auditor-ready reports efficiently.",
  },
  {
    icon: "lightbulb",
    title: "The Solution",
    body: "Built a real-time monitoring dashboard that ingests emissions data from multiple sources, visualizes trends using D3.js, and benchmarks performance against industry ESG standards. Goal-setting and alert workflows help teams stay on track.",
  },
  {
    icon: "public",
    title: "Impact",
    body: "Enabled sustainability managers to cut reporting time by 60%, move from quarterly to weekly carbon snapshots, and export audit-ready PDF reports with a single click — directly integrated with Supabase for live data streaming.",
  },
];

const features = [
  {
    icon: "monitoring",
    title: "Live Carbon Dashboard",
    desc: "Real-time emissions monitoring across Scope 1, 2, and 3 categories with interactive D3.js charts and drill-down capability.",
  },
  {
    icon: "flag",
    title: "Goal Tracking",
    desc: "Set reduction targets per business unit or geography. Progress rings and RAG status indicators surface at-risk goals automatically.",
  },
  {
    icon: "notifications_active",
    title: "Smart Alerts",
    desc: "Threshold-based notification system sends email and in-app alerts when emissions exceed baseline values or reporting deadlines approach.",
  },
  {
    icon: "picture_as_pdf",
    title: "ESG Report Export",
    desc: "One-click generation of auditor-friendly PDF reports aligned to GRI, TCFD, and CDP disclosure frameworks.",
  },
];

const techDetails = [
  {
    group: "Visualisation & Frontend",
    items: [
      {
        icon: "bar_chart",
        title: "D3.js",
        desc: "Custom SVG-based time-series charts, treemaps, and emission funnel visualisations with smooth enter/update/exit transitions.",
      },
      {
        icon: "palette",
        title: "React + Tailwind CSS",
        desc: "Component-driven UI with a green-accented design system optimized for data-density without visual clutter.",
      },
    ],
  },
  {
    group: "Backend & Data",
    items: [
      {
        icon: "storage",
        title: "Supabase",
        desc: "PostgreSQL-backed real-time subscriptions stream live emissions updates to the dashboard. Row-level security enforces tenant isolation.",
      },
      {
        icon: "cloud_upload",
        title: "Vercel Edge Functions",
        desc: "Lightweight serverless handlers for data ingestion webhooks, PDF generation, and third-party ESG API integrations.",
      },
    ],
  },
];

const codeSnippet = `// Real-time emissions subscription via Supabase
const channel = supabase
  .channel("emissions_live")
  .on(
    "postgres_changes",
    { event: "INSERT", schema: "public", table: "emissions" },
    (payload) => {
      setEmissions((prev) => [...prev, payload.new as EmissionRecord]);
      recalcTotals();
    }
  )
  .subscribe();`;

export default function SustainabilityPlatformPage() {
  return (
    <main style={{ background: "#0b1326", minHeight: "100vh" }}>
      <Navbar />
      <div className="pt-16">

        {/* Hero */}
        <section className="relative section-gap px-6 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              background: "radial-gradient(ellipse at 50% 0%, #22c55e 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto">
            <AnimateIn direction="up">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-sm text-[#908fa0] hover:text-[#c0c1ff] transition-colors mb-8"
              >
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>arrow_back</span>
                Back to Portfolio
              </Link>
            </AnimateIn>

            <AnimateIn direction="up" delay={50}>
              <div className="mb-5 flex items-center gap-3">
                <span className="font-label text-xs uppercase tracking-widest" style={{ color: "#22c55e" }}>
                  Case Study
                </span>
                <span
                  className="tech-badge"
                  style={{
                    background: "rgba(34,197,94,0.1)",
                    border: "1px solid rgba(34,197,94,0.3)",
                    color: "#86efac",
                  }}
                >
                  ESG · Sustainability
                </span>
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                <span className="text-[#dae2fd]">Sustainability</span>
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #86efac 0%, #4ade80 50%, #22c55e 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Platform
                </span>
              </h1>
            </AnimateIn>

            <AnimateIn direction="up" delay={150}>
              <p className="text-lg text-[#c7c4d7] leading-relaxed max-w-2xl mb-8">
                A real-time corporate sustainability monitoring tool that centralises
                carbon footprint data, tracks ESG goals, and generates audit-ready
                reports — helping enterprises move from reactive compliance to
                proactive impact.
              </p>
            </AnimateIn>

            <AnimateIn direction="up" delay={200}>
              <div className="flex flex-wrap gap-3">
                {stack.map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Metrics */}
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-3 gap-6 max-w-2xl">
              {metrics.map(({ value, label }, i) => (
                <AnimateIn key={label} direction="scale" delay={i * 100}>
                  <GlassCard className="p-8 text-center relative overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-10 pointer-events-none"
                      style={{ background: "radial-gradient(circle, #22c55e 0%, transparent 60%)" }}
                    />
                    <p
                      className="text-3xl font-extrabold mb-2"
                      style={{
                        background: "linear-gradient(135deg, #86efac, #4ade80)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {value}
                    </p>
                    <p className="font-label text-xs text-[#908fa0] uppercase tracking-wider">{label}</p>
                  </GlassCard>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Overview cards */}
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {overviewCards.map(({ icon, title, body }, i) => (
              <AnimateIn key={title} direction="up" delay={i * 100}>
                <GlassCard className="p-7 h-full glass-card-glow">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(34,197,94,0.15)" }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "20px", color: "#86efac" }}
                      >
                        {icon}
                      </span>
                    </div>
                    <h3 className="font-semibold text-[#dae2fd] text-sm">{title}</h3>
                  </div>
                  <p className="text-sm text-[#908fa0] leading-relaxed">{body}</p>
                </GlassCard>
              </AnimateIn>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <AnimateIn direction="up" className="mb-8">
              <h2 className="text-2xl font-bold text-[#dae2fd]">Key Features</h2>
            </AnimateIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map(({ icon, title, desc }, i) => (
                <AnimateIn key={title} direction="up" delay={i * 80}>
                  <GlassCard hover className="p-6 h-full">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                      style={{ background: "rgba(34,197,94,0.15)" }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "20px", color: "#86efac" }}
                      >
                        {icon}
                      </span>
                    </div>
                    <h3 className="font-semibold text-[#dae2fd] text-sm mb-2">{title}</h3>
                    <p className="text-xs text-[#908fa0] leading-relaxed">{desc}</p>
                  </GlassCard>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <AnimateIn direction="up" className="mb-8">
              <h2 className="text-2xl font-bold text-[#dae2fd]">Technical Architecture</h2>
            </AnimateIn>
            <div className="grid md:grid-cols-2 gap-8">
              {techDetails.map(({ group, items }, i) => (
                <AnimateIn key={group} direction={i === 0 ? "left" : "right"} delay={100}>
                  <GlassCard className="p-8 glass-card-glow h-full">
                    <h3
                      className="font-label text-xs uppercase tracking-widest mb-6"
                      style={{ color: "#22c55e" }}
                    >
                      {group}
                    </h3>
                    <div className="space-y-6">
                      {items.map(({ icon, title, desc }, j) => (
                        <AnimateIn key={title} direction="left" delay={200 + j * 80}>
                          <div className="flex gap-4">
                            <div
                              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                              style={{ background: "rgba(34,197,94,0.1)" }}
                            >
                              <span
                                className="material-symbols-outlined"
                                style={{ fontSize: "18px", color: "#86efac" }}
                              >
                                {icon}
                              </span>
                            </div>
                            <div>
                              <p className="font-semibold text-[#dae2fd] text-sm">{title}</p>
                              <p className="text-xs text-[#908fa0] mt-1 leading-relaxed">{desc}</p>
                            </div>
                          </div>
                        </AnimateIn>
                      ))}
                    </div>
                  </GlassCard>
                </AnimateIn>
              ))}
            </div>

            {/* Code snippet */}
            <AnimateIn direction="up" delay={200} className="mt-8">
              <GlassCard className="overflow-hidden">
                <div
                  className="flex items-center gap-2 px-6 py-4 border-b border-white/5"
                  style={{ background: "rgba(11,19,38,0.5)" }}
                >
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <span className="ml-4 font-label text-xs text-[#464554]">
                    hooks/useEmissionsStream.ts
                  </span>
                </div>
                <pre
                  className="p-6 text-sm overflow-x-auto"
                  style={{
                    fontFamily: "var(--font-space-grotesk, monospace)",
                    color: "#c7c4d7",
                    lineHeight: "1.7",
                  }}
                >
                  <code>{codeSnippet}</code>
                </pre>
              </GlassCard>
            </AnimateIn>
          </div>
        </section>

        {/* Quote */}
        <section className="px-6 pb-24">
          <div className="max-w-4xl mx-auto">
            <AnimateIn direction="up">
              <GlassCard className="p-10 md:p-14 text-center relative overflow-hidden">
                <div
                  className="absolute inset-0 pointer-events-none opacity-10"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, #22c55e, transparent 60%)",
                  }}
                />
                <span
                  className="material-symbols-outlined relative z-10 mb-6 block"
                  style={{ fontSize: "40px", color: "#22c55e" }}
                >
                  format_quote
                </span>
                <blockquote className="relative z-10 text-xl font-semibold text-[#dae2fd] leading-relaxed italic">
                  &ldquo;Finally, a dashboard that turns our sustainability data into a
                  story our board actually understands — and trusts.&rdquo;
                </blockquote>
                <p className="relative z-10 mt-6 text-sm text-[#908fa0]">
                  — Sustainability Manager, Enterprise Client
                </p>
              </GlassCard>
            </AnimateIn>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
