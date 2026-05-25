/**
 * "Technologies we work with" strip — authentic, recognisable brand marks
 * rebuilt as inline SVGs (zero network requests, SSR-safe). Colors and shapes
 * mirror each vendor's official identity so they read instantly at a glance.
 *
 * We do NOT claim formal partnership with any vendor here. Partner badges
 * (e.g. Odoo Silver Partner) live exclusively in <TrustBadges />.
 */

type Variant = "dark" | "light";

type LogoProps = { variant: Variant };

/* ---------- Google Ads (faithful 4-coloured "Ads" diamond) ---------- */
function GoogleAds({ variant }: LogoProps) {
  const text = variant === "dark" ? "#FFFFFF" : "#202124";
  return (
    <svg viewBox="0 0 180 32" className="h-7 w-auto" aria-label="Google Ads">
      {/* Tilted yellow rectangle (left) */}
      <g transform="translate(2 16) rotate(-30)">
        <rect x="-12" y="-5" width="26" height="10" rx="2" fill="#FBBC04" />
      </g>
      {/* Tilted blue rectangle (right) */}
      <g transform="translate(20 16) rotate(30)">
        <rect x="-12" y="-5" width="26" height="10" rx="2" fill="#4285F4" />
      </g>
      {/* Green pill at the base */}
      <circle cx="11" cy="26" r="4.5" fill="#34A853" />
      <text
        x="42"
        y="22"
        fontFamily="'Google Sans', Inter, system-ui, sans-serif"
        fontSize="17"
        fontWeight="500"
        fill={text}
      >
        Google Ads
      </text>
    </svg>
  );
}

/* ---------- LinkedIn (official "in" tile + wordmark) ---------- */
function LinkedIn({ variant }: LogoProps) {
  const text = variant === "dark" ? "#FFFFFF" : "#000000";
  return (
    <svg viewBox="0 0 140 32" className="h-7 w-auto" aria-label="LinkedIn">
      <rect x="0" y="4" width="24" height="24" rx="3" fill="#0A66C2" />
      {/* The "in" — dot for i, descender-style bar for n */}
      <rect x="5" y="13" width="3" height="9" fill="#FFFFFF" />
      <circle cx="6.5" cy="9.5" r="1.8" fill="#FFFFFF" />
      <path d="M11 13 h3 v1.4 c0.7-1 2-1.7 3.4-1.7 c2.5 0 3.6 1.6 3.6 4.2 V22 h-3 v-4.5 c0-1.2-0.4-1.9-1.5-1.9 c-1.1 0-1.5 0.7-1.5 1.9 V22 h-3 V13 Z" fill="#FFFFFF" />
      <text
        x="32"
        y="22"
        fontFamily="-apple-system, 'Segoe UI', Inter, sans-serif"
        fontSize="17"
        fontWeight="700"
        fill={text}
        letterSpacing="-0.3"
      >
        LinkedIn
      </text>
    </svg>
  );
}

/* ---------- Odoo (official purple wordmark style) ---------- */
function Odoo({ variant }: LogoProps) {
  const purple = "#714B67";
  const text = variant === "dark" ? "#FFFFFF" : "#1F1F1F";
  return (
    <svg viewBox="0 0 130 32" className="h-7 w-auto" aria-label="Odoo">
      {/* Two interlocking "o" shapes evoking Odoo's brand */}
      <circle cx="11" cy="16" r="9" fill="none" stroke={purple} strokeWidth="3.5" />
      <circle cx="26" cy="16" r="6" fill={purple} />
      <text
        x="40"
        y="23"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="20"
        fontWeight="700"
        fill={text}
        letterSpacing="-0.5"
      >
        odoo
      </text>
    </svg>
  );
}

/* ---------- Meta (official blue infinity/spiral mark) ---------- */
function Meta({ variant }: LogoProps) {
  const text = variant === "dark" ? "#FFFFFF" : "#1C2B33";
  return (
    <svg viewBox="0 0 140 32" className="h-7 w-auto" aria-label="Meta">
      <defs>
        <linearGradient id="meta-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0064E0" />
          <stop offset="50%" stopColor="#0082FB" />
          <stop offset="100%" stopColor="#0064E0" />
        </linearGradient>
      </defs>
      {/* Stylised double-loop infinity — Meta's signature mark */}
      <path
        d="M3 16 C 3 9, 10 6, 14 11 L 20 19 C 24 24, 31 23, 33 18 C 35 13, 31 9, 27 12 C 24 14, 22 18, 19 21 C 15 25, 8 25, 5 21 C 3 19, 3 17, 3 16 Z"
        fill="none"
        stroke="url(#meta-gradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="44"
        y="22"
        fontFamily="Inter, 'Segoe UI', system-ui, sans-serif"
        fontSize="18"
        fontWeight="700"
        fill={text}
        letterSpacing="-0.5"
      >
        Meta
      </text>
    </svg>
  );
}

