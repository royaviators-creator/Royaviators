import Image from "next/image";
import { ArrowRight, BarChart3, BrainCircuit, Building2, Check, Compass, Database, Globe2, GraduationCap, Leaf, Network, Plane, ShipWheel, Sparkles, Workflow } from "lucide-react";

const industries = [
  { icon: Plane, title: "Aviation", text: "Safer operations, smarter decisions, stronger knowledge systems." },
  { icon: Globe2, title: "Sustainable Tourism", text: "Connected destinations, communities, businesses, and measurable local impact." },
  { icon: ShipWheel, title: "Climate & Ocean", text: "Better monitoring, research coordination, MRV, and impact reporting." },
  { icon: Leaf, title: "NGOs & Foundations", text: "Donor intelligence, program delivery, outreach, and transparent reporting." },
  { icon: GraduationCap, title: "Universities", text: "AI-supported research, knowledge sharing, and collaboration." },
  { icon: Building2, title: "Public Sector", text: "Clearer processes, connected services, and data-informed decisions." },
];

const modules = ["AI Assistant", "Knowledge Hub", "CRM", "Outreach", "Dashboards", "Analytics", "Automation", "Connectors", "Reporting", "Collaboration"];

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`brand ${footer ? "brand-footer" : ""}`} href="#top" aria-label="Royaviators home">
      <Image className="brand-mark" src="/LOGO.jpeg" alt="" width={44} height={44} priority={!footer} />
      <span className="brand-name">Royaviators</span>
    </a>
  );
}

