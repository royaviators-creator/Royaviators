# Royaviators Component Library Blueprint

## Purpose

Create a reusable design and component system for Royaviators, ImpactOS, and future products.

This library should support the official website first, then grow into a shared product ecosystem.

## Component Principles

- Premium but minimal
- Clear before decorative
- Modular
- Accessible
- Responsive
- Content-first
- Easy to reuse across future products

## Core Components

### 1. Navigation

Features:

- Sticky header
- Brand mark
- Desktop navigation links
- Primary CTA
- Mobile menu
- Scroll state

Links:

- Solutions
- ImpactOS
- Services
- Industries
- About
- Insights
- Contact

### 2. Button

Variants:

- Primary
- Secondary
- Ghost
- Light
- Text link

States:

- Default
- Hover
- Focus
- Disabled

### 3. Section Header

Reusable for all major sections.

Props:

- Eyebrow
- Heading
- Description
- Alignment

### 4. Feature Card

Used for services, platform modules, and benefits.

Elements:

- Icon
- Number or label
- Title
- Description
- Optional link

### 5. Industry Card

Used for industry solution grid.

Elements:

- Icon
- Industry name
- Short description
- Explore link

### 6. System Map

Used in the homepage hero to explain Royaviators' transformation logic.

Input:

- People
- Knowledge
- Processes

Core:

- Royaviators
- Strategy + intelligent systems

Output:

- Better decisions
- Stronger operations
- Measurable impact

### 7. ImpactOS Module Grid

Used to show the platform modules.

Modules:

- AI Assistant
- Knowledge Hub
- CRM
- Outreach
- Dashboards
- Analytics
- Automation
- Connectors
- Reporting
- Collaboration

### 8. Approach Timeline

Steps:

1. Understand
2. Design
3. Build
4. Integrate
5. Measure
6. Improve

### 9. Comparison Block

Used for the Royaviators differentiation section.

Columns:

- Traditional consultancy
- Software vendor
- Royaviators

### 10. CTA Band

Used at the bottom of pages.

Elements:

- Eyebrow
- Heading
- Description
- CTA button

### 11. Footer

Columns:

- Brand statement
- Explore
- Company
- Contact/location

## Future Components

### Case Study Card

For future client work and projects.

### Insight Card

For thought leadership articles.

### Metrics Strip

For credibility and impact metrics.

### Partner Logo Row

For future trusted-by section.

### FAQ Accordion

For ImpactOS, services, and industry pages.

### Contact Form

Fields:

- Name
- Email
- Organization
- Industry
- Main challenge
- Project stage
- Message

## Component Folder Structure

```text
/components
  layout
    Navigation.tsx
    Footer.tsx
    Section.tsx
  ui
    Button.tsx
    Card.tsx
    Badge.tsx
    Container.tsx
  homepage
    Hero.tsx
    SystemMap.tsx
    ChallengeSection.tsx
    ServicesSection.tsx
    ImpactOSSection.tsx
    IndustriesSection.tsx
    ApproachSection.tsx
    DifferenceSection.tsx
    CTASection.tsx
  impactos
    ModuleGrid.tsx
    ArchitectureDiagram.tsx
    IndustryEdition.tsx
  forms
    ContactForm.tsx
```

## Styling Direction

Use Tailwind CSS with custom tokens based on the Royaviators design system.

Recommended tokens:

- `ink` for dark navy
- `slate` for secondary text
- `soft` for background sections
- `line` for borders
- `blue` for primary accent
- `green` for impact accent

## Motion Direction

Use Framer Motion only where it adds clarity.

Examples:

- Hero text fade-up
- System map staggered reveal
- Cards lift on hover
- ImpactOS modules progressive reveal
- Timeline steps fade in

Avoid excessive animation.

## Accessibility Requirements

- Semantic HTML
- Keyboard navigation
- Focus-visible styles
- Strong contrast
- Reduced motion support
- Descriptive link labels
- Proper heading hierarchy
