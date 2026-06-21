import { useEffect, useRef } from "react";

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
      ibeDiv.setAttribute("data-query-room_type", roomType);
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
          padding: 72px 20px;
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
          margin: 0 auto 36px;
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
          font-size: clamp(34px, 5vw, 58px);
          line-height: 1.05;
          font-weight: 400;
          color: #2f3028;
        }

        .vigias-booking-text {
          margin: 0;
          font-size: clamp(17px, 2vw, 21px);
          line-height: 1.7;
          color: #55554a;
        }

        .vigias-booking-shell {
          width: 100%;
          min-height: 820px;
          margin: 0 auto;
          padding: 18px;
          border-radius: 26px;
          background: #ffffff;
          box-shadow: 0 24px 70px rgba(38, 38, 30, 0.12);
          overflow: hidden;
        }

        .vigias-booking-shell .ibe {
          width: 100%;
          min-height: 780px;
        }

        .vigias-booking-shell iframe {
          width: 100% !important;
          min-height: 780px !important;
          border: 0 !important;
        }

        .vigias-booking-note {
          max-width: 760px;
          margin: 22px auto 0;
          text-align: center;
          font-size: 14px;
          line-height: 1.6;
          color: #777568;
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
            padding: 52px 16px;
          }

          .vigias-booking-header {
            text-align: left;
            margin-bottom: 28px;
          }

          .vigias-booking-shell {
            min-height: 760px;
            padding: 8px;
            border-radius: 18px;
          }

          .vigias-booking-shell .ibe {
            min-height: 740px;
          }

          .vigias-booking-shell iframe {
            min-height: 740px !important;
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
        </div>

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
            {...(roomType ? { "data-query-room_type": roomType } : {})}
            data-query-locale={lang}
            data-query-currency="EUR"
          >
            {houseId ? ((TRANSLATIONS.button[lang] || TRANSLATIONS.button.pt) + currentHouseName) : (TRANSLATIONS.button[lang] || TRANSLATIONS.button.pt) + "Vigias"}
          </a>
        </div>
      </div>
    </section>
  );
}
