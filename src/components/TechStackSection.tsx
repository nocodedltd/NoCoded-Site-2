import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motionVariants";

// Platform data with actual logo URLs from reliable CDN
const techStacks = [
  // Row 1 - Core Business Platforms (20 items)
  { name: "HubSpot", logo: "https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png" },
  { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
  { name: "Shopify", logo: "https://cdn.shopify.com/s/files/1/0446/6937/files/jjwxd8gqqzqkt8mj4n0k.png" },
  { name: "Stripe", logo: "https://images.ctfassets.net/fzn2n1nzq965/3AGidihOJl4nH9D73ShM9j/c28eb5a89bdc5a8a0b8f5c3b66fedddc/stripe-logo-512x384.png" },
  { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
  { name: "WordPress", logo: "https://s.w.org/style/images/about/WordPress-logotype-wmark.png" },
  { name: "Webflow", logo: "https://cdn.worldvectorlogo.com/logos/webflow.svg" },
  { name: "Gmail", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" },
  { name: "Outlook", logo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg" },
  { name: "MailChimp", logo: "https://eep.io/images/yzco4xsimv0y/1DktbiBpSqO8WyuIAeCayO/f0b848b1b0c3ae45bb6d54e3dd729b5f/MC_MonkeyRewards_Icon_App-Symbol_VRT.png" },
  { name: "Zapier", logo: "https://cdn.zapier.com/storage/developer/7e5b33b1dd63a3c5b8bf87893b4b6d5a.png" },
  { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
  { name: "Zoom", logo: "https://d24cgw3uvb9a9h.cloudfront.net/static/93516/image/new/ZoomLogo_112x112.png" },
  { name: "Google Drive", logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" },
  { name: "Dropbox", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Dropbox_logo_2017.svg" },
  { name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
  { name: "Airtable", logo: "https://static.airtable.com/images/logomarks/logomark.png" },
  { name: "Asana", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Asana_logo.svg" },
  { name: "Trello", logo: "https://upload.wikimedia.org/wikipedia/en/8/8c/Trello_logo.svg" },
  { name: "Monday", logo: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png" },

  // Row 2 - Social & Marketing (20 items)
  { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" },
  { name: "Instagram", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" },
  { name: "LinkedIn", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" },
  { name: "Twitter", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" },
  { name: "YouTube", logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" },
  { name: "Google Ads", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" },
  { name: "Canva", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg" },
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg" },
  { name: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  { name: "Buffer", logo: "https://buffer.com/static/misc/images/buffer-logo-256x256.png" },
  { name: "Hootsuite", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Hootsuite_Logo.svg" },
  { name: "Typeform", logo: "https://images.typeform.com/images/2dpnUBBkz2VN" },
  { name: "Calendly", logo: "https://assets.calendly.com/assets/frontend/media/calendly-logo-square-cd36a7a9f9e4122db73b4f8b6c15d24bb9c91e31b4bc1fb5c0c86a1a7b5e1068.png" },
  { name: "Loom", logo: "https://cdn.loom.com/assets/img/desktop-app/loom-studio-icon-192x192.png" },
  { name: "Discord", logo: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg" },
  { name: "Microsoft Teams", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg" },
  { name: "Twilio", logo: "https://www.twilio.com/content/dam/twilio-com/global/en/blog/legacy/2016/Twilio-Mark-Red.png" },
  { name: "SendGrid", logo: "https://sendgrid.com/wp-content/themes/sgdotcom/pages/resource/brand/2016/SendGrid-Logomark.png" },
  { name: "ConvertKit", logo: "https://convertkit-uploads2.s3.amazonaws.com/assets/pictures/90/67581/content_ck-favicon-228x228.png" },
  { name: "ActiveCampaign", logo: "https://www.activecampaign.com/wp-content/uploads/2020/09/ac-favicon-32x32.png" },

  // Row 3 - Analytics & Enterprise (20 items)
  { name: "Google Analytics", logo: "https://upload.wikimedia.org/wikipedia/commons/7/77/GAnalytics.svg" },
  { name: "Tableau", logo: "https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png" },
  { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
  { name: "Microsoft Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
  { name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
  { name: "GitLab", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/GitLab_logo.svg" },
  { name: "Zendesk", logo: "https://d26a57ydsghvgx.cloudfront.net/www/public/assets/images/logos/zendesk-logo-green.svg" },
  { name: "Intercom", logo: "https://static.intercom.com/avatars/6004110/square_128/intercom-square-1653481745.png" },
  { name: "QuickBooks", logo: "https://plugin.intuitcdn.net/designsystem/assets/images/logos/intuit-quickbooks/color/quickbooks-icon-color.svg" },
  { name: "Xero", logo: "https://assets-global.website-files.com/5d8a98a024bdb2503b6df59c/5df489e69ac2910b03011ce9_xero-logo-hires-RGB.svg" },
  { name: "Excel", logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" },
  { name: "Word", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg" },
  { name: "PowerPoint", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg" },
  { name: "OneDrive", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Microsoft_Office_OneDrive_%282019%E2%80%93present%29.svg" },
  { name: "Jira", logo: "https://wac-cdn.atlassian.com/dam/jcr:8f166d36-d30f-4740-8275-5d6129e1de54/jira%20software-icon-blue.svg" },
  { name: "ClickUp", logo: "https://d2gdx5nv84qamc.cloudfront.net/uploads/2021/05/25151510/clickup-symbol-only.png" },
  { name: "Make", logo: "https://www.make.com/en/brand-assets/logo/make-logo-1024x1024.png" },
  { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
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