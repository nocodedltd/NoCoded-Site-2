import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileCheck, Server, UserCheck } from "lucide-react";

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "GDPR Compliant",
      description: "Full compliance with European data protection regulations",
      badge: "EU Certified"
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All data encrypted in transit and at rest",
      badge: "AES-256"
    },
    {
      icon: Eye,
      title: "Data Transparency",
      description: "Complete visibility into how your data is processed",
      badge: "Audit Ready"
    },
    {
      icon: FileCheck,
      title: "ISO 27001",
      description: "Enterprise-grade security management standards",
      badge: "Certified"
    },
    {
      icon: Server,
      title: "EU Data Centers",
      description: "Your data stays within European borders",
      badge: "EU Hosted"
    },
    {
      icon: UserCheck,
      title: "Access Controls",
      description: "Role-based permissions and multi-factor authentication",
      badge: "Enterprise"
    }
  ];

  const platforms = [
    { name: "n8n", logo: "https://avatars.githubusercontent.com/u/45487711?s=200&v=4" },
    { name: "Airtable", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Airtable_Logo.svg" },
    { name: "Zapier", logo: "https://cdn.worldvectorlogo.com/logos/zapier.svg" },
    { name: "Make", logo: "https://www.make.com/en/help/image/uuid-e8e7a825-1849-e5cd-7f0e-54c7b0cd4036.png" },
    { name: "Microsoft 365", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_365_%282022%29.svg" },
    { name: "Google Workspace", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Workspace_Logo.svg" },
    { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
    { name: "HubSpot", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" },
    { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
    { name: "Monday.com", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Monday.com_logo.svg" },
    { name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
    { name: "Asana", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Asana_logo.svg" },
    { name: "Trello", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Trello-logo-blue.svg" },
    { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
    { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
    { name: "Xero", logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Xero_software_logo.svg" },
    { name: "QuickBooks", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Intuit_QuickBooks_logo.svg" },
    { name: "Mailchimp", logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/Mailchimp_Logo.svg" }
  ];

  return (
    <section className="py-20 bg-base relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="container-nc">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">Enterprise Security</p>
          <h2 className="h2 mb-6 text-secondary">
            Your Data. Protected. Compliant.
          </h2>
          <p className="copy max-w-2xl mx-auto text-primary/90">
            We take security seriously. Every automation is built with enterprise-grade security, 
            GDPR compliance, and European data protection standards at its core.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-secondary/20 via-primary/10 to-secondary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-secondary/10 via-primary/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card Content */}
                <div className="relative bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-3xl p-6 text-center group-hover:border-secondary/50 transition-all duration-300">
                  {/* Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-xs font-medium mb-4">
                    {feature.badge}
                  </div>
                  
                  {/* Icon */}
                  <div className="mx-auto w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-secondary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-secondary mb-2">{feature.title}</h3>
                  <p className="text-primary/90 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Secure Platforms Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-xl font-bold text-secondary mb-3">Secure Integrations</h3>
          <p className="copy text-primary/80 mb-8">
            All platforms we integrate with meet the same high security standards
          </p>
          
          {/* Scrolling Platform Logos */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-x space-x-8">
              {[...platforms, ...platforms].map((platform, index) => (
                <div
                  key={`${platform.name}-${index}`}
                  className="flex-shrink-0 w-20 h-20 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center p-3 hover:border-secondary/50 transition-colors duration-300"
                >
                  <img
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    className="w-full h-full object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* GDPR Notice */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 p-4 bg-secondary/10 border border-secondary/20 rounded-2xl inline-block"
          >
            <p className="text-secondary text-sm font-medium">
              🇪🇺 GDPR Compliant • EU Data Centers • Right to be Forgotten
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecuritySection;
