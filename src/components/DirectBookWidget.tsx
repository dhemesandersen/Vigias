import { useEffect, useRef } from "react";

export function DirectBookWidget({ 
  houseId, 
  embedded = false,
  lang = "pt"
}: { 
  houseId?: string; 
  embedded?: boolean;
  lang?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (houseId === "casa-cal" || houseId === "casa-feto") {
      const container = containerRef.current;
      if (!container) return;

      // Clear any pre-existing elements inside the container
      container.innerHTML = "";

      const roomType = houseId === "casa-cal" ? "131903" : "143425";

      // Create Siteminder booking widget target div
      const ibeDiv = document.createElement("div");
      ibeDiv.className = "ibe";
      ibeDiv.setAttribute("data-region", "emea");
      ibeDiv.setAttribute("data-channelcode", "vigiasdirect");
      ibeDiv.setAttribute("data-widget", "embed");
      ibeDiv.setAttribute("data-query-room_type", roomType);
      ibeDiv.setAttribute("data-query-locale", lang || "pt");
      ibeDiv.setAttribute("data-query-currency", "EUR");

      container.appendChild(ibeDiv);

      // Load siteminder javascript dynamically
      const script = document.createElement("script");
      script.src = "https://widget.siteminder.com/ibe.min.js";
      script.async = true;
      script.defer = true;
      container.appendChild(script);

      return () => {
        if (container) {
          container.innerHTML = "";
        }
      };
    }
  }, [houseId, lang]);

  if (houseId === "casa-cal" || houseId === "casa-feto") {
    const titleText = houseId === "casa-cal" ? "Casa Cal" : "Casa Feto";
    return (
      <div className="w-full mt-12 bg-white rounded-sm min-h-[500px]" ref={containerRef}>
        <div className="flex items-center justify-center py-20 text-stone-400">
          <span className="animate-pulse">A carregar motor de reserva de {titleText}...</span>
        </div>
      </div>
    );
  }

  // Base URL for the Direct Book property
  const baseUrl = "https://direct-book.com/properties/vigiasdirect?locale=pt&currency=EUR&trackPage=yes";
  const bookingUrl = houseId ? `${baseUrl}&room_id=${houseId}` : baseUrl;

  if (embedded) {
    const iframeSrc = houseId 
      ? `https://direct-book.com/properties/vigiasdirect?locale=pt&currency=EUR&trackPage=yes&iframe=true&width=1050&height=850&room_id=${houseId}`
      : `https://direct-book.com/properties/vigiasdirect?locale=pt&currency=EUR&trackPage=yes&iframe=true&width=1050&height=850`;

    return (
      <div className="w-full mt-12 bg-white rounded-sm overflow-hidden">
        <iframe
          src={iframeSrc}
          width="100%"
          height="850"
          style={{ border: 0, width: "100%", maxWidth: "100%" }}
          loading="lazy"
          title="Direct Book Calendar"
        />
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center py-4">
      <div className="text-center w-full">
        <a 
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full bg-brand-ink text-brand-bg px-10 py-4 font-semibold tracking-wide hover:bg-brand-ink/80 transition uppercase text-xs letter-spacing-wide"
        >
          Verificar disponibilidade
        </a>
        <p className="mt-4 text-[10px] text-brand-ink/50 uppercase letter-spacing-wide">
          Reserva direta sem intermediários
        </p>
      </div>
    </div>
  );
}
