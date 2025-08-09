import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motionVariants";

// Curated tech stack with verified working logos
const techStacks = [
  // Row 1 - Core Business Platforms (20 items)
  { name: "HubSpot", logo: "https://logos-world.net/wp-content/uploads/2021/03/HubSpot-Symbol.png", category: "CRM" },
  { name: "Salesforce", logo: "https://logos-world.net/wp-content/uploads/2020/08/Salesforce-Logo.png", category: "CRM" },
  { name: "Shopify", logo: "https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png", category: "E-commerce" },
  { name: "Stripe", logo: "https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png", category: "Payments" },
  { name: "PayPal", logo: "https://logos-world.net/wp-content/uploads/2020/07/PayPal-Logo.png", category: "Payments" },
  { name: "WordPress", logo: "https://logos-world.net/wp-content/uploads/2020/08/WordPress-Logo.png", category: "CMS" },
  { name: "Webflow", logo: "https://logos-world.net/wp-content/uploads/2021/03/Webflow-Logo.png", category: "Website" },
  { name: "Gmail", logo: "https://logos-world.net/wp-content/uploads/2020/09/Gmail-Logo.png", category: "Email" },
  { name: "Outlook", logo: "https://logos-world.net/wp-content/uploads/2020/08/Microsoft-Outlook-Logo.png", category: "Email" },
  { name: "MailChimp", logo: "https://logos-world.net/wp-content/uploads/2021/03/Mailchimp-Logo.png", category: "Email Marketing" },
  { name: "Zapier", logo: "https://logos-world.net/wp-content/uploads/2021/02/Zapier-Logo.png", category: "Automation" },
  { name: "Slack", logo: "https://logos-world.net/wp-content/uploads/2020/10/Slack-Logo.png", category: "Communication" },
  { name: "Zoom", logo: "https://logos-world.net/wp-content/uploads/2020/09/Zoom-Logo.png", category: "Video" },
  { name: "Google Drive", logo: "https://logos-world.net/wp-content/uploads/2020/09/Google-Drive-Logo.png", category: "Storage" },
  { name: "Dropbox", logo: "https://logos-world.net/wp-content/uploads/2020/08/Dropbox-Logo.png", category: "Storage" },
  { name: "Notion", logo: "https://logos-world.net/wp-content/uploads/2021/03/Notion-Logo.png", category: "Productivity" },
  { name: "Airtable", logo: "https://logos-world.net/wp-content/uploads/2021/03/Airtable-Logo.png", category: "Database" },
  { name: "Asana", logo: "https://logos-world.net/wp-content/uploads/2021/03/Asana-Logo.png", category: "Project Management" },
  { name: "Trello", logo: "https://logos-world.net/wp-content/uploads/2020/09/Trello-Logo.png", category: "Project Management" },
  { name: "Monday", logo: "https://logos-world.net/wp-content/uploads/2021/03/Monday-Logo.png", category: "Project Management" },

  // Row 2 - Social & Marketing (20 items)
  { name: "Facebook", logo: "https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png", category: "Social" },
  { name: "Instagram", logo: "https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png", category: "Social" },
  { name: "LinkedIn", logo: "https://logos-world.net/wp-content/uploads/2020/07/LinkedIn-Logo.png", category: "Social" },
  { name: "Twitter", logo: "https://logos-world.net/wp-content/uploads/2020/06/Twitter-Logo.png", category: "Social" },
  { name: "YouTube", logo: "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png", category: "Video" },
  { name: "Google Ads", logo: "https://logos-world.net/wp-content/uploads/2020/09/Google-Ads-Logo.png", category: "Marketing" },
  { name: "Canva", logo: "https://logos-world.net/wp-content/uploads/2021/02/Canva-Logo.png", category: "Design" },
  { name: "Adobe", logo: "https://logos-world.net/wp-content/uploads/2020/11/Adobe-Logo.png", category: "Design" },
  { name: "Figma", logo: "https://logos-world.net/wp-content/uploads/2021/03/Figma-Logo.png", category: "Design" },
  { name: "Buffer", logo: "https://logos-world.net/wp-content/uploads/2021/03/Buffer-Logo.png", category: "Social" },
  { name: "Hootsuite", logo: "https://logos-world.net/wp-content/uploads/2021/03/Hootsuite-Logo.png", category: "Social" },
  { name: "Typeform", logo: "https://logos-world.net/wp-content/uploads/2021/03/Typeform-Logo.png", category: "Forms" },
  { name: "Calendly", logo: "https://logos-world.net/wp-content/uploads/2021/03/Calendly-Logo.png", category: "Scheduling" },
  { name: "Loom", logo: "https://logos-world.net/wp-content/uploads/2021/03/Loom-Logo.png", category: "Video" },
  { name: "Discord", logo: "https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png", category: "Communication" },
  { name: "Microsoft Teams", logo: "https://logos-world.net/wp-content/uploads/2021/01/Microsoft-Teams-Logo.png", category: "Communication" },
  { name: "Twilio", logo: "https://logos-world.net/wp-content/uploads/2021/03/Twilio-Logo.png", category: "Communications" },
  { name: "SendGrid", logo: "https://logos-world.net/wp-content/uploads/2021/03/SendGrid-Logo.png", category: "Email" },
  { name: "ConvertKit", logo: "https://logos-world.net/wp-content/uploads/2021/03/ConvertKit-Logo.png", category: "Email Marketing" },
  { name: "ActiveCampaign", logo: "https://logos-world.net/wp-content/uploads/2021/03/ActiveCampaign-Logo.png", category: "Email Marketing" },

  // Row 3 - Analytics & Enterprise (20 items)
  { name: "Google Analytics", logo: "https://logos-world.net/wp-content/uploads/2020/09/Google-Analytics-Logo.png", category: "Analytics" },
  { name: "Tableau", logo: "https://logos-world.net/wp-content/uploads/2021/03/Tableau-Logo.png", category: "Analytics" },
  { name: "Power BI", logo: "https://logos-world.net/wp-content/uploads/2021/01/Microsoft-Power-BI-Logo.png", category: "Analytics" },
  { name: "AWS", logo: "https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png", category: "Cloud" },
  { name: "Google Cloud", logo: "https://logos-world.net/wp-content/uploads/2021/02/Google-Cloud-Logo.png", category: "Cloud" },
  { name: "Microsoft Azure", logo: "https://logos-world.net/wp-content/uploads/2021/01/Microsoft-Azure-Logo.png", category: "Cloud" },
  { name: "GitHub", logo: "https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png", category: "Development" },
  { name: "GitLab", logo: "https://logos-world.net/wp-content/uploads/2021/03/GitLab-Logo.png", category: "Development" },
  { name: "Zendesk", logo: "https://logos-world.net/wp-content/uploads/2021/03/Zendesk-Logo.png", category: "Support" },
  { name: "Intercom", logo: "https://logos-world.net/wp-content/uploads/2021/03/Intercom-Logo.png", category: "Support" },
  { name: "QuickBooks", logo: "https://logos-world.net/wp-content/uploads/2021/03/QuickBooks-Logo.png", category: "Accounting" },
  { name: "Xero", logo: "https://logos-world.net/wp-content/uploads/2021/03/Xero-Logo.png", category: "Accounting" },
  { name: "Excel", logo: "https://logos-world.net/wp-content/uploads/2020/08/Microsoft-Excel-Logo.png", category: "Spreadsheet" },
  { name: "Word", logo: "https://logos-world.net/wp-content/uploads/2020/08/Microsoft-Word-Logo.png", category: "Documents" },
  { name: "PowerPoint", logo: "https://logos-world.net/wp-content/uploads/2020/08/Microsoft-PowerPoint-Logo.png", category: "Presentations" },
  { name: "OneDrive", logo: "https://logos-world.net/wp-content/uploads/2020/08/Microsoft-OneDrive-Logo.png", category: "Storage" },
  { name: "Jira", logo: "https://logos-world.net/wp-content/uploads/2021/03/Jira-Logo.png", category: "Project Management" },
  { name: "ClickUp", logo: "https://logos-world.net/wp-content/uploads/2021/03/ClickUp-Logo.png", category: "Project Management" },
  { name: "Make", logo: "https://logos-world.net/wp-content/uploads/2021/03/Make-Logo.png", category: "Automation" },
  { name: "OpenAI", logo: "https://logos-world.net/wp-content/uploads/2023/02/OpenAI-Logo.png", category: "AI" },
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
          {/* Gradient masks for smooth fade effect - removed to fix visibility issue */}
          
          {/* First row - scrolling left to right */}
          <div className="flex space-x-6 animate-scroll-x mb-6">
            {/* Triple the logos for seamless infinite scroll - using first 20 platforms */}
            {[...techStacks.slice(0, 20), ...techStacks.slice(0, 20), ...techStacks.slice(0, 20)].map((tech, index) => (
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
                    // Hide the element completely if logo fails
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.style.display = 'none';
                    }
                  }}
                />
              </div>
            ))}
          </div>

          {/* Second row - scrolling right to left */}
          <div className="flex space-x-6 animate-scroll-x-reverse mb-6">
            {/* Triple the logos for seamless infinite scroll - using middle 20 platforms */}
            {[...techStacks.slice(20, 40), ...techStacks.slice(20, 40), ...techStacks.slice(20, 40)].map((tech, index) => (
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
                    // Hide the element completely if logo fails
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.style.display = 'none';
                    }
                  }}
                />
              </div>
            ))}
          </div>

          {/* Third row - scrolling left to right with remaining logos */}
          <div className="flex space-x-6 animate-scroll-x">
            {/* Use remaining logos and repeat for infinite scroll - using last 20+ platforms */}
            {[...techStacks.slice(40, 60), ...techStacks.slice(40, 60), ...techStacks.slice(40, 60)].map((tech, index) => (
              <div
                key={`row3-${index}`}
                className="flex-shrink-0 w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
                title={tech.name}
              >
                <img 
                  src={tech.logo} 
                  alt={tech.name}
                  className="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    // Hide the element completely if logo fails
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.style.display = 'none';
                    }
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
          className="text-center mt-16"
        >
          <p className="text-primary/80 text-base mb-6 max-w-2xl mx-auto">
            Don't see your platform? We work with 100+ tools and can build custom integrations.
          </p>
          <a href="/contact" className="btn-secondary inline-flex items-center gap-2">
            Ask About Your Platform
          </a>
        </motion.div>
      </div>
    </section>
  );
}
