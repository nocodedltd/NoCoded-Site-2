import { motion } from "framer-motion";
import { fadeUp, stagger, floatIn } from "@/lib/motion";

export default function CtaSection() {
  return (
    <section className="py-28 relative">
      <div className="absolute inset-0 bg-cream-grad opacity-15"></div>
      <div className="container-nc relative text-center">
        <div className="eyebrow">Get Started Today</div>
        <h2 className="h2">Ready to See What's Possible?</h2>
        <p className="copy mt-4 max-w-2xl mx-auto">
          Book your free 30‑minute audit. We'll show you exactly where automation can save you time, money, and headaches before you invest a penny.
        </p>
        <div className="mt-8">
          <a href="/contact" className="btn-primary">
            Book My Free Audit
          </a>
        </div>
        <div className="mt-6 flex items-center justify-center gap-6 text-secondary/70 text-sm">
          <span>🛡 No commitment required</span>
          <span>⚡ 30‑minute free consultation</span>
          <span>🇬🇧 UK business specialists</span>
        </div>
      </div>
    </section>
  );
}