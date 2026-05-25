import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-extrabold text-primary">404</h1>
        <h2 className="mt-4 font-display text-xl font-bold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

const SITE_URL = "https://kalksolutions.com";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kalk Solutions",
  url: SITE_URL,
  logo: `${SITE_URL}/og-default.jpg`,
  description:
    "India's Manufacturing Growth System. Lead generation, sales control, and Odoo ERP for manufacturers in India and globally.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  email: "sales@kalksolutions.com",
  sameAs: ["https://www.linkedin.com/"],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: "Kalk Solutions",
  image: `${SITE_URL}/og-default.jpg`,
  url: SITE_URL,
  telephone: "+91-XXXXXXXXXX",
  email: "sales@kalksolutions.com",
  priceRange: "₹₹₹",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "United States" },
  ],
  serviceType: [
    "Manufacturing growth consulting",
    "B2B lead generation",
    "Odoo ERP implementation",
    "Sales process automation",
  ],
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kalk Solutions — India's Manufacturing Growth System" },
      {
        name: "description",
        content:
          "Kalk Solutions helps manufacturers across India and globally generate high-value B2B leads, control sales, and implement Odoo ERP — through one integrated growth system.",
      },
      { name: "author", content: "Kalk Solutions" },
      { name: "theme-color", content: "#1A1A1A" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@KalkSolutions" },
      { property: "og:site_name", content: "Kalk Solutions" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      // Preconnect to Google Fonts so the display font lands fast
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(orgSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
