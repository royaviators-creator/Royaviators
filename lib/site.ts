import {
  BarChart3,
  BookOpen,
  Building2,
  ClipboardCheck,
  Compass,
  Database,
  FileText,
  Gauge,
  GraduationCap,
  Handshake,
  Landmark,
  Leaf,
  Link2,
  Network,
  Plane,
  ShieldCheck,
  Sprout,
  Users,
  Waves,
  Workflow,
} from "lucide-react";

export const coreCapabilities = [
  {
    title: "Knowledge",
    description: "Shared institutional knowledge that teams can find, trust, and improve.",
    icon: BookOpen,
  },
  {
    title: "Automation",
    description: "Repeatable workflows that reduce manual pressure without removing accountability.",
    icon: Workflow,
  },
  {
    title: "CRM",
    description: "Clear relationship views across partners, customers, funders, and stakeholders.",
    icon: Users,
  },
  {
    title: "Dashboards",
    description: "Leadership views that connect operations, progress, and decisions.",
    icon: Gauge,
  },
  {
    title: "Reporting",
    description: "Evidence and narrative brought together for boards, funders, and teams.",
    icon: FileText,
  },
  {
    title: "Connectors",
    description: "Careful integration with the systems organizations already depend on.",
    icon: Link2,
  },
  {
    title: "Documents",
    description: "Reusable document flows for proposals, programs, compliance, and delivery.",
    icon: ClipboardCheck,
  },
  {
    title: "Analytics",
    description: "Practical analysis that explains what is changing and why it matters.",
    icon: BarChart3,
  },
  {
    title: "Collaboration",
    description: "Spaces for cross-functional work, review, ownership, and improvement.",
    icon: Network,
  },
];

export const industryAdaptations = [
  {
    name: "Aviation",
    slug: "aviation",
    icon: Plane,
    summary: "Operational knowledge, safety processes, training, and decision support.",
    challenges: ["Complex operational handoffs", "Knowledge locked in teams", "Pressure for safety and reliability"],
    opportunities: ["Clearer operating rhythm", "Better training visibility", "Reusable performance evidence"],
    helps: "Royaviators connects operational knowledge with the workflows, dashboards, and reporting leaders need.",
    adapts: "ImpactOS can be configured around fleets, bases, teams, training records, safety actions, and leadership views.",
  },
  {
    name: "Sustainable Tourism",
    slug: "sustainable-tourism",
    icon: Leaf,
    summary: "Destination systems for responsible growth, local value, and partner alignment.",
    challenges: ["Scattered destination data", "Weak visibility across partners", "Impact claims that are hard to measure"],
    opportunities: ["Connected destination operations", "Better community evidence", "More responsible growth decisions"],
    helps: "Royaviators helps destinations turn sustainability goals into operating routines and measurable progress.",
    adapts: "ImpactOS can support partner maps, local supplier data, program workflows, visitor insights, and impact reporting.",
  },
  {
    name: "Climate & Ocean",
    slug: "climate-ocean",
    icon: Waves,
    summary: "Knowledge, MRV, reporting, and collaboration for environmental work.",
    challenges: ["Research and field evidence spread across tools", "Complex partner reporting", "Difficult measurement routines"],
    opportunities: ["Stronger evidence flows", "Faster partner coordination", "Clearer environmental reporting"],
    helps: "Royaviators designs systems that help environmental teams manage evidence, partnerships, and progress.",
    adapts: "ImpactOS can organize projects, monitoring data, documents, partner actions, and reporting cycles.",
  },
  {
    name: "NGOs",
    slug: "ngos",
    icon: Sprout,
    summary: "Program, donor, field knowledge, and reporting systems for mission teams.",
    challenges: ["Program data separated from field reality", "Heavy reporting cycles", "Limited internal capacity"],
    opportunities: ["Reusable program knowledge", "Stronger donor confidence", "Less manual reporting work"],
    helps: "Royaviators builds operating systems that help mission teams protect focus while improving accountability.",
    adapts: "ImpactOS can structure programs, beneficiaries, donors, field updates, documents, and impact evidence.",
  },
  {
    name: "Universities",
    slug: "universities",
    icon: GraduationCap,
    summary: "Research, collaboration, project knowledge, and partner infrastructure.",
    challenges: ["Research knowledge distributed across departments", "Project handoffs without continuity", "Partnerships tracked informally"],
    opportunities: ["Reusable research infrastructure", "Better partner coordination", "Clear project visibility"],
    helps: "Royaviators helps universities build systems that support collaboration without adding administrative noise.",
    adapts: "ImpactOS can map research projects, partners, grants, publications, documents, and collaboration routines.",
  },
  {
    name: "Public Sector",
    slug: "public-sector",
    icon: Landmark,
    summary: "Service processes, knowledge flows, and data-informed decisions.",
    challenges: ["Legacy processes across departments", "High accountability requirements", "Slow visibility into service progress"],
    opportunities: ["Clearer service operations", "More transparent reporting", "Better institutional learning"],
    helps: "Royaviators supports practical transformation that respects governance, accountability, and public value.",
    adapts: "ImpactOS can connect service workflows, policy knowledge, stakeholder records, dashboards, and reporting.",
  },
];

