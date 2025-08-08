
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring, animate } from "framer-motion";
import { ChevronRight, ArrowRight, Star, Zap, Target, Users, Clock, TrendingUp, CheckCircle, Play, Calendar } from "lucide-react";

// Motion presets
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = (st = 0.1) => ({
  hidden: {},
  visible: { transition: { staggerChildren: st } }
});

const float = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

// UI Components
const Container = ({ children, className = "" }) => (
  <div className={`mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const Eyebrow = ({ children }) => (
  <motion.div 
    className="inline-flex items-center gap-2 text-secondary text-sm uppercase tracking-[0.2em] font-medium"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

const H1 = ({ children, className = "" }) => (
  <h1 className={`font-display text-primary font-extrabold tracking-[0.5px] leading-[1.05] text-5xl sm:text-6xl md:text-7xl ${className}`}>
    {children}
  </h1>
);

const H2 = ({ children, className = "" }) => (
  <h2 className={`font-display text-primary font-extrabold tracking-[0.5px] leading-tight text-3xl sm:text-4xl md:text-5xl ${className}`}>
    {children}
  </h2>
);

const Copy = ({ children, className = "" }) => (
  <p className={`text-secondary/90 text-base md:text-lg leading-[1.6] max-w-[70ch] ${className}`}>
    {children}
  </p>
);

const ButtonPrimary = ({ children, className = "", ...props }) => (
  <motion.button
    className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-ink bg-[#6e74af] shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    whileHover={{ 
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(110, 116, 175, 0.3)"
    }}
    whileTap={{ scale: 0.98 }}
    {...props}
  >
    {children}
    <ArrowRight className="w-4 h-4" />
  </motion.button>
);

const ButtonSecondary = ({ children, className = "", ...props }) => (
  <motion.button
    className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-primary border-2 border-primary/40 hover:border-primary/80 bg-transparent hover:bg-primary/5 transition-all duration-300 ${className}`}
    whileHover={{ 
      scale: 1.02,
      boxShadow: "0 0 0 1px rgba(249, 222, 201, 0.2)"
    }}
    whileTap={{ scale: 0.98 }}
    {...props}
  >
    {children}
  </motion.button>
);

