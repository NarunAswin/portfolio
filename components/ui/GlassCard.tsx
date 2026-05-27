import { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {}

export default function GlassCard({
  children,
  className = "",
  ...props
}: GlassCardProps) {
  return (
    <div className={`glass-card ${className}`} {...props}>
      {children}
    </div>
  );
}
