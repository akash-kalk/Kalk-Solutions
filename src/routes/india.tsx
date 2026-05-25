import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin, X } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { SectionLabel } from "@/components/SectionLabel";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { PartnersStrip } from "@/components/PartnersStrip";
import indiaImg from "@/assets/india-manufacturing.jpg";

export const Route = createFileRoute("/india")({
  head: () => ({
    meta: [
      {
        title:
          "Manufacturing Growth Packages for Indian Manufacturers | Visible · Competitive · Market Leader | Kalk Solutions",
      },
      {
        name: "description",
        content:
          "Three transparent growth packages for Indian manufacturers (₹5Cr–₹50Cr): Visible (₹1.3L), Competitive (₹2L), Market Leader (₹4L). Pune-based, founder-led, Odoo Silver Partner.",
      },
      { property: "og:title", content: "Manufacturing Growth for India | Kalk Solutions" },
      {
        property: "og:description",
        content:
          "Stop depending on trade shows. Three packages built for Indian manufacturers — fully transparent, fully accountable.",
      },
      { property: "og:image", content: "https://kalksolutions.com/og-india.jpg" },
      { property: "og:url", content: "https://kalksolutions.com/india" },
      { property: "twitter:image", content: "https://kalksolutions.com/og-india.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://kalksolutions.com/india" }],
  }),
  component: IndiaPage,
});

/* -------------------------------------------------------------------------- */
/*  Pricing — sourced verbatim from the founder's pricing brief.              */
/* -------------------------------------------------------------------------- */

type PackageKey = "visible" | "competitive" | "leader";

const PACKAGES: {
  key: PackageKey;
  name: string;
  total: string;
  agency: string;
  ads: string;
  desc: string;
  featured?: boolean;
}[] = [
  {
    key: "visible",
    name: "Visible",
    total: "₹1,30,000",
    agency: "₹1,00,000 agency fee",
    ads: "+ ₹30,000 ads spend",
    desc: "Build the foundation. Get found by buyers actively searching in your home state.",
  },
  {
    key: "competitive",
    name: "Competitive",
    total: "₹2,00,000",
    agency: "₹1,50,000 agency fee",
    ads: "+ ₹50,000 ads spend",
    desc: "Outpace local competition with stronger reach, content velocity, and LinkedIn presence.",
    featured: true,
  },
  {
    key: "leader",
    name: "Market Leader",
    total: "₹4,00,000",
    agency: "₹3,00,000 agency fee",
    ads: "+ ₹1,00,000 ads spend",
    desc: "Dominate your category — nationally and internationally — with a dedicated growth strategist.",
  },
];

/* Comparison rows match the founder's spec table exactly. */
const FEATURES: { label: string; values: Record<PackageKey, string | boolean> }[] = [
  { label: "Smart Portal", values: { visible: true, competitive: true, leader: true } },
  { label: "Brand Kit", values: { visible: true, competitive: true, leader: true } },
  {
    label: "SEO keywords",
    values: {
      visible: "50 keywords",
      competitive: "100 keywords",
      leader: "150 keywords + international",
    },
  },
  {
    label: "Google Ads reach",
    values: {
      visible: "Local + home state",
      competitive: "All target states",
      leader: "All states + international markets",
    },
  },
  {
    label: "Blogs",
    values: {
      visible: "4 per month",
      competitive: "4 per week",
      leader: "4 per week, long-form SEO optimised",
    },
  },
  {
    label: "LinkedIn",
    values: {
      visible: false,
      competitive: "3 posts / week + LinkedIn Ads",
      leader: "5 posts / week + LinkedIn Ads + personal branding for leadership",
    },
  },
  {
    label: "Social Media",
    values: {
      visible: false,
      competitive: "LinkedIn",
      leader: "Full creation and handling across all platforms",
    },
  },
  {
    label: "Video",
    values: {
      visible: false,
      competitive: false,
      leader: "Ideation, scripting, direction brief, editing, YouTube publishing, Shorts format",
    },
  },
  {
    label: "Strategy calls",
    values: {
      visible: "Monthly",
      competitive: "Fortnightly",
      leader: "Weekly dedicated session",
    },
  },
  {
    label: "Reporting",
    values: {
      visible: "Monthly report",
      competitive: "Weekly report + dashboard",
      leader: "Real-time dashboard + weekly report + monthly boardroom-ready summary",
    },
  },
  {
    label: "Dedicated Tech Partner",
    values: {
      visible: false,
      competitive: false,
      leader:
        "Yes. One dedicated Kalk strategist assigned exclusively to your account. Your growth is their only job.",
    },
  },
  {
    label: "Quarterly Market Review",
    values: {
      visible: false,
      competitive: true,
      leader: "Included + competitor intelligence report",
    },
  },
];

