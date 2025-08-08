import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motionVariants";

interface Logo {
  src: string;
  alt: string;
  href?: string;
}

interface LogoGridProps {
  logos: Logo[];
  title?: string;
  variant?: "carousel" | "grid";
  className?: string;
}

export default function LogoGrid({ 
  logos, 
  title, 
  variant = "grid",
  className = "" 
}: LogoGridProps) {
  if (variant === "carousel") {
    return (
      <div className={`relative ${className}`}>
        {title && (
          <p className="text-center text-secondary/60 text-sm mb-8">{title}</p>
        )}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-x">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-8 grayscale hover:grayscale-0 transition-all duration-300"
              >
                {logo.href ? (
                  <a href={logo.href} target="_blank" rel="noopener noreferrer">
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                    />
                  </a>
                ) : (
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="h-12 w-auto object-contain opacity-60"
                  />
                )}
              </div>
            ))}
          </div>
          {/* Gradient masks */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-base to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-base to-transparent pointer-events-none" />
        </div>
      </div>
    );
  }

  // Grid variant
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer(0.1)}
      className={className}
    >
      {title && (
        <motion.p variants={fadeIn} className="text-center text-secondary/60 text-sm mb-8">
          {title}
        </motion.p>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
          >
            {logo.href ? (
              <a href={logo.href} target="_blank" rel="noopener noreferrer">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </a>
            ) : (
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-10 w-auto object-contain opacity-60"
              />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
