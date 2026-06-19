import { Language } from "../lib/i18n";
import { SEO } from "../components/SEO";
import { DirectBookWidget } from "../components/DirectBookWidget";

export function Book({ lang }: { lang: Language }) {
  const seo = {
    pt: {
      title: "Reservar · Verificar disponibilidade | Vigias Alentejo",
      description: "Consulte disponibilidade e reserve diretamente nas Vigias. Melhor preço garantido. Cinco casas privadas no Alto Alentejo.",
      h1: "Reserva direta. O melhor preço, sem intermediários.",
      h2: "Verificar disponibilidade nas Vigias"
    },
    es: {
      title: "Reservar · Comprobar disponibilidad | Vigias Alentejo",
      description: "Consulte disponibilidad y reserve directamente en Vigias. Mejor precio garantizado. Cinco casas privadas en el Alto Alentejo.",
      h1: "Reserva directa. El mejor precio, sin intermediarios.",
      h2: "Comprobar disponibilidad en Vigias"
    },
    en: {
      title: "Book · Check availability | Vigias Alentejo",
      description: "Check availability and book directly with Vigias. Best price guaranteed. Five private houses in Northern Alentejo.",
      h1: "Direct booking. Best price, no intermediaries.",
      h2: "Check availability at Vigias"
    }
  }[lang];

  return (
    <>
      <SEO title={seo.title} description={seo.description} lang={lang} />
      
      <div className="pt-24 pb-32 px-4 sm:px-6 lg:px-8 bg-warm-white min-h-[70vh] flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center w-full">
          <h1 className="font-serif text-4xl md:text-5xl text-olive-900 mb-6">{seo.h1}</h1>
          <p className="text-stone-500 text-lg font-light tracking-wide uppercase mb-16">
            {seo.h2}
          </p>
          
          <div className="bg-sand-300/30 p-8 md:p-12 w-full rounded-sm">
             <DirectBookWidget lang={lang} />
          </div>

          <div className="mt-16 flex flex-col justify-center items-center gap-4 text-sm text-stone-500">
             <p>Precisa de ajuda com a sua reserva?</p>
             <a href="https://wa.me/351XXXXXXXXX" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-olive-900 hover:text-ochre-600 transition font-medium">
               Contacte-nos por WhatsApp
             </a>
          </div>
        </div>
      </div>
    </>
  );
}
