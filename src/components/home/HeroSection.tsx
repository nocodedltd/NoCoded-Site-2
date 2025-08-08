import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, stagger, floatIn } from "@/lib/motion";

interface HeroSectionProps {
  scrollToServices: () => void;
}

export default function HeroSection({ scrollToServices }: HeroSectionProps) {
  return (
    <section className="relative">
      <div className="container-nc min-h-[78vh] flex flex-col items-center justify-center text-center gap-8">
        <motion.h1 
          variants={fadeUp} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true }} 
          className="h1"
        >
          Automate.<span className="mx-2">Accelerate.</span><span className="text-primary">Grow.</span>
        </motion.h1>
        
        <motion.p 
          variants={fadeUp} 
          className="copy max-w-2xl"
        >
          We help UK businesses cut out repetitive work, boost productivity, and create seamless customer experiences so you can focus on growth, not admin.
        </motion.p>
        
        <motion.div 
          variants={stagger()} 
          initial="hidden" 
          whileInView="show" 
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a 
            variants={floatIn} 
            href="/contact"
            className="btn-primary"
          >
            Book Your Free Automation Audit
          </motion.a>
          <motion.a 
            variants={floatIn} 
            href="#process-section"
            onClick={scrollToServices}
            className="btn-secondary"
          >
            See How It Works
          </motion.a>
        </motion.div>
      </div>
      
      {/* Hero polish - soft logo glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 blur-[100px] pointer-events-none"></div>
      
      {/* Micro: faint animated underline under "Grow." */}
      <motion.div 
        className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}