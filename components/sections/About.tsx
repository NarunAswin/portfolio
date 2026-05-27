"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { Cloud, Code2, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const techBadges = [
  "Next.js",
  "React.js",
  "TypeScript",
  "Tailwind CSS",
  "Python",
  "FastAPI",
];

const expertiseBlocks: {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
  glow: string;
}[] = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description: "React, Next.js, TypeScript, Tailwind CSS",
    accent: "#6366f1",
    glow: "rgba(99, 102, 241, 0.2)",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Python, FastAPI, REST APIs, SQL",
    accent: "#0ea5e9",
    glow: "rgba(14, 165, 233, 0.2)",
  },
  {
    icon: Cloud,
    title: "Deployment & DevOps",
    description: "CI/CD Pipelines, VPS, Vercel, Hosting",
    accent: "#8b5cf6",
    glow: "rgba(139, 92, 246, 0.2)",
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: easeOut, delay: 0.1 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.35 },
  },
};

const expertiseItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export default function About() {
  return (
    <section id="about" className="about-section section-gap px-6">
      <div className="about-grid" aria-hidden />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — intro */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={slideLeft}
          >
            <span className="font-label text-[#6366f1] uppercase tracking-[0.2em] text-xs">
              ABOUT ME
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-[#dae2fd] tracking-tight">
              Who I Am
            </h2>

            <div className="mt-6 space-y-5">
              <p className="text-[#c7c4d7] leading-relaxed text-base sm:text-lg">
                I am a passionate Full Stack Developer focused on building modern,
                scalable, and high-performance web applications. My expertise includes
                creating responsive frontend interfaces using Next.js, React.js,
                TypeScript, and Tailwind CSS while also developing efficient backend
                services with Python, FastAPI, and SQL.
              </p>
              <p className="text-[#908fa0] leading-relaxed text-base">
                I enjoy transforming complex ideas into clean and intuitive digital
                experiences. From reusable component architectures to API integration,
                deployment pipelines, and cloud hosting, I aim to deliver applications
                that are both visually polished and technically reliable.
              </p>
            </div>

            <motion.div
              className="flex flex-wrap gap-2.5 mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerContainer}
            >
              {techBadges.map((badge) => (
                <motion.span key={badge} className="skill-badge-glow" variants={fadeUp}>
                  {badge}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — expertise card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={slideRight}
          >
            <motion.div
              className="about-feature-card"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3, ease: easeOut }}
            >
              <motion.div
                className="relative z-10 space-y-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
              >
                {expertiseBlocks.map(
                  ({ icon: Icon, title, description, accent, glow }) => (
                    <motion.div
                      key={title}
                      className="about-expertise-item"
                      variants={expertiseItem}
                      style={
                        {
                          "--expertise-accent": accent,
                          "--expertise-icon-bg": `${accent}22`,
                          "--expertise-icon-border": `${accent}44`,
                          "--expertise-glow": glow,
                        } as CSSProperties
                      }
                    >
                      <div className="about-expertise-icon">
                        <Icon size={22} strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="font-semibold text-[#dae2fd] text-sm sm:text-base">
                          {title}
                        </p>
                        <p className="text-[#908fa0] text-xs sm:text-sm mt-1 leading-relaxed">
                          {description}
                        </p>
                      </div>
                    </motion.div>
                  )
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
