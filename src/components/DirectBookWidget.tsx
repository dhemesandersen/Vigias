export function DirectBookWidget({ houseId, embedded = false }: { houseId?: string, embedded?: boolean }) {
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
