import { useEffect, useState } from "react";

const KEY = "kalk-cookie-consent";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem(KEY)) {
      const t = setTimeout(() => setShow(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(KEY, "accepted");
    setShow(false);
  };
  const decline = () => {
    localStorage.setItem(KEY, "declined");
    setShow(false);
  };

  if (!show) return null;
  return (
    <div className="fixed bottom-5 left-5 z-40 max-w-sm rounded-lg border border-border bg-card p-4 shadow-2xl">
      <p className="text-sm text-foreground">
        We use cookies to improve your experience. You can accept or decline at any time.
      </p>
      <div className="mt-3 flex gap-2">
        <button
          onClick={accept}
          className="rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Accept
        </button>
        <button
          onClick={decline}
          className="rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
