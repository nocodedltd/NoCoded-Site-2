import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cardHover, scaleIn } from "@/lib/motionVariants";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
  className?: string;
  glowColor?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  badge,
  className = "",
  glowColor = "primary"
}: FeatureCardProps) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover="hover"
      initial="rest"
      animate="rest"
      className={`group relative ${className}`}
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
      
      <motion.div
        variants={cardHover}
        className="relative rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 h-full flex flex-col"
      >
        {badge && (
          <div className="mb-4">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary text-base text-xs font-bold px-3 py-1 rounded-full">
              {badge}
            </span>
          </div>
        )}
        
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${glowColor}/20 to-${glowColor}/10 flex items-center justify-center mb-6`}>
          <Icon className={`w-8 h-8 text-${glowColor}`} />
        </div>
        
        <h3 className="text-primary font-bold text-xl mb-4">{title}</h3>
        <p className="text-secondary/80 leading-relaxed flex-1">{description}</p>
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-tr from-${glowColor}/10 to-transparent`} />
        </div>
      </motion.div>
    </motion.div>
  );
}
