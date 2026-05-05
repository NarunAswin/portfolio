import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/ui/GlassCard";
import TechBadge from "@/components/ui/TechBadge";
import AmbientBackground from "@/components/ui/AmbientBackground";

const stack = ["Next.js 14", "Tailwind CSS", "Python/FastAPI", "Vector Databases", "Redis Caching"];

const metrics = [
  { value: "98%", label: "Accuracy Rate" },
  { value: "−150ms", label: "UI Latency" },
];

const architectureSections = [
  {
    icon: "api",
    title: "Backend API Integration",
    body: "Architected a robust FastAPI middleware layer that orchestrates calls between the Next.js frontend and various LLM providers. Used streaming responses (Server-Sent Events) to deliver AI insights in real-time, preventing request timeouts during long document processing.",
  },
  {
    icon: "speed",
    title: "UI Performance Optimization",
    body: "Leveraged Next.js 14 Server Components to reduce the client-side JavaScript bundle by 35%. Implemented optimistic UI updates for document labeling and state changes, making the application feel snappy even on slower networks.",
  },
];

const features = [
  { icon: "search_insights", title: "Semantic Search", desc: "Locate relevant case laws through intent-based queries rather than simple keywords." },
  { icon: "history_edu", title: "Smart Drafting", desc: "Auto-generate clause variants based on firm-specific historical data and precedents." },
  { icon: "security", title: "SOC2 Compliant", desc: "Enterprise-grade security with document-level encryption and strict PII masking." },
  { icon: "cloud_sync", title: "Cloud Synced", desc: "Seamless synchronization across multi-device firm workflows via edge adapters." },
];

const codeSnippet = `export async function GET(req: Request) {
  // Initialize Redis cache for legal metadata
  const cache = await getCache();
  
  const { docId } = await req.json();
  
  // Efficiently fetch and stream AI analysis
  return new Response(
    await processor.streamAnalysis(docId),
    { headers: { 'Content-Type': 'text/event-stream' } }
  );
}`;

export default function LegalAIPage() {
  return (
    <main
      className="relative overflow-hidden"
      style={{ background: "#0b1326", minHeight: "100vh" }}
    >
      <AmbientBackground />
      <Navbar />
      <div className="pt-16 relative z-10">
        {/* Hero */}
        <section className="relative section-gap px-6 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              background: "radial-gradient(ellipse at 50% 0%, #0ea5e9 0%, transparent 60%)",
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

            <div className="mb-5 flex items-center gap-3">
              <span className="font-label text-xs text-[#0ea5e9] uppercase tracking-widest">Featured Project</span>
              <span className="tech-badge" style={{ borderColor: "rgba(14,165,233,0.3)", background: "rgba(14,165,233,0.1)", color: "#89ceff" }}>
                Case Study
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6" style={{ color: "#dae2fd" }}>
              Legal-AI: Revolutionizing
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #89ceff 0%, #c0c1ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Judicial Workflows.
              </span>
            </h1>

            <p className="text-lg text-[#c7c4d7] leading-relaxed max-w-2xl mb-8">
              An enterprise-grade AI dashboard designed for high-stakes legal document
              analysis, built with technical precision using Next.js, Tailwind CSS, and
              advanced backend API orchestration.
            </p>

            <div className="flex flex-wrap gap-3">
              {stack.map((t) => (
                <TechBadge key={t} label={t} />
              ))}
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-6 max-w-xl">
              {metrics.map(({ value, label }) => (
                <GlassCard key={label} className="p-8 text-center relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ background: "radial-gradient(circle, #0ea5e9 0%, transparent 60%)" }}
                  />
                  <p
                    className="text-4xl font-extrabold mb-2"
                    style={{
                      background: "linear-gradient(135deg, #89ceff, #c0c1ff)",
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

        {/* Challenge */}
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <GlassCard className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(14,165,233,0.15)" }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "20px", color: "#89ceff" }}>bolt</span>
                </div>
                <div>
                  <span className="font-label text-xs text-[#0ea5e9] uppercase tracking-widest">The Challenge</span>
                  <p className="text-sm text-[#c7c4d7] mt-1 font-semibold">Performance Focused</p>
                </div>
              </div>
              <p className="text-[#c7c4d7] leading-relaxed">
                Legal teams spend 40% of their time on manual document discovery. The goal was
                to build a system that can ingest thousands of PDFs, vectorize the content,
                and provide real-time semantic search and automated drafting suggestions without
                sacrificing the sub-second latency required for professional tools.
              </p>
              <p className="mt-4 text-sm text-[#908fa0]">
                Implemented custom SWR hooks and Redis-based edge caching to ensure that even
                the most complex AI-generated reports render instantly across global regions.
              </p>
            </GlassCard>
          </div>
        </section>

        {/* Architecture & Execution */}
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[#dae2fd] mb-8">Architecture &amp; Execution</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {architectureSections.map(({ icon, title, body }) => (
                <GlassCard key={title} className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(14,165,233,0.15)" }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "20px", color: "#89ceff" }}
                      >
                        {icon}
                      </span>
                    </div>
                    <h3 className="font-semibold text-[#dae2fd] text-sm">{title}</h3>
                  </div>
                  <p className="text-sm text-[#908fa0] leading-relaxed">{body}</p>
                </GlassCard>
              ))}
            </div>

            {/* Code snippet */}
            <GlassCard className="overflow-hidden">
              <div
                className="flex items-center gap-2 px-6 py-4 border-b border-white/5"
                style={{ background: "rgba(11,19,38,0.5)" }}
              >
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-4 font-label text-xs text-[#464554]">app/api/analysis/route.ts</span>
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
          </div>
        </section>

        {/* Features */}
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map(({ icon, title, desc }) => (
                <GlassCard key={title} hover className="p-6">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: "rgba(14,165,233,0.15)" }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "20px", color: "#89ceff" }}
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

        {/* Quote */}
        <section className="px-6 pb-24">
          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-10 md:p-14 text-center relative overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{ background: "radial-gradient(circle at 50% 50%, #6366f1, transparent 60%)" }}
              />
              <span
                className="material-symbols-outlined relative z-10 mb-6 block"
                style={{ fontSize: "40px", color: "#6366f1" }}
              >
                format_quote
              </span>
              <blockquote className="relative z-10 text-xl font-semibold text-[#dae2fd] leading-relaxed italic">
                &ldquo;The performance benchmarks we hit with Legal-AI redefined what our
                stakeholders thought was possible for a web-based document platform.&rdquo;
              </blockquote>
              <p className="relative z-10 mt-6 text-sm text-[#908fa0]">
                — Lead Engineering Project Reflection
              </p>
            </GlassCard>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
