import { motion } from "framer-motion";
import { fadeUp, stagger, floatIn } from "@/lib/motion";

export default function ProcessSection() {
  const steps = [
    {
      title: "Audit",
      description: "We review your current operations, spot bottlenecks, and uncover automation opportunities.",
      number: 1
    },
    {
      title: "Blueprint",
      description: "We design a tailored plan with clear steps, timelines, and ROI projections.",
      number: 2
    },
    {
      title: "Implementation",
              description: "We build, test, and launch your automation integrating with your systems and training your team.",
      number: 3
    }
  ];

  return (
    <section className="py-24">
      <div className="container-nc">
        <div className="text-center mb-12">
          <div className="eyebrow">Our Process</div>
          <h2 className="h2">A Proven 3-Step Process That Delivers</h2>
          <p className="copy mt-4 max-w-3xl mx-auto">
            We follow a systematic approach that ensures your automation project succeeds from start to finish.
          </p>
        </div>

        <div className="relative">
          {/* flowing divider line */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 divider-flow"></div>

          <motion.ol 
            variants={stagger()} 
            initial="hidden" 
            whileInView="show" 
            className="grid md:grid-cols-3 gap-6 relative"
          >
            {steps.map((step) => (
              <motion.li 
                key={step.title} 
                variants={floatIn} 
                className="card-cream p-6 text-ink"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink/5">
                  {step.number}
                </div>
                <div className="font-semibold text-xl mb-2">{step.title}</div>
                <p className="text-ink/80">{step.description}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>

        <div className="text-center mt-10">
          <a href="/contact" className="btn-primary">
            Ready to start your automation journey?
          </a>
        </div>
      </div>
    </section>
  );
}