// Hero Section
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Particle Network */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{ 
                duration: 3 + Math.random() * 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
        
        {/* Flowing Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
          <motion.path
            d="M 0 50 Q 25 25 50 50 T 100 50"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            animate={{
              d: [
                "M 0 50 Q 25 25 50 50 T 100 50",
                "M 0 50 Q 25 75 50 50 T 100 50",
                "M 0 50 Q 25 25 50 50 T 100 50",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6e74af" />
              <stop offset="100%" stopColor="#6e74af" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Container className="relative z-10 text-center -translate-y-6 md:-translate-y-10 lg:-translate-y-16 xl:-translate-y-20">
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
          <Eyebrow>Welcome to the Future</Eyebrow>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6"
        >
          <H1>
            Automate.{" "}
            <span className="relative">
              Accelerate.
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-[#6e74af]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </span>{" "}
            <span className="text-[#6e74af]">Grow.</span>
          </H1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8"
        >
          <Copy className="mx-auto max-w-3xl">
            We help UK businesses cut out repetitive work, boost productivity, and create seamless customer experiences so you can focus on growth, not admin.
          </Copy>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <ButtonPrimary>Book Your Free Automation Audit</ButtonPrimary>
          <ButtonSecondary>See How It Works</ButtonSecondary>
        </motion.div>
      </Container>
    </section>
  );
};

// Impact Calculator
const ImpactCalculator = () => {
  const [calculationType, setCalculationType] = useState('time'); // 'time' or 'cost'
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
    <section className="py-24 bg-gradient-to-b from-base to-base/95">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger()}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>Impact Calculator</Eyebrow>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-6">
            <H2>Your Time & Money, Reclaimed</H2>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-6">
            <Copy className="mx-auto max-w-3xl">
              Discover how much time and cost you could save by automating the boring stuff. In just seconds, see your potential gains then let's make them happen.
            </Copy>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger(0.2)}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Input Panel */}
          <motion.div variants={float} className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h3 className="text-primary font-bold text-xl mb-6">Calculate Your Savings</h3>
              
              {/* Calculation Type Toggle */}
              <div className="mb-6">
                <label className="block text-secondary text-sm font-medium mb-3">What would you like to calculate?</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCalculationType('time')}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                      calculationType === 'time'
                        ? 'bg-[#6e74af] text-white'
                        : 'bg-white/10 text-secondary hover:bg-white/20'
                    }`}
                  >
                    Time Savings
                  </button>
                  <button
                    onClick={() => setCalculationType('cost')}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                      calculationType === 'cost'
                        ? 'bg-[#6e74af] text-white'
                        : 'bg-white/10 text-secondary hover:bg-white/20'
                    }`}
                  >
                    Cost Savings
                  </button>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-secondary text-sm font-medium mb-2">Team Size</label>
                  <input
                    type="number"
                    min="1"
                    value={teamSize}
                    onChange={(e) => setTeamSize(parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-primary focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-secondary text-sm font-medium mb-2">
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
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-primary focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                  />
                </div>
                
                {calculationType === 'time' && (
                  <div>
                    <label className="block text-secondary text-sm font-medium mb-2">
                      Automation Percentage: {automationPercent}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={automationPercent}
                      onChange={(e) => setAutomationPercent(parseInt(e.target.value))}
                      className="w-full accent-primary"
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Results Panel */}
          <motion.div variants={float} className="space-y-6">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 text-center">
              <h3 className="text-primary font-bold text-xl mb-6">Your Results</h3>
              
              <div className="space-y-6">
                <div className="bg-black/30 rounded-2xl p-6">
                  <div className="text-secondary text-sm mb-2">
                    {calculationType === 'time' ? 'Hours Saved Annually' : 'Cost Saved Annually'}
                  </div>
                  <div className="text-primary text-5xl font-extrabold">
                    {calculationType === 'time' ? `${displayValue} weeks` : `£${displayValue.toLocaleString()}`}
                  </div>
                  <div className="text-secondary text-sm mt-2">
                    {calculationType === 'time' 
                      ? `That's ${savedDays} working days per year`
                      : `That's £${(savedCost / 12).toLocaleString()} per month`
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
                
                <ButtonPrimary className="w-full">Book Free Automation Audit</ButtonPrimary>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

// Pain Points Section
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
    <section className="py-24">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger()}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>Challenges</Eyebrow>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-6">
            <H2>Still running on manual processes?</H2>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-6">
            <Copy className="mx-auto max-w-3xl">
              Every day without automation is another day your competitors pull ahead. Manual systems slow you down, cost you money, and make scaling harder than it needs to be.
            </Copy>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger(0.2)}
          className="grid md:grid-cols-3 gap-8"
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              variants={float}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px rgba(249, 222, 201, 0.15)"
              }}
              className="bg-gradient-to-br from-base/80 to-base/60 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <point.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-primary font-bold text-xl mb-4 text-center">{point.title}</h3>
              <p className="text-secondary/80 text-center leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

