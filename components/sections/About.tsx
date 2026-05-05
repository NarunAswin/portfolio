import GlassCard from "@/components/ui/GlassCard";
import AnimateIn from "@/components/ui/AnimateIn";

export default function About() {
  return (
    <section id="about" className="section-gap px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <AnimateIn direction="up" className="mb-12">
          <span className="font-label text-[#6366f1] uppercase tracking-widest text-xs">About Me</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#dae2fd]">
            Who I Am
          </h2>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <AnimateIn direction="left" delay={100}>
            <div className="space-y-5">
              <p className="text-[#c7c4d7] leading-relaxed text-base">
                I am a dedicated Frontend Engineer passionate about crafting seamless
                digital experiences. My expertise lies in architecting robust frontend
                systems using Next.js, React.js, and TypeScript.
              </p>
              <p className="text-[#c7c4d7] leading-relaxed text-base">
                I specialize in building performant, accessible web applications that
                bridge the gap between complex backend architectures and intuitive user
                interfaces. From optimizing deployment pipelines on Vercel and VPS to
                designing reusable component libraries with Tailwind CSS, I ensure every
                line of code contributes to a superior end-product.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {["Next.js", "React.js", "TypeScript", "Tailwind CSS"].map((t, i) => (
                  <AnimateIn key={t} direction="scale" delay={200 + i * 80} as="span">
                    <span className="tech-badge">{t}</span>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Visual accent card */}
          <AnimateIn direction="right" delay={150}>
            <GlassCard className="p-8 relative overflow-hidden glass-card-glow">
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 70% 30%, #6366f1 0%, transparent 60%)",
                }}
              />
              <div className="relative z-10 space-y-6">
                {[
                  { icon: "code", label: "Frontend Mastery", desc: "React, Next.js, TypeScript, Tailwind CSS" },
                  { icon: "cloud_upload", label: "Deployment", desc: "Vercel, VPS, CI/CD Pipelines" },
                  { icon: "build", label: "Engineering", desc: "Scalable architecture & component design" },
                ].map(({ icon, label, desc }, i) => (
                  <AnimateIn key={icon} direction="left" delay={300 + i * 100}>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ background: "rgba(99,102,241,0.15)" }}>
                        <span className="material-symbols-outlined text-[#c0c1ff]" style={{ fontSize: "20px" }}>{icon}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-[#dae2fd] text-sm">{label}</p>
                        <p className="text-[#908fa0] text-xs mt-0.5">{desc}</p>
                      </div>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </GlassCard>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
