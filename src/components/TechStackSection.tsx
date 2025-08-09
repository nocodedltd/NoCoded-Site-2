import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motionVariants";

// Comprehensive tech stack data with 50+ platforms
const techStacks = [
  // CRM & Sales
  { name: "HubSpot", logo: "https://cdn.worldvectorlogo.com/logos/hubspot-1.svg", category: "CRM" },
  { name: "Salesforce", logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg", category: "CRM" },
  { name: "PipeDrive", logo: "https://cdn.worldvectorlogo.com/logos/pipedrive.svg", category: "CRM" },
  { name: "Zoho", logo: "https://cdn.worldvectorlogo.com/logos/zoho.svg", category: "CRM" },
  { name: "Intercom", logo: "https://cdn.worldvectorlogo.com/logos/intercom-1.svg", category: "Customer Support" },
  
  // E-commerce & Payments
  { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg", category: "E-commerce" },
  { name: "WooCommerce", logo: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg", category: "E-commerce" },
  { name: "Stripe", logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg", category: "Payments" },
  { name: "PayPal", logo: "https://cdn.worldvectorlogo.com/logos/paypal-2.svg", category: "Payments" },
  { name: "Square", logo: "https://cdn.worldvectorlogo.com/logos/square.svg", category: "Payments" },
  
  // Website & CMS
  { name: "WordPress", logo: "https://cdn.worldvectorlogo.com/logos/wordpress-blue.svg", category: "CMS" },
  { name: "Webflow", logo: "https://cdn.worldvectorlogo.com/logos/webflow.svg", category: "Website" },
  { name: "Squarespace", logo: "https://cdn.worldvectorlogo.com/logos/squarespace-2.svg", category: "Website" },
  { name: "Wix", logo: "https://cdn.worldvectorlogo.com/logos/wix-1.svg", category: "Website" },
  
  // Email & Marketing
  { name: "Gmail", logo: "https://cdn.worldvectorlogo.com/logos/gmail-icon.svg", category: "Email" },
  { name: "Outlook", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-outlook-2019.svg", category: "Email" },
  { name: "MailChimp", logo: "https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon.svg", category: "Email Marketing" },
  { name: "Constant Contact", logo: "https://cdn.worldvectorlogo.com/logos/constant-contact.svg", category: "Email Marketing" },
  { name: "SendGrid", logo: "https://cdn.worldvectorlogo.com/logos/sendgrid.svg", category: "Email" },
  { name: "Mailgun", logo: "https://cdn.worldvectorlogo.com/logos/mailgun.svg", category: "Email" },
  
  // Social Media & Advertising
  { name: "Facebook", logo: "https://cdn.worldvectorlogo.com/logos/facebook-3.svg", category: "Social" },
  { name: "Instagram", logo: "https://cdn.worldvectorlogo.com/logos/instagram-2016.svg", category: "Social" },
  { name: "LinkedIn", logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg", category: "Social" },
  { name: "Twitter", logo: "https://cdn.worldvectorlogo.com/logos/twitter-6.svg", category: "Social" },
  { name: "YouTube", logo: "https://cdn.worldvectorlogo.com/logos/youtube-icon.svg", category: "Video" },
  { name: "Google Ads", logo: "https://cdn.worldvectorlogo.com/logos/google-ads-1.svg", category: "Marketing" },
  { name: "Meta Ads", logo: "https://cdn.worldvectorlogo.com/logos/meta-1.svg", category: "Marketing" },
  
  // Project Management & Productivity
  { name: "Asana", logo: "https://cdn.worldvectorlogo.com/logos/asana-logo.svg", category: "Project Management" },
  { name: "Monday", logo: "https://cdn.worldvectorlogo.com/logos/monday-1.svg", category: "Project Management" },
  { name: "Trello", logo: "https://cdn.worldvectorlogo.com/logos/trello.svg", category: "Project Management" },
  { name: "ClickUp", logo: "https://cdn.worldvectorlogo.com/logos/clickup.svg", category: "Project Management" },
  { name: "Jira", logo: "https://cdn.worldvectorlogo.com/logos/jira-1.svg", category: "Project Management" },
  { name: "Notion", logo: "https://cdn.worldvectorlogo.com/logos/notion-logo-no-background.svg", category: "Productivity" },
  { name: "Todoist", logo: "https://cdn.worldvectorlogo.com/logos/todoist-icon.svg", category: "Productivity" },
  
  // Communication & Collaboration
  { name: "Slack", logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg", category: "Communication" },
  { name: "Microsoft Teams", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg", category: "Communication" },
  { name: "Discord", logo: "https://cdn.worldvectorlogo.com/logos/discord-6.svg", category: "Communication" },
  { name: "Zoom", logo: "https://cdn.worldvectorlogo.com/logos/zoom-2.svg", category: "Video Conferencing" },
  { name: "Twilio", logo: "https://cdn.worldvectorlogo.com/logos/twilio.svg", category: "Communications" },
  
  // Data & Analytics
  { name: "Google Analytics", logo: "https://cdn.worldvectorlogo.com/logos/google-analytics.svg", category: "Analytics" },
  { name: "Looker", logo: "https://cdn.worldvectorlogo.com/logos/looker.svg", category: "Analytics" },
  { name: "Tableau", logo: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg", category: "Analytics" },
  { name: "Power BI", logo: "https://cdn.worldvectorlogo.com/logos/power-bi.svg", category: "Analytics" },
  { name: "Airtable", logo: "https://cdn.worldvectorlogo.com/logos/airtable.svg", category: "Database" },
  
  // Cloud & Storage
  { name: "Google Drive", logo: "https://cdn.worldvectorlogo.com/logos/google-drive-2020.svg", category: "Storage" },
  { name: "Dropbox", logo: "https://cdn.worldvectorlogo.com/logos/dropbox-1.svg", category: "Storage" },
  { name: "OneDrive", logo: "https://cdn.worldvectorlogo.com/logos/onedrive-1.svg", category: "Storage" },
  { name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg", category: "Cloud" },
  { name: "Google Cloud", logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg", category: "Cloud" },
  { name: "Microsoft Azure", logo: "https://cdn.worldvectorlogo.com/logos/azure-1.svg", category: "Cloud" },
  
  // Microsoft Office Suite
  { name: "Excel", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-excel-2013.svg", category: "Spreadsheet" },
  { name: "Word", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-word-2013.svg", category: "Documents" },
  { name: "PowerPoint", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-powerpoint-2013.svg", category: "Presentations" },
  
  // Automation & AI
  { name: "Zapier", logo: "https://cdn.worldvectorlogo.com/logos/zapier.svg", category: "Automation" },
  { name: "Make", logo: "https://cdn.worldvectorlogo.com/logos/make.svg", category: "Automation" },
  { name: "OpenAI", logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg", category: "AI" },
  { name: "ChatGPT", logo: "https://cdn.worldvectorlogo.com/logos/chatgpt-4.svg", category: "AI" },
  
  // Customer Support & Forms
  { name: "Zendesk", logo: "https://cdn.worldvectorlogo.com/logos/zendesk.svg", category: "Support" },
  { name: "Freshdesk", logo: "https://cdn.worldvectorlogo.com/logos/freshworks-icon.svg", category: "Support" },
  { name: "Typeform", logo: "https://cdn.worldvectorlogo.com/logos/typeform-1.svg", category: "Forms" },
  { name: "Google Forms", logo: "https://cdn.worldvectorlogo.com/logos/google-forms.svg", category: "Forms" },
  { name: "Calendly", logo: "https://cdn.worldvectorlogo.com/logos/calendly-1.svg", category: "Scheduling" },
  
  // Development & Version Control
  { name: "GitHub", logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg", category: "Development" },
  { name: "GitLab", logo: "https://cdn.worldvectorlogo.com/logos/gitlab.svg", category: "Development" },
  { name: "Bitbucket", logo: "https://cdn.worldvectorlogo.com/logos/bitbucket-icon.svg", category: "Development" },
  
  // Accounting & Finance
  { name: "QuickBooks", logo: "https://cdn.worldvectorlogo.com/logos/quickbooks-1.svg", category: "Accounting" },
  { name: "Xero", logo: "https://cdn.worldvectorlogo.com/logos/xero.svg", category: "Accounting" },
  { name: "FreshBooks", logo: "https://cdn.worldvectorlogo.com/logos/freshbooks.svg", category: "Accounting" },
  
  // Additional Popular Platforms to reach 60+
  { name: "Canva", logo: "https://cdn.worldvectorlogo.com/logos/canva-1.svg", category: "Design" },
  { name: "Adobe", logo: "https://cdn.worldvectorlogo.com/logos/adobe-1.svg", category: "Design" },
  { name: "Figma", logo: "https://cdn.worldvectorlogo.com/logos/figma-1.svg", category: "Design" },
  { name: "Loom", logo: "https://cdn.worldvectorlogo.com/logos/loom-icon.svg", category: "Video" },
  { name: "Buffer", logo: "https://cdn.worldvectorlogo.com/logos/buffer.svg", category: "Social" },
  { name: "Hootsuite", logo: "https://cdn.worldvectorlogo.com/logos/hootsuite-1.svg", category: "Social" },
  { name: "ConvertKit", logo: "https://cdn.worldvectorlogo.com/logos/convertkit.svg", category: "Email Marketing" },
  { name: "ActiveCampaign", logo: "https://cdn.worldvectorlogo.com/logos/activecampaign.svg", category: "Email Marketing" },
  { name: "HelpScout", logo: "https://cdn.worldvectorlogo.com/logos/help-scout.svg", category: "Support" },
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
