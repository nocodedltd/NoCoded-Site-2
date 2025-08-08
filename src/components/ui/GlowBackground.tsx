import { motion } from "framer-motion";

interface GlowBackgroundProps {
  variant?: "hero" | "section" | "subtle";
  className?: string;
}

export default function GlowBackground({ variant = "hero", className = "" }: GlowBackgroundProps) {
  if (variant === "hero") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Primary gradient orb */}
        <div className="absolute top-0 -right-1/4 w-[80rem] h-[80rem] opacity-30">
          <div className="w-full h-full bg-gradient-radial from-primary/40 via-primary/20 to-transparent blur-[120px]" />
        </div>
        
        {/* Secondary gradient orb */}
        <div className="absolute -bottom-1/2 -left-1/4 w-[60rem] h-[60rem] opacity-20">
          <div className="w-full h-full bg-gradient-radial from-secondary/40 via-secondary/20 to-transparent blur-[100px]" />
        </div>
        
        {/* Animated accent orb */}
        <motion.div 
          className="absolute top-1/3 left-1/2 w-[40rem] h-[40rem] opacity-15"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-gradient-radial from-accent/40 to-transparent blur-[100px]" />
        </motion.div>
      </div>
    );
  }

  if (variant === "section") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[40rem] opacity-10">
          <div className="w-full h-full bg-gradient-radial from-primary/30 to-transparent blur-[80px]" />
        </div>
      </div>
    );
  }

  // Subtle variant
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />
    </div>
  );
}
