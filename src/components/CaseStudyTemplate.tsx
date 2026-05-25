import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { SectionLabel } from "@/components/SectionLabel";
import { AuditForm } from "@/components/AuditForm";

export type CaseStudyData = {
  tag: string;
  industry: string;
  location: string;
  result: string;
  heroStat: string;
  heroStatLabel: string;
  title: string;
  intro: string;
  business: string;
  challenge: string;
  whatWeDid: string[];
  resultBody: string;
  takeaway: string;
  timeline?: string;
};

export function CaseStudyTemplate({ data, slug }: { data: CaseStudyData; slug: string }) {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-grid" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
            <Link to="/case-studies" className="font-semibold text-white/60 hover:text-white">
              Case Studies
            </Link>
            <span className="text-white/30">/</span>
            <span className="rounded-sm bg-primary/20 px-2 py-1 font-bold uppercase tracking-[0.2em] text-primary">
              {data.tag}
            </span>
            <span className="text-white/60">{data.industry}</span>
            <span className="text-white/30">·</span>
            <span className="text-white/60">{data.location}</span>
          </div>

          <h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            {data.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-white/75">{data.intro}</p>

          <div className="mt-10 inline-flex items-baseline gap-3 border-l-4 border-primary pl-5">
            <span className="font-display text-5xl font-extrabold text-highlight sm:text-6xl">
              {data.heroStat}
            </span>
            <span className="text-sm uppercase tracking-[0.2em] text-white/70">
              {data.heroStatLabel}
            </span>
          </div>
        </div>
      </section>

      {/* Body + sticky sidebar */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.6fr_1fr] lg:px-8">
          <article className="space-y-12">
            <div>
              <SectionLabel>The Business</SectionLabel>
              <p className="mt-3 leading-relaxed text-foreground">{data.business}</p>
            </div>

            <div>
              <SectionLabel>The Challenge</SectionLabel>
              <p className="mt-3 leading-relaxed text-foreground">{data.challenge}</p>
            </div>

            <div>
              <SectionLabel>What We Did</SectionLabel>
              <ol className="mt-4 space-y-4">
                {data.whatWeDid.map((step, i) => (
                  <li key={i} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary font-display text-sm font-bold text-primary-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="pt-1 text-sm leading-relaxed text-foreground">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <SectionLabel>The Result</SectionLabel>
              <p className="mt-3 leading-relaxed text-foreground">{data.resultBody}</p>
              {data.timeline && (
                <p className="mt-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Timeline:</span> {data.timeline}
                </p>
              )}
            </div>

            <div className="rounded-2xl bg-ink p-8 text-white">
              <SectionLabel className="text-highlight">Key Takeaway</SectionLabel>
              <p className="mt-4 font-display text-2xl font-bold leading-snug">{data.takeaway}</p>
            </div>
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-xl font-bold text-foreground">
                Want results like this?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                30 minutes. No pitch. Just clarity.
              </p>
              <div className="mt-5">
                <AuditForm variant="light" compact />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            ← Back to all case studies
          </Link>
          <Link
            to="/free-audit"
            className="cta-shine ml-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
          >
            Book Free Audit <ArrowRight className="h-4 w-4" />
          </Link>
          <span className="ml-4 text-xs text-muted-foreground">/ {slug}</span>
        </div>
      </section>
    </SiteShell>
  );
}
