export const siteConfig = {
  name: "Royaviators",
  url: "https://royaviators.com",
  tagline: "Impact Systems Consultancy",
  description:
    "Royaviators helps organizations improve operations, knowledge, decision-making, and measurable impact through strategy, connected systems, automation, and data.",
  footerDescription:
    "Impact systems consultancy for organizations creating measurable change.",
  openGraphAlt: "Royaviators impact systems consultancy",
  contact: {
    email: "hello@royaviators.com",
    type: "Consulting inquiries",
  },
  cta: {
    strategySession: {
      label: "Book a Strategy Session",
      subject: "Royaviators Strategy Session",
    },
    impactOS: {
      label: "Explore ImpactOS",
    },
    implementation: {
      label: "Explore an implementation",
    },
    contact: {
      label: "Contact",
    },
  },
  status: {
    loading: {
      kicker: "Loading",
      title: "Royaviators is loading.",
    },
    notFound: {
      kicker: "Page not found",
      title: "We could not find that page.",
      description:
        "The page may have moved, or the address may be incorrect. Return to the Royaviators homepage to continue.",
      actionLabel: "Return home",
    },
    error: {
      kicker: "Something went wrong",
      title: "Royaviators could not load this page.",
      description:
        "Please try again. If the problem continues, contact Royaviators directly.",
      actionLabel: "Try again",
    },
  },
} as const;

export const siteUrl = siteConfig.url;

export const siteName = siteConfig.name;

export const siteDescription = siteConfig.description;

export const contactEmail = siteConfig.contact.email;

export const contactHref = `mailto:${siteConfig.contact.email}`;

export const strategySessionHref = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
  siteConfig.cta.strategySession.subject,
)}`;
