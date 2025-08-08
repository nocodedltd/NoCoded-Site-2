import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform, animate } from "framer-motion";

/**
 * NoCoded Homepage – Show-Off Edition
 * -----------------------------------------------------------
 * • Single-file React component using Tailwind utility classes (arbitrary values for brand hexes)
 * • Animations via Framer Motion
 * • Calculator with live count-up
 * • Consistent colour system (primary #f9dec9, secondary #6e74af, base #0B0B0F)
 * • Sections: Nav, Hero, Calculator, Pain Points, Services, Process, Testimonials, Final CTA, Footer
 * -----------------------------------------------------------
 * Paste into a project with Tailwind + Framer Motion installed.
 * Tailwind: https://tailwindcss.com/docs/guides/vite (or Next.js guide)
 */

// ---- Motion presets ------------------------------------------------------
const ease = [0.16, 1, 0.3, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};
const floatIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
};
const stagger = (st = 0.12) => ({ hidden: {}, show: { transition: { staggerChildren: st } } });

// ---- Small UI primitives -------------------------------------------------
const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Eyebrow = ({ children }) => (
  <div className="inline-flex items-center gap-2 text-[#6e74af] text-sm uppercase tracking-[0.2em]">
    {children}
  </div>
);

const H1 = ({ children }) => (
  <h1 className="font-[800] tracking-wide text-[#f9dec9] leading-[1.05] text-5xl sm:text-6xl md:text-7xl">
    {children}
  </h1>
);
const H2 = ({ children, className = "" }) => (
  <h2 className={`font-[800] text-[#f9dec9] leading-tight text-3xl sm:text-4xl md:text-5xl ${className}`}>{children}</h2>
);
const Copy = ({ children, className = "" }) => (
  <p className={`text-[#6e74af]/90 text-base md:text-lg leading-relaxed ${className}`}>{children}</p>
);

