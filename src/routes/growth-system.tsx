import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Magnet, Cog, LayoutDashboard, CircuitBoard } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/growth-system")({
  head: () => ({
    meta: [
      { title: "The Manufacturing Growth System | Buyer Magnet + Lead Engine + Sales Control + ERP | Kalk Solutions" },
      {
        name: "description",
        content:
          "The 4-module Kalk Growth System: Buyer Magnet, Lead Engine, Sales Control System, and Odoo ERP integration — built for manufacturers.",
      },
      { property: "og:title", content: "The Manufacturing Growth System | Kalk Solutions" },
      {
        property: "og:description",
        content:
          "Not an agency. Not software. A complete manufacturing growth infrastructure.",
      },
    ],
  }),
  component: GrowthSystemPage,
});

const MODULES = [
  {
    icon: Magnet,
    num: "01",
    title: "The Buyer Magnet",
    sub: "Be findable to the right buyers, in the right markets, at the right moment.",
    body:
      "We rebuild your digital presence to attract crore-level B2B buyers. SEO architecture for industrial keywords, websites engineered to convert procurement teams, international positioning for UAE/USA buyers, and an RFQ system that captures every serious inquiry.",
    deliverables: ["Buyer-facing website rebuild", "Technical & on-page SEO", "International positioning", "RFQ capture system", "Credibility package (ISO, certifications, references)"],
  },
  {
    icon: Cog,
    num: "02",
    title: "The Lead Engine",
    sub: "Consistent, qualified inquiries. Every month. From your target geographies.",
    body:
      "Specific buyers from your target industries delivered to your inbox. We manage Google Ads with industrial intent keywords, LinkedIn outbound to procurement decision-makers, content that ranks for high-intent searches, and SEO that compounds month after month.",
    deliverables: ["Google Ads (industrial intent)", "LinkedIn outbound", "Long-form SEO content", "Email outbound to procurement", "Monthly inquiry reporting"],
  },
  {
    icon: LayoutDashboard,
    num: "03",
    title: "The Sales Control System",
    sub: "Every inquiry tracked. Every follow-up automated. Every quotation controlled.",
    body:
      "Your sales director knows where every deal stands every day. We deploy and configure CRM, build automations for follow-ups, and create pipeline reporting. No more 'I'll check with the team'.",
    deliverables: ["CRM deployment", "Sales automation", "Pipeline visibility", "Quotation controls", "Weekly leadership reporting"],
  },
  {
    icon: CircuitBoard,
    num: "04",
    title: "ERP Integration (Odoo)",
    sub: "From disconnected tools to one unified manufacturing operating system.",
    body:
      "Centralised production, inventory, sales, purchase, HR, and accounting in Odoo. Real-time visibility, controlled pricing, mobile operations. Goodbye Excel + Tally + PagarBook + emails.",
    deliverables: ["Odoo configuration", "BOM, MRP, inventory", "Purchase + accounting integration", "Mobile dashboards", "Hypercare + ongoing support"],
  },
];

function GrowthSystemPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-grid" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
          <SectionLabel>The Kalk Growth System</SectionLabel>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl">
            Four Modules. <span className="text-primary">One Manufacturing Growth Infrastructure.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            Not an agency. Not software. A complete operating system for ambitious manufacturers.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
          {MODULES.map((m, i) => (
            <div
              key={m.num}
              className={`grid gap-12 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div>
                <p className="font-display text-sm font-bold tracking-[0.3em] text-primary">
                  MODULE {m.num}
                </p>
                <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
                  {m.title}
                </h2>
                <p className="mt-4 text-lg italic text-muted-foreground">{m.sub}</p>
                <p className="mt-6 leading-relaxed text-foreground">{m.body}</p>
              </div>
              <div className="rounded-2xl bg-ink p-8 text-white">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/20 text-primary">
                  <m.icon className="h-6 w-6" />
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-highlight">
                  Deliverables
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/85">
                  {m.deliverables.map((d) => (
                    <li key={d} className="flex gap-2"><span className="text-primary">→</span>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary py-20 text-white sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            Ready to see how this fits your business?
          </h2>
          <Link
            to="/free-audit"
            className="cta-shine mt-8 inline-flex items-center gap-2 rounded-md bg-ink px-7 py-3.5 text-sm font-bold text-white"
          >
            Book Free Audit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
