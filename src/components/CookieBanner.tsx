import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Language, getRoutes } from "../lib/i18n";

export function CookieBanner({ lang }: { lang: Language }) {
  const [isVisible, setIsVisible] = useState(false);
  const r = getRoutes(lang);

  useEffect(() => {
    const consent = localStorage.getItem("vigias_cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("vigias_cookie_consent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-brand-ink text-brand-bg p-6 z-50 shadow-2xl border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm font-sans font-light text-brand-bg/80 text-center md:text-left leading-relaxed">
          Utilizamos cookies essenciais para melhorar a sua experiência e
          serviços de reservas. Ao continuar a navegar, aceita a nossa{" "}
          <Link
            to={r.privacy}
            className="underline hover:text-white transition"
          >
            Política de Privacidade e Cookies
          </Link>{" "}
          (RGPD).
        </div>
        <button
          onClick={handleAccept}
          className="bg-brand-bg text-brand-ink px-10 py-3 text-xs uppercase font-medium letter-spacing-wide hover:bg-zinc-200 transition whitespace-nowrap"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
