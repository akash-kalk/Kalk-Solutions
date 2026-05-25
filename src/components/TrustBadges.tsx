import { Award, ShieldCheck, Lock } from "lucide-react";

/**
 * Honest trust strip. We only claim what we genuinely hold.
 * "Odoo Silver Partner" comes from the founder brief — moving toward Gold.
 * The other items are integrity claims, not third-party certifications.
 */
const ITEMS = [
  {
    icon: Award,
    title: "Odoo Silver Partner",
    sub: "Moving to Gold • Certified implementer",
  },
  {
    icon: ShieldCheck,
    title: "NDA-First Engagements",
    sub: "Your data, customers & pricing stay private",
  },
  {
    icon: Lock,
    title: "Founder-Led Delivery",
    sub: "Direct access to senior team — no juniors",
  },
];

type Props = { variant?: "dark" | "light" };

export function TrustBadges({ variant = "light" }: Props) {
  const isDark = variant === "dark";
  return (
    <div
      className={`grid gap-3 sm:grid-cols-3 ${
        isDark ? "" : ""
      }`}
      aria-label="Trust signals"
    >
      {ITEMS.map((b) => (
        <div
          key={b.title}
          className={`flex items-center gap-3 rounded-xl border p-4 ${
            isDark
              ? "border-white/10 bg-white/5"
              : "border-border bg-card"
          }`}
        >
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${
              isDark ? "bg-highlight/15 text-highlight" : "bg-primary/10 text-primary"
            }`}
          >
            <b.icon className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p
              className={`font-display text-sm font-bold leading-tight ${
                isDark ? "text-white" : "text-foreground"
              }`}
            >
              {b.title}
            </p>
            <p
              className={`mt-0.5 text-xs ${
                isDark ? "text-white/60" : "text-muted-foreground"
              }`}
            >
              {b.sub}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
