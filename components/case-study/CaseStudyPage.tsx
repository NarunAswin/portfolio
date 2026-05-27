"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/ui/AmbientBackground";
import type { CaseStudySlug } from "@/lib/case-studies";
import { getCaseStudy, getCaseStudyNav } from "@/lib/case-studies";

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

interface CaseStudyPageProps {
  slug: CaseStudySlug;
}

export default function CaseStudyPage({ slug }: CaseStudyPageProps) {
  const data = getCaseStudy(slug);
  const { prev, next } = getCaseStudyNav(slug);

  return (
    <main
      className="case-study-page relative overflow-hidden"
      style={{ background: "#0b1326", minHeight: "100vh" }}
    >
      <AmbientBackground />
      <Navbar />

      <div className="pt-16 relative z-10">
        {/* Hero */}
        <section className="case-study-hero px-6 pt-12 pb-16">
          <div
            className="case-study-hero-glow pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 70% 60% at 50% 0%, ${data.accent}44 0%, transparent 65%)`,
            }}
            aria-hidden
          />

          <motion.div
            className="relative z-10 max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-1.5 text-sm text-[#908fa0] hover:text-[#c0c1ff] transition-colors mb-8"
              >
                <ArrowLeft size={16} />
                Back to Projects
              </Link>
            </motion.div>

            <motion.div variants={fadeUp}>
              <span
                className="font-label text-xs uppercase tracking-[0.2em]"
                style={{ color: data.accent }}
              >
                PROJECT
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-3 flex flex-wrap items-center gap-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#dae2fd] tracking-tight">
                {data.title}
              </h1>
              <span
                className="case-study-status-badge"
                style={
                  {
                    "--status-accent": data.accent,
                    "--status-glow": data.glow,
                  } as CSSProperties
                }
              >
                {data.status}
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-base sm:text-lg text-[#c7c4d7] leading-relaxed"
            >
              {data.description}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-6">
              {data.stack.map((tech) => (
                <span key={tech} className="skill-badge-glow">
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Limited details */}
        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto space-y-8">
            <motion.article
              className="case-study-panel"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
            >
              <h2 className="text-xl font-bold text-[#dae2fd] mb-4">What is this project?</h2>
              <p className="text-[#c7c4d7] leading-relaxed">{data.whatIsIt}</p>
            </motion.article>

            <motion.article
              className="case-study-panel"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={stagger}
            >
              <h2 className="text-xl font-bold text-[#dae2fd] mb-6">My contribution</h2>
              <ul className="space-y-4">
                {data.contribution.map((item) => (
                  <motion.li
                    key={item}
                    variants={fadeUp}
                    className="flex items-start gap-3 text-[#c7c4d7] text-sm sm:text-base leading-relaxed"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 mt-0.5"
                      style={{ color: data.accent }}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          </div>
        </section>

        {/* Footer navigation */}
        <section className="px-6 pb-16">
          <div className="max-w-3xl mx-auto">
            <div className="case-study-footer-nav">
              {prev ? (
                <Link href={prev.href} className="case-study-nav-link group">
                  <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                  <div>
                    <span className="text-xs text-[#908fa0] uppercase tracking-wider">Previous</span>
                    <p className="text-[#dae2fd] font-medium mt-0.5">{prev.title}</p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              <Link href="/#projects" className="case-study-nav-center">
                All Projects
              </Link>

              {next ? (
                <Link
                  href={next.href}
                  className="case-study-nav-link group ml-auto flex-row-reverse"
                >
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  <div className="text-right">
                    <span className="text-xs text-[#908fa0] uppercase tracking-wider">Next</span>
                    <p className="text-[#dae2fd] font-medium mt-0.5">{next.title}</p>
                  </div>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
