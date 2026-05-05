import GlassCard from "@/components/ui/GlassCard";
import AnimateIn from "@/components/ui/AnimateIn";

const categories = [
  {
    icon: "code",
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    icon: "terminal",
    title: "Backend",
    skills: ["Java", "Spring Boot", "FastAPI"],
  },
  {
    icon: "database",
    title: "Database",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    icon: "build",
    title: "Tools",
    skills: ["Git", "Azure Boards", "Vercel", "VPS"],
  },
];

export default function TechStack() {
  return (
    <section className="section-gap px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <AnimateIn direction="up" className="mb-12 text-center">
          <span className="font-label text-[#6366f1] uppercase tracking-widest text-xs">Skills</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#dae2fd]">
            Technical Arsenal
          </h2>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(({ icon, title, skills }, i) => (
            <AnimateIn key={title} direction="up" delay={i * 100}>
              <GlassCard hover className="p-6 flex flex-col gap-4 h-full glass-card-glow">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(99,102,241,0.15)" }}
                  >
                    <span
                      className="material-symbols-outlined text-[#c0c1ff]"
                      style={{ fontSize: "20px" }}
                    >
                      {icon}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#dae2fd] text-sm">{title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, j) => (
                    <AnimateIn key={skill} direction="scale" delay={i * 100 + j * 60 + 200}>
                      <span className="tech-badge">{skill}</span>
                    </AnimateIn>
                  ))}
                </div>
              </GlassCard>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
