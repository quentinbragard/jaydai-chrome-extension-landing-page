import React from "react"

const HeroBackground = () => {
  return (
    <>
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/20 blur-[100px] opacity-60" />
        <div className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[100px] opacity-50" />
      </div>
      
      {/* Animated dots grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </>
  )
}

export default HeroBackground