import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { SectionLabel } from "@/components/SectionLabel";
import { Logo } from "@/components/Logo";
import { AuditForm } from "@/components/AuditForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/free-audit")({
  head: () => ({
    meta: [
      { title: "Free Manufacturing Growth Audit | 30 Minutes, No Pitch | Kalk Solutions" },
      {
        name: "description",
        content:
          "Free 30-minute Manufacturing Growth Audit. Honest analysis of your digital presence, sales process, and ERP readiness. No pitch.",
      },
      { property: "og:title", content: "Free Manufacturing Growth Audit | Kalk Solutions" },
      {
        property: "og:description",
        content:
          "30 minutes. No pitch. Just clarity on what's holding your manufacturing business back.",
      },
    ],
  }),
  component: FreeAuditPage,
});

function FreeAuditPage() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <Link to="/" aria-label="Home"><Logo variant="light" /></Link>
          <Link to="/" className="text-xs font-semibold text-white/60 hover:text-white">
            ← Back to site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel>Free Audit</SectionLabel>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Free Manufacturing Growth Audit
            </h1>
            <p className="mt-5 text-lg text-white/75">
              30 minutes. No sales pitch. Just complete clarity on what's holding your
              manufacturing business back.
            </p>

            <div className="mt-12">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-highlight">
                What happens
              </p>
              <ol className="mt-5 space-y-5">
                {[
                  { n: "01", t: "You tell us about your business", b: "5 minutes of your time before the call." },
                  { n: "02", t: "We analyse your current setup", b: "Digital presence, sales process, and operational systems." },
                  { n: "03", t: "We show you exactly where opportunity is being lost", b: "And what to fix first." },
                ].map((s) => (
                  <li key={s.n} className="flex gap-4">
                    <span className="font-display text-2xl font-extrabold text-primary">{s.n}</span>
                    <div>
                      <p className="font-display text-lg font-bold text-white">{s.t}</p>
                      <p className="mt-1 text-sm text-white/70">{s.b}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-12">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-highlight">
                What you get
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Full analysis of your online visibility vs. top 3 competitors",
                  "Your 3 biggest digital gaps losing you qualified RFQs right now",
                  "Honest assessment: do you need ERP now or growth system first?",
                  "A prioritised recommendation specific to your revenue and sector",
                ].map((x) => (
                  <li key={x} className="flex gap-3 text-white/85">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-highlight" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8">
              <h2 className="font-display text-2xl font-bold text-white">Reserve Your Audit</h2>
              <p className="mt-2 text-sm text-white/70">
                Tell us a bit about your business — we'll prepare a tailored analysis.
              </p>
              <div className="mt-6">
                <AuditForm variant="dark" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <WhatsAppButton />
    </div>
  );
}
