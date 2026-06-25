import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, Calendar, X } from "lucide-react";

interface BookingSectionProps {
  houseId?: string;
  lang?: "pt" | "es" | "en";
  discreet?: boolean;
}

const ROOM_TYPES: Record<string, string> = {
  "casa-gaio": "119380",
  "casa-cal": "131903",
  "casa-feto": "143425",
  "casa-ocre": "146010",
  "casa-sol": "118083"
};

const HOUSE_NAMES: Record<string, Record<string, string>> = {
  "casa-gaio": { pt: "Casa Gaio", es: "Casa Gaio", en: "Casa Gaio" },
  "casa-cal": { pt: "Casa Cal", es: "Casa Cal", en: "Casa Cal" },
  "casa-feto": { pt: "Casa Feto", es: "Casa Feto", en: "Casa Feto" },
  "casa-ocre": { pt: "Casa Ocre", es: "Casa Ocre", en: "Casa Ocre" },
  "casa-sol": { pt: "Casa Sol", es: "Casa Sol", en: "Casa Sol" }
};

const TRANSLATIONS = {
  eyebrow: {
    pt: "Reservar ",
    es: "Reservar ",
    en: "Book "
  },
  eyebrowGlobal: {
    pt: "Reservas",
    es: "Reservas",
    en: "Reservations"
  },
  title: {
    pt: "Ver disponibilidade",
    es: "Ver disponibilidad",
    en: "Check availability"
  },
  text: {
    pt: "Escolha as datas da sua estadia e consulte a disponibilidade da {houseName} directamente no motor de reservas oficial das Vigias.",
    es: "Elija las fechas de su estancia y consulte la disponibilidad de {houseName} directamente en el motor de reservas oficial de las Vigias.",
    en: "Choose the dates of your stay and check {houseName}'s availability directly in the official Vigias booking engine."
  },
  textGlobal: {
    pt: "Consulte a disponibilidade das casas Vigias e escolha a opção ideal para a sua estadia no Norte Alentejano.",
    es: "Consulte la disponibilidad de las casas Vigias y elija la opción ideal para su estancia en el Norte Alentejano.",
    en: "Check the availability of the Vigias houses and choose the ideal option for your stay in Northern Alentejo."
  },
  button: {
    pt: "Reservar ",
    es: "Reservar ",
    en: "Book "
  }
};

const DISCREET_TRANSLATIONS = {
  eyebrow: {
    pt: "RESERVAR ESTADIA",
    es: "RESERVAR ESTANCIA",
    en: "BOOK YOUR STAY"
  },
  title: {
    pt: "Vivenciar as Vigias",
    es: "Vivenciar las Vigias",
    en: "Experience Vigias"
  },
  text: {
    pt: "Planeie a sua estadia e consulte a disponibilidade das nossas casas diretamente no motor de reservas oficial.",
    es: "Planifique su estancia y consulte la disponibilidad de nuestras casas directamente en el motor de reservas oficial.",
    en: "Plan your stay and check the availability of our houses directly in the official booking engine."
  }
};