// Core Services Section
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
      description: "From sales follow-ups to HR admin, our AI-powered assistants connect with your existing tools and handle repetitive work for you — without dropping the ball."
    },
    {
      icon: Target,
      title: "Voice & Text Agents",
      description: "Replace outdated call centres with AI-driven voice and chat systems. Never miss a lead, respond instantly, and support customers 24/7."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-base/95 to-base">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger()}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>Our Core Services</Eyebrow>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-6">
            <H2>Four Ways We Supercharge Your Business</H2>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-6">
            <Copy className="mx-auto max-w-3xl">
              We transform your business through four core pillars of modern efficiency, from our flagship 90-day transformation to custom solutions.
            </Copy>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger(0.2)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={float}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px rgba(249, 222, 201, 0.2)"
              }}
              className={`bg-primary text-ink rounded-3xl p-6 lg:p-8 border border-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 ${
                service.flagship ? 'ring-2 ring-[#6e74af]/50' : ''
              }`}
            >
              {service.flagship && (
                <div className="mb-4">
                  <span className="inline-block bg-[#6e74af] text-white text-xs font-bold px-3 py-1 rounded-full">
                    FLAGSHIP
                  </span>
                </div>
              )}
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-ink/10 rounded-full flex items-center justify-center mb-4 lg:mb-6">
                <service.icon className="w-6 h-6 lg:w-8 lg:h-8 text-ink" />
              </div>
              <h3 className="text-ink font-bold text-lg lg:text-xl mb-3 lg:mb-4">{service.title}</h3>
              <p className="text-ink/80 leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">{service.description}</p>
              <ButtonSecondary className="border-ink/20 text-ink hover:bg-ink/5 text-sm">
                Learn More
              </ButtonSecondary>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

// Process Section
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
    <section className="py-24">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger()}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>Our Process</Eyebrow>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-6">
            <H2>A Proven 3‑Step Process That Delivers</H2>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-6">
            <Copy className="mx-auto max-w-3xl">
              We follow a systematic approach that ensures your automation project succeeds from start to finish.
            </Copy>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger(0.3)}
          className="relative"
        >
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent transform -translate-y-1/2 hidden md:block" />
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={float}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(249, 222, 201, 0.2)"
                }}
                className="bg-primary text-ink rounded-3xl p-8 border border-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-ink/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-ink font-bold text-xl">{step.number}</span>
                </div>
                <h3 className="text-ink font-bold text-xl mb-4">{step.title}</h3>
                <p className="text-ink/80 leading-relaxed">{step.description}</p>
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
          <ButtonPrimary>Ready to start your automation journey?</ButtonPrimary>
        </motion.div>
      </Container>
    </section>
  );
};

// Testimonials Section
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
    <section className="py-24 bg-gradient-to-b from-base to-base/95">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger()}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>Client Success</Eyebrow>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-6">
            <H2>What Our Clients Say</H2>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-6">
            <Copy className="mx-auto max-w-2xl">
              Real results from UK businesses who've transformed their operations with NoCoded.
            </Copy>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger(0.2)}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={float}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
              }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 lg:p-8 hover:border-primary/30 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <blockquote className="text-primary text-base lg:text-lg font-medium leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="mt-auto">
                  <div className="text-secondary font-semibold text-lg">{testimonial.author}</div>
                  <div className="text-secondary/60 text-sm">{testimonial.company}</div>
                </div>
              </div>
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
          <ButtonSecondary>Join the growing list of satisfied clients</ButtonSecondary>
        </motion.div>
      </Container>
    </section>
  );
};

// Final CTA Section
const FinalCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(249, 222, 201, 0.1) 0%, rgba(110, 116, 175, 0.1) 100%)",
            "linear-gradient(45deg, rgba(110, 116, 175, 0.1) 0%, rgba(249, 222, 201, 0.1) 100%)",
            "linear-gradient(45deg, rgba(249, 222, 201, 0.1) 0%, rgba(110, 116, 175, 0.1) 100%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger()}
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>Get Started Today</Eyebrow>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-6">
            <H2>Ready to See What's Possible?</H2>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-6">
                      <Copy className="mx-auto max-w-2xl">
            Book your free 30‑minute audit. We'll show you exactly where automation can save you time, money, and headaches before you invest a penny.
          </Copy>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-12">
            <ButtonPrimary className="text-lg px-10 py-5">
              Book My Free Audit
            </ButtonPrimary>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-8 text-secondary/60 text-sm">
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
      </Container>
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
        className="fixed top-0 left-0 right-0 h-1 bg-[#6e74af] transform origin-left z-50"
        style={{ scaleX }}
      />
      
      <main className="overflow-hidden">
        <Hero />
        <ImpactCalculator />
        <PainPoints />
        <CoreServices />
        <Process />
        <Testimonials />
        <FinalCTA />
      </main>
    </>
  );
};

export default Index;
