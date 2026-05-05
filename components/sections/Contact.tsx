"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { toast } from "sonner";
import GlassCard from "@/components/ui/GlassCard";
import AnimateIn from "@/components/ui/AnimateIn";

const contactInfo = [
  {
    icon: "mail",
    label: "Email",
    value: "narunaswin@gmail.com",
    href: "mailto:narunaswin@gmail.com",
  },
  {
    icon: "call",
    label: "Phone",
    value: "+91 9789070669",
    href: "tel:+919789070669",
  },
  {
    icon: "location_on",
    label: "Location",
    value: "Chennai, India",
    href: null,
  },
];

export default function Contact() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    setIsSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to send email.");
      }

      toast.success("Message sent to narunaswin@gmail.com successfully.");
      formEl.reset();
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-gap px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <AnimateIn direction="up" className="mb-12 text-center">
          <span className="font-label text-[#6366f1] uppercase tracking-widest text-xs">Get in Touch</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#dae2fd]">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-[#908fa0] max-w-xl mx-auto text-base">
            I&apos;m currently open to new opportunities and interesting projects. Whether
            you have a question or just want to say hi, I&apos;ll try my best to get back
            to you!
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-4">
            {contactInfo.map(({ icon, label, value, href }, i) => (
              <AnimateIn key={icon} direction="left" delay={i * 100}>
                <GlassCard className="p-6 flex items-center gap-5 glass-card-glow">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110"
                    style={{ background: "rgba(99,102,241,0.15)" }}
                  >
                    <span
                      className="material-symbols-outlined text-[#c0c1ff]"
                      style={{ fontSize: "22px" }}
                    >
                      {icon}
                    </span>
                  </div>
                  <div>
                    <p className="font-label text-xs text-[#908fa0] uppercase tracking-wider">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-[#dae2fd] font-medium hover:text-[#c0c1ff] transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-[#dae2fd] font-medium">{value}</p>
                    )}
                  </div>
                </GlassCard>
              </AnimateIn>
            ))}
          </div>

          {/* Contact form */}
          <AnimateIn direction="right" delay={150}>
            <GlassCard className="p-8 glass-card-glow">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-label text-xs text-[#908fa0] uppercase tracking-wider block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full rounded-lg px-4 py-3 text-sm text-[#dae2fd] outline-none transition-all duration-200 placeholder:text-[#464554] focus:scale-[1.01]"
                      style={{
                        background: "rgba(11,19,38,0.6)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                      onFocus={(e) => (e.currentTarget.style.border = "1px solid rgba(99,102,241,0.5)")}
                      onBlur={(e) => (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)")}
                    />
                  </div>
                  <div>
                    <label className="font-label text-xs text-[#908fa0] uppercase tracking-wider block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full rounded-lg px-4 py-3 text-sm text-[#dae2fd] outline-none transition-all duration-200 placeholder:text-[#464554] focus:scale-[1.01]"
                      style={{
                        background: "rgba(11,19,38,0.6)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                      onFocus={(e) => (e.currentTarget.style.border = "1px solid rgba(99,102,241,0.5)")}
                      onBlur={(e) => (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)")}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-label text-xs text-[#908fa0] uppercase tracking-wider block mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="How can I help?"
                    className="w-full rounded-lg px-4 py-3 text-sm text-[#dae2fd] outline-none transition-all duration-200 placeholder:text-[#464554] focus:scale-[1.01]"
                    style={{
                      background: "rgba(11,19,38,0.6)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onFocus={(e) => (e.currentTarget.style.border = "1px solid rgba(99,102,241,0.5)")}
                    onBlur={(e) => (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)")}
                  />
                </div>

                <div>
                  <label className="font-label text-xs text-[#908fa0] uppercase tracking-wider block mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    required
                    placeholder="Tell me about your project..."
                    className="w-full rounded-lg px-4 py-3 text-sm text-[#dae2fd] outline-none transition-all duration-200 placeholder:text-[#464554] resize-none"
                    style={{
                      background: "rgba(11,19,38,0.6)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onFocus={(e) => (e.currentTarget.style.border = "1px solid rgba(99,102,241,0.5)")}
                    onBlur={(e) => (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  style={{
                    animation: "none",
                    opacity: isSending ? 0.7 : 1,
                    cursor: isSending ? "not-allowed" : "pointer",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>send</span>
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </GlassCard>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
