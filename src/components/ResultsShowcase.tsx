import { SectionLabel } from "@/components/SectionLabel";

/**
 * Real Google Ads dashboard screenshots from a live Kalk Solutions client.
 * These are reproduced 1:1 from the platform — no mockups, no inflated numbers.
 *
 * Cards float each screenshot inside a "browser chrome" frame so it reads as
 * an authentic platform export rather than a stock graphic.
 */
const RESULTS = [
  {
    src: "/results/result-conversions.png",
    alt: "Google Ads dashboard showing 39 conversions and 7.24% CTR over 30 days",
    headline: "39 conversions",
    sub: "7.24% CTR · ₹322 cost / conv.",
    caption: "Manufacturing client · 30-day window",
  },
  {
    src: "/results/result-cost-conv.png",
    alt: "Google Ads dashboard showing ₹45.9k spend producing 172 conversions",
    headline: "172 conversions",
    sub: "₹45.9K spend · ₹28.45 avg CPC",
    caption: "Manufacturing client · 28-day window",
  },
  {
    src: "/results/result-ctr.png",
    alt: "Google Ads dashboard showing 9.97% click-through rate",
    headline: "9.97% CTR",
    sub: "₹13.80 avg CPC · ₹65.82 cost / conv.",
    caption: "Manufacturing client · 28-day window",
  },
];

export function ResultsShowcase() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Real Dashboards · Live Clients</SectionLabel>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
            We don't show stock graphs.
            <br />
            <span className="text-primary">We show real screens.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Below are unedited Google Ads screenshots from manufacturing clients
            we currently run. Same platform you'd log into. Same numbers your
            team would see.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {RESULTS.map((r) => (
            <figure
              key={r.headline}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 border-b border-border bg-muted/60 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="ml-3 truncate text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  ads.google.com / overview
                </span>
              </div>

              <div className="overflow-hidden bg-white">
                <img
                  src={r.src}
                  alt={r.alt}
                  loading="lazy"
                  width={1920}
                  height={780}
                  className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>

              <figcaption className="border-t border-border p-5">
                <p className="font-display text-2xl font-extrabold text-foreground">
                  {r.headline}
                </p>
                <p className="mt-1 text-sm font-semibold text-primary">{r.sub}</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                  {r.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-muted-foreground">
          Screenshots taken from active client accounts. Account names and
          campaigns blurred under our standard NDA.
        </p>
      </div>
    </section>
  );
}
