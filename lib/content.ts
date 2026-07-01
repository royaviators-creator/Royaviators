import {
  BarChart3,
  Compass,
  Database,
  Gauge,
  GraduationCap,
  Handshake,
  Landmark,
  Leaf,
  Network,
  Plane,
  Sprout,
  Waves,
  Workflow,
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
      "Clarify where systems, automation, and data can create measurable value.",
    items: ["Systems Strategy", "Innovation Roadmaps", "Operating Model Design"],
  },
  {
    title: "Transformation",
    description:
      "Redesign processes, knowledge flows, and collaboration around real operational needs.",
    items: ["Process Optimization", "Digital Transformation", "Change Enablement"],
  },
  {
    title: "Intelligent Systems",
    description:
      "Build connected workspaces, dashboards, and automations that support better decisions.",
    items: ["Knowledge Systems", "Automation", "Analytics & Reporting"],
  },
];

export const impactModules = [
  { label: "Knowledge", icon: Database },
  { label: "People", icon: Network },
  { label: "Processes", icon: Workflow },
  { label: "Data", icon: BarChart3 },
];

export const operatingOutputs = [
  "Automation",
  "Workflows",
  "Insights",
  "Reporting",
];

export const industries = [
  {
    name: "Aviation",
    icon: Plane,
    focus: "Operations, safety, training, and decision support.",
    description: "Systems for complex operational environments.",
  },
  {
    name: "Sustainable Tourism",
    icon: Leaf,
    focus: "Destination operations and community impact.",
    description: "Tools for responsible growth and measurable local value.",
  },
  {
    name: "Climate & Ocean",
    icon: Waves,
    focus: "MRV, research, partnerships, and reporting.",
    description: "Connected evidence systems for environmental work.",
  },
  {
    name: "NGOs & Foundations",
    icon: Sprout,
    focus: "Programs, donors, reporting, and field knowledge.",
    description: "Operational systems for mission-driven teams.",
  },
  {
    name: "Universities",
    icon: GraduationCap,
    focus: "Research collaboration and knowledge infrastructure.",
    description: "Shared systems for projects, partners, and learning.",
  },
  {
    name: "Public Sector",
    icon: Landmark,
    focus: "Services, processes, and data-informed decisions.",
    description: "Practical transformation for public organizations.",
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

export const trustCapabilities = [
  {
    title: "Operational Understanding",
    description:
      "We start with how work actually happens: pressure, accountability, constraints, and the people responsible for outcomes.",
    icon: Compass,
  },
  {
    title: "Connected Systems",
    description:
      "Strategy, knowledge, processes, and data are designed as one operating environment rather than isolated tools.",
    icon: Workflow,
  },
  {
    title: "Measurable Progress",
    description:
      "Every engagement is tied to clear indicators, better decisions, and evidence leadership can use.",
    icon: Gauge,
  },
  {
    title: "Long-Term Partnership",
    description:
      "We build with internal teams, transfer knowledge, and keep improving systems after launch.",
    icon: Handshake,
  },
];

export const proofPoints = [
  "12+ years in aviation operations",
  "Business administration, data, and transformation expertise",
  "Experience across aviation, tourism, and sustainability",
  "Built around practical implementation, not presentation slides",
];
