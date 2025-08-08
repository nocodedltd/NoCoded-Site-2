import { Calendar, Bot, Cog, Zap } from "lucide-react";
import aiTransformationImg from "@/assets/ai-transformation.jpg";

// Public images
export const teamMeetingImg = "/lovable-uploads/e083e7a8-7c27-49c1-a761-62e1e039256b.png";
export const aiAgentsImg = "/lovable-uploads/02892ec7-277a-4ae0-8065-27d281de201b.png";
export const processAutomationImg = "/lovable-uploads/6c047291-bf0b-49d5-b746-ec514a685855.png";

export type ServiceItem = {
  slug: string;
  title: string;
  oneLiner: string;
  bullets: string[];
  icon: any; // lucide-react icon component
  image: string;
  flagship?: boolean;
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "90-day-ai-transformation",
    title: "90-Day AI Transformation",
    oneLiner:
      "A focused programme that replaces slow, manual work with simple, automated systems in one quarter.",
    bullets: [
      "Clear plan in week one: what we’ll build and why",
      "Visible improvements shipped every 2 weeks",
      "Team trained and supported so changes stick",
      "We keep tuning until everything runs smoothly",
    ],
    icon: Calendar,
    image: teamMeetingImg,
    flagship: true,
  },
  {
    slug: "ai-agents",
    title: "AI Agents",
    oneLiner:
      "Digital helpers that answer questions, qualify leads and follow up so you never miss an opportunity.",
    bullets: [
      "Covers chat, voice and email 24/7",
      "Understands your tone and process",
      "Takes action: bookings, updates, lookups",
      "Connects to the tools you already use",
    ],
    icon: Bot,
    image: aiAgentsImg,
  },
  {
    slug: "process-automation",
    title: "Intelligent Process Automation",
    oneLiner:
      "We remove repetitive steps so tasks finish faster with fewer mistakes and lower cost.",
    bullets: [
      "Cut task time by up to 50–90%",
      "Reduce errors and rework",
      "See progress with simple dashboards",
      "Works across your CRM, spreadsheets and docs",
    ],
    icon: Cog,
    image: processAutomationImg,
  },
  {
    slug: "bespoke-ai",
    title: "Bespoke AI Solutions",
    oneLiner:
      "Custom AI to solve a specific business problem — reporting, forecasting or decision support.",
    bullets: [
      "Tailored to your data and workflow",
      "Own the IP for a lasting edge",
      "Built in small, testable steps",
      "Optional long‑term support",
    ],
    icon: Zap,
    image: aiTransformationImg,
  },
];

export default SERVICES;