export function VigiasBookingSection({ houseId, lang = "pt", discreet = false }: BookingSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const roomType = houseId ? ROOM_TYPES[houseId] : undefined;
  const houseNameObj = houseId ? HOUSE_NAMES[houseId] : undefined;
  const currentHouseName = houseNameObj ? (houseNameObj[lang] || houseNameObj.pt) : "";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear any pre-existing elements inside the container
    container.innerHTML = "";

    // Create Siteminder booking widget target div
    const ibeDiv = document.createElement("div");
    ibeDiv.className = "ibe";
    ibeDiv.setAttribute("data-region", "emea");
    ibeDiv.setAttribute("data-channelcode", "vigiasdirect");
    ibeDiv.setAttribute("data-widget", "embed");
    ibeDiv.setAttribute("data-query-locale", lang);
    ibeDiv.setAttribute("data-query-currency", "EUR");
    ibeDiv.setAttribute("data-mobile_fullscreen", "false");
    ibeDiv.setAttribute("data-use_parent", "true");

    container.appendChild(ibeDiv);

    // Create siteminder javascript element dynamically on mount
    const script = document.createElement("script");
    script.id = "siteminder-ibe-script";
    script.src = "https://widget.siteminder.com/ibe.min.js";
    script.async = true;
    container.appendChild(script);

    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [lang]);

  const transText = discreet
    ? (DISCREET_TRANSLATIONS.text[lang] || DISCREET_TRANSLATIONS.text.pt)
    : (houseId ? (TRANSLATIONS.text[lang] || TRANSLATIONS.text.pt) : (TRANSLATIONS.textGlobal[lang] || TRANSLATIONS.textGlobal.pt));

  const formattedText = houseId && !discreet ? transText.replace("{houseName}", currentHouseName) : transText;

  const currentEyebrow = discreet
    ? (DISCREET_TRANSLATIONS.eyebrow[lang] || DISCREET_TRANSLATIONS.eyebrow.pt)
    : (houseId ? ((TRANSLATIONS.eyebrow[lang] || TRANSLATIONS.eyebrow.pt) + currentHouseName) : (TRANSLATIONS.eyebrowGlobal[lang] || TRANSLATIONS.eyebrowGlobal.pt));

  const currentTitle = discreet
    ? (DISCREET_TRANSLATIONS.title[lang] || DISCREET_TRANSLATIONS.title.pt)
    : (TRANSLATIONS.title[lang] || TRANSLATIONS.title.pt);

  const externalBookingUrl = `https://direct-book.com/properties/vigiasdirect?locale=${lang}&currency=EUR`;

  return (
    <section id={houseId ? `reservar-${houseId}` : "reservas-vigias"} className={`vigias-booking-section ${discreet ? 'is-discreet' : ''}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .vigias-booking-section {
          width: 100%;
          padding: 60px 20px;
          background: #f7f3ea;
          color: #2f3028;
          box-sizing: border-box;
        }

        .vigias-booking-section.is-discreet {
          padding: 45px 20px;
          background: #fbf9f6;
        }

        .vigias-booking-section.is-discreet .vigias-booking-eyebrow {
          color: #8a7657;
          font-size: 11px;
          letter-spacing: 0.12em;
        }

        .vigias-booking-section.is-discreet .vigias-booking-title {
          font-size: clamp(26px, 3.5vw, 36px);
          margin-bottom: 10px;
        }

        .vigias-booking-section.is-discreet .vigias-booking-text {
          font-size: clamp(14px, 1.4vw, 16px);
          max-width: 620px;
          margin: 0 auto;
          color: #55554a/80;
        }

        .vigias-booking-section.is-discreet .vigias-booking-toggle-btn {
          padding: 14px 32px;
          font-size: 11px;
        }

        .vigias-booking-section * {
          box-sizing: border-box;
        }

        .vigias-booking-inner {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
        }

        .vigias-booking-header {
          max-width: 760px;
          margin: 0 auto 24px;
          text-align: center;
        }

        .vigias-booking-eyebrow {
          display: block;
          margin-bottom: 12px;
          font-size: 13px;
          line-height: 1.4;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #8a7657;
        }

        .vigias-booking-title {
          margin: 0 0 18px;
          font-size: clamp(34px, 5vw, 52px);
          line-height: 1.05;
          font-weight: 400;
          color: #2f3028;
        }

        .vigias-booking-text {
          margin: 0;
          font-size: clamp(16px, 1.8vw, 19px);
          line-height: 1.6;
          color: #55554a;
        }

        .vigias-booking-toggle-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          border: none;
          outline: none;
          background: #3f4a3c;
          color: #ffffff;
          font-family: inherit;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 18px 40px;
          transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(63, 74, 60, 0.15);
        }

        .vigias-booking-toggle-btn:hover {
          background: #2f382d;
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(63, 74, 60, 0.25);
        }

        /* Modal specific styles */
        .vigias-booking-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100vw;
          height: 100vh;
          background: #ffffff;
          z-index: 999999;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: opacity 0.25s ease-out, transform 0.25s ease-out, visibility 0.25s ease-out;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: scale(0.99);
        }

        .vigias-booking-modal.open {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: scale(1);
        }

        .vigias-booking-modal-header {
          height: 72px;
          padding: 0 24px;
          background: #F5F2ED;
          border-bottom: 1px solid rgba(26, 26, 26, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-shrink: 0;
        }

        .vigias-booking-modal-title-group {
          display: flex;
          flex-direction: column;
          line-height: 1.25;
          text-align: left;
        }

        .vigias-booking-modal-eyebrow {
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #5A5A40;
          font-weight: 600;
        }

        .vigias-booking-modal-title {
          font-family: inherit;
          font-size: 14px;
          font-weight: 600;
          color: #1A1A1A;
          margin-top: 1px;
          letter-spacing: -0.01em;
        }

        .vigias-booking-modal-close-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 9px 15px;
          background: #5A5A40;
          color: #ffffff;
          border: none;
          border-radius: 4px;
          font-family: inherit;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s ease;
          box-shadow: 0 1px 2px rgba(90, 90, 64, 0.15);
        }

        .vigias-booking-modal-close-btn:hover {
          background: #1A1A1A;
        }

        .vigias-booking-modal-body {
          flex: 1;
          width: 100%;
          overflow-y: auto;
          background: #ffffff;
          padding: 16px;
          box-sizing: border-box;
          -webkit-overflow-scrolling: touch;
        }

        .vigias-booking-modal-body .ibe {
          width: 100% !important;
          height: 100% !important;
          min-height: calc(100vh - 96px) !important;
        }

        .vigias-booking-modal-body iframe {
          width: 100% !important;
          height: 100% !important;
          min-height: calc(100vh - 96px) !important;
          border: 0 !important;
        }

        .vigias-booking-modal-help-bar {
          display: none;
          padding: 10px 16px;
          background: #fcfbf9;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          text-align: center;
        }

        .vigias-booking-modal-help-btn {
          display: inline-block;
          font-size: 11px;
          color: #8a7657;
          text-decoration: underline;
        }

        @media (max-width: 767px) {
          .vigias-booking-section {
            padding: 48px 16px;
          }

          .vigias-booking-header {
            text-align: left;
            margin-bottom: 20px;
          }

          .vigias-booking-modal-header {
            height: 60px;
            padding: 0 16px;
          }
          
          .vigias-booking-modal-close-btn {
            padding: 8px 12px;
            font-size: 10px;
          }
          
          .vigias-booking-modal-body {
            padding: 8px 4px;
          }

          .vigias-booking-modal-help-bar {
            display: block;
          }
        }
      `}} />

      <div className="vigias-booking-inner">
        <div className="vigias-booking-header">
          <span className="vigias-booking-eyebrow">
            {currentEyebrow}
          </span>
          <h2 className="vigias-booking-title">
            {currentTitle}
          </h2>
          <p className="vigias-booking-text">
            {formattedText}
          </p>
          
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setIsOpen(true)}
              className="vigias-booking-toggle-btn"
            >
              <Calendar className="w-4 h-4 opacity-80" />
              <span>
                {lang === 'en' ? 'Check Rates & Dates' : lang === 'es' ? 'Consultar tarifas y fechas' : 'Consultar tarifas e datas'}
              </span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>

      <div className={`vigias-booking-modal ${isOpen ? 'open' : ''}`}>
        <div className="vigias-booking-modal-header">
          <div className="flex items-center gap-3 md:gap-4">
            <img 
              src="https://criealgo.pro/vigias/vigiaslogo1.png" 
              alt="Vigias" 
              className="h-7 md:h-9 object-contain" 
            />
            <div className="hidden sm:block h-6 w-px bg-stone-300"></div>
            <div className="vigias-booking-modal-title-group">
              <span className="vigias-booking-modal-eyebrow">
                {lang === 'en' ? 'Direct Booking' : lang === 'es' ? 'Reserva Directa' : 'Reserva Direta'}
              </span>
              <span className="vigias-booking-modal-title">
                Vigias — Eternal Landscapes
              </span>
            </div>
          </div>
          
          <button
            onClick={() => setIsOpen(false)}
            className="vigias-booking-modal-close-btn"
          >
            <X className="w-4 h-4" />
            <span>
              {lang === 'en' ? 'Return to Site' : lang === 'es' ? 'Volver al Sitio' : 'Voltar ao Site'}
            </span>
          </button>
        </div>

        <div className="vigias-booking-modal-body" ref={containerRef}>
          {/* Siteminder IBE will load here */}
        </div>

        <div className="vigias-booking-modal-help-bar">
          <a
            href={externalBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="vigias-booking-modal-help-btn"
          >
            {lang === 'en' ? 'Trouble booking? Open in new window' : lang === 'es' ? '¿Problemas al reservar? Abrir en nueva ventana' : 'Dificuldade em reservar? Abrir em nova janela'}
          </a>
        </div>
      </div>
    </section>
  );
}
