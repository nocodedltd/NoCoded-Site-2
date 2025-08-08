
import ContactForm from "@/components/ContactForm";
import CalendarEmbed from "@/components/CalendarEmbed";
import { motion } from "framer-motion";

const Contact = () => {

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary/5 py-16 lg:py-20">
        <div className="container px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
              Book Your Free <span className="text-primary">Automation Opportunity Audit</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground">
              Discover how automation can transform your business operations and unlock growth potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Value Reinforcement Section */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container px-4">
          <motion.div 
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-semibold mb-8 lg:mb-12">
              Your First Step Towards a <span className="text-primary">More Efficient Business</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  ),
                  title: "Discuss",
                  description: "your biggest operational bottleneck"
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  title: "Identify",
                  description: "at least one key process ripe for automation"
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  ),
                  title: "Provide",
                  description: "a high-level estimate of time/cost savings"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-card rounded-lg border border-border p-6 shadow-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <p className="text-sm lg:text-base text-muted-foreground">
                    <strong className="text-foreground">{item.title}</strong> {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Primary Calendar Booking & Secondary Contact Form */}
      <section className="py-12 lg:py-20">
        <div className="container px-4">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Primary: Cal.com Embed - Takes 2/3 of space */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-center">
                Book Your <span className="text-primary">Free Audit</span>
              </h2>
              <div className="h-[600px] lg:h-[700px] w-full border border-border rounded-lg bg-card shadow-lg overflow-hidden">
                <CalendarEmbed className="h-full" />
              </div>
            </div>
            
            {/* Secondary: Contact Form - Takes 1/3 of space */}
            <div className="lg:col-span-1">
              <h3 className="text-xl lg:text-2xl font-semibold mb-6">Quick Contact</h3>
              <div className="border border-border rounded-lg bg-card shadow-sm">
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 lg:py-20 bg-muted/30">
        <div className="container px-4">
          <motion.h2 
            className="text-2xl lg:text-3xl font-semibold text-center mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Your Free Audit
          </motion.h2>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                question: "What happens during the audit?",
                answer: "We'll discuss your current processes, identify bottlenecks, and pinpoint automation opportunities. You'll receive actionable insights and a high-level roadmap for improvement."
              },
              {
                question: "How long does the audit take?",
                answer: "The initial audit call lasts 30 minutes. We focus on understanding your biggest pain points and providing immediate value through expert recommendations."
              },
              {
                question: "Is there any obligation after the audit?",
                answer: "Absolutely not. The audit is completely free with no strings attached. Our goal is to provide genuine value and help you understand your automation potential."
              },
              {
                question: "What should I prepare for the call?",
                answer: "Just come with an open mind about your current challenges. Having specific processes in mind that frustrate your team will help us provide more targeted recommendations."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-card rounded-lg border border-border p-6 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-medium mb-3">{faq.question}</h3>
                <p className="text-sm lg:text-base text-muted-foreground">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
