import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Trophy,
  Globe2,
  MapPin,
  Unlink2,
  EyeOff,
  UserX,
  Magnet,
  Cog,
  LayoutDashboard,
  CircuitBoard,
  ArrowDown,
  CheckCircle2,
} from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { SectionLabel } from "@/components/SectionLabel";
import { CountUp } from "@/components/CountUp";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { FAQ } from "@/components/FAQ";
import { AuditForm } from "@/components/AuditForm";
import { TrustBadges } from "@/components/TrustBadges";
import { PartnersStrip } from "@/components/PartnersStrip";
import { ResultsShowcase } from "@/components/ResultsShowcase";
import heroFactory from "@/assets/hero-factory.jpg";

const HERO_VIDEO_SRC =
  "https://videos.pexels.com/video-files/4488615/4488615-hd_1920_1080_25fps.mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Manufacturing Growth System India | Lead Gen + Odoo ERP | Kalk Solutions",
      },
      {
        name: "description",
        content:
          "Kalk Solutions: India's Manufacturing Growth System. B2B lead generation, sales control & Odoo ERP for manufacturers. Proven — ₹25Cr RFQ, Saudi Aramco opportunity, 30+ scaled.",
      },
      {
        property: "og:title",
        content: "India's Only Manufacturing Growth System | Kalk Solutions",
      },
      {
        property: "og:description",
        content:
          "Lead generation + sales control + Odoo ERP for manufacturers. Proven: ₹25Cr RFQ, Saudi Aramco opportunity, 30+ manufacturers scaled.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://kalksolutions.com/og-home.jpg" },
      { property: "og:url", content: "https://kalksolutions.com/" },
      { property: "twitter:image", content: "https://kalksolutions.com/og-home.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://kalksolutions.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is this just digital marketing?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. Most agencies run campaigns and measure clicks. We build a complete growth infrastructure — combining digital visibility, sales process control, and ERP. We measure RFQs, meetings, and revenue.",
              },
            },
            {
              "@type": "Question",
              name: "Why ₹1 lakh per month?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "One qualified client from our system covers your entire annual investment. We helped one manufacturer get a ₹25 crore RFQ.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

const FAQS = [
  {
    q: "Is this just digital marketing?",
    a: "No. Most agencies run campaigns and measure clicks. We build a complete growth infrastructure — combining digital visibility, sales process control, and ERP implementation. We measure RFQs, meetings, and revenue, not traffic.",
  },
  {
    q: "Why ₹1 lakh per month?",
    a: "One qualified client from our system covers your entire annual investment. We helped one manufacturer get a ₹25 crore RFQ. Another got the opportunity to work with Saudi Aramco. One result pays for years of the system.",
  },
  {
    q: "Do you only do ERP?",
    a: "No. ERP is Module 4 of our Growth System. Many clients start with lead generation and add ERP when they're ready to scale operations. Both can also be implemented together.",
  },
  {
    q: "How long until we see results?",
    a: "Lead generation: first qualified inquiries within 30–60 days. ERP: go-live in 8–12 weeks (small), 4–8 months (mid-size). Compound growth becomes significant at 6 months.",
  },
  {
    q: "Can you work with manufacturers outside India?",
    a: "Yes. We work with UAE, Gulf, USA, and international manufacturers. Our international packages are priced in USD. See our international page for details.",
  },
];

function HomePage() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        {/* AI-generated cinematic manufacturing video — autoplays muted as hero backdrop.
            Falls back to the hero image while the video buffers / on reduced-data. */}
        <video
          poster={heroFactory}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/60 to-ink" aria-hidden />
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
          <SectionLabel>India's Only Manufacturing Growth System</SectionLabel>
          <h1 className="mt-5 max-w-5xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="word-fade" style={{ animationDelay: "0ms" }}>Your</span>{" "}
            <span className="word-fade" style={{ animationDelay: "80ms" }}>Competitors</span>{" "}
            <span className="word-fade" style={{ animationDelay: "160ms" }}>Are</span>{" "}
            <span className="word-fade" style={{ animationDelay: "240ms" }}>Getting</span>
            <br />
            <span className="word-fade text-primary" style={{ animationDelay: "320ms" }}>₹25 Crore</span>{" "}
            <span className="word-fade text-primary" style={{ animationDelay: "400ms" }}>RFQs</span>{" "}
            <span className="word-fade" style={{ animationDelay: "480ms" }}>Online.</span>
            <br />
            <span className="word-fade" style={{ animationDelay: "560ms" }}>Are</span>{" "}
            <span className="word-fade" style={{ animationDelay: "640ms" }}>You?</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
            We help manufacturers across India and globally generate high-value B2B opportunities,
            control their sales process, and implement ERP — through one integrated system.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/85">
            <div className="flex items-center gap-2"><Trophy className="h-4 w-4 text-highlight" /> Saudi Aramco Supply Opportunity</div>
            <div className="hidden h-4 w-px bg-white/20 sm:block" />
            <div className="flex items-center gap-2"><Trophy className="h-4 w-4 text-highlight" /> ₹25 Crore Single RFQ</div>
            <div className="hidden h-4 w-px bg-white/20 sm:block" />
            <div className="flex items-center gap-2"><Trophy className="h-4 w-4 text-highlight" /> 30+ Manufacturers Scaled</div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/india"
              className="cta-shine inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground"
            >
              🇮🇳 I'm an Indian Manufacturer <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/international"
              className="cta-shine inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-transparent px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10"
            >
              🌍 I'm Outside India <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-6 flex items-center gap-2 text-xs text-white/60">
            Or scroll to learn how the system works <ArrowDown className="h-3 w-3" />
          </p>
        </div>
      </section>

      {/* TRUST STRIP — partners + badges */}
      <section className="border-b border-border bg-card py-12">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          <PartnersStrip variant="light" />
          <TrustBadges variant="light" />
        </div>
      </section>

      {/* REAL CLIENT RESULTS — Google Ads dashboard screenshots */}
      <ResultsShowcase />

      {/* AUDIENCE SELECTOR */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl bg-primary p-8 text-white sm:p-12">
              <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
              <div className="relative">
                <MapPin className="h-8 w-8 text-white/80" />
                <h3 className="mt-4 font-display text-3xl font-extrabold leading-tight">
                  ₹5 Cr – ₹50 Cr Revenue?
                </h3>
                <p className="mt-4 text-white/85">
                  We help Indian manufacturers stop depending on exhibitions and start attracting
                  crore-level buyers online — with ERP, CRM, and a complete digital growth system.
                </p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  India · Buyer Magnet + Lead Engine + ERP
                </p>
                <Link
                  to="/india"
                  className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-bold text-primary"
                >
                  See India Growth System <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-ink p-8 text-white sm:p-12">
              <div className="absolute inset-0 bg-grid opacity-100" aria-hidden />
              <div className="relative">
                <Globe2 className="h-8 w-8 text-highlight" />
                <h3 className="mt-4 font-display text-3xl font-extrabold leading-tight">
                  Manufacturing Company Outside India?
                </h3>
                <p className="mt-4 text-white/80">
                  We help international manufacturers implement Odoo ERP, build digital lead
                  generation systems, and scale operations — with a proven India-based team at
                  global quality.
                </p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  UAE · USA · Global · Odoo ERP
                </p>
                <Link
                  to="/international"
                  className="mt-8 inline-flex items-center gap-2 rounded-md bg-highlight px-5 py-2.5 text-sm font-bold text-highlight-foreground"
                >
                  See International Solutions <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel>The Real Problem</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
              Most Manufacturers Are Invisible to Their Best Buyers
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Unlink2,
                title: "Disconnected Systems",
                body: "TeamCenter, Excel, Tally, PagarBook, emails — all working in silos. No single source of truth. Data duplication, delays, and decisions made on gut feeling.",
              },
              {
                icon: EyeOff,
                title: "Invisible to High-Value Buyers",
                body: "The buyer who would give you a ₹5 crore order is searching Google right now — and finding your competitor. You're not invisible because your product is weak. You're invisible because your system is weak.",
              },
              {
                icon: UserX,
                title: "People-Dependent Operations",
                body: "If your key person is unavailable, does work stop? Most manufacturers we meet say yes. That's operational risk — and it can be eliminated with the right system.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-border bg-card p-7 shadow-sm"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-16 max-w-3xl text-center font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl">
            "The manufacturers growing 3x–10x have one thing you don't yet:{" "}
            <span className="text-primary">a system.</span>"
          </p>
        </div>
      </section>

      {/* SOLUTION — 4 modules */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel>The Kalk Growth System</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
              Not an Agency. Not Software. A Complete Manufacturing Growth Infrastructure.
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {[
              {
                icon: Magnet,
                num: "01",
                title: "The Buyer Magnet",
                body: "Your digital presence rebuilt to attract the right B2B buyers — in India, UAE, USA, and globally. Buyers find you before they find your competition.",
                tags: ["SEO", "Website", "International Positioning", "RFQ System"],
                dark: true,
              },
              {
                icon: Cog,
                num: "02",
                title: "The Lead Engine",
                body: "Consistent flow of qualified RFQs and inquiries. Not random traffic — specific buyers from your target industries and geographies, delivered every month.",
                tags: ["Google Ads", "LinkedIn", "SEO", "Content Marketing"],
                dark: false,
              },
              {
                icon: LayoutDashboard,
                num: "03",
                title: "The Sales Control System",
                body: "Every inquiry tracked. Every follow-up automated. Every quotation controlled. Your sales director knows exactly where every deal stands every day.",
                tags: ["CRM", "Automation", "Pipeline", "Reporting"],
                dark: true,
              },
              {
                icon: CircuitBoard,
                num: "04",
                title: "ERP Integration (Odoo)",
                body: "Centralised operations, controlled pricing, real-time visibility across production, inventory, and sales. From disconnected tools to one unified system.",
                tags: ["Odoo", "BOM", "Purchase", "Inventory", "Accounting"],
                dark: false,
              },
            ].map((m) => (
              <div
                key={m.num}
                className={`p-8 sm:p-10 ${m.dark ? "bg-ink text-white" : "bg-card text-foreground"}`}
              >
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-md ${m.dark ? "bg-primary/20 text-primary" : "bg-primary/10 text-primary"}`}>
                  <m.icon className="h-5 w-5" />
                </div>
                <p className={`mt-5 text-xs font-semibold tracking-[0.3em] ${m.dark ? "text-highlight" : "text-primary"}`}>
                  {m.num}
                </p>
                <h3 className={`mt-1 font-display text-2xl font-bold ${m.dark ? "text-white" : "text-foreground"}`}>
                  {m.title}
                </h3>
                <p className={`mt-4 text-sm leading-relaxed ${m.dark ? "text-white/75" : "text-muted-foreground"}`}>
                  {m.body}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {m.tags.map((t) => (
                    <span
                      key={t}
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold ${m.dark ? "bg-white/10 text-white/80" : "bg-muted text-foreground"}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel>Proven Results</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Manufacturers Who Stopped Waiting and Started Winning
            </h2>
          </div>

          <div className="mt-14 grid gap-8 border-y border-white/10 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: 25, prefix: "₹", suffix: " Cr", label: "Single RFQ Generated" },
              { value: 1, label: "Saudi Aramco Opportunity Created" },
              { value: 30, suffix: "+", label: "Manufacturers Scaled" },
              { value: 6, suffix: " → 1", label: "ERP Tool Consolidations Delivered" },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-display text-5xl font-extrabold text-highlight sm:text-6xl">
                  <CountUp end={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-sm text-white/70">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Link
              to="/case-studies/kuber"
              className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-white/8"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-sm bg-primary/15 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  Verified Client
                </span>
                <span className="font-display text-3xl font-extrabold text-highlight sm:text-4xl">
                  12x Leads
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-extrabold leading-tight text-white">
                Kuber Precision Technology
              </h3>
              <p className="mt-3 max-w-2xl text-sm text-white/75">
                Mass transfer equipment manufacturer with stronger search visibility, better conversions, and a full digital demand engine.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-highlight">
                Read full case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              to="/case-studies/om-steel"
              className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-white/8"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-sm bg-primary/15 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  Verified Client
                </span>
                <span className="font-display text-3xl font-extrabold text-highlight sm:text-4xl">
                  10x Leads
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-extrabold leading-tight text-white">
                Om Steel Industries
              </h3>
              <p className="mt-3 max-w-2xl text-sm text-white/75">
                Steel supplier case study showing how a stronger website, SEO, and paid campaigns rebuilt the inquiry funnel.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-highlight">
                Read full case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <CaseStudyCard
              tag="Lead Generation"
              title="One Digital System. One RFQ. ₹25 Crore."
              excerpt="The right buyer found them online at exactly the right moment."
              to="/case-studies/25-crore-rfq"
            />
            <CaseStudyCard
              tag="Lead Generation"
              title="A Precision Parts Manufacturer Got an Opportunity With Saudi Aramco"
              excerpt="From zero international visibility to a global giant knocking on their door."
              to="/case-studies/saudi-aramco"
            />
            <CaseStudyCard
              tag="ERP Transformation"
              title="From 6 Disconnected Tools to One Integrated System"
              excerpt="TeamCenter, Excel, PagarBook, Tally — all replaced by a single Odoo implementation."
              to="/case-studies/erp-unified-system"
            />
            <CaseStudyCard
              tag="ERP Transformation"
              title="Discovering Half-Margin: Tools Hid the Real P&L"
              excerpt="Procore + Sage + Monday + QuickBooks → Odoo. Margin recovered."
              to="/case-studies/erp-margin-recovery"
            />
          </div>
        </div>
      </section>

      {/* ERP CALLOUT */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-ink p-8 text-white sm:p-14">
            <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">
              Your Business Is Running on 6 Different Tools.
              <br /><span className="text-primary">That's Why It's Running Slow.</span>
            </h2>

            <div className="mt-10 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">Before</p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {["TeamCenter + Excel", "PagarBook + Tally", "Email + Manual reports", "Result: Chaos, delays, people dependency"].map((x) => (
                    <li key={x} className="flex gap-2"><span className="text-primary">•</span>{x}</li>
                  ))}
                </ul>
              </div>
              <ArrowRight className="hidden h-10 w-10 text-highlight lg:block" />
              <div className="rounded-xl border border-highlight/30 bg-highlight/10 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-highlight">After (Odoo)</p>
                <ul className="mt-4 space-y-2 text-sm text-white/85">
                  {["One unified system", "Automated BOM → Auto PO", "Unified HR + Accounting", "Real-time dashboards, mobile anywhere"].map((x) => (
                    <li key={x} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-highlight" />{x}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <Link
                to="/free-audit"
                className="cta-shine inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground"
              >
                Book Free ERP Readiness Audit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Voices From the Floor</SectionLabel>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
            What Manufacturers Say
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { name: "Rajesh", company: "Precision parts manufacturer, Pune", quote: "We were drowning in trade-show business cards. Kalk built a system that brings the right buyers to us — including a Gulf opportunity we never imagined." , result: "Gulf opportunity unlocked"},
              { name: "Anil", company: "Steel fabrication, Maharashtra", quote: "One inquiry from their funnel was worth more than 5 years of marketing combined. ₹25 crore. From a single RFQ.", result: "₹25 Cr RFQ received" },
              { name: "Priya", company: "Engineering controls, Bhosari", quote: "We replaced 5 tools with Odoo. Today our shopfloor and accounts speak the same language. No more 'I'll check with the office'.", result: "5 tools → 1 system" },
            ].map((t) => (
              <div key={t.name} className="flex flex-col rounded-xl border border-border bg-card p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.company}</p>
                  </div>
                </div>
                <p className="mt-5 flex-1 text-sm italic leading-relaxed text-foreground">"{t.quote}"</p>
                <p className="mt-4 inline-flex w-fit rounded bg-primary/10 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                  {t.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COST OF INACTION — pricing intentionally lives on /india and /international */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel>The Real Cost</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
              What Does It Cost to Lose One ₹25 Crore RFQ?
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              The buyer who would change your year is searching online right now —
              and finding your competitor. Every quarter without a system, that gap widens.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                k: "One mid-size RFQ lost",
                v: "₹2–5 Cr",
                note: "A single missed inquiry from a high-intent buyer.",
              },
              {
                k: "One enterprise opportunity lost",
                v: "₹25 Cr+",
                note: "What a properly built funnel can generate in a single deal.",
              },
              {
                k: "Status-quo cost per year",
                v: "Compounds",
                note: "Every quarter your competitor builds visibility you don't.",
              },
            ].map((x) => (
              <div
                key={x.k}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {x.k}
                </p>
                <p className="mt-4 font-display text-4xl font-extrabold text-primary">
                  {x.v}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{x.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <Link
              to="/india"
              className="flex items-center justify-between rounded-2xl bg-primary px-7 py-6 text-white transition-transform hover:-translate-y-0.5"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                  🇮🇳 For Indian Manufacturers
                </p>
                <p className="mt-2 font-display text-xl font-bold">
                  See India Packages & Pricing
                </p>
              </div>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/international"
              className="flex items-center justify-between rounded-2xl bg-ink px-7 py-6 text-white transition-transform hover:-translate-y-0.5"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-highlight">
                  🌍 For International Manufacturers
                </p>
                <p className="mt-2 font-display text-xl font-bold">
                  See International Packages & Pricing
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-highlight" />
            </Link>
          </div>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section className="bg-primary py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionLabel className="text-white">Free Audit</SectionLabel>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                Free Manufacturing Growth Audit
              </h2>
              <p className="mt-4 text-lg text-white/85">30 minutes. No pitch. Just clarity.</p>
              <ul className="mt-8 space-y-4 text-white/90">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                  <span>Where your buyers are searching — and why they're finding your competitors instead of you.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                  <span>Your 3 biggest digital gaps costing you qualified inquiries right now.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                  <span>A clear recommendation: which part of the Growth System moves the needle fastest for your specific business.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-ink p-6 sm:p-8">
              <AuditForm variant="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
            Common Questions
          </h2>
          <div className="mt-10">
            <FAQ items={FAQS} />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