const CLUSTERS = [
  "Pune / Bhosari MIDC",
  "Rajkot",
  "Ludhiana",
  "Coimbatore",
  "Faridabad",
  "Surat",
  "Chennai",
];

/* -------------------------------------------------------------------------- */
/*  Render helpers                                                            */
/* -------------------------------------------------------------------------- */

function Cell({ value, featured }: { value: string | boolean; featured?: boolean }) {
  if (value === true) {
    return (
      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <CheckCircle2 className={`h-4 w-4 shrink-0 ${featured ? "text-primary" : "text-primary/80"}`} />
        Included
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground/70">
        <X className="h-4 w-4 shrink-0" />
        Not included
      </div>
    );
  }
  return <p className="text-sm leading-snug text-foreground">{value}</p>;
}

function IndiaPage() {
  return (
    <SiteShell>
      {/* HERO with image baked into the background */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <img
          src={indiaImg}
          alt="Indian precision parts manufacturer in a modern Pune workshop inspecting machined components"
          fetchPriority="high"
          decoding="async"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/65 to-ink"
          aria-hidden
        />
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <SectionLabel>For Indian Manufacturers</SectionLabel>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl">
            Stop Depending on Trade Shows.
            <br />
            <span className="text-primary">Start Attracting Crore-Level Buyers Online.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            We work exclusively with Indian manufacturers between ₹5 Cr and ₹50 Cr revenue who are
            ready to build a system that generates consistent high-value B2B opportunities.
          </p>
          <Link
            to="/free-audit"
            className="cta-shine mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground"
          >
            Book Free Manufacturing Audit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PartnersStrip
            variant="light"
            label="The platforms we deploy for Indian manufacturers"
          />
        </div>
      </section>

      {/* PACKAGES — overview cards */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel>Packages</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
              Three Packages. One Goal — Make You the Most Visible Manufacturer in Your Category.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              All prices include both our agency retainer and your monthly ads spend — fully
              transparent, no hidden line items. GST extra.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PACKAGES.map((p) => (
              <div
                key={p.key}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  p.featured
                    ? "border-primary bg-ink text-white shadow-xl"
                    : "border-border bg-card text-foreground"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground">
                    Most Chosen
                  </span>
                )}
                <p
                  className={`text-xs font-bold uppercase tracking-[0.25em] ${
                    p.featured ? "text-highlight" : "text-primary"
                  }`}
                >
                  {p.name}
                </p>
                <p className="mt-4 font-display text-4xl font-extrabold leading-none">
                  {p.total}
                  <span
                    className={`text-sm font-semibold ${
                      p.featured ? "text-white/60" : "text-muted-foreground"
                    }`}
                  >
                    /month
                  </span>
                </p>
                <p
                  className={`mt-3 text-sm font-semibold ${
                    p.featured ? "text-white/80" : "text-foreground/80"
                  }`}
                >
                  {p.agency}
                  <br />
                  {p.ads}
                </p>
                <p
                  className={`mt-5 text-sm leading-relaxed ${
                    p.featured ? "text-white/75" : "text-muted-foreground"
                  }`}
                >
                  {p.desc}
                </p>
                <Link
                  to="/free-audit"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold ${
                    p.featured
                      ? "bg-primary text-primary-foreground"
                      : "bg-foreground text-background"
                  }`}
                >
                  Book Free Audit <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel>Compare Packages</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
              Every Deliverable. Every Package. No Fine Print.
            </h2>
          </div>

          {/* Desktop table */}
          <div className="mt-12 hidden overflow-hidden rounded-2xl border border-border bg-card lg:block">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-ink text-white">
                  <th className="w-[28%] px-6 py-5 text-left text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                    Feature
                  </th>
                  {PACKAGES.map((p) => (
                    <th
                      key={p.key}
                      className={`px-6 py-5 text-left ${
                        p.featured ? "bg-primary text-primary-foreground" : ""
                      }`}
                    >
                      <p
                        className={`text-[11px] font-bold uppercase tracking-[0.2em] ${
                          p.featured ? "text-white/80" : "text-highlight"
                        }`}
                      >
                        {p.name}
                      </p>
                      <p className="mt-1 font-display text-xl font-extrabold">{p.total}/mo</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURES.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-card" : "bg-muted/40"}
                  >
                    <th
                      scope="row"
                      className="border-t border-border px-6 py-4 text-left align-top text-sm font-semibold text-foreground"
                    >
                      {row.label}
                    </th>
                    {PACKAGES.map((p) => (
                      <td
                        key={p.key}
                        className={`border-t border-border px-6 py-4 align-top ${
                          p.featured ? "bg-primary/5" : ""
                        }`}
                      >
                        <Cell value={row.values[p.key]} featured={p.featured} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile / tablet — stacked cards */}
          <div className="mt-10 grid gap-6 lg:hidden">
            {PACKAGES.map((p) => (
              <div
                key={p.key}
                className={`overflow-hidden rounded-2xl border ${
                  p.featured ? "border-primary" : "border-border"
                } bg-card`}
              >
                <div
                  className={`px-6 py-5 ${
                    p.featured ? "bg-primary text-primary-foreground" : "bg-ink text-white"
                  }`}
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em]">{p.name}</p>
                  <p className="mt-1 font-display text-2xl font-extrabold">{p.total}/mo</p>
                </div>
                <dl className="divide-y divide-border">
                  {FEATURES.map((row) => (
                    <div key={row.label} className="grid grid-cols-2 gap-3 px-5 py-3 text-sm">
                      <dt className="font-semibold text-foreground">{row.label}</dt>
                      <dd>
                        <Cell value={row.values[p.key]} featured={p.featured} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI math */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel>The Math</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
              One Crore-Level Win Pays for Years of the System
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "One trade show", v: "₹10–15 lakhs", note: "≈ 20 business cards" },
              { k: "One mid-level hire", v: "₹3–5 lakhs/mo", note: "Salary alone" },
              { k: "One ₹25 Cr RFQ", v: "Single result", note: "Pays back years of system" },
              {
                k: "Kalk Growth System",
                v: "From ₹1.3L/month",
                note: "Works 365 days/year",
                highlight: true,
              },
            ].map((x) => (
              <div
                key={x.k}
                className={`rounded-xl border p-6 ${
                  x.highlight ? "border-primary/40 bg-primary/5" : "border-border bg-card"
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {x.k}
                </p>
                <p
                  className={`mt-3 font-display text-2xl font-extrabold ${
                    x.highlight ? "text-primary" : "text-foreground"
                  }`}
                >
                  {x.v}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{x.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLUSTERS */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>India Coverage</SectionLabel>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
            We Know Your Industrial Ecosystem
          </h2>
          <div className="mt-12 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {CLUSTERS.map((c) => (
              <div
                key={c}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-5"
              >
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-semibold text-foreground">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* India case studies */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>India Case Studies</SectionLabel>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
            Indian Manufacturers Who Built the System
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <CaseStudyCard
              tag="Lead Generation"
              title="One Digital System. One RFQ. ₹25 Crore."
              excerpt="The right buyer found them online at exactly the right moment."
              to="/case-studies/25-crore-rfq"
            />
            <CaseStudyCard
              tag="Lead Generation"
              title="Saudi Aramco Opportunity From a Pune Workshop"
              excerpt="Zero international visibility to global enterprise opportunity."
              to="/case-studies/saudi-aramco"
            />
            <CaseStudyCard
              tag="ERP"
              title="From 6 Disconnected Tools to One Unified Odoo System"
              excerpt="Real-time visibility, mobile operations, zero people dependency."
              to="/case-studies/erp-unified-system"
            />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
