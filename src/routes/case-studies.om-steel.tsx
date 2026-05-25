import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, TrendingUp, Search, Target, Megaphone, FileEdit, BarChart3 } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { SectionLabel } from "@/components/SectionLabel";
import { AuditForm } from "@/components/AuditForm";
import { CountUp } from "@/components/CountUp";
import heroImg from "@/assets/case-omsteel-hero.jpg";

export const Route = createFileRoute("/case-studies/om-steel")({
  head: () => ({
    meta: [
      {
        title:
          "Om Steel Industries — 10x Lead Growth Case Study | Kalk Solutions",
      },
      {
        name: "description",
        content:
          "How Om Steel — a steel pipes, sheets and structural steel supplier — grew leads 10x, traffic 22.4%, conversions 70% with Kalk Solutions' digital system.",
      },
      {
        property: "og:title",
        content: "10x Lead Growth — Om Steel Industries | Kalk Solutions",
      },
      {
        property: "og:description",
        content:
          "From outdated website and zero rankings to 10x lead growth in the competitive steel market.",
      },
      { property: "og:type", content: "article" },
      {
        property: "og:image",
        content: "https://kalksolutions.com/og-home.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://kalksolutions.com/case-studies/om-steel" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Om Steel Industries — 10x Lead Growth Through Digital Transformation",
          author: { "@type": "Organization", name: "Kalk Solutions" },
          publisher: { "@type": "Organization", name: "Kalk Solutions" },
          about: "Manufacturing growth case study — steel manufacturing and supply",
        }),
      },
    ],
  }),
  component: OmSteelCase,
});

const RESULTS = [
  { value: 10, suffix: "x", label: "Growth in Leads" },
  { value: 22.4, suffix: "%", label: "Traffic Increase" },
  { value: 70, suffix: "%", label: "Higher Conversions" },
  { value: 60, suffix: "%", label: "User Engagement" },
];

const STRATEGIES = [
  {
    icon: FileEdit,
    title: "Website Revamp",
    body: "Modern, fast, mobile-responsive site with a clear product catalogue covering pipes, sheets, structural steel — designed for procurement evaluation.",
  },
  {
    icon: Search,
    title: "SEO Strategy",
    body: "Ranked for high-intent keywords like \"structural steel supplier\" and \"high-quality steel pipes\" — supported by blog content and product landing pages.",
  },
  {
    icon: Target,
    title: "Google Ads (PPC)",
    body: "Industry-targeted ad campaigns reaching construction firms, manufacturers, and infrastructure developers actively buying steel.",
  },
  {
    icon: Megaphone,
    title: "Social + LinkedIn",
    body: "LinkedIn and Facebook campaigns showcasing client partnerships, certifications, and industrial expertise to engage decision-makers.",
  },
  {
    icon: BarChart3,
    title: "Analytics + AI",
    body: "Google Analytics integration to track every lead source, plus AI-driven optimisation of ad targeting for steadily improving ROI.",
  },
];

function OmSteelCase() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Steel pipes and structural steel warehouse"
            className="h-full w-full object-cover opacity-40"
            fetchPriority="high"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
            <Link to="/case-studies" className="font-semibold text-white/70 hover:text-white">
              Case Studies
            </Link>
            <span className="text-white/30">/</span>
            <span className="rounded-sm bg-primary/25 px-2 py-1 font-bold uppercase tracking-[0.2em] text-primary">
              Lead Generation
            </span>
            <span className="text-white/70">Steel Manufacturing & Supply</span>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-highlight/40 bg-highlight/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-highlight">
            <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
            Verified Client · omsteel.com
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            How Om Steel Industries Grew Leads
            <span className="text-primary"> 10x</span> in a Competitive Steel Market
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-white/80">
            Decades of market presence. Strong product. Almost no inbound
            digital demand. A complete website + SEO + paid + content
            transformation rewired the funnel.
          </p>
        </div>
      </section>

      {/* Results bar */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {RESULTS.map((r) => (
            <div key={r.label} className="bg-card px-6 py-8 text-center">
              <div className="font-display text-4xl font-extrabold text-primary sm:text-5xl">
                <CountUp end={r.value} suffix={r.suffix} />
              </div>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {r.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Body */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.6fr_1fr] lg:px-8">
          <article className="space-y-12">
            <div>
              <SectionLabel>The Client</SectionLabel>
              <h2 className="mt-3 font-display text-2xl font-bold text-foreground">
                A 40+ year supplier of premium steel products to construction,
                manufacturing, and infrastructure.
              </h2>
              <p className="mt-3 leading-relaxed text-foreground">
                Om Steel Industries supplies pipes, sheets, structural steel
                and specialty alloys (stainless, carbon, alloy steel) across
                construction, oil & gas, manufacturing and infrastructure.
                Despite a strong offline reputation, the digital footprint
                wasn't pulling its weight in a market where procurement
                research starts on Google.
              </p>
            </div>

            <div>
              <SectionLabel>The Challenge</SectionLabel>
              <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                Limited visibility. Low traffic. Outdated funnel.
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Website wasn't ranking on search engines for any commercial steel keywords.",
                  "Outdated UX with poor navigation made the catalogue hard to evaluate.",
                  "Marketing strategy wasn't aligned with how industrial buyers actually research.",
                  "Lead capture and follow-up were ad-hoc, so genuine inquiries leaked.",
                ].map((c) => (
                  <li key={c} className="flex gap-3 text-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionLabel>What We Did</SectionLabel>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {STRATEGIES.map((s) => (
                  <div
                    key={s.title}
                    className="rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-lg"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <p className="mt-3 font-display text-base font-bold text-foreground">
                      {s.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionLabel>The Outcome</SectionLabel>
              <p className="mt-3 leading-relaxed text-foreground">
                Om Steel built a strong, defensible online presence that now
                drives consistent inquiries from procurement teams across
                construction and manufacturing. A combination of website
                optimisation, targeted campaigns, and a data-driven content
                strategy turned digital from a cost into the most reliable
                source of new business.
              </p>
            </div>

            <div className="rounded-2xl bg-ink p-8 text-white">
              <SectionLabel className="text-highlight">Key Takeaway</SectionLabel>
              <p className="mt-4 font-display text-2xl font-bold leading-snug">
                In commodity markets, the supplier who shows up first — with
                technical depth and a clear inquiry path — wins. 10x leads is
                what happens when reputation finally meets a working funnel.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
                {["Website Revamp", "SEO", "Google Ads", "LinkedIn", "Analytics"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/20 bg-white/5 px-3 py-1 font-semibold text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                <TrendingUp className="h-3.5 w-3.5" /> Want results like this?
              </div>
              <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                30 minutes. No pitch. Just clarity.
              </h3>
              <div className="mt-5">
                <AuditForm variant="light" compact />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            to="/case-studies"
            className="text-sm font-semibold text-primary hover:underline"
          >
            ← Back to all case studies
          </Link>
          <Link
            to="/case-studies/kuber"
            className="text-sm font-semibold text-foreground hover:text-primary"
          >
            Next: Kuber Precision Technology →
          </Link>
          <Link
            to="/free-audit"
            className="cta-shine ml-auto inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
          >
            Book Free Audit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
