
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Clock, TrendingUp, Users } from "lucide-react";
import SERVICES from "@/data/services";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";

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
      {/* Hero Section with polish */}
      <section className="relative py-28">
        <div className="container-nc text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="h1"
          >
            Services built to remove busywork and unlock growth
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="copy mt-4"
          >
            Choose one service or let us design a plan. Either way, we focus on quick wins, clear outcomes, and systems your team will actually use.
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

        {/* subtle background accent */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[28rem] h-[28rem] bg-primary/10 blur-[120px] rounded-full"></div>
        </div>
      </section>

      {/* Quick nav */}
      <section className="py-6">
        <div className="container-nc">
          <div className="card-cream p-4 overflow-x-auto">
            <div className="flex gap-3 whitespace-nowrap">
              {services.map((s) => (
                <a key={s.slug} href={`#${s.slug}`} className="btn-secondary border-ink/20 text-ink hover:bg-ink/5">
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alternating service bands with imagery */}
      {services.map((s, i) => (
        <section id={s.slug} key={s.slug} className="py-20">
          <div className="container-nc grid lg:grid-cols-2 gap-10 items-center">
            <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="eyebrow mb-3">{s.flagship ? 'Flagship Programme' : 'Service'}</div>
              <h3 className="h2 mb-4">{s.title}</h3>
              <p className="copy mb-6">{s.oneLiner}</p>
              <ul className="space-y-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-secondary">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-3">
                <Link to="/contact" className="btn-primary">Talk to us</Link>
                <a href="#top" className="btn-secondary">Back to top</a>
              </div>
            </div>
            <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="relative rounded-3xl overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* What you get with every project */}
      <section className="py-24">
        <div className="container-nc">
          <div className="text-center mb-12">
            <div className="eyebrow">Included with every engagement</div>
            <h2 className="h2">Simple, reliable and measurable</h2>
            <p className="copy mt-4 max-w-3xl mx-auto">Every project is built to be practical from day one, with clear outcomes and zero fluff.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-cream p-6 text-ink">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink/5 text-ink"><Clock className="w-6 h-6" /></div>
              <div className="font-semibold text-xl mb-2">Quick wins first</div>
              <p className="text-ink/80">We ship value in weeks, not months, so you see progress fast.</p>
            </div>
            <div className="card-cream p-6 text-ink">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink/5 text-ink"><TrendingUp className="w-6 h-6" /></div>
              <div className="font-semibold text-xl mb-2">Trackable results</div>
              <p className="text-ink/80">Simple dashboards so you know what’s working and what it saved.</p>
            </div>
            <div className="card-cream p-6 text-ink">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink/5 text-ink"><Users className="w-6 h-6" /></div>
              <div className="font-semibold text-xl mb-2">Built for your team</div>
              <p className="text-ink/80">We train your people and make sure the new way of working sticks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process, Testimonials and CTA from Home for cohesion */}
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  );
};

export default Services;
