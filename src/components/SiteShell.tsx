import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { CookieBanner } from "./CookieBanner";

type Props = { children: React.ReactNode; hideNav?: boolean; hideFooter?: boolean };

export function SiteShell({ children, hideNav, hideFooter }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      {!hideNav && <Navbar />}
      <main className="flex-1">{children}</main>
      {!hideFooter && <Footer />}
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}
