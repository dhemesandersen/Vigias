import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, Calendar } from "lucide-react";

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
    const container = containerRef.current;
    if (!container) return;

    if (!isOpen) {
      container.innerHTML = "";
      return;
    }

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
    ibeDiv.setAttribute("data-mobile_fullscreen", "true");
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
  }, [lang, isOpen]);

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

        /* Accordion transition classes */
        .vigias-booking-accordion {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
        }

        .vigias-booking-accordion.open {
          max-height: 3500px;
          opacity: 1;
          overflow: visible;
        }

        .vigias-booking-shell {
          width: 100%;
          min-height: 680px;
          margin: 24px auto 0;
          padding: 16px;
          border-radius: 20px;
          background: #ffffff;
          box-shadow: 0 16px 48px rgba(38, 38, 30, 0.08);
          overflow: visible;
        }

        .vigias-booking-shell .ibe {
          width: 100%;
          min-height: 640px;
        }

        .vigias-booking-shell iframe {
          width: 100% !important;
          min-height: 640px !important;
          border: 0 !important;
        }

        .vigias-booking-mobile-external {
          display: none;
          justify-content: center;
          margin: 20px auto 10px;
          max-width: 760px;
          width: 100%;
          padding: 0 16px;
        }

        .vigias-booking-mobile-external-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 54px;
          padding: 14px 24px;
          border-radius: 8px;
          background: #e6e0d2;
          color: #3f4a3c;
          border: 1px solid #c9beaa;
          font-family: inherit;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.25s ease;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
        }

        .vigias-booking-mobile-external-btn:hover {
          background: #dbd3c2;
          color: #2f382d;
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

        .vigias-booking-fallback {
          display: none;
          max-width: 760px;
          margin: 26px auto 0;
          text-align: center;
        }

        .vigias-booking-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 14px 30px;
          border-radius: 999px;
          background: #3f4a3c;
          color: #ffffff;
          font-size: 15px;
          line-height: 1;
          font-weight: 500;
          text-decoration: none;
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .vigias-booking-btn:hover {
          background: #2f382d;
          color: #ffffff;
          transform: translateY(-2px);
        }

        @media (max-width: 767px) {
          .vigias-booking-section {
            padding: 48px 16px;
            overflow: visible;
          }

          .vigias-booking-inner {
            overflow: visible;
          }

          .vigias-booking-header {
            text-align: left;
            margin-bottom: 20px;
          }

          .vigias-booking-mobile-external {
            display: flex;
          }

          .vigias-booking-accordion.open {
            max-height: 3500px;
            overflow: visible;
          }

          .vigias-booking-shell {
            width: 100vw;
            max-width: 100vw;
            margin-left: calc(50% - 50vw);
            margin-right: calc(50% - 50vw);
            border-radius: 0;
            padding: 12px 6px;
            height: 75vh;
            min-height: 550px;
            max-height: 700px;
            overflow: hidden;
            box-shadow: none;
            border-top: 1px solid rgba(0, 0, 0, 0.05);
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          }

          .vigias-booking-shell .ibe {
            height: 100%;
            width: 100%;
          }

          .vigias-booking-shell iframe {
            height: 100% !important;
            width: 100% !important;
          }

          .vigias-booking-fallback {
            text-align: center;
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
              onClick={() => setIsOpen(!isOpen)}
              className="vigias-booking-toggle-btn"
            >
              <Calendar className="w-4 h-4 opacity-80" />
              <span>
                {isOpen 
                  ? (lang === 'en' ? 'Hide Rates & Selection' : lang === 'es' ? 'Ocultar tarifas y selección' : 'Ocultar tarifas e seleção')
                  : (lang === 'en' ? 'Check Rates & Dates' : lang === 'es' ? 'Consultar tarifas y fechas' : 'Consultar tarifas e datas')
                }
              </span>
              {isOpen ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
            </button>
          </div>
        </div>

        <div className={`vigias-booking-accordion ${isOpen ? 'open' : ''}`}>
          <div className="vigias-booking-mobile-external">
            <a
              href={externalBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="vigias-booking-mobile-external-btn"
            >
              <span>
                {lang === 'en' ? 'Trouble booking? Open in new window' : lang === 'es' ? '¿Problemas al reservar? Abrir en nueva ventana' : 'Dificuldade em reservar? Abrir em nova janela'}
              </span>
            </a>
          </div>

          <div className="vigias-booking-shell" ref={containerRef}>
            {/* Siteminder IBE will load here */}
          </div>

          <div className="vigias-booking-fallback">
            <a
              className="vigias-booking-btn shadow-md hover:shadow-lg transition-transform"
              href={externalBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {houseId ? ((TRANSLATIONS.button[lang] || TRANSLATIONS.button.pt) + currentHouseName) : (TRANSLATIONS.button[lang] || TRANSLATIONS.button.pt) + "Vigias"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
