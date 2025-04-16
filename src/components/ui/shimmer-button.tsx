import React, { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  shimmerSpread?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "hsla(var(--rainbow-button-color-2), 0.8)",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      shimmerSpread = "120deg", // Wider shimmer
      borderRadius = "var(--radius)",
      background = "hsl(var(--primary))",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        style={
          {
            "--spread": shimmerSpread,
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
          } as CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-primary/10 px-6 py-3 text-primary-foreground hover:text-secondary-foreground [background:var(--bg)] [border-radius:var(--radius)]",
          "transform-gpu transition-all duration-300 ease-in-out active:translate-y-px",
          // Hover background handled with CSS variables to prevent text issues
          "hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]",
          className,
        )}
        ref={ref}
        {...props}
      >
        {/* spark container */}
        <div
          className={cn(
            "-z-30 blur-[2px]",
            "absolute inset-0 overflow-visible [container-type:size]",
            "opacity-80 group-hover:opacity-100 transition-opacity duration-300", // Enhance on hover
          )}
        >
          {/* spark */}
          <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
            {/* spark before */}
            <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
          </div>
        </div>
        
        {/* Content with high z-index to ensure it's always visible */}
        <span className="relative z-20 pointer-events-none">
          {children}
        </span>

        {/* Highlight */}
        <div
          className={cn(
            "absolute inset-0 z-10", // Changed from insert-0 to inset-0, fixed z-index
            "rounded-md px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",
            // transition
            "transform-gpu transition-all duration-300 ease-in-out",
            // on hover
            "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
            // on click
            "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]",
            // Removed conflicting hover background classes
          )}
        />

        {/* backdrop */}
        <div
          className={cn(
            "absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]",
            // Handle hover background change here
            "transition-colors duration-300",
            "group-hover:[background:hsl(var(--secondary))]", // Change background on hover using CSS
          )}
        />
      </button>
    );
  },
);

ShimmerButton.displayName = "ShimmerButton";

export { ShimmerButton };