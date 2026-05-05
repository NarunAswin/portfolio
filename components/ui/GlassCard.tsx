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
      className={`glass-card ${
        hover
          ? "transition-all duration-300"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
