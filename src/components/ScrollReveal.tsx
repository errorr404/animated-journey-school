
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type AnimationType = 
  | "fade-in" 
  | "fade-in-up" 
  | "fade-in-right" 
  | "fade-in-left" 
  | "scale";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

const ScrollReveal = ({
  children,
  animation = "fade-in",
  delay = 0,
  className,
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when intersection status changes
        if (entry.isIntersecting) {
          setIsVisible(true);
          // If we only want to animate once, unobserve after animation
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          // If not once, we can hide again when not visible
          setIsVisible(false);
        }
      },
      {
        threshold, // Percentage of element's visibility needed to trigger callback
        rootMargin: "0px 0px -100px 0px", // Margin around root; negative values mean trigger before element is visible
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  const animationClass = `animate-${animation}`;
  const delayClass = delay > 0 ? `delay-${delay}` : "";
  
  return (
    <div
      ref={ref}
      className={cn(
        "transition-opacity duration-700",
        {
          "opacity-0": !isVisible,
          [animationClass]: isVisible,
          [delayClass]: delay > 0,
        },
        className
      )}
      style={{
        // Use inline style for very specific delay values
        transitionDelay: `${delay}ms`,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
