import { useState, useEffect } from "react";
import { X, BadgePercent } from "lucide-react";
import { Link } from "react-router-dom";
import { Language, getRoutes } from "../lib/i18n";

export function OfferPopup({ lang }: { lang: Language }) {
  const [isVisible, setIsVisible] = useState(false);
  const r = getRoutes(lang);

  const content = {
    pt: {
      text: "Benefícios exclusivos ao reservar diretamente connosco",
      cta: "VER CASAS",
    },
    es: {
      text: "Beneficios exclusivos al reservar directamente con nosotros",
      cta: "VER VILLAS",
    },
    en: {
      text: "Exclusive benefits by direct booking with us",
      cta: "SEE ROOMS",
    }
  }[lang];

  useEffect(() => {
    // Show popup after 30 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
      
      // Hide popup after 15 seconds of being shown
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 15000);
      
      return () => clearTimeout(hideTimer);
    }, 30000);
    
    return () => clearTimeout(showTimer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-right-8 duration-500 fade-in shadow-2xl">
      <div className="bg-[#382F2D] text-[#E8E6E1] p-6 pr-10 w-[280px] md:w-[320px] relative font-sans shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 left-4 text-[#E8E6E1]/50 hover:text-white transition-colors"
        >
          <X strokeWidth={1} className="w-5 h-5 pointer-events-none" />
        </button>
        <div className="mt-6 flex flex-row gap-4 items-start">
          <div className="mt-1 flex-shrink-0">
            <BadgePercent className="w-5 h-5" strokeWidth={1.5} />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm font-light leading-relaxed">
              {content.text}
            </p>
            <Link 
              to={r.houses} 
              className="text-[11px] tracking-[0.15em] uppercase font-bold border-b border-[#E8E6E1] pb-1 w-fit hover:text-white transition-colors"
              onClick={() => setIsVisible(false)}
            >
              {content.cta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
