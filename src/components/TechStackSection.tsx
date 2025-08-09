import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motionVariants";

// Simple SVG icon components for reliable display
const IconComponents = {
  HubSpot: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-orange-500">
      <circle cx="12" cy="12" r="10" fill="#ff7a59"/>
      <circle cx="12" cy="8" r="2" fill="white"/>
      <circle cx="12" cy="16" r="1" fill="white"/>
    </svg>
  ),
  Salesforce: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-500">
      <circle cx="8" cy="8" r="3" fill="#1B96FF"/>
      <circle cx="16" cy="10" r="2" fill="#1B96FF"/>
      <circle cx="12" cy="16" r="2.5" fill="#1B96FF"/>
    </svg>
  ),
  Shopify: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-green-500">
      <path d="M16 6L12 2L8 6V18L12 22L16 18V6Z" fill="#95BF46"/>
    </svg>
  ),
  Stripe: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-purple-500">
      <path d="M4 12H20" stroke="#6772E5" strokeWidth="2"/>
      <path d="M4 8H20" stroke="#6772E5" strokeWidth="2"/>
      <path d="M4 16H20" stroke="#6772E5" strokeWidth="2"/>
    </svg>
  ),
  PayPal: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-600">
      <path d="M8 4H16C18 4 20 6 20 8S18 12 16 12H12L10 20H6L8 4Z" fill="#0070BA"/>
    </svg>
  ),
  WordPress: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-700">
      <circle cx="12" cy="12" r="10" fill="#21759B"/>
      <circle cx="12" cy="12" r="6" fill="white"/>
      <circle cx="12" cy="12" r="2" fill="#21759B"/>
    </svg>
  ),
  Gmail: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-red-500">
      <path d="M4 20V8L12 14L20 8V20H4Z" fill="#EA4335"/>
      <path d="M4 8L12 14L20 8L12 4L4 8Z" fill="#FBBC05"/>
    </svg>
  ),
  Slack: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-purple-500">
      <rect x="6" y="6" width="4" height="4" rx="2" fill="#4A154B"/>
      <rect x="14" y="6" width="4" height="4" rx="2" fill="#4A154B"/>
      <rect x="6" y="14" width="4" height="4" rx="2" fill="#4A154B"/>
      <rect x="14" y="14" width="4" height="4" rx="2" fill="#4A154B"/>
    </svg>
  ),
  Zoom: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-500">
      <circle cx="12" cy="12" r="10" fill="#2D8CFF"/>
      <path d="M8 10H16V14H8Z" fill="white"/>
    </svg>
  ),
  Notion: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-800">
      <rect x="4" y="4" width="16" height="16" rx="2" fill="black"/>
      <path d="M8 8H16M8 12H16M8 16H12" stroke="white" strokeWidth="1.5"/>
    </svg>
  ),
  Facebook: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-600">
      <circle cx="12" cy="12" r="10" fill="#1877F2"/>
      <path d="M16 8H14C13 8 12 9 12 10V12H10V14H12V20H14V14H16L16.5 12H14V10.5C14 10.2 14.2 10 14.5 10H16V8Z" fill="white"/>
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-pink-500">
      <rect x="4" y="4" width="16" height="16" rx="4" fill="url(#instagram-gradient)"/>
      <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="2"/>
      <circle cx="17" cy="7" r="1" fill="white"/>
      <defs>
        <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E4405F"/>
          <stop offset="100%" stopColor="#FCCC63"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-700">
      <rect x="4" y="4" width="16" height="16" rx="2" fill="#0A66C2"/>
      <rect x="7" y="10" width="2" height="6" fill="white"/>
      <circle cx="8" cy="8" r="1" fill="white"/>
      <path d="M13 10V16H15V13C15 12 15.5 11 17 11S19 12 19 13V16H17V10H15" fill="white"/>
    </svg>
  ),
  YouTube: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-red-600">
      <rect x="4" y="8" width="16" height="8" rx="2" fill="#FF0000"/>
      <polygon points="10,10 10,14 14,12" fill="white"/>
    </svg>
  ),
  GitHub: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-900">
      <circle cx="12" cy="12" r="10" fill="#24292e"/>
      <path d="M12 6C9 6 7 8 7 10.5C7 13 9 14 12 14S17 13 17 10.5C17 8 15 6 12 6Z" fill="white"/>
    </svg>
  ),
  Default: ({ category }: { category: string }) => {
    const iconMap: Record<string, any> = {
      'CRM': '👥',
      'E-commerce': '🛒',
      'Payments': '💳',
      'CMS': '📄',
      'Website': '🌐',
      'Email': '📧',
      'Email Marketing': '📬',
      'Social': '📱',
      'Video': '🎥',
      'Marketing': '📈',
      'Design': '🎨',
      'Forms': '📝',
      'Scheduling': '📅',
      'Communication': '💬',
      'Analytics': '📊',
      'Database': '🗄️',
      'Storage': '☁️',
      'Cloud': '☁️',
      'Spreadsheet': '📊',
      'Documents': '📄',
      'Presentations': '📊',
      'Project Management': '📋',
      'Automation': '⚡',
      'AI': '🤖',
      'Support': '🎧',
      'Accounting': '💰',
      'Development': '💻',
    };
    
    return (
      <div className="text-2xl">
        {iconMap[category] || '⚙️'}
      </div>
    );
  }
};

