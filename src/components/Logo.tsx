import logoUrl from "@/assets/kalk-logo.png";

type LogoProps = { className?: string; variant?: "light" | "dark" };

/**
 * Real KALK wordmark — orange-red with white arrow inside the A.
 * On dark surfaces (variant="light") we render the asset as-is.
 * On light surfaces (variant="dark") we render the same asset; the orange
 * mark reads beautifully on both, matching the supplied brand artwork.
 */
export function Logo({ className, variant = "light" }: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <img
        src={logoUrl}
        alt="Kalk Solutions"
        width={132}
        height={40}
        decoding="async"
        className="h-8 w-auto sm:h-9"
      />
      <span
        className={`hidden font-display text-[10px] font-semibold uppercase tracking-[0.28em] sm:inline ${
          variant === "light" ? "text-white/80" : "text-foreground/70"
        }`}
      >
        Solutions
      </span>
    </div>
  );
}
