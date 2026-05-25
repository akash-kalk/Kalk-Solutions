import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { SectionLabel } from "@/components/SectionLabel";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { TrustBadges } from "@/components/TrustBadges";
import erpImg from "@/assets/erp-control-room.jpg";

export const Route = createFileRoute("/erp")({
  head: () => ({
    meta: [
      {
        title:
          "Odoo ERP Implementation Partner for Manufacturing | India & Global | Kalk Solutions",
      },
      {
        name: "description",
        content:
          "Odoo Silver Partner. ERP implementation for Indian & international manufacturers. Replace 6 disconnected tools with one unified Odoo system. Free ERP readiness audit.",
      },
      { property: "og:title", content: "Odoo ERP for Manufacturers | Kalk Solutions" },
      {
        property: "og:description",
        content:
          "Replace 6 disconnected tools with one unified Odoo system. Implementation, training, and hypercare.",
      },
      { property: "og:image", content: "https://kalksolutions.com/og-erp.jpg" },
      { property: "og:url", content: "https://kalksolutions.com/erp" },
      { property: "twitter:image", content: "https://kalksolutions.com/og-erp.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://kalksolutions.com/erp" }],
  }),
  component: ErpPage,
});

const PAINS = [
  {
    title: "Disconnected Systems",
    before:
      "Design in TeamCenter → manual email to Purchase → Excel PO → vendor email chains → Tally accounting → PagarBook HR. Nothing talks to each other.",
    after:
      "Integrated Odoo: BOM sync → auto PO creation → vendor communication from Odoo → unified HR + Accounting → one-click reports.",
  },
  {
    title: "Inventory Chaos",
    before:
      "Manual stock tracking via paperwork. No real-time visibility. Service operations fully manual.",
    after:
      "Real-time inventory tracking. Integrated helpdesk and service module. Full operational visibility.",
  },
  {
    title: "People Dependency",
    before:
      "Work stops when key person is unavailable. Critical processes tied to specific individuals.",
    after:
      "Odoo mobile app. Process-driven workflows. Work continues remotely. No single point of failure.",
  },
];

const STAGES = [
  "Discovery & Requirement Analysis",
  "Solution Design",
  "Implementation & Configuration",
  "Customization & Development",
  "Data Migration",
  "Testing & Quality Assurance",
  "Training & Documentation",
  "Go-Live Support",
  "Post Go-Live Support (Hypercare — 3 months free)",
  "Ongoing Support & Optimization (optional)",
];

function ErpPage() {
  return (
    <SiteShell>
      {/* HERO with image baked into background */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <img
          src={erpImg}
          alt="Manufacturing control room with multiple monitors showing Odoo ERP dashboards"
          fetchPriority="high"
          decoding="async"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/65 to-ink" aria-hidden />
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <SectionLabel>Odoo ERP for Manufacturers</SectionLabel>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl">
            Your Business Is Running on 6 Different Tools.
            <br /><span className="text-primary">That's Why It's Running Slow.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            We implement Odoo ERP for manufacturers — connecting sales, purchase, inventory,
            production, HR, and accounting into one integrated system.
          </p>
          <Link
            to="/free-audit"
            className="cta-shine mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground"
          >
            Book Free ERP Readiness Audit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="border-b border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TrustBadges variant="light" />
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>The 3 Pain Points We Solve</SectionLabel>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
            Before vs After Odoo
          </h2>
          <div className="mt-14 space-y-8">
            {PAINS.map((p) => (
              <div key={p.title} className="overflow-hidden rounded-2xl border border-border">
                <div className="border-b border-border bg-muted px-6 py-4">
                  <h3 className="font-display text-xl font-bold text-foreground">{p.title}</h3>
                </div>
                <div className="grid gap-px bg-border md:grid-cols-2">
                  <div className="bg-card p-6">
                    <div className="flex items-center gap-2 text-primary">
                      <AlertTriangle className="h-4 w-4" />
                      <p className="text-xs font-bold uppercase tracking-[0.2em]">Before</p>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.before}</p>
                  </div>
                  <div className="bg-ink p-6 text-white">
                    <div className="flex items-center gap-2 text-highlight">
                      <CheckCircle2 className="h-4 w-4" />
                      <p className="text-xs font-bold uppercase tracking-[0.2em]">After</p>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white/85">{p.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Implementation Process</SectionLabel>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
            10 Stages. Zero Surprises.
          </h2>
          <ol className="mt-12 grid gap-4 md:grid-cols-2">
            {STAGES.map((s, i) => (
              <li
                key={s}
                className="flex gap-4 rounded-xl border border-border bg-card p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary font-display text-sm font-bold text-primary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="pt-1 text-sm font-semibold text-foreground">{s}</span>
              </li>
            ))}
          </ol>

          <p className="mx-auto mt-12 max-w-3xl rounded-xl border border-primary/30 bg-primary/5 p-6 text-center font-display text-lg font-bold text-foreground sm:text-xl">
            "No go-live without training, validated data, tested processes, and business sign-off."
          </p>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Timelines</SectionLabel>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
            What to Expect
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              { name: "Small", scope: "3–5 modules", time: "8–12 weeks" },
              { name: "Mid-size", scope: "5–8 modules + integrations", time: "4–8 months" },
              { name: "Large / Complex", scope: "MRP + multi-company + heavy custom", time: "9–12 months" },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-card p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{t.name}</p>
                <p className="mt-3 font-display text-3xl font-extrabold text-foreground">{t.time}</p>
                <p className="mt-3 text-sm text-muted-foreground">{t.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Our Team</SectionLabel>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
            Who You'll Work With
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Project Manager",
              "Functional Consultant",
              "Technical Developer",
              "QA Engineer",
              "Data Migration Specialist",
              "Trainer",
              "Support Team",
              "Customer Success",
            ].map((r) => (
              <div key={r} className="rounded-xl border border-border bg-card p-5 text-center">
                <p className="font-display text-base font-bold text-foreground">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>ERP Case Studies</SectionLabel>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
            Anonymous, Real, and Specific
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <CaseStudyCard
              tag="ERP Transformation"
              title="From 5 Disconnected Tools to One Unified Manufacturing System"
              excerpt="TeamCenter, Excel, PagarBook, Tally, emails — replaced by Odoo. ~12 months."
              to="/case-studies/erp-unified-system"
            />
            <CaseStudyCard
              tag="ERP Transformation"
              title="How One Manufacturer Discovered They Were Running at Half Their Expected Margin"
              excerpt="Procore + Sage + Monday + QuickBooks → Odoo. Margin recovered. ~24 months."
              to="/case-studies/erp-margin-recovery"
            />
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Honest Ranges. No Surprises.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              { t: "Small implementation", p: "₹2–5 L / $5K–15K" },
              { t: "Mid-size", p: "₹8–20 L / $15K–40K" },
              { t: "Large / complex", p: "Custom quotation" },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-highlight">{x.t}</p>
                <p className="mt-3 font-display text-3xl font-extrabold text-white">{x.p}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-white/60">
            Includes 3 months free hypercare support post go-live. AMC/SLA plans available.
          </p>

          <Link
            to="/free-audit"
            className="cta-shine mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground"
          >
            Book Free ERP Readiness Audit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