const ButtonPrimary = ({ children, className = "", ...rest }) => (
  <a
    {...rest}
    className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-[#0B0B0F] shadow-[0_8px_30px_rgba(0,0,0,0.35)] bg-[linear-gradient(135deg,#4CC9F0_0%,#A084E8_100%)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f9dec9]/60 ${className}`}
  >
    {children}
  </a>
);
const ButtonSecondary = ({ children, className = "", ...rest }) => (
  <a
    {...rest}
    className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[#f9dec9] border border-[#f9dec9]/40 hover:border-[#f9dec9]/80 bg-transparent hover:bg-[#f9dec9]/5 transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${className}`}
  >
    {children}
  </a>
);

const CardDark = ({ children, className = "" }) => (
  <div className={`relative rounded-3xl bg-white/5 [background-color:rgba(11,11,15,0.60)] backdrop-blur-sm border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.35)] ${className}`}>
    {children}
  </div>
);
const CardCream = ({ children, className = "" }) => (
  <div className={`relative rounded-3xl bg-[#f9dec9] text-[#0B0B0F] border border-[#f9dec9]/70 shadow-[0_0_0_1px_rgba(249,222,201,0.35),0_10px_40px_rgba(160,132,232,0.25)] ${className}`}>
    {children}
  </div>
);

// ---- Tiny helpers --------------------------------------------------------
function useCountUp(value, duration = 1) {
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 100, damping: 20 });
  const rounded = useTransform(spring, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);
  useEffect(() => rounded.on("change", setDisplay), [rounded]);
  useEffect(() => {
    const controls = animate(motionVal, value, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [value]);
  return display;
}

// ---- Sections ------------------------------------------------------------
const Nav = () => (
  <div className="sticky top-0 z-50 backdrop-blur-[2px] bg-[#0B0B0F]/60 border-b border-white/5">
    <Container className="flex items-center justify-between py-4">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="absolute -inset-3 rounded-full bg-[#f9dec9]/10 blur-2xl" />
          <span className="relative font-[800] text-[#f9dec9]">n⟨/⟩coded</span>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-6 text-[#6e74af]">
        <a href="#services" className="hover:text-[#f9dec9]">Services</a>
        <a href="#process" className="hover:text-[#f9dec9]">How It Works</a>
        <a href="#about" className="hover:text-[#f9dec9]">About</a>
        <a href="#contact" className="hover:text-[#f9dec9]">Contact</a>
      </div>
      <ButtonSecondary className="hidden sm:inline-flex">Client Login</ButtonSecondary>
    </Container>
  </div>
);

const Hero = () => (
  <section className="relative">
    {/* ambient halos */}
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -top-32 -left-24 w-[60vw] h-[60vw] rounded-full bg-[linear-gradient(180deg,rgba(249,222,201,0.15),rgba(249,222,201,0.02))] opacity-10 blur-3xl" />
      <div className="absolute -bottom-40 -right-24 w-[50vw] h-[50vw] rounded-full bg-[linear-gradient(180deg,rgba(249,222,201,0.15),rgba(249,222,201,0.02))] opacity-10 blur-3xl" />
    </div>
    <Container className="min-h-[78vh] flex flex-col items-center justify-center text-center gap-8">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
        <H1>
          Automate. <span className="mx-2">Accelerate.</span> <span className="relative">Grow.
            <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-[linear-gradient(90deg,transparent,#f9dec9,transparent)] opacity-70" />
          </span>
        </H1>
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="show">
        <Copy className="max-w-2xl">
          We help UK businesses cut out repetitive work, boost productivity, and create seamless customer experiences so you can focus on growth, not admin.
        </Copy>
      </motion.div>
      <motion.div variants={stagger()} initial="hidden" animate="show" className="flex flex-wrap items-center justify-center gap-4">
        <motion.div variants={floatIn}><ButtonPrimary href="#audit">Book Your Free Automation Audit</ButtonPrimary></motion.div>
        <motion.div variants={floatIn}><ButtonSecondary href="#process">See How It Works</ButtonSecondary></motion.div>
      </motion.div>
    </Container>
  </section>
);

const Calculator = () => {
  const [team, setTeam] = useState(5);
  const [hours, setHours] = useState(10);
  const [pct, setPct] = useState(70);

  // naive maths: total hours per year saved = team * hours * 52 * pct
  const savedHours = useMemo(() => Math.round(team * hours * 52 * (pct / 100)), [team, hours, pct]);
  const weeks = useMemo(() => Math.round(savedHours / 40), [savedHours]);
  const days = useMemo(() => Math.round(savedHours / 8), [savedHours]);
  const weeksCount = useCountUp(weeks, 0.8);
  const daysCount = useCountUp(days, 0.8);

  return (
    <section id="calculator" className="py-24">
      <Container>
        <div className="text-center mb-12">
          <Eyebrow>Calculator</Eyebrow>
          <H2>Your Time & Money, Reclaimed</H2>
          <Copy className="mt-4 max-w-3xl mx-auto">
            Discover how much time and cost you could save by automating the boring stuff. In just seconds, see your potential gains then let's make them happen.
          </Copy>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-3xl border border-white/10 bg-black/20 backdrop-blur-sm">
            <h3 className="text-[#f9dec9] font-semibold mb-4">Calculate Time Savings</h3>
            <div className="space-y-6">
              <label className="block">
                <span className="text-[#6e74af]">Team Size</span>
                <input type="number" min={1} value={team} onChange={e=>setTeam(parseInt(e.target.value||"0",10))} className="mt-2 w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-[#f9dec9] focus:outline-none focus:ring-2 focus:ring-[#f9dec9]/40" />
              </label>
              <label className="block">
                <span className="text-[#6e74af]">Hours per Employee per Week on Repetitive Tasks</span>
                <input type="number" min={0} value={hours} onChange={e=>setHours(parseInt(e.target.value||"0",10))} className="mt-2 w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-[#f9dec9] focus:ring-2 focus:ring-[#f9dec9]/40" />
              </label>
              <label className="block">
                <span className="text-[#6e74af]">Automation Percentage</span>
                <input type="range" min={0} max={100} value={pct} onChange={e=>setPct(parseInt(e.target.value,10))} className="mt-2 w-full accent-[#f9dec9]" />
                <div className="text-right text-[#6e74af]/80 text-sm mt-1">{pct}%</div>
              </label>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-3xl border border-white/10 bg-black/20 backdrop-blur-sm">
            <h3 className="text-[#f9dec9] font-semibold mb-4">Your Results</h3>
            <div className="grid gap-4">
              <div className="rounded-2xl bg-black/30 border border-white/10 p-6 text-center">
                <div className="text-[#6e74af]">saved annually</div>
                <div className="text-[#f9dec9] text-5xl font-extrabold">{weeksCount} weeks</div>
              </div>
              <div className="rounded-2xl bg-black/30 border border-white/10 p-4 text-center text-[#6e74af]">That's equivalent to <span className="text-[#f9dec9] font-semibold">{daysCount}</span> working days per year</div>
              <div className="rounded-2xl bg-black/30 border border-white/10 p-4 text-center text-[#6e74af]">Achievements: <span className="text-[#f9dec9]">Time Saver</span> • <span className="text-[#f9dec9]">Efficiency Pro</span></div>
              <ButtonPrimary className="justify-center">Book Free Automation Audit</ButtonPrimary>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

const PainPoints = () => (
  <section className="py-24">
    <Container>
      <div className="text-center mb-12">
        <Eyebrow>Challenges</Eyebrow>
        <H2>Still running on manual processes?</H2>
        <Copy className="mt-4 max-w-3xl mx-auto">
          Every day without automation is another day your competitors pull ahead. Manual systems slow you down, cost you money, and make scaling harder than it needs to be.
        </Copy>
      </div>

      <motion.div variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { t: "Drowning in Admin", d: "Hours lost to repetitive tasks that could be automated." },
          { t: "Bottlenecks Everywhere", d: "Relying on key individuals slows everything down." },
          { t: "Missed Opportunities", d: "Competitors are winning with faster, smarter systems." },
        ].map(({ t, d }) => (
          <motion.div key={t} variants={floatIn} className="p-6 rounded-3xl border border-white/10 bg-black/20 backdrop-blur-sm hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(249,222,201,0.35),0_10px_40px_rgba(160,132,232,0.25)] transition duration-300">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#f9dec9]/50 text-[#f9dec9]">★</div>
            <div className="text-[#f9dec9] font-semibold text-xl mb-2">{t}</div>
            <Copy>{d}</Copy>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  </section>
);

const Services = () => (
  <section id="services" className="py-24">
    <Container>
      <div className="text-center mb-12">
        <Eyebrow>Our Core Services</Eyebrow>
        <H2>Three Ways We Supercharge Your Business</H2>
        <Copy className="mt-4 max-w-3xl mx-auto">We transform your business through three core pillars of modern efficiency.</Copy>
      </div>

      <motion.div variants={stagger(0.18)} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Process Automation",
            desc:
              "We analyse how you work today, strip out the manual jobs, and streamline your workflows. Expect faster operations, fewer mistakes, and more time for real growth.",
          },
          {
            title: "AI Agents for Everyday Tasks",
            desc:
              "From sales follow-ups to HR admin, our AI-powered assistants connect with your existing tools and handle repetitive work for you — without dropping the ball.",
          },
          {
            title: "Voice & Text Agents",
            desc:
              "Replace outdated call centres with AI-driven voice and chat systems. Never miss a lead, respond instantly, and support customers 24/7.",
          },
        ].map(({ title, desc }) => (
          <motion.div key={title} variants={floatIn} className="relative rounded-3xl bg-[#f9dec9] text-[#0B0B0F] border border-[#f9dec9]/70 shadow-[0_0_0_1px_rgba(249,222,201,0.35),0_10px_40px_rgba(160,132,232,0.25)] p-6 hover:-translate-y-1 transition">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0B0B0F]/5 text-[#0B0B0F]">◎</div>
            <div className="font-semibold text-xl mb-2">{title}</div>
            <p className="text-[#0B0B0F]/80">{desc}</p>
            <div className="mt-6"><ButtonSecondary className="border-[#0B0B0F]/20 text-[#0B0B0F] hover:bg-[#0B0B0F]/5">Learn More</ButtonSecondary></div>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  </section>
);

const Process = () => (
  <section id="process" className="py-24">
    <Container>
      <div className="text-center mb-12">
        <Eyebrow>Our Process</Eyebrow>
        <H2>A Proven 3‑Step Process That Delivers</H2>
        <Copy className="mt-4 max-w-3xl mx-auto">We follow a systematic approach that ensures your automation project succeeds from start to finish.</Copy>
      </div>

      <div className="relative">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-[#f9dec9]/40 to-transparent" />
        <motion.ol variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6 relative">
          {[
            { t: "Audit", d: "We review your current operations, spot bottlenecks, and uncover automation opportunities." },
            { t: "Blueprint", d: "We design a tailored plan with clear steps, timelines, and ROI projections." },
            { t: "Implementation", d: "We build, test, and launch your automation — integrating with your systems and training your team." },
          ].map(({ t, d }, i) => (
            <motion.li key={t} variants={floatIn} className="relative rounded-3xl bg-[#f9dec9] text-[#0B0B0F] border border-[#f9dec9]/70 shadow-[0_0_0_1px_rgba(249,222,201,0.35),0_10px_40px_rgba(160,132,232,0.25)] p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0B0B0F]/5">{i + 1}</div>
              <div className="font-semibold text-xl mb-2">{t}</div>
              <p className="text-[#0B0B0F]/80">{d}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>

      <div className="text-center mt-10">
        <ButtonPrimary>Ready to start your automation journey?</ButtonPrimary>
      </div>
    </Container>
  </section>
);

const Testimonials = () => (
  <section className="py-24">
    <Container>
      <div className="text-center mb-12">
        <Eyebrow>Client Success</Eyebrow>
        <H2>What Our Clients Say</H2>
        <Copy className="mt-4 max-w-2xl mx-auto">Real results from UK businesses who've transformed their operations with NoCoded.</Copy>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          { name: "FutureFlow", quote: "Game‑changer for our business. We're now leaner, faster, and more profitable." },
          { name: "Arco", quote: "Automation with NoCoded freed up so much time — it's been transformative." },
        ].map(({ name, quote }) => (
          <CardDark key={name} className="p-6">
            <p className="text-[#f9dec9] text-xl mb-4">"{quote}"</p>
            <Copy>{name}</Copy>
          </CardDark>
        ))}
      </div>

      <div className="text-center mt-10">
        <ButtonSecondary>Join the growing list of satisfied clients</ButtonSecondary>
      </div>
    </Container>
  </section>
);

const FinalCTA = () => (
  <section className="py-28 relative">
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(249,222,201,0.15),rgba(249,222,201,0.02))] opacity-15" />
    <Container className="relative text-center">
      <Eyebrow>Get Started Today</Eyebrow>
      <H2>Ready to See What's Possible?</H2>
      <Copy className="mt-4 max-w-2xl mx-auto">
        Book your free 30‑minute audit. We'll show you exactly where automation can save you time, money, and headaches — before you invest a penny.
      </Copy>
      <div className="mt-8"><ButtonPrimary>Book My Free Audit</ButtonPrimary></div>
      <div className="mt-6 flex items-center justify-center gap-6 text-[#6e74af]/80 text-sm">
        <span>🛡 No commitment required</span>
        <span>⚡ 30‑minute free consultation</span>
        <span>🇬🇧 UK business specialists</span>
      </div>
    </Container>
  </section>
);

const Footer = () => (
  <footer className="border-t border-white/5 py-12">
    <Container className="grid md:grid-cols-3 gap-8 items-start">
      <div>
        <div className="font-[800] text-[#f9dec9] mb-2">n⟨/⟩coded</div>
        <Copy>Empowering businesses with intelligent automation solutions.</Copy>
      </div>
      <div>
        <div className="text-[#f9dec9] font-semibold mb-3">Company</div>
        <ul className="space-y-2 text-[#6e74af]"><li>About Us</li><li>Services</li><li>How It Works</li><li>Contact Us</li></ul>
      </div>
      <div>
        <div className="text-[#f9dec9] font-semibold mb-3">Follow Us</div>
        <ul className="space-y-2 text-[#6e74af]"><li>LinkedIn</li><li>Twitter</li></ul>
      </div>
    </Container>
    <Container className="mt-8"><div className="h-px w-full bg-gradient-to-r from-transparent via-[#f9dec9]/30 to-transparent"/></Container>
    <Container className="text-[#6e74af]/70 text-sm mt-6">© {new Date().getFullYear()} NoCoded. All rights reserved. Privacy Policy</Container>
  </footer>
);

export default function HomePage() {
  // Scroll progress bar (wow-but-useful)
  const progressRef = useRef(null);
  useEffect(() => {
    const handle = () => {
      const el = progressRef.current;
      if (!el) return;
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      el.style.width = scrolled + "%";
    };
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white relative overflow-hidden">
      {/* scroll progress */}
      <div className="fixed top-0 left-0 h-[2px] z-[60] bg-[linear-gradient(90deg,#4CC9F0,#A084E8)]" ref={progressRef} />

      {/* Enhanced ambient scene with floating particles */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Large ambient halos */}
        <div className="absolute left-[-10%] top-[-10%] w-[60vw] h-[60vw] rounded-full bg-[linear-gradient(180deg,rgba(249,222,201,0.15),rgba(249,222,201,0.02))] blur-3xl opacity-10" />
        <div className="absolute right-[-10%] bottom-[-10%] w-[55vw] h-[55vw] rounded-full bg-[linear-gradient(180deg,rgba(249,222,201,0.15),rgba(249,222,201,0.02))] blur-3xl opacity-10" />
        
        {/* Additional floating particles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-[#f9dec9]/20 blur-sm"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/3 w-3 h-3 rounded-full bg-[#6e74af]/30 blur-sm"
          animate={{
            y: [0, -25, 0],
            x: [0, -15, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-[#f9dec9]/25 blur-sm"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
        
        {/* Subtle geometric shapes */}
        <motion.div
          className="absolute top-1/2 right-1/4 w-6 h-6 border border-[#f9dec9]/10 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-8 h-8 border border-[#6e74af]/15 rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
          }}
        />
      </div>

      <Nav />
      <Hero />
      <Calculator />
      <PainPoints />
      <Services />
      <Process />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}

