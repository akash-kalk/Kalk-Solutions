import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const navLinks = [
  { to: "/growth-system", label: "Growth System" },
  { to: "/erp", label: "ERP" },
  { to: "/ipo", label: "IPO Readiness", highlight: true },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/india", label: "India" },
  { to: "/international", label: "International" },
  { to: "/about", label: "About" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur shadow-lg" : "bg-ink/80 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="Kalk Solutions home" className="flex items-center">
          <Logo variant="light" />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`group relative inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                "highlight" in l && l.highlight
                  ? "text-white"
                  : "text-white/80 hover:text-white"
              }`}
              activeProps={{ className: "text-white font-semibold" }}
            >
              {l.label}
              {"highlight" in l && l.highlight && (
                <span className="rounded-full bg-primary px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary-foreground">
                  New
                </span>
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/free-audit"
            className="cta-shine inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Book Free Audit
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-md px-3 py-2 text-base font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                <span>{l.label}</span>
                {"highlight" in l && l.highlight && (
                  <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                    New
                  </span>
                )}
              </Link>
            ))}
            <Link
              to="/free-audit"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-md bg-primary px-3 py-3 text-center text-base font-semibold text-primary-foreground"
            >
              Book Free Audit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
