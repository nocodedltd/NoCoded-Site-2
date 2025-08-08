import { motion } from "framer-motion";
import { fadeUp, stagger, floatIn } from "@/lib/motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "FutureFlow",
      quote: "Game‑changer for our business. We're now leaner, faster, and more profitable."
    },
    {
      name: "Arco",
      quote: "Automation with NoCoded freed up so much time it's been transformative."
    }
  ];

  return (
    <section className="py-24">
      <div className="container-nc">
        <div className="text-center mb-12">
          <div className="eyebrow">Client Success</div>
          <h2 className="h2">What Our Clients Say</h2>
          <p className="copy mt-4 max-w-2xl mx-auto">
            Real results from UK businesses who've transformed their operations with NoCoded.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="card-dark p-6">
              <p className="text-primary text-xl mb-4">"{testimonial.quote}"</p>
              <div className="copy">{testimonial.name}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/contact" className="btn-secondary">
            Join the growing list of satisfied clients
          </a>
        </div>
      </div>
    </section>
  );
}
