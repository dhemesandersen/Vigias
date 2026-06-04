import { Language } from "../lib/i18n";
import { SEO } from "../components/SEO";
import { Heart } from "lucide-react";

const experiencesData = [
  {
    image: "https://vigias.pt/wp-content/uploads/2024/10/1701703901622-1.jpg",
    title: {
      pt: "Trilhos pedestres pela Serra de S. Mamede",
      es: "Senderismo por la Sierra de S. Mamede",
      en: "Hiking trails through the S. Mamede Sierra"
    },
    host: {
      pt: "Nas Vigias e em redor",
      es: "En Vigias y alrededores",
      en: "In Vigias and surroundings"
    },
    tag: "Popular"
  },
  {
    image: "https://vigias.pt/wp-content/uploads/2024/10/Bikes-Vigias-scaled.jpg",
    title: {
      pt: "Passeios de bicicleta ao redor de Marvão",
      es: "Rutas en bicicleta alrededor de Marvão",
      en: "Biking trips around Marvão"
    },
    host: {
      pt: "Explorar o Alto Alentejo",
      es: "Explorar el Alto Alentejo",
      en: "Explore Northern Alentejo"
    },
    tag: "Aventura"
  },
  {
    image: "https://vigias.pt/wp-content/uploads/2023/04/4.png",
    title: {
      pt: "Avistamento de aves de rapina raras",
      es: "Observación de aves rapaces raras",
      en: "Observation of rare birds of prey"
    },
    host: {
      pt: "Nas Vigias e em redor",
      es: "En Vigias y alrededores",
      en: "In Vigias and surroundings"
    }
  },
  {
    image: "https://vigias.pt/wp-content/uploads/2023/05/vigias-casas.jpg",
    title: {
      pt: "Chef em casa com gastronomia local",
      es: "Chef en casa con gastronomía local",
      en: "Chef at home with local gastronomy"
    },
    host: {
      pt: "Serviço exclusivo sob marcação",
      es: "Servicio exclusivo bajo reserva",
      en: "Exclusive service upon booking"
    },
    tag: "Gastronomia"
  },
  {
    image: "https://vigias.pt/wp-content/uploads/2024/10/image-3.png",
    title: {
      pt: "Observação do céu noturno no Alentejo",
      es: "Observación del cielo nocturno en el Alentejo",
      en: "Stargazing the night sky in Alentejo"
    },
    host: {
      pt: "Nas Vigias e em redor",
      es: "En Vigias y alrededores",
      en: "In Vigias and surroundings"
    }
  },
  {
    image: "https://vigias.pt/wp-content/uploads/2023/09/6.png",
    title: {
      pt: "Passeios de balão e enoturismo",
      es: "Paseos en globo y enoturismo",
      en: "Hot air balloon rides and wine tourism"
    },
    host: {
      pt: "30 a 60 minutos de distância",
      es: "A 30 a 60 minutos de distancia",
      en: "30 to 60 minutes away"
    },
    tag: "Destaque"
  }
];

export function Experiences({ lang }: { lang: Language }) {
  const seo = {
    pt: {
      title: "Experiências no Alto Alentejo · Caminhadas, aves e gastronomia | Vigias",
      description: "O que fazer a partir das Vigias: percursos pedestres, avistamento de aves, visitas a Marvão e Castelo de Vide, gastronomia local.",
      h1: "O que fazer a partir das Vigias",
      h2: "Nas Vigias, na zona e a 30 a 60 minutos"
    },
    es: {
      title: "Experiencias en el Alto Alentejo · Senderismo, aves y gastronomía | Vigias",
      description: "Qué hacer desde Vigias: senderismo, observación de aves, visitas a Marvão y Castelo de Vide, gastronomía local.",
      h1: "Qué hacer desde Vigias",
      h2: "En Vigias, en la zona y a 30 a 60 minutos"
    },
    en: {
      title: "Experiences in Northern Alentejo · Hiking, birds and gastronomy | Vigias",
      description: "What to do from Vigias: hiking trails, bird watching, visits to Marvão and Castelo de Vide, local gastronomy.",
      h1: "What to do from Vigias",
      h2: "At Vigias, in the area and 30 to 60 minutes away"
    }
  }[lang];

  return (
    <>
      <SEO title={seo.title} description={seo.description} lang={lang} />
      
      <section className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto mb-16">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-ink mb-4">{seo.h1}</h1>
          <p className="text-brand-ink/60 text-lg uppercase letter-spacing-wide font-medium text-[11px]">
            {seo.h2}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {experiencesData.map((exp, idx) => (
            <div key={idx} className="group cursor-pointer flex flex-col gap-3">
              <div className="relative aspect-[4/5] sm:aspect-square md:aspect-[4/5] overflow-hidden rounded-xl bg-zinc-200">
                <img 
                  src={exp.image} 
                  alt={exp.title[lang]} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Heart Icon Button */}
                <button className="absolute top-4 right-4 text-white hover:scale-110 transition-transform z-10 drop-shadow-md">
                   <Heart className="w-6 h-6 fill-black/30 stroke-white stroke-[1.5]" />
                </button>
                
                {/* Optional Tag */}
                {exp.tag && (
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-brand-ink px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm">
                    {exp.tag}
                  </div>
                )}
              </div>
              
              <div className="flex flex-col">
                <h3 className="font-sans font-semibold text-brand-ink text-[15px] leading-tight line-clamp-2">
                  {exp.title[lang]}
                </h3>
                <p className="font-sans text-brand-ink/60 text-sm mt-0.5 truncate">
                  {exp.host[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
