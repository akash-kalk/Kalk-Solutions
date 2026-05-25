import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { SectionLabel } from "@/components/SectionLabel";
import { AuditForm } from "@/components/AuditForm";

const WHATSAPP = "91XXXXXXXXXX";
const PREFILL = encodeURIComponent("Hi Viraj, I'd like to talk about Kalk Solutions.");

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Kalk Solutions | Manufacturing Growth Partner | Pune, India" },
      {
        name: "description",
        content:
          "Talk to Kalk Solutions — manufacturing growth partner based in Pune, India. Email, WhatsApp, or book a free audit.",
      },
      { property: "og:title", content: "Contact Kalk Solutions" },
      {
        property: "og:description",
        content: "Email, WhatsApp, or book your free Manufacturing Growth Audit.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <section className="bg-ink py-20 text-white sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-6xl">
            Let's Talk About Your Manufacturing Business.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            The fastest way to reach us is WhatsApp. For a structured conversation, book the free
            audit below.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <div className="space-y-6">
            <a
              href={`https://wa.me/${WHATSAPP}?text=${PREFILL}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <MessageCircle className="h-6 w-6 text-[#25D366]" />
              <div>
                <p className="font-display text-lg font-bold text-foreground">WhatsApp</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fastest reach. Pre-filled with your intro.
                </p>
              </div>
            </a>

            <a
              href="mailto:sales@kalksolutions.com"
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <p className="font-display text-lg font-bold text-foreground">Email</p>
                <p className="mt-1 text-sm text-muted-foreground">sales@kalksolutions.com</p>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <p className="font-display text-lg font-bold text-foreground">Office</p>
                <p className="mt-1 text-sm text-muted-foreground">Pune, India</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-ink p-6 text-white sm:p-8">
            <h2 className="font-display text-2xl font-bold">Book a Free Audit</h2>
            <p className="mt-2 text-sm text-white/70">
              30 minutes. No pitch. We'll prepare a tailored analysis before the call.
            </p>
            <div className="mt-6">
              <AuditForm variant="dark" />
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
