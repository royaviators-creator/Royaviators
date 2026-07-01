import type { IndustryTemplate } from "@/lib/impactos/types";

export const industryTemplates: IndustryTemplate[] = [
  {
    id: "oceanos",
    name: "OceanOS",
    industry: "Climate & Ocean",
    description:
      "A demo operating-system template for ocean restoration, blue carbon, partner coordination, reporting, and evidence workflows.",
    operatingInputs: [
      "Research knowledge",
      "Field projects",
      "Partner network",
      "Monitoring data",
      "Reports and evidence",
    ],
    outcomes: [
      "Clearer project visibility",
      "Reusable impact evidence",
      "Better partner coordination",
      "More reliable reporting cycles",
    ],
    enabledModules: [
      "dashboard",
      "assistant",
      "knowledge",
      "projects",
      "documents",
      "reports",
      "analytics",
      "maps",
      "automation",
      "notifications",
      "integrations",
      "admin",
      "settings",
    ],
  },
];

export function getIndustryTemplate(templateId: string) {
  return industryTemplates.find((template) => template.id === templateId);
}
