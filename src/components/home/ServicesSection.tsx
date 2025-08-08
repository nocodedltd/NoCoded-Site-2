import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, stagger, floatIn } from "@/lib/motion";

export default function ServicesSection() {
  const services = [
    {
      title: "Process Automation",
      description: "We analyse how you work today, strip out the manual jobs, and streamline your workflows. Expect faster operations, fewer mistakes, and more time for real growth.",
      icon: "◎"
    },
    {
      title: "AI Agents for Everyday Tasks",
      description: "From sales follow-ups to HR admin, our AI-powered assistants connect with your existing tools and handle repetitive work for you without dropping the ball.",
      icon: "◎"
    },
    {
      title: "Voice & Text Agents",
      description: "Replace outdated call centres with AI-driven voice and chat systems. Never miss a lead, respond instantly, and support customers 24/7.",
      icon: "◎"
    }
  ];

  return (
    <section className="py-24">
      <div className="container-nc max-w-[1400px]">
        <div className="text-center mb-12">
          <div className="eyebrow">Our Core Services</div>
          <h2 className="h2">Three Ways We Supercharge Your Business</h2>
          <p className="copy mt-4 max-w-3xl mx-auto">
            We transform your business through three core pillars of modern efficiency.
          </p>
        </div>

        <motion.div 
          variants={stagger(0.18)} 
          initial="hidden" 
          whileInView="show" 
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div 
              key={service.title} 
              variants={floatIn} 
              className="card-cream p-8 hover:-translate-y-1 transition ease-out-smooth text-center"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink/5 text-ink mx-auto">
                {service.icon}
              </div>
              <div className="text-ink font-semibold text-xl mb-2">{service.title}</div>
              <p className="text-ink/80 mx-auto">{service.description}</p>
              <div className="mt-6">
                <Link 
                  to="/services" 
                  className="btn-secondary border-ink/20 text-ink hover:bg-ink/5"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}