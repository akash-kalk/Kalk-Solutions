import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-4 max-w-md text-sm text-white/70">
              India's Manufacturing Growth System. We help manufacturers attract crore-level
              buyers, control sales, and run on one unified ERP.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> Pune, India
              </div>
              <a
                href="mailto:sales@kalksolutions.com"
                className="flex items-center gap-2 hover:text-white"
              >
                <Mail className="h-4 w-4 text-primary" /> sales@kalksolutions.com
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <Linkedin className="h-4 w-4 text-primary" /> LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Solutions
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link to="/growth-system" className="hover:text-white">Growth System</Link></li>
              <li><Link to="/erp" className="hover:text-white">ERP (Odoo)</Link></li>
              <li><Link to="/ipo" className="hover:text-white">IPO Readiness</Link></li>
              <li><Link to="/india" className="hover:text-white">For India</Link></li>
              <li><Link to="/international" className="hover:text-white">International</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/free-audit" className="hover:text-white">Free Audit</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <span>© 2026 Kalk Solutions. All rights reserved.</span>
          <span>India's Manufacturing Growth System</span>
        </div>
      </div>
    </footer>
  );
}
