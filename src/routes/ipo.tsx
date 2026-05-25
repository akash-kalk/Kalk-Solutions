import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, TrendingUp, Shield, Users, FileText, BarChart3, Megaphone } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { SectionLabel } from "@/components/SectionLabel";
import { PartnersStrip } from "@/components/PartnersStrip";
import ipoImg from "@/assets/ipo-bell.jpg";

export const Route = createFileRoute("/ipo")({
  head: () => ({
    meta: [
      {
        title:
          "IPO Brand Readiness Partnership for Manufacturers | Kalk Solutions",
      },
      {
        name: "description",
        content:
          "Complete digital, brand and growth partner for Indian manufacturers going public. IPO Brand Readiness Partnership: Smart Portal, IR pages, investor content, ESG, influencer outreach — ₹6.5L–₹8.5L/month, all-in.",
      },
      { property: "og:title", content: "IPO Brand Readiness Partnership | Kalk Solutions" },
      {
        property: "og:description",
        content:
          "One package. Complete partnership. Everything a manufacturer needs to go public with full digital confidence.",
      },
      { property: "og:image", content: "https://kalksolutions.com/og-ipo.jpg" },
      { property: "og:url", content: "https://kalksolutions.com/ipo" },
      { property: "twitter:image", content: "https://kalksolutions.com/og-ipo.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://kalksolutions.com/ipo" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "IPO Brand Readiness Partnership",
          provider: { "@type": "Organization", name: "Kalk Solutions" },
          areaServed: { "@type": "Country", name: "India" },
          description:
            "Complete digital marketing, brand, investor relations and content partnership for Indian manufacturers preparing for an IPO.",
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: 650000,
              maxPrice: 850000,
              priceCurrency: "INR",
            },
          },
        }),
      },
    ],
  }),
  component: IpoPage,
});

/* -------------------------------------------------------------------------- */
/*  Pricing block — sourced from the Berry Alloys / NSPL IPO Readiness deck.  */
/* -------------------------------------------------------------------------- */

const COST_LINES = [
  { label: "Agency retainer", value: "₹5,00,000 / month" },
  { label: "Ads spend (Google + LinkedIn)", value: "₹1,00,000 – ₹2,00,000 / month" },
  { label: "Influencer tie-up budget", value: "₹50,000 – ₹1,50,000 / month" },
];

const COMPLEMENTARY = [
  { label: "Smart Portal with full IPO infrastructure", value: "₹80,000" },
  { label: "Brand Kit (logo formats, guidelines, templates, social templates)", value: "₹25,000" },
  { label: "CRM and Email Nurture Automation", value: "₹20,000" },
  { label: "Market Intelligence Feed", value: "₹15,000" },
  { label: "Hoarding design (2 concepts)", value: "₹20,000" },
  { label: "IPO Investor Relations page structure & content", value: "₹30,000" },
];

const INCLUDED_LEFT = [
  "Smart Portal with IR section and full IPO infrastructure",
  "Complete Brand Kit",
  "2 hoarding design concepts (print-ready files)",
  "Google Business Profile setup and management",
  "SEO for 50 keywords — buyer and investor-facing",
  "4 blog articles per week",
  "Google Ads with ₹1–2 lakh monthly spend",
  "LinkedIn Ads — investors and procurement managers",
  "Influencer tie-up management — shortlisting, briefing, approving, tracking",
];

const INCLUDED_RIGHT = [
  "Personal branding for new generation leadership",
  "Quora and Reddit IPO investor Q&A strategy",
  "YouTube channel and full video production management",
  "All social media creation and management",
  "Weekly strategy session with senior account strategist",
  "Weekly performance reports and real-time dashboard",
  "Monthly boardroom-ready summary report",
  "Press outreach and one release per month",
  "ESG page and monthly ESG content",
];

const PILLARS = [
  {
    icon: TrendingUp,
    title: "Investor Visibility",
    desc: "Be discoverable to retail and institutional investors before, during and after listing — across Google, LinkedIn, YouTube, Quora and Reddit.",
  },
  {
    icon: Shield,
    title: "Brand & Trust Architecture",
    desc: "Full Brand Kit, Smart Portal with IR section, ESG content, and a unified narrative your DRHP, prospectus and press release can all draw from.",
  },
  {
    icon: Users,
    title: "Founder & Leadership Branding",
    desc: "Personal LinkedIn presence for the next-generation leadership team — the people analysts and journalists will eventually search by name.",
  },
  {
    icon: FileText,
    title: "Investor Relations Infrastructure",
    desc: "IPO IR page structure, downloadable filings library, quarterly content calendar, and a CRM that segments retail vs HNI vs institutional outreach.",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    desc: "Weekly competitor and sector intelligence, listed-peer benchmarking, and search-trend feed feeding directly into editorial and ad strategy.",
  },
  {
    icon: Megaphone,
    title: "Press, PR & Influencer Outreach",
    desc: "Monthly press release, journalist outreach, and a curated influencer programme reaching hundreds of thousands of retail investors.",
  },
];

