
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import SERVICES from "@/data/services";

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash scrolling
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start'
          });
        }, 100);
      }
    }
  }, [location.hash]);

  const services = SERVICES;

  return (
    <main className="overflow-hidden">
      {/* Hero Section matching Home */}
      <section className="relative py-24">
        <div className="container-nc text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="h1"
          >
            Services that Deliver Results
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="copy mt-4"
          >
            Practical, plain-English solutions that cut admin, speed up work, and help you grow.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6"
          >
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Book Your Free Automation Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid using Home card style */}
      <section className="py-24">
        <div className="container-nc">
          <div className="text-center mb-12">
            <div className="eyebrow">Our Core Services</div>
            <h2 className="h2">Everything on one simple page</h2>
            <p className="copy mt-4 max-w-3xl mx-auto">
              Clear, outcome-focused services built to remove admin and speed up your growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.slug} className={`card-cream p-6 hover:-translate-y-1 transition ease-out-smooth ${s.flagship ? 'ring-2 ring-[#6e74af]/40' : ''}`}>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink/5 text-ink">
                  <s.icon className="w-6 h-6" />
                </div>
                <div className="text-ink font-semibold text-xl mb-2">{s.title}</div>
                <p className="text-ink/80 mb-4">{s.oneLiner}</p>
                <ul className="space-y-2 text-ink/80">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-ink mt-1" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-3">
                  <Link to="/contact" className="btn-secondary border-ink/20 text-ink hover:bg-ink/5">Talk to us</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section matching Home */}
      <section className="py-24">
        <div className="container-nc text-center">
          <h2 className="h2">Ready to see what's possible?</h2>
          <p className="copy mt-4 max-w-2xl mx-auto">Book your free 30‑minute audit. We’ll show you where automation will save time and money before you invest.</p>
          <div className="mt-8">
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Book My Free Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
