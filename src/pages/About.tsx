import { motion } from "framer-motion";

const About = () => {
  const team = [{
    name: "Charlie Lefever",
    role: "Founder & Managing Director",
    bio: "Charlie blends technical expertise with creative vision to design workflows that are both powerful and intuitive. He's dedicated to crafting custom solutions that fit each client's unique needs, ensuring operations run smoothly and teams can focus on growth.",
    image: "/lovable-uploads/286a7435-f45b-451e-82c2-d3b3ced30e39.png"
  }, {
    name: "Joe Brady",
    role: "Founder & Head of Sales",
    bio: "Joe brings entrepreneurial energy and a sharp eye for business development. With over five years' experience, he excels at understanding client challenges and building strong relationships, driving NoCoded's growth through tailored, high-impact solutions.",
    image: "/lovable-uploads/e94e1670-410b-4f13-9e09-89f236705d8a.png"
  }, {
    name: "Arsalan Afgan Khan",
    role: "Head of AI Implementation",
    bio: "Arsalan leads the charge in integrating AI into business systems. His technical acumen and practical approach make complex data models accessible, empowering clients to make smarter, data-driven decisions every day.",
    image: "/lovable-uploads/df43a3d0-1d4c-4fa0-88a4-9d3636101713.png"
  }, {
    name: "Dominic Tuck",
    role: "Automation Architect",
    bio: "Dom's background in data analysis and process management ensures every project is built on a foundation of precision and efficiency. He's passionate about streamlining workflows and delivering measurable improvements for our clients.",
    image: "/lovable-uploads/46b02e5c-b352-445d-be33-c475706a2533.png"
  }];
  const values = [{
    title: "Tailored Solutions",
    description: "Every business is unique. We design custom automation solutions that fit your specific needs, never forcing you into a pre-built system."
  }, {
    title: "Efficiency First",
    description: "We believe in making operations as smooth and streamlined as possible so your team can focus on what truly matters."
  }, {
    title: "Collaborative Approach",
    description: "We work closely with you at every stage, ensuring thoughtful execution and results that last."
  }, {
    title: "Practical Innovation",
    description: "We combine cutting-edge AI with practical, scalable solutions that deliver real, measurable improvements."
  }];
  return <main>
      {/* Hero Section */}
      <section className="bg-primary/5 py-20">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-balance font-bold mb-6">
              About <span className="text-primary">NoCoded</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From a simple fix to a new beginning - discover the story behind NoCoded's automation expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Story: From a Simple Fix to a New Beginning</h2>
            <p className="text-xl text-muted-foreground">
              How a nagging everyday problem led us to discover the transformative power of automation
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {/* The Problem - 2020 */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="lg:col-span-1">
                <div className="bg-primary/10 rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">2020</h3>
                  <p className="text-sm font-medium text-muted-foreground">The Problem</p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <h4 className="text-xl font-semibold mb-4">Where It All Started</h4>
                <p className="text-muted-foreground leading-relaxed">As founders of an advertising agency in the UK, Who Media, we were spending countless hours manually transferring leads into CRM systems. This bottleneck wasn't just a nuisance; it was holding our business back, draining time, and stifling growth. We knew there had to be a better way.</p>
              </div>
            </motion.div>

            {/* The Discovery */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="lg:col-span-1 order-2 lg:order-1">
                <div className="bg-primary/10 rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">2021</h3>
                  <p className="text-sm font-medium text-muted-foreground">The Discovery</p>
                </div>
              </div>
              <div className="lg:col-span-2 order-1 lg:order-2">
                <h4 className="text-xl font-semibold mb-4">Tasting the Power</h4>
                <p className="text-muted-foreground leading-relaxed">In 2021, we set out to solve this problem for ourselves. What started as a quick fix soon revealed something bigger: automation wasn't just about saving time, it was about unlocking potential. By late 2021, our internal solution had transformed our operations, freeing our team to focus on what mattered most and proving the immense value of streamlined, automated workflows.</p>
              </div>
            </motion.div>

            {/* The Revolution */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="lg:col-span-1">
                <div className="bg-primary/10 rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">2023</h3>
                  <p className="text-sm font-medium text-muted-foreground">The Revolution</p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <h4 className="text-xl font-semibold mb-4">ChatGPT Changes Everything</h4>
                <p className="text-muted-foreground leading-relaxed">
                  The integration of ChatGPT wasn't just an upgrade - it was a revolution. We could now infuse automations with intelligent language processing, developing sophisticated solutions like complex case valuators for law firms.
                </p>
              </div>
            </motion.div>

            {/* The Realization */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="lg:col-span-1 order-2 lg:order-1">
                <div className="bg-primary/10 rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">2024</h3>
                  <p className="text-sm font-medium text-muted-foreground">The Birth</p>
                </div>
              </div>
              <div className="lg:col-span-2 order-1 lg:order-2">
                <h4 className="text-xl font-semibold mb-4">NoCoded Is Born</h4>
                <p className="text-muted-foreground leading-relaxed">
                  By 2024, it was undeniable: our automation expertise had become an invaluable service. <strong>NoCoded was born</strong> - the culmination of our experience, passion for problem-solving, and unwavering belief in automation's power to transform businesses.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <motion.h2 
            className="text-3xl font-semibold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Leadership Team
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={index} 
                className="bg-card rounded-lg overflow-hidden border border-border transform hover:-translate-y-1 transition-transform"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-square bg-muted/50 relative overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <motion.h2 
            className="text-3xl font-semibold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="bg-card rounded-lg border border-border p-6 text-center hover:border-primary transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              At NoCoded, we're more than just automation experts. We're your partners in building a smarter, more resilient business. Our journey from a single bottleneck to a company dedicated to transformation is proof that with the right tools and mindset, any business can unlock its full potential.
            </p>
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
            <h2 className="mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Partner with NoCoded to streamline your operations through intelligent automation and AI solutions.
            </p>
            <a href="/contact" className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </main>;
};
export default About;