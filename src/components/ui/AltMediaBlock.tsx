import { ReactNode } from "react";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight, fadeUp } from "@/lib/motionVariants";
// Using img tag instead of Next.js Image for React app

interface AltMediaBlockProps {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string | ReactNode;
  badge?: string;
  cta?: {
    text: string;
    href: string;
  };
  reverse?: boolean;
  className?: string;
}

export default function AltMediaBlock({
  image,
  title,
  description,
  badge,
  cta,
  reverse = false,
  className = ""
}: AltMediaBlockProps) {
  const textVariant = reverse ? slideInRight : slideInLeft;
  const imageVariant = reverse ? slideInLeft : slideInRight;

  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariant}
        className={reverse ? "lg:order-2" : ""}
      >
        {badge && (
          <motion.div variants={fadeUp} className="mb-4">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary text-base text-xs font-bold px-3 py-1 rounded-full">
              {badge}
            </span>
          </motion.div>
        )}
        
        <h3 className="h3 mb-6">{title}</h3>
        
        {typeof description === "string" ? (
          <p className="copy mb-8">{description}</p>
        ) : (
          <div className="mb-8">{description}</div>
        )}
        
        {cta && (
          <a 
            href={cta.href}
            className="btn-primary inline-flex items-center gap-2"
          >
            {cta.text}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        )}
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={imageVariant}
        className={`relative ${reverse ? "lg:order-1" : ""}`}
      >
        <div className="relative rounded-3xl overflow-hidden group">
          <div className="aspect-[4/3] relative">
            <img
              src={image.src}
              alt={image.alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        {/* Glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
      </motion.div>
    </div>
  );
}
