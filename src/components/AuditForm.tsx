import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CalendlyEmbed } from "./CalendlyEmbed";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  company: z.string().trim().min(2, "Company is required").max(150),
  revenue: z.string().min(1, "Please select a range"),
  sector: z.string().trim().max(100).optional(),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  email: z.string().trim().email("Valid email required").max(255),
  challenge: z.string().min(1, "Please select your biggest challenge"),
});

type Values = z.infer<typeof schema>;

const REVENUE = [
  "₹5Cr – ₹10Cr",
  "₹10Cr – ₹25Cr",
  "₹25Cr – ₹50Cr",
  "$1M – $5M",
  "$5M – $20M",
  "$20M+",
];

const CHALLENGES = [
  "Getting qualified leads",
  "Sales process / follow-ups",
  "ERP / disconnected systems",
  "All of the above",
];

type Props = { variant?: "dark" | "light"; compact?: boolean };

export function AuditForm({ variant = "dark", compact = false }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = async (_values: Values) => {
    // Phase 1: no backend storage — mark as submitted to show next steps
    await new Promise((r) => setTimeout(r, 400));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-card p-6 text-foreground">
        <h3 className="font-display text-2xl font-bold">You're in. Let's pick a time.</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Book your 30-minute audit below — or message Viraj directly on WhatsApp for a faster
          response.
        </p>
        <div className="mt-5">
          <CalendlyEmbed />
        </div>
      </div>
    );
  }

  const labelCls = variant === "dark" ? "text-white/90" : "text-foreground";
  const inputCls =
    variant === "dark"
      ? "bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
      : "bg-white border-border text-foreground focus:border-primary";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}
    >
      <div className={compact ? "" : "sm:col-span-1"}>
        <label className={`mb-1 block text-xs font-semibold uppercase tracking-wide ${labelCls}`}>
          Your Name
        </label>
        <input
          {...register("name")}
          className={`w-full rounded-md border px-3 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${inputCls}`}
          placeholder="Full name"
        />
        {errors.name && <p className="mt-1 text-xs text-primary">{errors.name.message}</p>}
      </div>

      <div className={compact ? "" : "sm:col-span-1"}>
        <label className={`mb-1 block text-xs font-semibold uppercase tracking-wide ${labelCls}`}>
          Company
        </label>
        <input
          {...register("company")}
          className={`w-full rounded-md border px-3 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${inputCls}`}
          placeholder="Company name"
        />
        {errors.company && <p className="mt-1 text-xs text-primary">{errors.company.message}</p>}
      </div>

      <div className={compact ? "" : "sm:col-span-1"}>
        <label className={`mb-1 block text-xs font-semibold uppercase tracking-wide ${labelCls}`}>
          Revenue Range
        </label>
        <select
          {...register("revenue")}
          className={`w-full rounded-md border px-3 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${inputCls}`}
          defaultValue=""
        >
          <option value="" disabled>Select range</option>
          {REVENUE.map((r) => <option key={r} value={r}>{r}</option>)}
        </select>
        {errors.revenue && <p className="mt-1 text-xs text-primary">{errors.revenue.message}</p>}
      </div>

      <div className={compact ? "" : "sm:col-span-1"}>
        <label className={`mb-1 block text-xs font-semibold uppercase tracking-wide ${labelCls}`}>
          Industry / Sector
        </label>
        <input
          {...register("sector")}
          className={`w-full rounded-md border px-3 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${inputCls}`}
          placeholder="e.g. Precision parts"
        />
      </div>

      <div className={compact ? "" : "sm:col-span-1"}>
        <label className={`mb-1 block text-xs font-semibold uppercase tracking-wide ${labelCls}`}>
          Phone / WhatsApp
        </label>
        <input
          {...register("phone")}
          className={`w-full rounded-md border px-3 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${inputCls}`}
          placeholder="+91 ..."
        />
        {errors.phone && <p className="mt-1 text-xs text-primary">{errors.phone.message}</p>}
      </div>

      <div className={compact ? "" : "sm:col-span-1"}>
        <label className={`mb-1 block text-xs font-semibold uppercase tracking-wide ${labelCls}`}>
          Email
        </label>
        <input
          type="email"
          {...register("email")}
          className={`w-full rounded-md border px-3 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${inputCls}`}
          placeholder="you@company.com"
        />
        {errors.email && <p className="mt-1 text-xs text-primary">{errors.email.message}</p>}
      </div>

      <div className={compact ? "" : "sm:col-span-2"}>
        <label className={`mb-1 block text-xs font-semibold uppercase tracking-wide ${labelCls}`}>
          Biggest Challenge
        </label>
        <select
          {...register("challenge")}
          className={`w-full rounded-md border px-3 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${inputCls}`}
          defaultValue=""
        >
          <option value="" disabled>Select one</option>
          {CHALLENGES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        {errors.challenge && <p className="mt-1 text-xs text-primary">{errors.challenge.message}</p>}
      </div>

      <div className={compact ? "" : "sm:col-span-2"}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="cta-shine inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
        >
          {isSubmitting ? "Submitting..." : "Book My Free Audit →"}
        </button>
        <p className={`mt-2 text-center text-xs ${variant === "dark" ? "text-white/60" : "text-muted-foreground"}`}>
          30 minutes. No pitch. Just clarity.
        </p>
      </div>
    </form>
  );
}
