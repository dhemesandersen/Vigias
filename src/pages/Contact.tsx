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
                  <a href="https://wa.me/351936721199" className="text-lg hover:text-ochre-600 transition" target="_blank" rel="noopener noreferrer">+351 936721199</a>
               </div>
               <div>
                  <h3 className="font-semibold uppercase tracking-widest text-xs text-olive-700 mb-2">
                     {lang === "pt" ? "Localização" : lang === "es" ? "Ubicación" : "Location"}
                  </h3>
                  <p className="text-lg">
                     Quinta da Vigia<br />
                     Carreiras – 7300-355<br />
                     Portalegre, Portugal
                  </p>
               </div>
            </div>
            
            <div className="mt-16">
               <Link to={r.book} className="bg-olive-900 text-warm-white px-8 py-4 text-center font-medium tracking-wide hover:bg-olive-800 transition uppercase text-sm">
                  {t.common.bookDirect}
               </Link>
            </div>
          </div>
          
          <div className="flex-1 min-h-[350px] bg-sand-300 overflow-hidden rounded-lg shadow-md border border-stone-200/60">
             <iframe
                title="Google Map Quinta da Vigia"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                src="https://maps.google.com/maps?q=Quinta%20da%20Vigia%2C%20Carreiras%2C%20Portalegre%2C%20Portugal&t=&z=14&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
             />
          </div>
        </div>
      </section>
    </>
  );
}
