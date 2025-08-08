import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, stagger, floatIn } from "@/lib/motion";
import SERVICES from "@/data/services";
import { CheckCircle } from "lucide-react";

export default function ServicesModern() {
  const services = SERVICES;

  return (
    <main className="overflow-hidden">
      {/* HERO: full-bleed gradient + lighting */}
      <section className="relative py-32">
        <div className="container-nc text-center max-w-4xl mx-auto">
          <motion.h1 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="h1">
            Build faster. Automate the boring. Grow with no‑code.
          </motion.h1>
          <motion.p variants={fadeUp} className="copy mt-4 text-primary">
            We design modern systems that remove busywork and unlock growth. Quick wins in weeks, not months.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
            <Link to="/contact" className="btn-primary">Book Your Free Automation Audit</Link>
          </motion.div>
        </div>
        {/* background lights */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/3 top-1/4 w-[40rem] h-[40rem] bg-primary/10 blur-[140px] rounded-full"></div>
          <div className="absolute right-1/4 top-1/2 w-[24rem] h-[24rem] bg-[#6e74af]/25 blur-[120px] rounded-full"></div>
        </div>
      </section>

      {/* STICKY SUBNAV */}
      <section className="sticky top-16 z-20 bg-[#0B0B0F]/80 backdrop-blur border-y border-white/5">
        <div className="container-nc py-3">
          <div className="flex gap-3 overflow-x-auto hide-scrollbar">
            {services.map((s) => (
              <a key={s.slug} href={`#${s.slug}`} className="btn-secondary whitespace-nowrap border-ink/20 text-ink hover:bg-ink/5">
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW GRID: staggered masonry-esque using responsive spans */}
      <section className="py-24">
        <div className="container-nc">
          <div className="text-center mb-12">
            <div className="eyebrow">Overview</div>
            <h2 className="h2">What we can build for you</h2>
            <p className="copy mt-4 max-w-3xl mx-auto">Hover to preview. Click a tag to jump to the detail.</p>
          </div>
          <motion.div variants={stagger(0.14)} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.a
                key={s.slug}
                href={`#${s.slug}`}
                variants={floatIn}
                className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:-translate-y-1 transition ease-out-smooth ${i % 3 === 0 ? 'md:row-span-2' : ''}`}
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <s.icon className="w-5 h-5" />
                </div>
                <div className="font-semibold text-xl text-primary mb-2">{s.title}</div>
                <p className="text-primary mb-4">{s.oneLiner}</p>
                <ul className="space-y-2 text-primary/90">
                  {s.bullets.slice(0, 3).map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute -right-8 -bottom-8 w-64 h-64 bg-primary/10 blur-[80px] rounded-full"></div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DETAILED BANDS: full-width alternating sections */}
      {services.map((s, i) => (
        <section id={s.slug} key={s.slug} className="py-24">
          <div className="container-nc grid lg:grid-cols-2 gap-10 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="eyebrow mb-3">{s.flagship ? 'Flagship Programme' : 'Service'}</div>
              <h3 className="h2 mb-4">{s.title}</h3>
                              <p className="copy text-primary mb-6">{s.oneLiner}</p>
                <div className="text-primary/80 mb-2">What you'll get</div>
              <ul className="space-y-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-primary">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-3">
                <Link to="/contact" className="btn-primary">Talk to us</Link>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="relative rounded-3xl overflow-hidden group">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/25 to-transparent" />
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* PROOF IN ACTION: before/after */}
      <section className="py-24">
        <div className="container-nc">
          <div className="text-center mb-12">
            <div className="eyebrow">Proof in action</div>
            <h2 className="h2">See the difference</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[{b:'Staff copy/paste between tools',a:'Auto-sync in the background'}, {b:'Leads wait hours',a:'Instant replies and booked calls'}, {b:'Weekly reporting eats a day',a:'Dashboards update themselves'}].map((r)=> (
              <div key={r.b} className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="text-primary/80 text-sm">Before</div>
                <div className="font-semibold text-lg text-primary">{r.b}</div>
                <div className="divider-flow my-4" />
                <div className="text-primary/80 text-sm">After</div>
                <div className="font-semibold text-lg text-primary">{r.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLKIT GRID / MARQUEE */}
      <section className="py-24">
        <div className="container-nc text-center">
          <div className="eyebrow mb-3">Your stack, connected</div>
          <h2 className="h2">We build with the best</h2>
          <p className="copy mt-4 max-w-2xl mx-auto">We use established no‑code platforms that integrate cleanly. If a connector is missing, we create a lightweight bridge.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mt-8">
            {["Make","Zapier","Airtable","Notion","HubSpot","Slack","Google","Retool","Bubble","Glide","Webflow","Twilio"].map((t)=> (
              <div key={t} className="rounded-2xl border border-white/10 bg-white/5 py-3 text-primary hover:bg-white/10 transition">{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-28">
        <div className="container-nc text-center max-w-3xl mx-auto">
          <h2 className="h2">Ready to move faster?</h2>
          <p className="copy mt-4 text-primary">Book a free 30‑minute audit. We'll show you where automation saves time and money before you invest.</p>
          <div className="mt-8">
            <Link to="/contact" className="btn-primary">Book My Free Audit</Link>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-primary/10 blur-[140px] rounded-full"></div>
        </div>
      </section>
    </main>
  );
}


