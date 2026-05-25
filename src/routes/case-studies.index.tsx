import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { SectionLabel } from "@/components/SectionLabel";
import { CaseStudyCard } from "@/components/CaseStudyCard";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Manufacturing Case Studies | Lead Generation + ERP | Kalk Solutions" },
      {
        name: "description",
        content:
          "Real manufacturing growth case studies — ₹25 Cr RFQ, Saudi Aramco supply opportunity, Odoo ERP transformations. Anonymous, specific, measurable.",
      },
      { property: "og:title", content: "Manufacturing Case Studies | Kalk Solutions" },
      {
        property: "og:description",
        content:
          "₹25 Cr RFQ, Saudi Aramco opportunity, ERP unifications — see how manufacturers built the system.",
      },
    ],
  }),
  component: CaseStudiesIndex,
});

const CASES = [
  {
    tag: "Verified Client · Featured",
    title: "Kuber Precision Technology — 12x Lead Growth in Mass Transfer Manufacturing",
    excerpt:
      "12x leads · 24.7% traffic · 75% higher conversions · 60% more social engagement.",
    to: "/case-studies/kuber",
  },
  {
    tag: "Verified Client · Featured",
    title: "Om Steel Industries — 10x Lead Growth in a Competitive Steel Market",
    excerpt:
      "10x leads · 22.4% traffic · 70% higher conversions · 60% more user engagement.",
    to: "/case-studies/om-steel",
  },
  {
    tag: "Lead Generation",
    title: "One Digital System. One RFQ. ₹25 Crore.",
    excerpt: "The right buyer found them online at exactly the right moment.",
    to: "/case-studies/25-crore-rfq",
  },
  {
    tag: "Lead Generation",
    title: "A Precision Parts Manufacturer Got the Opportunity to Work With Saudi Aramco",
    excerpt: "Zero international visibility to a global giant knocking on their door.",
    to: "/case-studies/saudi-aramco",
  },
  {
    tag: "ERP Transformation",
    title: "From 5 Disconnected Tools to One Integrated Manufacturing System",
    excerpt: "TeamCenter, Excel, PagarBook, Tally, emails — replaced by Odoo. ~12 months.",
    to: "/case-studies/erp-unified-system",
  },
  {
    tag: "ERP Transformation",
    title: "How One Manufacturer Discovered They Were Running at Half Their Expected Margin",
    excerpt: "Procore + Sage + Monday + QuickBooks → Odoo. Margin recovered. ~24 months.",
    to: "/case-studies/erp-margin-recovery",
  },
] as const;

function CaseStudiesIndex() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-grid" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
          <SectionLabel>Case Studies</SectionLabel>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl">
            Real Manufacturers. <span className="text-primary">Real Results.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            Stories anonymised on request — but the numbers, timelines, and outcomes are real.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {CASES.map((c) => (
              <CaseStudyCard key={c.to} {...c} />
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
