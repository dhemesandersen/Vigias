import { Language } from "../lib/i18n";
import { SEO } from "../components/SEO";
import { VigiasBookingSection } from "../components/VigiasBookingSection";

export function Book({ lang }: { lang: Language }) {
  const seo = {
    pt: {
      title: "Reservar · Verificar disponibilidade | Vigias Alentejo",
      description: "Consulte disponibilidade e reserve diretamente nas Vigias. Melhor preço garantido. Cinco casas privadas no Alto Alentejo."
    },
    es: {
      title: "Reservar · Comprobar disponibilidad | Vigias Alentejo",
      description: "Consulte disponibilidad y reserve directamente en Vigias. Mejor precio garantizado. Cinco casas privadas en el Alto Alentejo."
    },
    en: {
      title: "Book · Check availability | Vigias Alentejo",
      description: "Check availability and book directly with Vigias. Best price guaranteed. Five private houses in Northern Alentejo."
    }
  }[lang];

  return (
    <>
      <SEO title={seo.title} description={seo.description} lang={lang} />
      
      <div className="pt-20">
        <VigiasBookingSection lang={lang} />
      </div>
    </>
  );
}
