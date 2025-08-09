import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, animate } from "framer-motion";
import { ChevronRight, ArrowRight, Star, Zap, Target, Users, Clock, TrendingUp, CheckCircle, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

// Import new components
import GlowBackground from "@/components/ui/GlowBackground";
import Section from "@/components/ui/Section";
import FeatureCard from "@/components/ui/FeatureCard";
import LogoGrid from "@/components/ui/LogoGrid";
import AltMediaBlock from "@/components/ui/AltMediaBlock";
import TechStackSection from "@/components/TechStackSection";
import { fadeUp, staggerContainer, scaleIn, cardHover } from "@/lib/motionVariants";

// Hero Section with enhanced styling
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GlowBackground variant="hero" />
      
      {/* Content */}
      <div className="container-nc relative z-10 text-center -translate-y-6 md:-translate-y-10 lg:-translate-y-16 xl:-translate-y-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mb-6"
        >
          <div className="flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <img
                src="/lovable-uploads/fdcb9ebd-5e87-4307-aba7-5596ab15cae0.png"
                alt="NoCoded"
                className="h-16 w-auto hover:drop-shadow-[0_0_12px_rgba(249,222,201,0.35)] transition-all duration-300"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="eyebrow">Welcome to the Future</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6"
        >
          <h1 className="h1">
            Automate.{" "}
            <span className="relative">
              Accelerate.
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-secondary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </span>{" "}
            <span className="text-secondary">Grow.</span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8"
        >
          <p className="text-primary text-base md:text-lg leading-relaxed mx-auto max-w-3xl">
            We help UK businesses cut out repetitive work, boost productivity, and create seamless customer experiences so you can focus on growth, not admin.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/contact" className="btn-primary">
            Book Your Free Automation Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/how-it-works" className="btn-secondary">
            See How It Works
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// Impact Calculator with enhanced styling
const ImpactCalculator = () => {
  const [calculationType, setCalculationType] = useState('time');
  const [teamSize, setTeamSize] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [hourlyWage, setHourlyWage] = useState(25);
  const [automationPercent, setAutomationPercent] = useState(70);
  
  const savedHours = Math.round(teamSize * hoursPerWeek * 52 * (automationPercent / 100));
  const savedWeeks = Math.round(savedHours / 40);
  const savedDays = Math.round(savedHours / 8);
  const savedCost = Math.round(savedHours * hourlyWage);
  
  const countUpValue = useMotionValue(0);
  const roundedValue = useTransform(countUpValue, (value) => Math.round(value));
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    roundedValue.on("change", setDisplayValue);
  }, [roundedValue]);
  
  useEffect(() => {
    const targetValue = calculationType === 'time' ? savedWeeks : savedCost;
    const controls = animate(countUpValue, targetValue, { duration: 1 });
    return () => controls.stop();
  }, [savedWeeks, savedCost, calculationType, countUpValue]);

  return (
    <Section
      eyebrow="Impact Calculator"
      heading="Your Time & Money, Reclaimed"
      description="Discover how much time and cost you could save by automating the boring stuff. In just seconds, see your potential gains then let's make them happen."
      glow="section"
      className="bg-gradient-to-b from-base to-base/95"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer(0.2)}
        className="grid lg:grid-cols-2 gap-12 items-start"
      >
        {/* Input Panel */}
        <motion.div variants={scaleIn} className="space-y-8 group relative">
          {/* Enhanced glow effect */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative card-dark p-8">
            <h3 className="text-secondary font-bold text-xl mb-6 text-center">Calculate Your Savings</h3>
            
            {/* Calculation Type Toggle */}
            <div className="mb-6">
              <label className="block text-primary text-sm font-medium mb-3">What would you like to calculate?</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setCalculationType('time')}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                    calculationType === 'time'
                      ? 'bg-secondary text-white'
                      : 'bg-white/10 text-primary hover:bg-white/20'
                  }`}
                >
                  Time Savings
                </button>
                <button
                  onClick={() => setCalculationType('cost')}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                    calculationType === 'cost'
                      ? 'bg-secondary text-white'
                      : 'bg-white/10 text-primary hover:bg-white/20'
                  }`}
                >
                  Cost Savings
                </button>
              </div>
            </div>
            
                          <div className="space-y-6">
                <div>
                  <label className="block text-primary text-sm font-medium mb-2">Team Size</label>
                <input
                  type="number"
                  min="1"
                  value={teamSize}
                  onChange={(e) => setTeamSize(parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-primary focus:outline-none focus:ring-2 focus:ring-accent/40 transition-all"
                />
              </div>
              
                              <div>
                  <label className="block text-primary text-sm font-medium mb-2">
                    {calculationType === 'time' ? 'Hours per Employee per Week on Repetitive Tasks' : 'Average Hourly Wage (£)'}
                  </label>
                <input
                  type="number"
                  min="0"
                  value={calculationType === 'time' ? hoursPerWeek : hourlyWage}
                  onChange={(e) => {
                    if (calculationType === 'time') {
                      setHoursPerWeek(parseInt(e.target.value) || 0);
                    } else {
                      setHourlyWage(parseInt(e.target.value) || 0);
                    }
                  }}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-primary focus:outline-none focus:ring-2 focus:ring-accent/40 transition-all"
                />
              </div>
              
              {calculationType === 'time' && (
                                  <div>
                    <label className="block text-primary text-sm font-medium mb-2">
                      Automation Percentage: {automationPercent}%
                    </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={automationPercent}
                    onChange={(e) => setAutomationPercent(parseInt(e.target.value))}
                    className="w-full accent-accent"
                  />
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Results Panel */}
        <motion.div variants={scaleIn} className="space-y-6 group relative">
          {/* Enhanced glow effect */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative">
            {/* Static background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl" />
            
            <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 text-center">
              <h3 className="text-secondary font-bold text-xl mb-6">Your Results</h3>
              
              <div className="space-y-6">
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-primary text-sm mb-2">
                    {calculationType === 'time' ? 'Hours Saved Annually' : 'Cost Saved Annually'}
                  </div>
                  <div className="text-primary text-5xl font-extrabold">
                    {calculationType === 'time' ? `${displayValue} weeks` : `£${displayValue.toLocaleString()}`}
                  </div>
                  <div className="text-primary text-sm mt-2">
                    {calculationType === 'time' 
                      ? `That's ${savedDays} working days per year`
                      : `That's £${Math.round(savedCost / 12).toLocaleString()} per month`
                    }
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center gap-2 text-primary">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">
                      {calculationType === 'time' ? 'Time Saver' : 'Cost Cutter'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-sm font-medium">Efficiency Pro</span>
                  </div>
                </div>
                
                <Link to="/contact" className="btn-primary w-full justify-center">
                  Book Free Automation Audit
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

// Pain Points with enhanced cards
const PainPoints = () => {
  const painPoints = [
    {
      icon: Clock,
      title: "Drowning in Admin",
      description: "Hours lost to repetitive tasks that could be automated."
    },
    {
      icon: Users,
      title: "Bottlenecks Everywhere",
      description: "Relying on key individuals slows everything down."
    },
    {
      icon: Target,
      title: "Missed Opportunities",
      description: "Competitors are winning with faster, smarter systems."
    }
  ];

  return (
    <Section
      eyebrow="Challenges"
      heading="Still running on manual processes?"
      description="Every day without automation is another day your competitors pull ahead. Manual systems slow you down, cost you money, and make scaling harder than it needs to be."
      glow="subtle"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer(0.2)}
        className="grid md:grid-cols-3 gap-8"
      >
        {painPoints.map((point) => (
          <FeatureCard
            key={point.title}
            icon={point.icon}
            title={point.title}
            description={point.description}
            glowColor="primary"
          />
        ))}
      </motion.div>
    </Section>
  );
};

// Core Services with enhanced feature cards
const CoreServices = () => {
  const services = [
    {
      icon: Calendar,
      title: "The 90-Day AI Transformation",
      description: "Our signature programme will embed, streamline, and revolutionise your essential business operations in just one quarter. We oversee the entire path from foundational planning to complete execution, prioritising concrete results and a strong competitive advantage.",
      flagship: true
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "We analyse how you work today, strip out the manual jobs, and streamline your workflows. Expect faster operations, fewer mistakes, and more time for real growth."
    },
    {
      icon: Users,
      title: "AI Agents for Everyday Tasks",
      description: "From sales follow-ups to HR admin, our AI-powered assistants connect with your existing tools and handle repetitive work for you without dropping the ball."
    },
    {
      icon: Target,
      title: "Voice & Text Agents",
      description: "Replace outdated call centres with AI-driven voice and chat systems. Never miss a lead, respond instantly, and support customers 24/7."
    }
  ];

  return (
    <Section
      eyebrow="Our Core Services"
      heading="Four Ways We Supercharge Your Business"
      description="We transform your business through four core pillars of modern efficiency, from our flagship 90-day transformation to custom solutions."
      glow="section"
      className="bg-gradient-to-b from-base/95 to-base"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer(0.2)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {services.map((service) => (
          <FeatureCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            badge={service.flagship ? "FLAGSHIP" : undefined}
            glowColor="primary"
          />
        ))}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-12"
      >
        <Link to="/services" className="btn-secondary">
          Explore All Services
          <ChevronRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </Section>
  );
};

// Process Section with enhanced styling
const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Audit",
      description: "We review your current operations, spot bottlenecks, and uncover automation opportunities."
    },
    {
      number: "02", 
      title: "Blueprint",
      description: "We design a tailored plan with clear steps, timelines, and ROI projections."
    },
    {
      number: "03",
      title: "Implementation", 
      description: "We build, test, and launch your automation integrating with your systems and training your team."
    }
  ];

  return (
    <Section
      eyebrow="Our Process"
      heading="A Proven 3‑Step Process That Delivers"
      description="We follow a systematic approach that ensures your automation project succeeds from start to finish."
      glow="subtle"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer(0.3)}
        className="relative"
      >
        {/* Connecting Line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent transform -translate-y-1/2 hidden md:block" />
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={scaleIn}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="relative group"
            >
              {/* Enhanced glow effect */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <motion.div
                variants={cardHover}
                className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center h-full"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-primary font-bold text-xl">{step.number}</span>
                </div>
                <h3 className="text-secondary font-bold text-xl mb-4">{step.title}</h3>
                <p className="text-primary/90 leading-relaxed">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-12"
      >
        <Link to="/contact" className="btn-primary">
          Ready to start your automation journey?
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </Section>
  );
};

// Testimonials with enhanced cards
const Testimonials = () => {
  const testimonials = [
    {
      quote: "Working with the team at Nocoded has been a game-changer for our operations. Their ability to understand our complex needs and translate them into streamlined, automated workflows has been nothing short of brilliant. We're now more efficient, scalable, and can focus on what truly matters - growing our business.",
      author: "Matt",
      company: "FutureFlow"
    },
    {
      quote: "5/5 Experience, couldn't have been happier!! For anyone looking to optimise their systems using automation, saving time and money - Nocoded is the place to go!",
      author: "Alex",
      company: "Arco"
    },
    {
      quote: "I genuinely don't know how I could've brought this idea to life without Charlie. He is one of those special people that pushes you forward. When it comes to understanding what's at the precipice of AI... Charlie & NoCoded Ltd. are your go to!",
      author: "Phil",
      company: "OSSAI Agency"
    },
    {
      quote: "Thank you Charlie for enabling us to grow our business systems and processes through your expertise and knowledge to make technology through AI, automations and workflows.",
      author: "Emily",
      company: "Bow Gifts"
    }
  ];

  return (
    <Section
      eyebrow="Client Success"
      heading="What Our Clients Say"
      description="Real results from UK businesses who've transformed their operations with NoCoded."
      glow="section"
      className="bg-gradient-to-b from-base to-base/95"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer(0.2)}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={scaleIn}
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="group relative"
          >
            {/* Enhanced glow effect */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <motion.div
              variants={cardHover}
              className="relative card-dark p-6 lg:p-8 h-full flex flex-col text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <div className="flex-1">
                <blockquote className="text-primary text-base lg:text-lg font-medium leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="mt-auto">
                  <div className="text-primary font-semibold text-lg">{testimonial.author}</div>
                  <div className="text-primary/70 text-sm">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-12"
      >
        <Link to="/contact" className="btn-secondary">
          Join the growing list of satisfied clients
          <ChevronRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </Section>
  );
};

// Final CTA with full-bleed gradient
const FinalCTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(249, 222, 201, 0.1) 0%, rgba(110, 116, 175, 0.1) 50%, rgba(76, 201, 240, 0.1) 100%)",
            "linear-gradient(135deg, rgba(110, 116, 175, 0.1) 0%, rgba(76, 201, 240, 0.1) 50%, rgba(160, 132, 232, 0.1) 100%)",
            "linear-gradient(135deg, rgba(76, 201, 240, 0.1) 0%, rgba(160, 132, 232, 0.1) 50%, rgba(249, 222, 201, 0.1) 100%)",
            "linear-gradient(135deg, rgba(249, 222, 201, 0.1) 0%, rgba(110, 116, 175, 0.1) 50%, rgba(76, 201, 240, 0.1) 100%)",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-5" />

      <div className="container-nc relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer()}
        >
          <motion.div variants={fadeUp}>
            <div className="eyebrow">Get Started Today</div>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-6">
            <h2 className="h2">Ready to See What's Possible?</h2>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-6">
            <p className="text-primary text-base md:text-lg leading-relaxed mx-auto max-w-2xl">
              Book your free 30‑minute audit. We'll show you exactly where automation can save you time, money, and headaches before you invest a penny.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-12">
            <Link to="/contact" className="btn-primary text-lg px-10 py-5">
              Book My Free Audit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-8 text-primary/80 text-sm">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              No commitment required
            </span>
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              30‑minute free consultation
            </span>
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              UK business specialists
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Component
const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent transform origin-left z-50"
        style={{ scaleX }}
      />
      
      <main className="overflow-hidden">
        <Hero />
        <ImpactCalculator />
        <PainPoints />
        <CoreServices />
        <TechStackSection />
        <Process />
        <Testimonials />
        <FinalCTA />
    </main>
    </>
  );
};

export default Index;