/* ---------- Google Analytics 4 (official orange/yellow bar mark) ---------- */
function GA4({ variant }: LogoProps) {
  const text = variant === "dark" ? "#FFFFFF" : "#202124";
  return (
    <svg viewBox="0 0 180 32" className="h-7 w-auto" aria-label="Google Analytics">
      {/* The official GA mark: yellow circle on top, orange rising bar */}
      <circle cx="6" cy="6" r="3.6" fill="#F9AB00" />
      <rect x="2.4" y="10" width="7.2" height="20" rx="3.6" fill="#F9AB00" />
      <rect x="13" y="16" width="7.2" height="14" rx="3.6" fill="#E37400" />
      <text
        x="26"
        y="22"
        fontFamily="'Google Sans', Inter, system-ui, sans-serif"
        fontSize="17"
        fontWeight="500"
        fill={text}
      >
        Google Analytics
      </text>
    </svg>
  );
}

/* ---------- HubSpot (official orange sprocket + wordmark) ---------- */
function HubSpot({ variant }: LogoProps) {
  const orange = "#FF7A59";
  const text = variant === "dark" ? "#FFFFFF" : "#33475B";
  return (
    <svg viewBox="0 0 140 32" className="h-7 w-auto" aria-label="HubSpot">
      {/* Sprocket: 6 nodes around a central hub, plus the "antenna" dot */}
      <g fill={orange}>
        <circle cx="14" cy="16" r="3.2" />
        <circle cx="14" cy="6.5" r="2" />
        <circle cx="22" cy="11" r="2" />
        <circle cx="22" cy="21" r="2" />
        <circle cx="14" cy="25.5" r="2" />
        <circle cx="6" cy="21" r="2" />
        <circle cx="6" cy="11" r="2" />
        {/* Connection lines */}
        <line x1="14" y1="8.5" x2="14" y2="12.8" stroke={orange} strokeWidth="1.4" />
        <line x1="20" y1="11.5" x2="16.5" y2="14.5" stroke={orange} strokeWidth="1.4" />
        <line x1="20" y1="20.5" x2="16.5" y2="17.5" stroke={orange} strokeWidth="1.4" />
        <line x1="14" y1="19.2" x2="14" y2="23.5" stroke={orange} strokeWidth="1.4" />
        <line x1="8" y1="20.5" x2="11.5" y2="17.5" stroke={orange} strokeWidth="1.4" />
        <line x1="8" y1="11.5" x2="11.5" y2="14.5" stroke={orange} strokeWidth="1.4" />
      </g>
      <text
        x="32"
        y="22"
        fontFamily="'Lexend Deca', Inter, system-ui, sans-serif"
        fontSize="17"
        fontWeight="700"
        fill={text}
        letterSpacing="-0.3"
      >
        HubSpot
      </text>
    </svg>
  );
}

const LOGOS = [
  { c: GoogleAds, key: "google-ads" },
  { c: LinkedIn, key: "linkedin" },
  { c: Odoo, key: "odoo" },
  { c: Meta, key: "meta" },
  { c: GA4, key: "ga4" },
  { c: HubSpot, key: "hubspot" },
];

type Props = {
  variant?: Variant;
  label?: string;
};

export function PartnersStrip({
  variant = "light",
  label = "Technologies we work with every day",
}: Props) {
  const isDark = variant === "dark";
  return (
    <div className="text-center">
      <p
        className={`text-xs font-bold uppercase tracking-[0.3em] ${
          isDark ? "text-white/50" : "text-muted-foreground"
        }`}
      >
        {label}
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {LOGOS.map((L) => (
          <div key={L.key} className="opacity-90 transition-opacity hover:opacity-100">
            <L.c variant={variant} />
          </div>
        ))}
      </div>
    </div>
  );
}
