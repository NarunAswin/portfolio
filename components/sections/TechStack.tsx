"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";

const categories = [
  {
    icon: "code",
    title: "Frontend",
    accent: "#6366f1",
    glow: "rgba(99, 102, 241, 0.2)",
    skills: [
      "Next.js",
      "React.js",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    icon: "terminal",
    title: "Backend",
    accent: "#0ea5e9",
    glow: "rgba(14, 165, 233, 0.2)",
    skills: ["Python", "FastAPI", "SQL"],
  },
  {
    icon: "account_tree",
    title: "Version Control & Collaboration",
    accent: "#8b5cf6",
    glow: "rgba(139, 92, 246, 0.2)",
    skills: ["Git", "GitHub", "Azure Repos", "Azure Boards"],
  },
  {
    icon: "build",
    title: "Development Tools",
    accent: "#38bdf8",
    glow: "rgba(56, 189, 248, 0.2)",
    skills: ["VS Code", "Cursor"],
  },
  {
    icon: "cloud_upload",
    title: "Hosting & Deployment",
    accent: "#22c55e",
    glow: "rgba(34, 197, 94, 0.2)",
    skills: ["Hostinger", "GoDaddy", "Namecheap", "PuTTY"],
  },
  {
    icon: "smart_toy",
    title: "AI Tools",
    accent: "#a78bfa",
    glow: "rgba(167, 139, 250, 0.2)",
    skills: ["Claude", "Antigravity"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const easeOut = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: easeOut },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function TechStack() {
  return (
    <section id="skills" className="arsenal-section section-gap px-6">
      <div className="arsenal-grid" aria-hidden />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.header
          className="mb-14 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={headerVariants}
        >
          <span className="font-label text-[#6366f1] uppercase tracking-[0.2em] text-xs">
            SKILLS
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-[#dae2fd] tracking-tight">
            Technical Arsenal
          </h2>
          <p className="mt-4 text-[#908fa0] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            A curated stack of languages, frameworks, and tools I use to ship
            production-ready applications.
          </p>
        </motion.header>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          {categories.map(({ icon, title, accent, glow, skills }) => (
            <motion.article
              key={title}
              variants={cardVariants}
              className="arsenal-card group"
              style={
                {
                  "--arsenal-accent": `${accent}22`,
                  "--arsenal-glow": glow,
                  "--arsenal-icon-bg": `${accent}22`,
                  "--arsenal-icon-border": `${accent}44`,
                } as CSSProperties
              }
            >
              <div className="relative z-10 flex flex-col gap-5 h-full">
                <div className="flex items-center gap-3.5">
                  <div className="arsenal-icon shrink-0">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "22px", color: accent }}
                    >
                      {icon}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#dae2fd] text-sm sm:text-base leading-snug">
                    {title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      className="skill-badge-glow"
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.2 + j * 0.04,
                        duration: 0.35,
                        ease: easeOut,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
