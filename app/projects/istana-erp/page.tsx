import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/ui/GlassCard";
import TechBadge from "@/components/ui/TechBadge";
import AmbientBackground from "@/components/ui/AmbientBackground";

const stack = ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL"];

const overviewCards = [
  {
    icon: "analytics",
    title: "The Challenge",
    body: "Existing systems struggled with data silos and latency during peak operational hours. The client needed a unified platform capable of synchronizing inventory, finance, and logistics in real-time across multiple regional warehouses.",
  },
  {
    icon: "lightbulb",
    title: "The Solution",
    body: "Developed a serverless-ready monolithic architecture using Next.js for SSR. Implemented a robust relational schema with Prisma to ensure type-safe database interactions and optimized query performance for massive datasets.",
  },
  {
    icon: "dns",
    title: "Deployment",
    body: "Custom deployment on a high-availability VPS cluster using Nginx as a reverse proxy. Implemented CI/CD pipelines to ensure seamless updates with zero downtime and automated database migrations.",
  },
];

const features = [
  {
    icon: "inventory_2",
    title: "Real-time Inventory",
    desc: "Automated stock tracking across 12+ locations with instant low-stock alerts and predictive restocking algorithms based on historical data.",
  },
  {
    icon: "account_balance_wallet",
    title: "Financial Engine",
    desc: "Integrated ledger with automated tax calculations and multi-currency support for international operations.",
  },
  {
    icon: "group",
    title: "HRM Module",
    desc: "Advanced payroll and employee performance tracking.",
  },
  {
    icon: "security",
    title: "RBAC Control",
    desc: "Granular permissions with audit logs for every transaction.",
  },
];

const arch = [
  {
    group: "Frontend & Logic",
    items: [
      {
        icon: "data_object",
        title: "React & Next.js 14",
        desc: "App Router utilization for server-side data fetching and optimized SEO-friendly dashboard modules.",
      },
      {
        icon: "palette",
        title: "Tailwind CSS & Shadcn/UI",
        desc: "Atomic design patterns to ensure UI consistency and accessibility across the entire enterprise suite.",
      },
    ],
  },
  {
    group: "Backend & Ops",
    items: [
      {
        icon: "storage",
        title: "PostgreSQL & Prisma",
        desc: "Type-safe database layer with complex relations, indexing for fast search, and scalable schema design.",
      },
      {
        icon: "terminal",
        title: "Nginx & VPS",
        desc: "Direct control over the production environment, custom SSL termination, and horizontal scaling capabilities.",
      },
    ],
  },
];

const codeSnippet = `export const updateStockLevel = async (id: string, quantity: number) => {
  return await prisma.inventory.update({
    where: { id },
    data: {
      stock_count: { increment: quantity },
      last_updated: new Date(),
    },
    include: { warehouse: true }
  });
};`;

export default function IstanaERPPage() {
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
              background: "radial-gradient(ellipse at 50% 0%, #6366f1 0%, transparent 60%)",
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
              <span className="font-label text-xs text-[#6366f1] uppercase tracking-widest">Case Study</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#dae2fd] tracking-tight mb-6">
              Istana ERP
            </h1>

            <p className="text-lg text-[#c7c4d7] leading-relaxed max-w-2xl mb-8">
              A high-performance Enterprise Resource Planning system engineered for
              real-world operational scalability. Built with a modern full-stack
              architecture to handle complex business workflows with sub-millisecond
              precision.
            </p>

            <div className="flex flex-wrap gap-3">
              {stack.map((t) => (
                <TechBadge key={t} label={t} />
              ))}
            </div>
          </div>
        </section>

        {/* Overview cards */}
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {overviewCards.map(({ icon, title, body }) => (
              <GlassCard key={title} className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
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
                <p className="text-sm text-[#908fa0] leading-relaxed">{body}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[#dae2fd] mb-8">Key Features</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map(({ icon, title, desc }) => (
                <GlassCard key={title} hover className="p-6">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: "rgba(99,102,241,0.15)" }}
                  >
                    <span
                      className="material-symbols-outlined text-[#c0c1ff]"
                      style={{ fontSize: "20px" }}
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

        {/* Technical Architecture */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[#dae2fd] mb-8">Technical Architecture</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {arch.map(({ group, items }) => (
                <GlassCard key={group} className="p-8">
                  <h3
                    className="font-label text-xs uppercase tracking-widest text-[#6366f1] mb-6"
                  >
                    {group}
                  </h3>
                  <div className="space-y-6">
                    {items.map(({ icon, title, desc }) => (
                      <div key={title} className="flex gap-4">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: "rgba(99,102,241,0.1)" }}
                        >
                          <span
                            className="material-symbols-outlined text-[#c0c1ff]"
                            style={{ fontSize: "18px" }}
                          >
                            {icon}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-[#dae2fd] text-sm">{title}</p>
                          <p className="text-xs text-[#908fa0] mt-1 leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Code snippet */}
            <GlassCard className="mt-8 overflow-hidden">
              <div
                className="flex items-center gap-2 px-6 py-4 border-b border-white/5"
                style={{ background: "rgba(11,19,38,0.5)" }}
              >
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-4 font-label text-xs text-[#464554]">
                  lib/prisma/inventory-service.ts
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
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
