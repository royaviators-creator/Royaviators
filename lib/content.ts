import {
  BarChart3,
  Bot,
  Building2,
  Database,
  FileText,
  GraduationCap,
  Landmark,
  Leaf,
  Network,
  Plane,
  Sprout,
  Waves,
} from "lucide-react";

export const navItems = [
  { label: "Solutions", href: "#solutions" },
  { label: "ImpactOS", href: "#impactos" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
  { label: "Initiatives", href: "#initiatives" },
];

export const challenges = [
  "Disconnected tools and fragmented knowledge",
  "Manual workflows slowing teams down",
  "Technology initiatives without operational strategy",
  "Sustainability goals without measurable systems",
  "Complex reporting across funders, partners, and leadership",
  "Decision-making based on scattered information",
];

export const servicePillars = [
  {
    title: "Strategy",
    description:
      "Define where technology, automation, and data can create measurable business and impact value.",
    items: ["Technology Strategy", "Innovation Roadmaps", "Operating Model Design"],
  },
  {
    title: "Transformation",
    description:
      "Redesign processes, knowledge flows, and collaboration systems around real operational needs.",
    items: ["Process Optimization", "Digital Transformation", "Change Enablement"],
  },
  {
    title: "Intelligent Systems",
    description:
      "Build connected workspaces, dashboards, automations, and assistants that help organizations work smarter.",
    items: ["Intelligent Assistants", "Knowledge Systems", "Analytics & Reporting"],
  },
];

export const impactModules = [
  { label: "Intelligent Assistant", icon: Bot },
  { label: "Knowledge Hub", icon: Database },
  { label: "CRM", icon: Network },
  { label: "Automation", icon: Sprout },
  { label: "Dashboards", icon: BarChart3 },
  { label: "Documents", icon: FileText },
];

export const industries = [
  {
    name: "Aviation",
    icon: Plane,
    description:
      "Airport operations, airlines, air navigation, safety, training, and operational intelligence.",
  },
  {
    name: "Sustainable Tourism",
    icon: Leaf,
    description:
      "Destination management, ethical businesses, community engagement, and impact measurement.",
  },
  {
    name: "Climate & Ocean",
    icon: Waves,
    description:
      "MRV, environmental monitoring, research collaboration, grants, and impact reporting.",
  },
  {
    name: "NGOs & Foundations",
    icon: Sprout,
    description:
      "Donor management, outreach, knowledge systems, reporting, and program operations.",
  },
  {
    name: "Universities",
    icon: GraduationCap,
    description:
      "Research collaboration, knowledge hubs, student engagement, and project intelligence.",
  },
  {
    name: "Public Sector",
    icon: Landmark,
    description:
      "Digital transformation, citizen services, process optimization, and data-informed decisions.",
  },
];

export const approach = ["Understand", "Design", "Build", "Integrate", "Measure", "Improve"];

export const products = [
  {
    name: "UNIGO",
    status: "In development",
    description:
      "An impact travel initiative being developed to connect travelers, communities, and responsible businesses.",
  },
  {
    name: "Aviation Solutions",
    status: "Exploration",
    description:
      "Future systems for aviation operations, safety, training, sustainability, and knowledge management.",
  },
  {
    name: "Climate & Ocean Solutions",
    status: "Exploration",
    description:
      "Future systems for climate and ocean organizations to manage knowledge, MRV, partnerships, and reporting.",
  },
];

export const proofPoints = [
  "12+ years in aviation operations",
  "Business administration, data, and transformation expertise",
  "Experience across aviation, tourism, and sustainability",
  "Built around practical implementation, not presentation slides",
];

export const comparison = [
  ["Delivers advice", "Sells products", "Delivers transformation"],
  ["Generic frameworks", "Generic software", "Tailored intelligent systems"],
  ["Ends after project", "Ends after implementation", "Long-term partnership"],
  ["Strategy-focused", "Product-focused", "Outcome-focused"],
];
