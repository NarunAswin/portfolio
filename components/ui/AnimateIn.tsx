"use client";

import React, { HTMLAttributes, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type Direction = "up" | "down" | "left" | "right" | "scale";

interface AnimateInProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  as?: string;
}

const directionMap: Record<Direction, string> = {
  up:    "translate-y-8 opacity-0",
  down:  "-translate-y-8 opacity-0",
  left:  "-translate-x-8 opacity-0",
  right: "translate-x-8 opacity-0",
  scale: "scale-90 opacity-0",
};

export default function AnimateIn({
  children,
  direction = "up",
  delay = 0,
  duration = 600,
  className = "",
  as: Tag = "div",
  ...props
}: AnimateInProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.12 });

  const base =
    "transition-[opacity,transform] ease-out will-change-[opacity,transform]";
  const hidden = directionMap[direction];
  const visible = "translate-y-0 translate-x-0 scale-100 opacity-100";

  const Component = Tag as React.ElementType;

  return (
    <Component
      ref={ref}
      className={`${base} ${inView ? visible : hidden} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: inView ? `${delay}ms` : "0ms",
        ...props.style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