export default function HomePage() {
  return (
    <main>
      <header className="nav shell">
        <Brand />
        <nav className="navlinks" aria-label="Primary navigation">
          <a href="#solutions">Solutions</a><a href="#impactos">ImpactOS</a><a href="#services">Services</a><a href="#industries">Industries</a><a href="#about">About</a>
        </nav>
        <a className="button small" href="#contact">Book a strategy session <ArrowRight size={16} /></a>
      </header>

      <section className="hero shell" id="top">
        <div className="eyebrow"><Sparkles size={15} /> Impact consultancy for intelligent organizations</div>
        <h1>Turn complexity into <span>measurable impact.</span></h1>
        <p className="hero-copy">We combine strategy, AI, automation, data, and industry expertise to help organizations work smarter, make better decisions, and create lasting economic, social, and environmental value.</p>
        <div className="actions"><a className="button" href="#contact">Book a strategy session <ArrowRight size={18} /></a><a className="text-link" href="#impactos">Explore ImpactOS <ArrowRight size={17} /></a></div>
        <div className="system-map" aria-label="Royaviators transformation system">
          <div className="map-node muted">People</div><div className="map-node muted">Knowledge</div><div className="map-node muted">Processes</div><div className="map-line" />
          <div className="map-core"><Image className="map-logo" src="/LOGO.jpeg" alt="Royaviators symbol" width={44} height={44} /><strong>Royaviators</strong><span>Strategy + intelligent systems</span></div>
          <div className="map-line" /><div className="map-node accent">Better decisions</div><div className="map-node accent">Stronger operations</div><div className="map-node accent">Measurable impact</div>
        </div>
      </section>

      <section className="dark-section" id="solutions"><div className="shell split">
        <div><div className="kicker">The challenge</div><h2>Organizations do not need more tools. They need connected intelligence.</h2></div>
        <div className="challenge-list">{["Disconnected systems and fragmented data","Knowledge trapped in documents and individuals","Manual workflows that slow important work","AI initiatives without a clear operating strategy","Impact goals without reliable measurement"].map((item)=><div key={item}><Check size={17}/><span>{item}</span></div>)}</div>
      </div></section>

      <section className="section shell" id="services">
        <div className="section-head"><div><div className="kicker">How we help</div><h2>From strategic clarity to working systems.</h2></div><p>We stay beyond the recommendation. We design, integrate, and improve the operating systems that make transformation real.</p></div>
        <div className="three-grid">
          <article className="feature-card"><Compass/><span>01</span><h3>Strategy</h3><p>Identify where AI, automation, and data can create measurable organizational value.</p><a href="#contact">AI strategy & roadmaps <ArrowRight size={16}/></a></article>
          <article className="feature-card"><Workflow/><span>02</span><h3>Transformation</h3><p>Redesign processes, knowledge flows, roles, and decisions around the outcomes that matter.</p><a href="#contact">Operations & change <ArrowRight size={16}/></a></article>
          <article className="feature-card"><BrainCircuit/><span>03</span><h3>Intelligent Systems</h3><p>Build tailored AI workspaces that connect teams, knowledge, workflows, and data.</p><a href="#impactos">Explore ImpactOS <ArrowRight size={16}/></a></article>
        </div>
      </section>

      <section className="section shell impactos" id="impactos">
        <div className="impact-copy"><div className="kicker">ImpactOS</div><h2>One intelligent foundation. Tailored to every organization.</h2><p>ImpactOS is our reusable AI Workspace for transformation. It combines organizational knowledge, relationships, documents, workflows, data, and reporting in one connected environment.</p><p>It is not off-the-shelf software. Every implementation is shaped around the organization, its industry, and its impact goals.</p><a className="button" href="#contact">Explore an implementation <ArrowRight size={18}/></a></div>
        <div className="os-panel"><div className="os-top"><div><span className="pulse"/> ImpactOS workspace</div><span>Tailored edition</span></div><div className="module-grid">{modules.map((module,i)=><div className={i===0?"module primary":"module"} key={module}>{i===0?<BrainCircuit/>:i===1?<Database/>:i===4?<BarChart3/>:<Network/>}<span>{module}</span></div>)}</div></div>
      </section>

      <section className="section soft" id="industries"><div className="shell">
        <div className="section-head"><div><div className="kicker">Industry solutions</div><h2>Deep context. Shared intelligence.</h2></div><p>Each solution is tailored to the sector while drawing from the same ImpactOS foundation.</p></div>
        <div className="industry-grid">{industries.map(({icon:Icon,title,text})=><article className="industry-card" key={title}><Icon/><h3>{title}</h3><p>{text}</p><a href="#contact">Explore solution <ArrowRight size={15}/></a></article>)}</div>
      </div></section>

      <section className="section shell" id="about"><div className="approach">
        <div><div className="kicker">Our approach</div><h2>Transformation designed to keep improving.</h2><p>We work as a long-term partner, bringing together industry understanding, systems thinking, and practical implementation.</p></div>
        <ol>{["Understand","Design","Build","Integrate","Measure","Improve"].map((step,i)=><li key={step}><span>{String(i+1).padStart(2,"0")}</span><strong>{step}</strong></li>)}</ol>
      </div></section>

      <section className="section shell"><div className="difference"><div className="kicker">Why Royaviators</div><h2>Not traditional consulting. Not generic software.</h2><div className="comparison"><div><span>Traditional consultancy</span><strong>Advice without implementation</strong></div><div><span>Software vendor</span><strong>Products without context</strong></div><div className="selected"><span>Royaviators</span><strong>Strategy, systems, implementation, and measurable outcomes</strong></div></div></div></section>

      <section className="cta" id="contact"><div className="shell"><div className="eyebrow light">Start with the challenge, not the technology</div><h2>Ready to build a more intelligent organization?</h2><p>Let’s explore where connected knowledge, AI, automation, and data can create meaningful value for your organization.</p><a className="button light-button" href="mailto:hello@royaviators.com">Book a strategy session <ArrowRight size={18}/></a></div></section>

      <footer className="footer shell"><div><Brand footer /><p>Intelligent systems for measurable impact.</p></div><div><strong>Explore</strong><a href="#services">Services</a><a href="#impactos">ImpactOS</a><a href="#industries">Industries</a></div><div><strong>Company</strong><a href="#about">About</a><a href="#contact">Contact</a><a href="#">Insights</a></div><div className="footer-end">© 2026 Royaviators<br/>The Netherlands</div></footer>
    </main>
  );
}
