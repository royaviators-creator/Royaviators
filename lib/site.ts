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
    description: "Institutional knowledge teams can find, trust, and improve.",
    icon: BookOpen,
  },
  {
    title: "Automation",
    description: "Repeatable workflows that reduce manual pressure.",
    icon: Workflow,
  },
  {
    title: "CRM",
    description: "Clear relationship views across partners and stakeholders.",
    icon: Users,
  },
  {
    title: "Dashboards",
    description: "Leadership views that connect operations, progress, and decisions.",
    icon: Gauge,
  },
  {
    title: "Reporting",
    description: "Evidence and narrative for boards, funders, and teams.",
    icon: FileText,
  },
  {
    title: "Connectors",
    description: "Careful integration with systems already in use.",
    icon: Link2,
  },
  {
    title: "Documents",
    description: "Reusable document flows for proposals, programs, compliance, and delivery.",
    icon: ClipboardCheck,
  },
  {
    title: "Analytics",
    description: "Practical analysis of what is changing and why.",
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
    challenges: ["Complex handoffs", "Knowledge locked in teams", "Safety and reliability pressure"],
    opportunities: ["Clearer operating rhythm", "Better training visibility", "Reusable performance evidence"],
    helps: "Royaviators connects operational knowledge with leadership workflows, dashboards, and reporting.",
    adapts: "ImpactOS can align fleets, bases, teams, training, safety actions, and leadership views.",
  },
  {
    name: "Sustainable Tourism",
    slug: "sustainable-tourism",
    icon: Leaf,
    summary: "Destination systems for responsible growth, local value, and partner alignment.",
    challenges: ["Scattered destination data", "Limited partner visibility", "Impact that is hard to measure"],
    opportunities: ["Connected operations", "Better community evidence", "Responsible growth decisions"],
    helps: "Royaviators turns sustainability goals into operating routines and measurable progress.",
    adapts: "ImpactOS can support partner maps, supplier data, program workflows, visitor insights, and reporting.",
  },
  {
    name: "Climate & Ocean",
    slug: "climate-ocean",
    icon: Waves,
    summary: "Knowledge, MRV, reporting, and collaboration for environmental work.",
    challenges: ["Research and field evidence spread across tools", "Complex partner reporting", "Difficult measurement routines"],
    opportunities: ["Stronger evidence flows", "Faster partner coordination", "Clearer environmental reporting"],
    helps: "Royaviators helps environmental teams manage evidence, partnerships, and progress.",
    adapts: "ImpactOS can organize projects, monitoring data, documents, partner actions, and reports.",
  },
  {
    name: "NGOs",
    slug: "ngos",
    icon: Sprout,
    summary: "Program, donor, field knowledge, and reporting systems.",
    challenges: ["Program data separated from field reality", "Heavy reporting cycles", "Limited internal capacity"],
    opportunities: ["Reusable program knowledge", "Stronger donor confidence", "Less manual reporting"],
    helps: "Royaviators helps mission teams protect focus while improving accountability.",
    adapts: "ImpactOS can structure programs, donors, field updates, documents, and impact evidence.",
  },
  {
    name: "Universities",
    slug: "universities",
    icon: GraduationCap,
    summary: "Research, collaboration, project knowledge, and partner infrastructure.",
    challenges: ["Distributed research knowledge", "Project handoffs without continuity", "Informal partnership tracking"],
    opportunities: ["Reusable research infrastructure", "Better partner coordination", "Clear project visibility"],
    helps: "Royaviators supports collaboration without adding administrative noise.",
    adapts: "ImpactOS can map projects, partners, grants, publications, documents, and collaboration routines.",
  },
  {
    name: "Public Sector",
    slug: "public-sector",
    icon: Landmark,
    summary: "Service processes, knowledge flows, and data-informed decisions.",
    challenges: ["Legacy departmental processes", "High accountability requirements", "Slow service visibility"],
    opportunities: ["Clearer services", "Transparent reporting", "Better institutional learning"],
    helps: "Royaviators supports practical change that respects governance and public value.",
    adapts: "ImpactOS can connect service workflows, policy knowledge, stakeholder records, and reporting.",
  },
];

export const implementationJourney = [
  {
    title: "Understand",
    description: "Map how work, knowledge, decisions, and accountability move today.",
  },
  {
    title: "Design",
    description: "Define the operating model, governance, data structure, and priorities.",
  },
  {
    title: "Build",
    description: "Create the first version around workflows, leadership needs, and adoption.",
  },
  {
    title: "Integrate",
    description: "Connect existing tools, documents, teams, and reporting routines.",
  },
  {
    title: "Measure",
    description: "Track progress with indicators leaders and teams can use.",
  },
  {
    title: "Improve",
    description: "Refine the system through use, feedback, and changing priorities.",
  },
];

export const servicePillarsDetailed = [
  {
    title: "Strategy",
    description: "Clarify where systems change improves performance and impact.",
    capabilities: [
      "Impact systems strategy",
      "Operating model design",
      "Operating roadmaps",
      "Decision and governance mapping",
      "Measurement frameworks",
    ],
  },
  {
    title: "Transformation",
    description: "Turn intent into routines, ownership, and adoption.",
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
    description: "Build connected environments for operations, reporting, and decisions.",
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
  "Operations",
];

export const placeholderArticles = [
  {
    title: "How operational knowledge becomes an executive asset",
    category: "Knowledge Systems",
    summary: "A planned perspective on turning scattered knowledge into better decisions.",
  },
  {
    title: "Designing transformation around measurable progress",
    category: "Operations",
    summary: "A planned article on adoption and long-term improvement.",
  },
  {
    title: "Responsible automation starts with process clarity",
    category: "Automation",
    summary: "A planned note on automation after process clarity.",
  },
  {
    title: "Aviation operations need connected decision systems",
    category: "Aviation",
    summary: "A planned perspective on safety, training, and visibility.",
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
    description: "Each implementation defines ownership, access, review routines, and decision rights.",
    icon: ShieldCheck,
  },
  {
    title: "Measured integration",
    description: "Systems connect where the value is clear and risk is understood.",
    icon: Link2,
  },
  {
    title: "Practical accountability",
    description: "Dashboards and reports help leaders understand progress without chasing updates.",
    icon: Building2,
  },
];

export const aboutReasons = [
  {
    title: "Why Royaviators exists",
    text: "Important organizations often carry complexity in disconnected tools, manual reporting, and informal knowledge. Royaviators helps them work with clarity and measurable impact.",
    icon: Compass,
  },
  {
    title: "Mission",
    text: "Help organizations create measurable economic, social, and environmental impact through better systems, automation, and data.",
    icon: Gauge,
  },
  {
    title: "Vision",
    text: "A world where organizations understand their work, coordinate their people, and improve impact through better decisions.",
    icon: Handshake,
  },
];
