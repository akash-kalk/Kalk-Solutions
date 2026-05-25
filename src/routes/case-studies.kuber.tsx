import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, TrendingUp, Search, Target, Megaphone, FileEdit } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { SectionLabel } from "@/components/SectionLabel";
import { AuditForm } from "@/components/AuditForm";
import { CountUp } from "@/components/CountUp";
import heroImg from "@/assets/case-kuber-hero.jpg";

export const Route = createFileRoute("/case-studies/kuber")({
  head: () => ({
    meta: [
      {
        title:
          "Kuber Precision Technology — 12x Lead Growth Case Study | Kalk Solutions",
      },
      {
        name: "description",
        content:
          "How Kuber Precision Technology — a manufacturer of mass transfer products — grew leads 12x, traffic 24.7%, and conversions 75% with Kalk Solutions.",
      },
      {
        property: "og:title",
        content: "12x Lead Growth — Kuber Precision Technology | Kalk Solutions",
      },
      {
        property: "og:description",
        content:
          "From outdated digital tools to 12x lead growth and 75% higher conversions. Real manufacturing case study.",
      },
      { property: "og:type", content: "article" },
      {
        property: "og:image",
        content: "https://kalksolutions.com/og-home.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://kalksolutions.com/case-studies/kuber" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "Kuber Precision Technology — 12x Lead Growth Through Strategic Digital Marketing",
          author: { "@type": "Organization", name: "Kalk Solutions" },
          publisher: { "@type": "Organization", name: "Kalk Solutions" },
          about: "Manufacturing growth case study — mass transfer products",
        }),
      },
    ],
  }),
  component: KuberCase,
});

const RESULTS = [
  { value: 12, suffix: "x", label: "Growth in Leads" },
  { value: 24.7, suffix: "%", label: "Traffic Increase" },
  { value: 75, suffix: "%", label: "Higher Conversions" },
  { value: 60, suffix: "%", label: "Social Engagement" },
];

const STRATEGIES = [
  {
    icon: Search,
    title: "SEO Optimization",
    body: "Targeted high-intent keywords used by procurement and process engineering teams searching for mass transfer products, distillation, and absorption equipment.",
  },
  {
    icon: Target,
    title: "Google Ads (PPC)",
    body: "Industry-specific Google Ads campaigns aimed at refineries, petrochemical plants, and chemical manufacturers — not retail traffic.",
  },
  {
    icon: Megaphone,
    title: "Social Media Authority",
    body: "Showcased company milestones, success stories, and engineering achievements to build technical credibility with industrial decision-makers.",
  },
  {
    icon: FileEdit,
    title: "Website + Content",
    body: "Complete redesign with clear navigation, technical product pages, prominent CTAs, and educational content that earns trust before the inquiry.",
  },
];

function KuberCase() {
  return (
    <SiteShell>
      {/* Hero with cinematic background */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Mass transfer column internals manufacturing facility"
            className="h-full w-full object-cover opacity-35"
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
            <span className="text-white/70">Mass Transfer Equipment</span>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-highlight/40 bg-highlight/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-highlight">
            <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
            Verified Client · kuberinternals.com
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            How Kuber Precision Technology Grew Leads
            <span className="text-primary"> 12x</span> in One Engagement
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-white/80">
            A precision-engineering manufacturer of distillation, extraction,
            and absorption equipment was technically world-class — but
            digitally invisible. Here's how we changed that.
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
                A specialist in process design, engineering, and manufacturing
                of mass transfer products.
              </h2>
              <p className="mt-3 leading-relaxed text-foreground">
                Kuber Precision Technology designs and manufactures column
                internals, trays, and packings used in distillation,
                extraction, and absorption applications across refineries,
                petrochemical plants, and chemical manufacturers. Their
                engineering quality was already recognised internationally —
                what they lacked was a digital system to convert that quality
                into inbound demand.
              </p>
            </div>

            <div>
              <SectionLabel>The Challenge</SectionLabel>
              <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                Visibility gaps. Outdated tools. Misaligned marketing.
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Limited online presence — buyers searching for mass transfer products couldn't find Kuber.",
                  "An older website that didn't communicate the depth of their capability.",
                  "Low engagement and conversion — visitors didn't know what action to take.",
                  "No structured digital marketing system to nurture procurement leads.",
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
                Within a focused engagement, Kuber Precision Technology
                positioned itself as a leading provider of mass transfer
                solutions in distillation, extraction, and absorption — not
                only in India but for procurement teams globally. The website
                became a credibility-first asset; the SEO + ads system became
                a steady inbound RFQ engine; and the social presence built
                authority among engineering decision-makers.
              </p>
            </div>

            <div className="rounded-2xl bg-ink p-8 text-white">
              <SectionLabel className="text-highlight">Key Takeaway</SectionLabel>
              <p className="mt-4 font-display text-2xl font-bold leading-snug">
                Engineering excellence doesn't sell itself. A digital system
                makes that excellence findable, evaluable, and contactable —
                12x leads is what happens when you connect the two.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
                {["SEO", "Google Ads", "Social Media", "Website Revamp", "Content"].map((t) => (
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
            to="/case-studies/om-steel"
            className="text-sm font-semibold text-foreground hover:text-primary"
          >
            Next: Om Steel Industries →
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
