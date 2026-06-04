import { Link } from "react-router-dom";
import { Language, getRoutes, getTranslation } from "../lib/i18n";
import { SEO } from "../components/SEO";
import { homeData } from "../data/home";

export function HousesList({ lang }: { lang: Language }) {
  const data = homeData[lang]; // Reusing the houses array from Home for the list
  const t = getTranslation(lang);
  const r = getRoutes(lang);

  // Note: the SEO logic here is slightly generic, using PT content from the prompt
  // In a real scenario we'd create a specific data object for this page SEO
  const seo = {
    pt: {
      title: "Casas privadas no Alentejo | Vigias · 5 villas com piscina",
      description: "Conheça as cinco casas privadas das Vigias no Parque Natural Serra de S. Mamede. Villas independentes com piscina, privacidade e contacto direto com a natureza.",
      h1: "As cinco casas das Vigias",
      h2: "Cinco casas independentes, a mesma paisagem protegida."
    },
    es: {
      title: "Casas privadas en el Alentejo | Vigias · 5 villas con piscina",
      description: "Conozca las cinco casas privadas de Vigias en el Parque Natural Sierra de S. Mamede. Villas independientes con piscina, privacidad y contacto directo con la naturaleza.",
      h1: "Las cinco casas de Vigias",
      h2: "Cinco casas independientes, el mismo paisaje protegido."
    },
    en: {
      title: "Private houses in Alentejo | Vigias · 5 villas with pool",
      description: "Discover the five private houses of Vigias in the Serra de S. Mamede Natural Park. Independent villas with pool, privacy, and direct contact with nature.",
      h1: "The five houses of Vigias",
      h2: "Five independent houses, the same protected landscape."
    }
  }[lang];

  return (
    <>
      <SEO title={seo.title} description={seo.description} lang={lang} />
      
      <div className="pt-16 pb-24 px-4 sm:px-6 lg:px-8 bg-warm-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-olive-900 mb-6">{seo.h1}</h1>
          <p className="text-stone-500 text-lg md:text-xl font-light tracking-wide uppercase mb-12 max-w-2xl mx-auto">
            {seo.h2}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {data.casas.items.map((casa, index) => (
             <Link key={casa.id} to={casa.link} className="house-card flex flex-col p-6 bg-brand-bg relative">
                <div className="aspect-[4/5] overflow-hidden mb-6 bg-zinc-300">
                  <img src={casa.image} alt={casa.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700 ease-in-out" />
                </div>
                <h3 className="font-serif text-3xl text-brand-ink mb-2">{casa.name}</h3>
                <p className="text-brand-ink/60 font-sans text-sm mb-4 flex-grow">{casa.capacity}</p>
                <div className="flex gap-4 mt-auto">
                    <span className="text-brand-ink/40 uppercase tracking-widest text-[#10px] font-bold">0{index + 1}</span>
                </div>
             </Link>
          ))}
        </div>
      </div>
    </>
  );
}
