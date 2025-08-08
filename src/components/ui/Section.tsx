import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motionVariants";
import GlowBackground from "./GlowBackground";

interface SectionProps {
  children: ReactNode;
  eyebrow?: string;
  heading?: string;
  description?: string;
  className?: string;
  containerClassName?: string;
  glow?: "hero" | "section" | "subtle" | "none";
  id?: string;
}

export default function Section({
  children,
  eyebrow,
  heading,
  description,
  className = "",
  containerClassName = "",
  glow = "none",
  id
}: SectionProps) {
  const hasHeader = eyebrow || heading || description;

  return (
    <section id={id} className={`relative py-24 overflow-hidden ${className}`}>
      {glow !== "none" && <GlowBackground variant={glow} />}
      
      <div className={`container-nc relative z-10 ${containerClassName}`}>
        {hasHeader && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer(0.1)}
            className="text-center mb-16"
          >
            {eyebrow && (
              <motion.div variants={fadeUp}>
                <div className="eyebrow">{eyebrow}</div>
              </motion.div>
            )}
            
            {heading && (
              <motion.div variants={fadeUp} className="mt-6">
                <h2 className="h2">{heading}</h2>
              </motion.div>
            )}
            
            {description && (
              <motion.div variants={fadeUp} className="mt-6">
                <p className="copy mx-auto max-w-3xl">{description}</p>
              </motion.div>
            )}
          </motion.div>
        )}
        
        {children}
      </div>
    </section>
  );
}