// Curated tech stack with icons and fallbacks
const techStacks = [
  // Row 1 - Core Business Platforms (20 items)
  { name: "HubSpot", icon: "HubSpot", category: "CRM" },
  { name: "Salesforce", icon: "Salesforce", category: "CRM" },
  { name: "Shopify", icon: "Shopify", category: "E-commerce" },
  { name: "Stripe", icon: "Stripe", category: "Payments" },
  { name: "PayPal", icon: "PayPal", category: "Payments" },
  { name: "WordPress", icon: "WordPress", category: "CMS" },
  { name: "Webflow", icon: "Default", category: "Website" },
  { name: "Gmail", icon: "Gmail", category: "Email" },
  { name: "Outlook", icon: "Default", category: "Email" },
  { name: "MailChimp", icon: "Default", category: "Email Marketing" },
  { name: "Zapier", icon: "Default", category: "Automation" },
  { name: "Slack", icon: "Slack", category: "Communication" },
  { name: "Zoom", icon: "Zoom", category: "Video" },
  { name: "Google Drive", icon: "Default", category: "Storage" },
  { name: "Dropbox", icon: "Default", category: "Storage" },
  { name: "Notion", icon: "Notion", category: "Productivity" },
  { name: "Airtable", icon: "Default", category: "Database" },
  { name: "Asana", icon: "Default", category: "Project Management" },
  { name: "Trello", icon: "Default", category: "Project Management" },
  { name: "Monday", icon: "Default", category: "Project Management" },

  // Row 2 - Social & Marketing (20 items)
  { name: "Facebook", icon: "Facebook", category: "Social" },
  { name: "Instagram", icon: "Instagram", category: "Social" },
  { name: "LinkedIn", icon: "LinkedIn", category: "Social" },
  { name: "Twitter", icon: "Default", category: "Social" },
  { name: "YouTube", icon: "YouTube", category: "Video" },
  { name: "Google Ads", icon: "Default", category: "Marketing" },
  { name: "Canva", icon: "Default", category: "Design" },
  { name: "Adobe", icon: "Default", category: "Design" },
  { name: "Figma", icon: "Default", category: "Design" },
  { name: "Buffer", icon: "Default", category: "Social" },
  { name: "Hootsuite", icon: "Default", category: "Social" },
  { name: "Typeform", icon: "Default", category: "Forms" },
  { name: "Calendly", icon: "Default", category: "Scheduling" },
  { name: "Loom", icon: "Default", category: "Video" },
  { name: "Discord", icon: "Default", category: "Communication" },
  { name: "Microsoft Teams", icon: "Default", category: "Communication" },
  { name: "Twilio", icon: "Default", category: "Communications" },
  { name: "SendGrid", icon: "Default", category: "Email" },
  { name: "ConvertKit", icon: "Default", category: "Email Marketing" },
  { name: "ActiveCampaign", icon: "Default", category: "Email Marketing" },

  // Row 3 - Analytics & Enterprise (20 items)
  { name: "Google Analytics", icon: "Default", category: "Analytics" },
  { name: "Tableau", icon: "Default", category: "Analytics" },
  { name: "Power BI", icon: "Default", category: "Analytics" },
  { name: "AWS", icon: "Default", category: "Cloud" },
  { name: "Google Cloud", icon: "Default", category: "Cloud" },
  { name: "Microsoft Azure", icon: "Default", category: "Cloud" },
  { name: "GitHub", icon: "GitHub", category: "Development" },
  { name: "GitLab", icon: "Default", category: "Development" },
  { name: "Zendesk", icon: "Default", category: "Support" },
  { name: "Intercom", icon: "Default", category: "Support" },
  { name: "QuickBooks", icon: "Default", category: "Accounting" },
  { name: "Xero", icon: "Default", category: "Accounting" },
  { name: "Excel", icon: "Default", category: "Spreadsheet" },
  { name: "Word", icon: "Default", category: "Documents" },
  { name: "PowerPoint", icon: "Default", category: "Presentations" },
  { name: "OneDrive", icon: "Default", category: "Storage" },
  { name: "Jira", icon: "Default", category: "Project Management" },
  { name: "ClickUp", icon: "Default", category: "Project Management" },
  { name: "Make", icon: "Default", category: "Automation" },
  { name: "OpenAI", icon: "Default", category: "AI" },
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
          {/* First row - scrolling left to right */}
          <div className="flex space-x-6 animate-scroll-x mb-6">
            {/* Triple the logos for seamless infinite scroll - using first 20 platforms */}
            {[...techStacks.slice(0, 20), ...techStacks.slice(0, 20), ...techStacks.slice(0, 20)].map((tech, index) => {
              const IconComponent = IconComponents[tech.icon as keyof typeof IconComponents] || IconComponents.Default;
              return (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
                  title={tech.name}
                >
                  {tech.icon === "Default" ? (
                    <IconComponents.Default category={tech.category} />
                  ) : (
                    <IconComponent />
                  )}
                </div>
              );
            })}
          </div>

          {/* Second row - scrolling right to left */}
          <div className="flex space-x-6 animate-scroll-x-reverse mb-6">
            {/* Triple the logos for seamless infinite scroll - using middle 20 platforms */}
            {[...techStacks.slice(20, 40), ...techStacks.slice(20, 40), ...techStacks.slice(20, 40)].map((tech, index) => {
              const IconComponent = IconComponents[tech.icon as keyof typeof IconComponents] || IconComponents.Default;
              return (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
                  title={tech.name}
                >
                  {tech.icon === "Default" ? (
                    <IconComponents.Default category={tech.category} />
                  ) : (
                    <IconComponent />
                  )}
                </div>
              );
            })}
          </div>

          {/* Third row - scrolling left to right with remaining logos */}
          <div className="flex space-x-6 animate-scroll-x">
            {/* Use remaining logos and repeat for infinite scroll - using last 20+ platforms */}
            {[...techStacks.slice(40, 60), ...techStacks.slice(40, 60), ...techStacks.slice(40, 60)].map((tech, index) => {
              const IconComponent = IconComponents[tech.icon as keyof typeof IconComponents] || IconComponents.Default;
              return (
                <div
                  key={`row3-${index}`}
                  className="flex-shrink-0 w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
                  title={tech.name}
                >
                  {tech.icon === "Default" ? (
                    <IconComponents.Default category={tech.category} />
                  ) : (
                    <IconComponent />
                  )}
                </div>
              );
            })}
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