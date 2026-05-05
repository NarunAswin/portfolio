import GlassCard from "@/components/ui/GlassCard";
import AnimateIn from "@/components/ui/AnimateIn";

const bullets = [
  "Architected complex UI modules using Next.js and Tailwind CSS, focusing on performance and responsiveness.",
  "Developed a library of reusable React components to standardize design across enterprise applications.",
  "Integrated secure RESTful APIs to facilitate real-time data synchronization.",
  "Performed Scrum Master duties using Azure Boards, streamlining team communication and sprint delivery.",
  "Managed CI/CD pipelines and deployment onto Vercel and VPS environments for zero-downtime releases.",
];

export default function Experience() {
  return (
    <section id="experience" className="section-gap px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <AnimateIn direction="up" className="mb-12">
          <span className="font-label text-[#6366f1] uppercase tracking-widest text-xs">Career Journey</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#dae2fd]">
            Experience
          </h2>
        </AnimateIn>

        {/* Timeline */}
        <div className="relative pl-6 border-l border-[#464554]">
          {/* Timeline dot with ping */}
          <div
            className="absolute -left-2.5 top-0 w-5 h-5 rounded-full border-2 border-[#6366f1] flex items-center justify-center"
            style={{ background: "#0b1326" }}
          >
            {/* Ping ring */}
            <div className="absolute w-5 h-5 rounded-full border border-[#6366f1] ping-slow" />
            <div className="w-2 h-2 rounded-full bg-[#6366f1]" />
          </div>

          <AnimateIn direction="left" delay={100} className="ml-6">
            <GlassCard className="p-8 glass-card-glow">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                <div>
                  <span className="font-label text-xs text-[#6366f1] uppercase tracking-widest">
                    Current
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-[#dae2fd]">
                    Solidpro Engineering Support Pvt Ltd
                  </h3>
                  <p className="text-[#908fa0] text-sm mt-0.5">Software Engineer Trainee</p>
                </div>
                <div
                  className="tech-badge self-start"
                  style={{
                    background: "rgba(99,102,241,0.1)",
                    border: "1px solid rgba(99,102,241,0.25)",
                    color: "#c0c1ff",
                  }}
                >
                  2024 – Present
                </div>
              </div>

              {/* Bullets with stagger */}
              <ul className="space-y-3">
                {bullets.map((b, i) => (
                  <AnimateIn key={i} direction="left" delay={200 + i * 80}>
                    <li className="flex items-start gap-3 text-sm text-[#c7c4d7]">
                      <span
                        className="material-symbols-outlined flex-shrink-0 text-[#6366f1] mt-0.5"
                        style={{ fontSize: "16px" }}
                      >
                        check_circle
                      </span>
                      {b}
                    </li>
                  </AnimateIn>
                ))}
              </ul>
            </GlassCard>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
