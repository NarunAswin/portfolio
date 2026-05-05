import { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = false,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={`glass-card ${hover ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-indigo-500/20" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
