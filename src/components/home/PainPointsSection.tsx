import { motion } from "framer-motion";
import { fadeUp, stagger, floatIn } from "@/lib/motion";

export default function PainPointsSection() {
  const painPoints = [
    {
      title: "Drowning in Admin",
      description: "Hours lost to repetitive tasks that could be automated.",
      icon: "★"
    },
    {
      title: "Bottlenecks Everywhere", 
      description: "Relying on key individuals slows everything down.",
      icon: "★"
    },
    {
      title: "Missed Opportunities",
      description: "Competitors are winning with faster, smarter systems.",
      icon: "★"
    }
  ];

  return (
    <section className="py-24">
      <div className="container-nc">
        <div className="text-center mb-12">
          <div className="eyebrow">Challenges</div>
          <h2 className="h2">Still running on manual processes?</h2>
          <p className="copy mt-4 max-w-3xl mx-auto">
            Every day without automation is another day your competitors pull ahead. 
            Manual systems slow you down, cost you money, and make scaling harder than it needs to be.
          </p>
        </div>

        <motion.div 
          variants={stagger()} 
          initial="hidden" 
          whileInView="show" 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {painPoints.map((point, i) => (
            <motion.div 
              key={point.title} 
              variants={floatIn} 
              className="card-dark p-6 hover:shadow-glow transition ease-out-smooth hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/50 text-primary">
                {point.icon}
              </div>
              <div className="text-primary font-semibold text-xl mb-2">{point.title}</div>
              <p className="copy">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