export const implementationJourney = [
  {
    title: "Understand",
    description: "Map how work, knowledge, decisions, and accountability currently move through the organization.",
  },
  {
    title: "Design",
    description: "Define the operating model, governance, data structure, and practical delivery priorities.",
  },
  {
    title: "Build",
    description: "Create the first version around real workflows, leadership needs, and user adoption.",
  },
  {
    title: "Integrate",
    description: "Connect existing tools, documents, teams, and reporting routines where it creates value.",
  },
  {
    title: "Measure",
    description: "Track progress with indicators that leaders and teams can use for better decisions.",
  },
  {
    title: "Improve",
    description: "Refine the system through use, feedback, and changing organizational priorities.",
  },
];

export const servicePillarsDetailed = [
  {
    title: "Strategy",
    description: "Clarify where systems change will improve performance, resilience, and measurable impact.",
    capabilities: [
      "Impact systems strategy",
      "Operating model design",
      "Transformation roadmaps",
      "Decision and governance mapping",
      "Measurement frameworks",
    ],
  },
  {
    title: "Transformation",
    description: "Turn strategic intent into working routines, shared ownership, and sustainable adoption.",
    capabilities: [
      "Process redesign",
      "Knowledge flow improvement",
      "Change enablement",
      "Program and partner coordination",
      "Implementation leadership",
    ],
  },
  {
    title: "Intelligent Systems",
    description: "Build connected environments that support operations, reporting, collaboration, and decisions.",
    capabilities: [
      "ImpactOS implementation",
      "Workflow automation",
      "Dashboards and reporting",
      "CRM and stakeholder systems",
      "Document and knowledge infrastructure",
    ],
  },
];

export const principles = [
  "Premium over flashy",
  "Simple over complicated",
  "Systems over software",
  "Trust over marketing",
  "Clarity over buzzwords",
  "Measurable progress over presentation",
];

export const impactFramework = [
  {
    title: "Understand",
    text: "We begin with the organization as it is, not as a diagram suggests it should be.",
  },
  {
    title: "Connect",
    text: "We bring knowledge, people, processes, and data into a clearer operating environment.",
  },
  {
    title: "Transform",
    text: "We improve the routines that shape decisions, delivery, and accountability.",
  },
  {
    title: "Measure",
    text: "We define progress in terms leadership and teams can act on.",
  },
  {
    title: "Improve",
    text: "We keep refining the system as the organization learns and changes.",
  },
];

export const insightCategories = [
  "Aviation",
  "Sustainable Tourism",
  "Climate",
  "Automation",
  "Knowledge Systems",
  "Transformation",
];

export const placeholderArticles = [
  {
    title: "How operational knowledge becomes an executive asset",
    category: "Knowledge Systems",
    summary: "A planned perspective on turning scattered organizational knowledge into better decisions.",
  },
  {
    title: "Designing transformation around measurable progress",
    category: "Transformation",
    summary: "A planned article on practical transformation, adoption, and long-term improvement.",
  },
  {
    title: "Responsible automation starts with process clarity",
    category: "Automation",
    summary: "A planned note on automating work only after the operating model is understood.",
  },
  {
    title: "Aviation operations need connected decision systems",
    category: "Aviation",
    summary: "A planned industry perspective on safety, training, knowledge, and operational visibility.",
  },
];

export const operatingInputs = [
  { title: "Knowledge", icon: Database },
  { title: "People", icon: Users },
  { title: "Processes", icon: Workflow },
  { title: "Data", icon: BarChart3 },
];

export const operatingOutputs = [
  "Automation",
  "Workflows",
  "Insights",
  "Reporting",
];

export const securityPrinciples = [
  {
    title: "Tailored governance",
    description: "Every implementation defines ownership, access, review routines, and decision rights around the organization.",
    icon: ShieldCheck,
  },
  {
    title: "Measured integration",
    description: "Systems are connected where the value is clear, with attention to privacy, continuity, and operational risk.",
    icon: Link2,
  },
  {
    title: "Practical accountability",
    description: "Dashboards, documents, and reporting flows are designed so leaders can understand progress without chasing updates.",
    icon: Building2,
  },
];

export const aboutReasons = [
  {
    title: "Why Royaviators exists",
    text: "Organizations with important missions often carry too much complexity in disconnected tools, manual reporting, and informal knowledge. Royaviators exists to help those organizations work with more clarity, confidence, and measurable impact.",
    icon: Compass,
  },
  {
    title: "Mission",
    text: "Help organizations create measurable economic, social, and environmental impact through intelligent systems, automation, data, and innovation.",
    icon: Gauge,
  },
  {
    title: "Vision",
    text: "A world where organizations can understand their work, coordinate their people, and improve their impact through systems that support better decisions.",
    icon: Handshake,
  },
];
