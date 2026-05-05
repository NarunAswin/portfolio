import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import AnimateIn from "@/components/ui/AnimateIn";

const projects = [
  {
    title: "Istana ERP",
    description:
      "Enterprise Resource Planning system built for scalability and real-time operational tracking.",
    stack: ["React", "PostgreSQL", "Node.js"],
    href: "/projects/istana-erp",
    icon: "inventory_2",
    accent: "#6366f1",
  },
  {
    title: "Legal-AI",
    description:
      "AI-powered assistant for legal document analysis and automated case law research.",
    stack: ["Next.js", "OpenAI", "FastAPI"],
    href: "/projects/legal-ai",
    icon: "history_edu",
    accent: "#0ea5e9",
  },
  {
    title: "Sustainability Platform",
    description:
      "Monitoring tool for corporate sustainability goals and carbon footprint tracking.",
    stack: ["React", "D3.js", "Supabase"],
    href: "/projects/sustainability-platform",
    icon: "eco",
    accent: "#22c55e",
  },
  {
    title: "Hussmaan",
    description:
      "Logistics and inventory management portal for industrial refrigeration solutions.",
    stack: ["TypeScript", "Material UI", "Vercel"],
    href: "/projects/hussmaan",
    icon: "local_shipping",
    accent: "#ffb783",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-gap px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <AnimateIn direction="up" className="mb-12 text-center">
          <span className="font-label text-[#6366f1] uppercase tracking-widest text-xs">Portfolio</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#dae2fd]">
            Featured Projects
          </h2>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map(({ title, description, stack, href, icon, accent }, i) => (
            <AnimateIn
              key={title}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 100}
            >
              <GlassCard
                hover
                className="p-8 flex flex-col gap-5 relative overflow-hidden h-full glass-card-glow"
              >
                {/* Accent glow */}
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none transition-opacity duration-300 group-hover:opacity-10"
                  style={{
                    background: `radial-gradient(circle at 10% 10%, ${accent} 0%, transparent 60%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Icon + title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110"
                      style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "22px", color: accent }}
                      >
                        {icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#dae2fd]">{title}</h3>
                      <p className="text-sm text-[#908fa0] mt-1 leading-relaxed">{description}</p>
                    </div>
                  </div>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {stack.map((t, j) => (
                      <AnimateIn key={t} direction="scale" delay={i * 100 + j * 60 + 200}>
                        <span className="tech-badge">{t}</span>
                      </AnimateIn>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#c0c1ff] hover:text-white transition-colors group/link"
                  >
                    View Case Study
                    <span
                      className="material-symbols-outlined transition-transform duration-200 group-hover/link:translate-x-1"
                      style={{ fontSize: "16px" }}
                    >
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </GlassCard>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
