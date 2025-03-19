
import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  overline?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const SectionTitle = ({
  overline,
  title,
  description,
  align = "center",
  className,
}: SectionTitleProps) => {
  return (
    <div
      className={cn(
        "mb-12 space-y-2",
        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
        },
        className
      )}
    >
      {overline && (
        <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-primary uppercase rounded-full bg-primary/10 mb-2">
          {overline}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
