import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl",
        isCenter ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-block text-xs uppercase tracking-[0.25em] font-semibold mb-3 px-3 py-1 rounded-full",
            isDark
              ? "bg-white/10 text-white/90 border border-white/15"
              : "bg-ares-mist text-ares-architectural border border-ares-architectural/15"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.15]",
          isDark ? "text-white" : "text-ares-deep"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed font-light",
            isDark ? "text-white/80" : "text-ares-muted"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "w-12 h-0.5 mt-5 bg-gradient-to-r from-ares-architectural to-ares-gold/80 rounded-full",
          isCenter && "mx-auto"
        )}
      />
    </div>
  );
}
