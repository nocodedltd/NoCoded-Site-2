import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motionVariants";

// Tech stack data - you can expand this list
const techStacks = [
  // Top row - popular business apps
  { name: "HubSpot", logo: "https://cdn.worldvectorlogo.com/logos/hubspot-1.svg", category: "CRM" },
  { name: "Salesforce", logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg", category: "CRM" },
  { name: "PipeDrive", logo: "https://cdn.worldvectorlogo.com/logos/pipedrive.svg", category: "CRM" },
  { name: "PowerShell", logo: "https://cdn.worldvectorlogo.com/logos/powershell.svg", category: "Development" },
  { name: "WordPress", logo: "https://cdn.worldvectorlogo.com/logos/wordpress-blue.svg", category: "CMS" },
  { name: "Webflow", logo: "https://cdn.worldvectorlogo.com/logos/webflow.svg", category: "Website" },
  { name: "Google Drive", logo: "https://cdn.worldvectorlogo.com/logos/google-drive-2020.svg", category: "Storage" },
  { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg", category: "E-commerce" },
  { name: "Gmail", logo: "https://cdn.worldvectorlogo.com/logos/gmail-icon.svg", category: "Email" },
  { name: "Stripe", logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg", category: "Payments" },
  
  // Second row - development and automation tools
  { name: "Google Ads", logo: "https://cdn.worldvectorlogo.com/logos/google-ads-1.svg", category: "Marketing" },
  { name: "Facebook", logo: "https://cdn.worldvectorlogo.com/logos/facebook-3.svg", category: "Social" },
  { name: "LinkedIn", logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg", category: "Social" },
  { name: "Excel", logo: "https://cdn.worldvectorlogo.com/logos/excel-4.svg", category: "Spreadsheet" },
  { name: "Excel", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-excel-2013.svg", category: "Spreadsheet" },
  { name: "Outlook", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-outlook-2019.svg", category: "Email" },
  { name: "Asana", logo: "https://cdn.worldvectorlogo.com/logos/asana-logo.svg", category: "Project Management" },
  { name: "MailChimp", logo: "https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon.svg", category: "Email Marketing" },
  { name: "Zendesk", logo: "https://cdn.worldvectorlogo.com/logos/zendesk.svg", category: "Support" },
  { name: "TextCortex", logo: "https://cdn.worldvectorlogo.com/logos/textcortex.svg", category: "AI" },

  // Third row - automation and AI tools
  { name: "Zapier", logo: "https://cdn.worldvectorlogo.com/logos/zapier.svg", category: "Automation" },
  { name: "OpenAI", logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg", category: "AI" },
  { name: "Make", logo: "https://cdn.worldvectorlogo.com/logos/make.svg", category: "Automation" },
  { name: "ChatGPT", logo: "https://cdn.worldvectorlogo.com/logos/chatgpt-4.svg", category: "AI" },
  { name: "Looker", logo: "https://cdn.worldvectorlogo.com/logos/looker.svg", category: "Analytics" },
  { name: "Notion", logo: "https://cdn.worldvectorlogo.com/logos/notion-logo-no-background.svg", category: "Productivity" },
  { name: "Airtable", logo: "https://cdn.worldvectorlogo.com/logos/airtable.svg", category: "Database" },
  { name: "Slack", logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg", category: "Communication" },
  { name: "Discord", logo: "https://cdn.worldvectorlogo.com/logos/discord-6.svg", category: "Communication" },
  { name: "Twilio", logo: "https://cdn.worldvectorlogo.com/logos/twilio.svg", category: "Communications" },

  // Additional popular platforms
  { name: "Monday", logo: "https://cdn.worldvectorlogo.com/logos/monday-1.svg", category: "Project Management" },
  { name: "Trello", logo: "https://cdn.worldvectorlogo.com/logos/trello.svg", category: "Project Management" },
  { name: "ClickUp", logo: "https://cdn.worldvectorlogo.com/logos/clickup.svg", category: "Project Management" },
  { name: "Calendly", logo: "https://cdn.worldvectorlogo.com/logos/calendly-1.svg", category: "Scheduling" },
  { name: "Typeform", logo: "https://cdn.worldvectorlogo.com/logos/typeform-1.svg", category: "Forms" },
  { name: "Mailgun", logo: "https://cdn.worldvectorlogo.com/logos/mailgun.svg", category: "Email" },
  { name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg", category: "Cloud" },
  { name: "Google Cloud", logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg", category: "Cloud" },
  { name: "Microsoft Azure", logo: "https://cdn.worldvectorlogo.com/logos/azure-1.svg", category: "Cloud" },
  { name: "GitHub", logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg", category: "Development" },
];

export default function TechStackSection() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container-nc">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer()}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <div className="eyebrow">Tech Stack</div>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-6">
            <h2 className="h2">Platforms We Integrate With</h2>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-6">
            <p className="text-primary text-base md:text-lg leading-relaxed mx-auto max-w-3xl">
              We connect and automate across 100+ popular business platforms. From CRMs to marketing tools, 
              if you use it, we can probably automate it.
            </p>
          </motion.div>
        </motion.div>

        {/* Scrolling logo carousel */}
        <div className="relative">
          {/* Gradient masks for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-base to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-base to-transparent z-10 pointer-events-none" />
          
          {/* First row - scrolling left to right */}
          <div className="flex space-x-8 animate-scroll-x mb-8">
            {[...techStacks.slice(0, 15), ...techStacks.slice(0, 15)].map((tech, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
                title={tech.name}
              >
                <img 
                  src={tech.logo} 
                  alt={tech.name}
                  className="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    // Fallback to text if logo fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.innerHTML = `<span class="text-primary text-xs font-medium">${tech.name.slice(0, 3)}</span>`;
                  }}
                />
              </div>
            ))}
          </div>

          {/* Second row - scrolling right to left */}
          <div className="flex space-x-8 animate-scroll-x-reverse">
            {[...techStacks.slice(15, 30), ...techStacks.slice(15, 30)].map((tech, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
                title={tech.name}
              >
                <img 
                  src={tech.logo} 
                  alt={tech.name}
                  className="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    // Fallback to text if logo fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.innerHTML = `<span class="text-primary text-xs font-medium">${tech.name.slice(0, 3)}</span>`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-primary/80 text-sm mb-4">
            Don't see your platform? We work with 100+ tools and can build custom integrations.
          </p>
          <a href="/contact" className="btn-secondary">
            Ask About Your Platform
          </a>
        </motion.div>
      </div>
    </section>
  );
}