function IpoPage() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <img
          src={ipoImg}
          alt="Indian manufacturing executives celebrating their IPO listing at the Bombay Stock Exchange"
          fetchPriority="high"
          decoding="async"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/65 to-ink"
          aria-hidden
        />
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <SectionLabel>IPO Readiness Partnership</SectionLabel>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl">
            Going Public?
            <br />
            <span className="text-primary">We Become Your Complete Marketing Partner.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            For Indian manufacturers preparing for an IPO, the next 12–24 months decide how
            retail investors, HNIs and institutional analysts perceive your brand. Kalk runs
            the entire digital, brand, content, IR and investor-outreach engine — so your
            CFO and merchant bankers can focus on filings.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/free-audit"
              className="cta-shine inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground"
            >
              Book IPO Readiness Audit <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#partnership"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10"
            >
              See the Partnership
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PartnersStrip
            variant="light"
            label="The platforms we deploy across the IPO journey"
          />
        </div>
      </section>

      {/* SIX PILLARS */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel>What We Run For You</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
              Six Pillars. One Integrated IPO Marketing Engine.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Every pillar is operated by a dedicated specialist on the Kalk team — but
              reports into one senior strategist owning your IPO narrative end-to-end.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <p.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING — IPO Brand Readiness Partnership card */}
      <section id="partnership" className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel>The Partnership</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
              One Package. Complete Partnership.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Everything a manufacturer needs to go public with full digital confidence.
            </p>
          </div>

          <div className="relative mt-12 overflow-hidden rounded-3xl border border-border bg-ink p-8 text-white shadow-2xl sm:p-12">
            <span className="absolute -top-3 right-8 rounded-full bg-primary px-4 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground">
              IPO Readiness Program
            </span>

            <h3 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
              IPO Brand Readiness Partnership
            </h3>

            <dl className="mt-10 divide-y divide-white/10">
              {COST_LINES.map((line) => (
                <div
                  key={line.label}
                  className="flex flex-col justify-between gap-1 py-4 sm:flex-row sm:items-center"
                >
                  <dt className="text-sm text-white/70">{line.label}</dt>
                  <dd className="text-base font-semibold text-white">{line.value}</dd>
                </div>
              ))}
              <div className="flex flex-col justify-between gap-2 pt-6 sm:flex-row sm:items-end">
                <dt className="font-display text-xl font-bold text-white">
                  Total monthly investment
                </dt>
                <dd className="font-display text-3xl font-extrabold text-primary sm:text-4xl">
                  ₹6,50,000 – ₹8,50,000
                </dd>
              </div>
            </dl>

            <p className="mt-4 text-xs italic text-white/60">
              Note: Influencer budget is billed at cost. Kalk does not mark up influencer
              fees. Full transparency with receipts and reporting.
            </p>

            {/* Complementary deliverables */}
            <div className="mt-10 rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Complementary Deliverables — Included
              </p>
              <dl className="mt-5 divide-y divide-white/10">
                {COMPLEMENTARY.map((c) => (
                  <div
                    key={c.label}
                    className="flex justify-between gap-4 py-3 text-sm"
                  >
                    <dt className="text-white/80">{c.label}</dt>
                    <dd className="shrink-0 font-semibold text-white">{c.value}</dd>
                  </div>
                ))}
                <div className="flex items-end justify-between gap-4 pt-4">
                  <dt className="font-display text-lg font-bold text-white">
                    Total complementary value
                  </dt>
                  <dd className="font-display text-2xl font-extrabold text-primary">
                    ₹1,90,000
                  </dd>
                </div>
              </dl>
            </div>

            {/* Everything included */}
            <div className="mt-10">
              <p className="font-display text-lg font-bold text-white">
                Everything included:
              </p>
              <div className="mt-5 grid gap-x-8 gap-y-3 md:grid-cols-2">
                {[...INCLUDED_LEFT, ...INCLUDED_RIGHT].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-white/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-white/75">
                <span className="font-semibold text-white">Commitment:</span>{" "}
                6 months minimum &nbsp;·&nbsp;{" "}
                <span className="font-semibold text-white">Payment:</span> 50% advance · 50%
                at monthly milestone
              </p>
              <Link
                to="/free-audit"
                className="cta-shine inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground"
              >
                Book IPO Readiness Call <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Cost-of-ownership note */}
          <div className="mt-8 rounded-2xl border-l-4 border-primary bg-card p-6 text-sm leading-relaxed text-foreground sm:p-8">
            At ₹5 lakh per month agency retainer, you get a team of 8 specialists, a complete
            Smart Portal, full IPO digital infrastructure, 4 weekly blog articles, daily
            social media, influencer tie-ups reaching hundreds of thousands of retail
            investors, and weekly strategy sessions. A single senior marketing hire in India
            costs ₹8–15 lakh per annum plus benefits, without any of the above
            infrastructure, tools, or specialised manufacturing knowledge. The Kalk program
            costs the equivalent of that hire per month, but delivers an entire agency, an
            entire system, and an entire IPO readiness infrastructure.{" "}
            <span className="font-semibold text-primary">
              For a company going public, this is not a marketing cost. It is listing
              infrastructure.
            </span>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionLabel>Who This Is For</SectionLabel>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
                Manufacturers 12–24 Months From Listing
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                You've already engaged merchant bankers, legal counsel, and a CA firm. What
                you don't yet have is a marketing partner who understands{" "}
                <em>both</em> manufacturing and capital markets.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                "₹100 Cr+ revenue manufacturer with a credible 12–24 month IPO timeline (SME or Mainboard)",
                "Already working with merchant bankers and a CA firm on filings",
                "Next-generation leadership comfortable with personal branding",
                "Willing to commit to a 6-month minimum engagement and weekly strategy sessions",
              ].map((x) => (
                <li
                  key={x}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            Your IPO is a Once-in-a-Generation Event.
            <br />
            <span className="text-primary">Treat the Marketing Like It.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Book a confidential IPO Readiness Audit. We'll review your current digital
            footprint, IR readiness, founder visibility and competitor benchmarks — and
            send you a written 14-day action plan, no obligation.
          </p>
          <Link
            to="/free-audit"
            className="cta-shine mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground"
          >
            Book Free IPO Readiness Audit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
