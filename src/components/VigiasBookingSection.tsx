import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, Calendar } from "lucide-react";

interface BookingSectionProps {
  houseId?: string;
  lang?: "pt" | "es" | "en";
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
  note: {
    pt: "Caso o motor de reservas não carregue correctamente, confirme se o domínio onde esta página está publicada já foi autorizado pela SiteMinder para utilização do embed.",
    es: "Si el motor de reservas no se carga correctamente, confirme si el dominio donde está publicada esta página ya ha sido autorizado por SiteMinder para el uso del embed.",
    en: "If the booking engine does not load correctly, please confirm if the domain where this page is published has already been authorized by SiteMinder for embed use."
  },
  button: {
    pt: "Reservar ",
    es: "Reservar ",
    en: "Book "
  }
};

export function VigiasBookingSection({ houseId, lang = "pt" }: BookingSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const roomType = houseId ? ROOM_TYPES[houseId] : undefined;
  const houseNameObj = houseId ? HOUSE_NAMES[houseId] : undefined;
  const currentHouseName = houseNameObj ? (houseNameObj[lang] || houseNameObj.pt) : "";

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
    if (roomType) {
      ibeDiv.setAttribute("data-query-room_type_id", roomType);
    }
    ibeDiv.setAttribute("data-query-locale", lang);
    ibeDiv.setAttribute("data-query-currency", "EUR");
    ibeDiv.setAttribute("data-mobile_fullscreen", "false");

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
  }, [houseId, roomType, lang]);

  const transText = houseId ? (TRANSLATIONS.text[lang] || TRANSLATIONS.text.pt) : (TRANSLATIONS.textGlobal[lang] || TRANSLATIONS.textGlobal.pt);
  const formattedText = houseId ? transText.replace("{houseName}", currentHouseName) : transText;
  const currentEyebrow = houseId ? ((TRANSLATIONS.eyebrow[lang] || TRANSLATIONS.eyebrow.pt) + currentHouseName) : (TRANSLATIONS.eyebrowGlobal[lang] || TRANSLATIONS.eyebrowGlobal.pt);

  return (
    <section id={houseId ? `reservar-${houseId}` : "reservas-vigias"} className="vigias-booking-section">
      <style dangerouslySetInnerHTML={{ __html: `
        .vigias-booking-section {
          width: 100%;
          padding: 60px 20px;
          background: #f7f3ea;
          color: #2f3028;
          box-sizing: border-box;
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
          max-height: 1100px;
          opacity: 1;
        }

        .vigias-booking-shell {
          width: 100%;
          min-height: 680px;
          margin: 24px auto 0;
          padding: 16px;
          border-radius: 20px;
          background: #ffffff;
          box-shadow: 0 16px 48px rgba(38, 38, 30, 0.08);
          overflow: hidden;
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

        .vigias-booking-note {
          max-width: 760px;
          margin: 20px auto 0;
          text-align: center;
          font-size: 13px;
          line-height: 1.6;
          color: #777568;
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
          }

          .vigias-booking-header {
            text-align: left;
            margin-bottom: 20px;
          }

          .vigias-booking-shell {
            min-height: 640px;
            padding: 8px;
            border-radius: 14px;
          }

          .vigias-booking-shell .ibe {
            min-height: 620px;
          }

          .vigias-booking-shell iframe {
            min-height: 620px !important;
          }

          .vigias-booking-note {
            text-align: left;
          }

          .vigias-booking-fallback {
            text-align: left;
          }
        }
      `}} />

      <div className="vigias-booking-inner">
        <div className="vigias-booking-header">
          <span className="vigias-booking-eyebrow">
            {currentEyebrow}
          </span>
          <h2 className="vigias-booking-title">
            {TRANSLATIONS.title[lang] || TRANSLATIONS.title.pt}
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
          <div className="vigias-booking-shell" ref={containerRef}>
            {/* Siteminder IBE will load here */}
          </div>

          <p className="vigias-booking-note">
            {TRANSLATIONS.note[lang] || TRANSLATIONS.note.pt}
          </p>

          <div className="vigias-booking-fallback">
            <a
              className="ibe vigias-booking-btn"
              href="#"
              data-region="emea"
              data-channelcode="vigiasdirect"
              {...(roomType ? { "data-query-room_type_id": roomType } : {})}
              data-query-locale={lang}
              data-query-currency="EUR"
            >
              {houseId ? ((TRANSLATIONS.button[lang] || TRANSLATIONS.button.pt) + currentHouseName) : (TRANSLATIONS.button[lang] || TRANSLATIONS.button.pt) + "Vigias"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
