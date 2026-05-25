import { useEffect, useRef, useState } from "react";

// Placeholder Calendly URL — swap when you provide the real link.
const CALENDLY_URL = "https://calendly.com/your-link/manufacturing-audit";

/**
 * Performance-conscious Calendly embed.
 * The widget script + iframe are heavy; we defer them until the user
 * either scrolls the embed into view OR clicks "Show calendar".
 */
export function CalendlyEmbed() {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current || show) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [show]);

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-lg border border-border bg-muted"
    >
      {!show ? (
        <div className="flex min-h-[420px] flex-col items-center justify-center gap-3 p-8 text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Calendly
          </div>
          <h4 className="font-display text-xl font-bold text-foreground">
            Pick a 30-minute slot
          </h4>
          <p className="max-w-sm text-sm text-muted-foreground">
            Loading the calendar… or open it in a new tab below.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Open Calendly →
          </a>
        </div>
      ) : (
        <iframe
          src={CALENDLY_URL}
          title="Book a 30-minute audit"
          loading="lazy"
          className="h-[640px] w-full border-0"
        />
      )}
    </div>
  );
}
