import { Language, getRoutes, getTranslation } from "../lib/i18n";
import { SEO } from "../components/SEO";
import { Link } from "react-router-dom";

export function Contact({ lang }: { lang: Language }) {
  const seo = {
    pt: {
      title: "Contacto | Vigias Alentejo",
      description: "Contacte as Vigias para dúvidas sobre reservas, casas privadas, estadias no Parque Natural Serra de S. Mamede e experiências no Alto Alentejo.",
      h1: "Contacto",
      h2: "Fale diretamente com as Vigias"
    },
    es: {
      title: "Contacto | Vigias Alentejo",
      description: "Contacte con Vigias para dudas sobre reservas, casas privadas, estancias... y experiencias en el Alto Alentejo.",
      h1: "Contacto",
      h2: "Hable directamente con Vigias"
    },
    en: {
      title: "Contact | Vigias Alentejo",
      description: "Contact Vigias for questions about bookings, private houses, stays... and experiences in Northern Alentejo.",
      h1: "Contact",
      h2: "Speak directly with Vigias"
    }
  }[lang];

  const r = getRoutes(lang);
  const t = getTranslation(lang);

  return (
    <>
      <SEO title={seo.title} description={seo.description} lang={lang} />
      
      <section className="pt-24 pb-16 px-4 bg-cream-200 min-h-[70vh]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="flex-1">
            <h1 className="font-serif text-4xl md:text-5xl text-olive-900 mb-6">{seo.h1}</h1>
            <p className="text-stone-500 text-lg md:text-xl font-light tracking-wide uppercase mb-12">
              {seo.h2}
            </p>
            
            <div className="space-y-8 font-sans text-olive-800">
               <div>
                  <h3 className="font-semibold uppercase tracking-widest text-xs text-olive-700 mb-2">Email</h3>
                  <a href="mailto:info@vigias.pt" className="text-lg hover:text-ochre-600 transition">info@vigias.pt</a>
               </div>
               <div>
                  <h3 className="font-semibold uppercase tracking-widest text-xs text-olive-700 mb-2">WhatsApp / Telefone</h3>
                  <a href="https://wa.me/351XXXXXXXXX" className="text-lg hover:text-ochre-600 transition">+351 XXXXXXXXX</a>
               </div>
               <div>
                  <h3 className="font-semibold uppercase tracking-widest text-xs text-olive-700 mb-2">Localização</h3>
                  <p className="text-lg">Parque Natural Serra de S. Mamede<br/>Alto Alentejo, Portugal</p>
               </div>
            </div>
            
            <div className="mt-16">
               <Link to={r.book} className="bg-olive-900 text-warm-white px-8 py-4 text-center font-medium tracking-wide hover:bg-olive-800 transition uppercase text-sm">
                  {t.common.bookDirect}
               </Link>
            </div>
          </div>
          
          <div className="flex-1 min-h-[300px] bg-sand-300">
             {/* Map placeholder */}
             <div className="w-full h-full flex items-center justify-center text-stone-500 uppercase tracking-widest text-xs">
                Google Maps
             </div>
          </div>
        </div>
      </section>
    </>
  );
}
