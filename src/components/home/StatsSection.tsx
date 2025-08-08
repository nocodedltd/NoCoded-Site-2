import { motion } from "framer-motion";
export default function StatsSection() {
  const fadeVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 60
      }
    }
  };
  const problemPoints = [{
    title: "Drowning in Manual Work",
    description: "Your team spends hours on repetitive tasks that could be automated, leaving little time for strategic growth."
  }, {
    title: "Bottlenecks Everywhere",
    description: "Critical processes depend on key individuals, creating delays and preventing your business from scaling."
  }, {
    title: "Lost Opportunities",
    description: "While you're stuck managing operations, competitors are gaining ground with more efficient systems."
  }];
  return <section id="problem-section" className="relative py-20 overflow-hidden">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={fadeVariants} className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="mb-6 text-primary text-3xl md:text-4xl font-bold">
            Are Manual Processes Holding Your Business Hostage?
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">Every day you delay automation is another day your competitors get ahead. Manual processes aren't just inefficient, they're actively limiting your growth potential.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problemPoints.map((problem, index) => <motion.div key={index} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-50px"
        }} variants={{
          hidden: {
            opacity: 0,
            y: 20
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delay: index * 0.2,
              duration: 0.6
            }
          }
        }} className="bg-card p-6 rounded-xl border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <h3 className="text-xl font-semibold mb-3 text-primary">{problem.title}</h3>
              <p className="text-secondary">{problem.description}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}