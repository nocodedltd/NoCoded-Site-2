import { Search, FileText, Cog, ArrowRight, Zap, CheckCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <Search size={32} />,
      title: "Audit",
      description: "We start with a comprehensive audit to understand your unique challenges. This first step is free - book your Automation Opportunity Audit today."
    },
    {
      id: 2,
      icon: <FileText size={32} />,
      title: "Blueprint",
      description: "We design a bespoke solution, mapping out efficient workflows tailored to your business."
    },
    {
      id: 3,
      icon: <Cog size={32} />,
      title: "Implementation",
      description: "We implement automation and AI, supporting your team for lasting results."
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-background overflow-hidden">
        <div className="container relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our 3-Step Path to <span className="text-primary">Efficiency</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See how we transform your business from manual chaos to streamlined automation - fast, simple, and proven.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            
            {/* Desktop Horizontal Stepper */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Progress Line */}
                <div className="absolute top-8 left-0 right-0 h-0.5 bg-border">
                  <div className="h-full w-2/3 bg-primary transition-all duration-1000"></div>
                </div>
                
                <div className="grid grid-cols-3 gap-8">
                  {steps.map((step, index) => (
                    <motion.div
                      key={step.id}
                      className="group relative"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {/* Step Number Circle */}
                      <div className="relative z-10 w-16 h-16 mx-auto mb-8 rounded-full border-4 flex items-center justify-center font-bold text-xl transition-all duration-300 bg-background border-primary/30 text-primary group-hover:bg-primary group-hover:border-primary group-hover:text-white group-hover:shadow-lg group-hover:scale-110">
                        {step.id}
                      </div>
                      
                      {/* Content Card */}
                      <div className="bg-card rounded-xl p-6 shadow-sm border border-border transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:bg-primary/5">
                        <div className="text-center">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-4 bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                            {step.icon}
                            <span>{step.title}</span>
                          </div>
                          
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {step.description}
                          </p>
                          
                          {step.id === 1 && (
                            <div className="mt-4 inline-flex items-center gap-1 text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
                              <Zap size={12} />
                              <span>FREE</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Vertical Stepper */}
            <div className="lg:hidden">
              <div className="max-w-2xl mx-auto">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className="group relative flex gap-6 pb-12 last:pb-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full border-3 flex items-center justify-center font-bold bg-background border-primary/40 text-primary group-hover:bg-primary group-hover:border-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                        {step.id}
                      </div>
                      {index < steps.length - 1 && (
                        <div className="w-0.5 h-20 bg-border mt-4"></div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/20 hover:bg-primary/5 transition-all duration-300">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-3 bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                          {step.icon}
                          <span>{step.title}</span>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                          {step.description}
                        </p>
                        
                        {step.id === 1 && (
                          <div className="inline-flex items-center gap-1 text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
                            <Zap size={12} />
                            <span>Available for FREE</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">From Chaos to Efficiency</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our process takes you from overwhelmed and manual to streamlined and automated. Experience the difference in just three steps.
              </p>
            </div>
            
            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-5 gap-8 items-center">
              {/* Before State */}
              <div className="col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-card rounded-xl p-8 border border-destructive/20 h-80 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-destructive">Before</h3>
                      <div className="grid grid-cols-3 gap-3 mb-6">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="h-6 bg-destructive/20 rounded animate-pulse"></div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-destructive font-medium text-sm mb-4">Manual, Chaotic, Overwhelming</p>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <Clock size={16} className="text-destructive flex-shrink-0 mt-0.5" />
                          <span>Hours spent on repetitive tasks</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock size={16} className="text-destructive flex-shrink-0 mt-0.5" />
                          <span>Error-prone manual processes</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock size={16} className="text-destructive flex-shrink-0 mt-0.5" />
                          <span>Overwhelmed team members</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Arrow */}
              <div className="col-span-1 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <ArrowRight size={32} className="text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Zap size={12} className="text-primary-foreground" />
                  </div>
                </motion.div>
              </div>

              {/* After State */}
              <div className="col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-card rounded-xl p-8 border border-primary/20 h-80 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-primary">After</h3>
                      <div className="flex justify-center items-center gap-2 mb-6">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="flex items-center">
                            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                              <CheckCircle size={16} className="text-primary" />
                            </div>
                            {i < 2 && <div className="w-6 h-0.5 bg-primary/30 mx-1"></div>}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-primary font-medium text-sm mb-4">Automated, Streamlined, Efficient</p>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>Automated workflows save hours daily</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>Error-free, consistent processes</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>Team focused on high-value work</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden space-y-8">
              {/* Before State */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-card rounded-xl p-6 border border-destructive/20">
                  <h3 className="text-xl font-bold mb-4 text-destructive text-center">Before</h3>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="h-4 bg-destructive/20 rounded animate-pulse"></div>
                    ))}
                  </div>
                  <p className="text-destructive font-medium text-sm text-center mb-4">Manual, Chaotic, Overwhelming</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-destructive flex-shrink-0" />
                      <span>Hours spent on repetitive tasks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-destructive flex-shrink-0" />
                      <span>Error-prone manual processes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-destructive flex-shrink-0" />
                      <span>Overwhelmed team members</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Down Arrow */}
              <div className="flex justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <ArrowRight size={20} className="text-primary rotate-90" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                    <Zap size={8} className="text-primary-foreground" />
                  </div>
                </motion.div>
              </div>

              {/* After State */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-card rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-4 text-primary text-center">After</h3>
                  <div className="flex justify-center items-center gap-1 mb-4">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                          <CheckCircle size={12} className="text-primary" />
                        </div>
                        {i < 2 && <div className="w-4 h-0.5 bg-primary/30 mx-1"></div>}
                      </div>
                    ))}
                  </div>
                  <p className="text-primary font-medium text-sm text-center mb-4">Automated, Streamlined, Efficient</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-primary flex-shrink-0" />
                      <span>Automated workflows save hours daily</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-primary flex-shrink-0" />
                      <span>Error-free, consistent processes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-primary flex-shrink-0" />
                      <span>Team focused on high-value work</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book your free Automation Opportunity Audit and discover how we can streamline your operations.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                to="/contact#top" 
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-200 inline-flex items-center gap-3 shadow-sm hover:shadow-md"
              >
                Book My Free Audit
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default HowItWorks;