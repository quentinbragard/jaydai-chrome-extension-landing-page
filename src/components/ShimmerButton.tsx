"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.1em",
      shimmerDuration = "2s",
      borderRadius = "0.5rem",
      background = "hsl(var(--primary))",
      className,
      children,
      ...props
    }: ShimmerButtonProps,
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex h-10 items-center justify-center overflow-hidden whitespace-nowrap px-6 py-0 text-sm font-medium text-primary-foreground transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        style={{
          borderRadius,
          background,
        }}
        {...props}
      >
        <span
          className="absolute inset-0 overflow-hidden"
          style={{
            borderRadius,
          }}
        >
          <span
            className="absolute inset-0 overflow-hidden"
            style={{
              top: "-100%",
              right: "-100%",
              width: "300%",
              height: "300%",
              background: `linear-gradient(115deg, transparent 20%, ${shimmerColor} 36%, ${shimmerColor} 43%, transparent 50%)`,
              opacity: 0.3,
              animation: `shimmer ${shimmerDuration} linear infinite`,
            }}
          />
        </span>
        <style jsx>{`
          @keyframes shimmer {
            0% {
              transform: rotate(0deg) translate(-200%, -200%);
            }
            100% {
              transform: rotate(0deg) translate(0, 0);
            }
          }
        `}</style>
        <span className="relative flex items-center justify-center gap-2">
          {children}
        </span>
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";