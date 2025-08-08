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
      "A simple, done-with-you programme that fixes slow, manual work and replaces it with faster, automated systems in one quarter.",
    bullets: [
      "Clear plan in your first week with what we’ll build and why",
      "Real improvements delivered every 2 weeks",
      "Your team trained so the changes actually stick",
      "We keep tuning until it runs smoothly",
    ],
    icon: Calendar,
    image: teamMeetingImg,
    flagship: true,
  },
  {
    slug: "ai-agents",
    title: "AI Agents",
    oneLiner:
      "Always-on helpers that answer questions, follow up with leads, and complete routine work so your team can focus on growth.",
    bullets: [
      "Handles chat, voice and email 24/7",
      "Learns your business language and process",
      "Takes action, not just Q&A (bookings, updates, lookups)",
      "Connects to the tools you already use",
    ],
    icon: Bot,
    image: aiAgentsImg,
  },
  {
    slug: "process-automation",
    title: "Intelligent Process Automation",
    oneLiner:
      "We remove manual steps in your workflows so tasks finish faster, with fewer mistakes, and at lower cost.",
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
      "Custom-built AI that solves a specific problem in your business — from smarter reporting to forecasting and decision support.",
    bullets: [
      "Made for your data and workflow",
      "Own the IP and keep a competitive edge",
      "Built in small, testable steps",
      "Long-term support available",
    ],
    icon: Zap,
    image: aiTransformationImg,
  },
];

export default SERVICES;

