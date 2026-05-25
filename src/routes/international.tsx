import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Globe2 } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { SectionLabel } from "@/components/SectionLabel";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { PartnersStrip } from "@/components/PartnersStrip";
import shippingImg from "@/assets/international-shipping.jpg";

export const Route = createFileRoute("/international")({
  head: () => ({
    meta: [
      {
        title:
          "Manufacturing Growth Partner UAE & USA | Odoo ERP + B2B Lead Gen | Kalk Solutions",
      },
      {
        name: "description",
        content:
          "India-based manufacturing growth partner for UAE, USA, and global manufacturers. Odoo ERP implementation, B2B lead generation & sales automation — 40% below US/UK rates.",
      },
      {
        property: "og:title",
        content: "International Manufacturing Growth | Kalk Solutions",
      },
      {
        property: "og:description",
        content:
          "World-class manufacturing growth — India-based, globally proven. Starting at $2,500/month.",
      },
      { property: "og:image", content: "https://kalksolutions.com/og-international.jpg" },
      { property: "og:url", content: "https://kalksolutions.com/international" },
      { property: "twitter:image", content: "https://kalksolutions.com/og-international.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://kalksolutions.com/international" }],
  }),
  component: InternationalPage,
});

const PACKAGES = [
  {
    name: "Starter",
    price: "$2,500",
    suffix: "/month",
    items: ["Global buyer-facing website", "International SEO", "Inquiry funnel + CRM"],
  },
  {
    name: "Growth",
    price: "$5,500",
    suffix: "/month",
    items: ["Everything in Starter", "LinkedIn + Google Ads", "Dedicated account manager", "Monthly strategy"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$9,500+",
    suffix: "/month",
    items: ["Everything in Growth", "Odoo ERP implementation", "Multi-region rollout", "Quarterly business reviews"],
  },
];

function InternationalPage() {
  return (
    <SiteShell>
      {/* HERO with image baked into background */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <img
          src={shippingImg}
          alt="International shipping port at golden hour with cargo containers and vessel"
          fetchPriority="high"
          decoding="async"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/65 to-ink" aria-hidden />
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <SectionLabel>For International Manufacturers</SectionLabel>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl">
            World-Class Manufacturing Growth System.
            <br /><span className="text-highlight">India-Based. Globally Proven.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            We helped an Indian manufacturer get the opportunity to work with Saudi Aramco. We help
            international manufacturers build the systems that create those opportunities — at 40%
            less than US or UK agency rates.
          </p>
          <Link
            to="/free-audit"
            className="cta-shine mt-10 inline-flex items-center gap-2 rounded-md bg-highlight px-7 py-3.5 text-sm font-bold text-highlight-foreground"
          >
            Book a Discovery Call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="border-b border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PartnersStrip variant="light" label="The global stack we deploy" />
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Why India-Based</SectionLabel>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
            Same Quality. Forty Percent Less.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Global delivery quality", b: "Same — or better — than US/UK agencies." },
              { t: "40% cost advantage", b: "Same expertise. A fraction of the cost." },
              { t: "Manufacturing depth", b: "We work only with manufacturers." },
              { t: "Odoo expertise", b: "The global ERP standard for SMEs." },
              { t: "Gulf market proof", b: "Saudi Aramco opportunity, Icon Steel reference." },
              { t: "English-first team", b: "Direct, fast, and aligned with your time zone." },
            ].map((x) => (
              <div key={x.t} className="rounded-xl border border-border bg-card p-6">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">{x.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{x.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Packages</SectionLabel>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
            International Pricing
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PACKAGES.map((p) => (
              <div
                key={p.name}
                className={`flex flex-col rounded-2xl border p-8 ${p.featured ? "border-highlight bg-ink text-white" : "border-border bg-card text-foreground"}`}
              >
                <p className={`text-xs font-bold uppercase tracking-[0.2em] ${p.featured ? "text-highlight" : "text-primary"}`}>
                  {p.name}
                </p>
                <p className="mt-3 font-display text-4xl font-extrabold">
                  {p.price}<span className={`text-sm font-semibold ${p.featured ? "text-white/60" : "text-muted-foreground"}`}>{p.suffix}</span>
                </p>
                <ul className="mt-6 flex-1 space-y-2 text-sm">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <CheckCircle2 className={`mt-0.5 h-4 w-4 ${p.featured ? "text-highlight" : "text-primary"}`} />
                      {it}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/free-audit"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-bold ${p.featured ? "bg-highlight text-highlight-foreground" : "bg-foreground text-background"}`}
                >
                  Book Discovery Call <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Regions We Serve</SectionLabel>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
            Proven Across Global Markets
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              <Globe2 className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-display text-2xl font-bold text-foreground">UAE / Gulf</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Icon Steel reference. Saudi Aramco supply opportunity created for our Indian client.
                Deep Gulf-buyer positioning experience.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <Globe2 className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-display text-2xl font-bold text-foreground">USA</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Industrial B2B lead generation, Odoo ERP rollouts, and integrated growth systems
                for US-based manufacturers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Global Proof</SectionLabel>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
            Case Studies
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <CaseStudyCard
              tag="Lead Generation"
              title="A Precision Parts Manufacturer Got the Opportunity to Work With Saudi Aramco"
              excerpt="From zero international visibility to a global giant knocking on their door."
              to="/case-studies/saudi-aramco"
            />
            <CaseStudyCard
              tag="ERP"
              title="From Multi-Tool Chaos to One Unified Odoo System"
              excerpt="Procore + Sage + Monday + QuickBooks → all in Odoo. Margin recovery achieved."
              to="/case-studies/erp-margin-recovery"
            />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
