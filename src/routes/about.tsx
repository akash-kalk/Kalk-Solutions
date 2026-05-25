import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { SectionLabel } from "@/components/SectionLabel";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Kalk Solutions | Pune-Based Manufacturing Growth Partner" },
      {
        name: "description",
        content:
          "Kalk Solutions was built to help Indian and global manufacturers stop losing high-value buyers to weak systems. Founder-led, NDA-first, Odoo Silver Partner.",
      },
      { property: "og:title", content: "About Kalk Solutions" },
      {
        property: "og:description",
        content:
          "We exist for one reason: to help manufacturers build the system their business deserves.",
      },
      { property: "og:image", content: "https://kalksolutions.com/og-about.jpg" },
      { property: "og:url", content: "https://kalksolutions.com/about" },
      { property: "twitter:image", content: "https://kalksolutions.com/og-about.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://kalksolutions.com/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      {/* HERO with image baked into background */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <img
          src={aboutImg}
          alt="Founder presenting growth strategy to a manufacturing leadership team in a Pune boardroom"
          fetchPriority="high"
          decoding="async"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" aria-hidden />
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <SectionLabel>About</SectionLabel>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl">
            We Exist for One Reason: To Help Manufacturers Build the
            <span className="text-primary"> System Their Business Deserves.</span>
          </h1>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-foreground">The Story</h2>
            <p className="mt-4 leading-relaxed text-foreground">
              Kalk Solutions was founded by Viraj after watching too many capable Indian
              manufacturers lose enterprise opportunities — not because their products were weak,
              but because their systems were. Disconnected tools. No digital visibility. People-
              dependent operations.
            </p>
            <p className="mt-4 leading-relaxed text-foreground">
              We started by helping one manufacturer get visible to international buyers. That
              client received a Saudi Aramco supply opportunity. Another received a single
              ₹25 Crore RFQ through their digital funnel. We realised the same playbook —
              applied with discipline — could change how manufacturers grow.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl font-extrabold text-foreground">The Philosophy</h2>
            <p className="mt-4 leading-relaxed text-foreground">
              Most agencies sell campaigns. We build infrastructure. Most ERP partners sell
              software. We deliver business outcomes. Every engagement is measured by RFQs,
              meetings, margin, and revenue — never by clicks or vanity metrics.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl font-extrabold text-foreground">Who We Serve</h2>
            <p className="mt-4 leading-relaxed text-foreground">
              Indian manufacturers between ₹5 Cr and ₹50 Cr revenue, and international
              manufacturers across UAE, Gulf, and USA who want India-quality engineering at global
              standards. We work with founders, directors, and sales heads who are ready to stop
              waiting and start building.
            </p>
          </div>

          <div className="rounded-2xl bg-ink p-8 text-white">
            <p className="font-display text-2xl font-bold leading-snug sm:text-3xl">
              "Authority. Trust. Proven results. Every conversation we have, every page we ship,
              every line of code we write — has to earn those three words."
            </p>
            <p className="mt-4 text-sm text-white/60">— Viraj, Founder</p>
          </div>

          <div className="text-center">
            <Link
              to="/free-audit"
              className="cta-shine inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground"
            >
              Talk to Viraj <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
