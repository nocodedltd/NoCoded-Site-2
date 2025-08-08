import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, stagger, floatIn } from "@/lib/motion";

export default function ServicesShowcase() {
  const coreServices = [
    { title: "Process Automation", description: "Remove manual steps from your ops so tasks finish faster with fewer mistakes.", icon: "◎" },
    { title: "AI Agents", description: "Always-on helpers that reply, follow up and do simple work across chat, voice and email.", icon: "◎" },
    { title: "Voice & Text Agents", description: "Pick up calls, qualify leads, answer questions and book meetings 24/7.", icon: "◎" },
    { title: "Internal Dashboards", description: "Simple views to track KPIs, bottlenecks and workload in real time.", icon: "◎" },
    { title: "Data Sync & Integrations", description: "Keep tools in sync (CRM, sheets, email, forms) with reliable two-way flows.", icon: "◎" },
    { title: "Client Portals", description: "Branded portals for onboarding, document sharing and project updates.", icon: "◎" },
  ];

  const beforeAfter = [
    { before: "Staff copy/paste data between tools", after: "Automatic, reliable sync in the background" },
    { before: "Leads wait hours for a reply", after: "Instant answers and booked calls via chat/voice" },
    { before: "Weekly reporting takes half a day", after: "Dashboards update themselves in real‑time" },
  ];

  const toolkit = [
    "Make", "Zapier", "Airtable", "Notion", "HubSpot", "Slack", "Google Workspace", "Retool", "Bubble", "Glide"
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-28">
        <div className="container-nc text-center max-w-3xl mx-auto">
          <motion.h1 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="h1">
            The No‑Code Advantage
          </motion.h1>
          <motion.p variants={fadeUp} className="copy mt-4 text-primary/90">
            Build faster. Automate routine work. Ship ideas in weeks, not months. We design systems your team will actually use.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-6">
            <Link to="/contact" className="btn-primary">Book Your Free Automation Audit</Link>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[28rem] h-[28rem] bg-primary/10 blur-[120px] rounded-full"></div>
        </div>
      </section>

      {/* Services (match Home card style) */}
      <section className="py-24">
        <div className="container-nc">
          <div className="text-center mb-12">
            <div className="eyebrow">What we build</div>
            <h2 className="h2">Modern, no‑code systems that scale</h2>
            <p className="copy mt-4 max-w-3xl mx-auto">Cards below use the same layout and typography as on your Home page.</p>
          </div>
          <motion.div variants={stagger(0.18)} initial="hidden" whileInView="show" className="grid md:grid-cols-3 gap-6">
            {coreServices.map((s) => (
              <motion.div key={s.title} variants={floatIn} className="card-cream p-6 hover:-translate-y-1 transition ease-out-smooth">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink/5 text-ink">{s.icon}</div>
                <div className="text-ink font-semibold text-xl mb-2">{s.title}</div>
                <p className="text-ink/80">{s.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-20">
        <div className="container-nc">
          <div className="text-center mb-10">
            <div className="eyebrow">Proof in practice</div>
            <h2 className="h2">From slow and manual to fast and reliable</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {beforeAfter.map((row) => (
              <div key={row.before} className="card-cream p-6 text-ink">
                <div className="text-ink/70 text-sm">Before</div>
                <div className="font-semibold text-lg">{row.before}</div>
                <div className="divider-flow my-4" />
                <div className="text-ink/70 text-sm">After</div>
                <div className="font-semibold text-lg">{row.after}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit */}
      <section className="py-24">
        <div className="container-nc text-center">
          <div className="eyebrow mb-3">Built with the best tools</div>
          <h2 className="h2">Your stack, connected</h2>
          <p className="copy mt-4 max-w-2xl mx-auto">We use proven no‑code platforms that play nicely together. If a connector is missing, we create a simple bridge.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mt-8">
            {toolkit.map((t) => (
              <div key={t} className="card-cream py-3 text-center text-ink/90">{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-nc text-center">
          <h2 className="h2">Ready to see what no‑code can do for you?</h2>
          <p className="copy mt-4 max-w-2xl mx-auto">We’ll find quick wins first, then scale what works.</p>
          <div className="mt-8">
            <Link to="/contact" className="btn-primary">Book My Free Audit</Link>
          </div>
        </div>
      </section>
    </main>
  );
}


