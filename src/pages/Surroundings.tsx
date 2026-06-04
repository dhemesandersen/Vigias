import { Language } from "../lib/i18n";
import { SEO } from "../components/SEO";

export function Surroundings({ lang }: { lang: Language }) {
  const seo = {
    pt: {
      title: "Envolvente natural · Parque Natural Serra de S. Mamede | Vigias Alentejo",
      description: "O Parque Natural Serra de S. Mamede: fauna, flora, percursos pedestres e património. O que ver perto das Vigias e como chegar de Madrid ou Lisboa.",
      h1: "A envolvente: Serra de S. Mamede e o norte do Alentejo",
      h2: "O parque natural, património medieval a 15 minutos e como chegar"
    },
    // Translations simplified for speed, same keys
    es: {
      title: "Entorno natural · Parque Natural Sierra de S. Mamede | Vigias Alentejo",
      description: "El Parque Natural Sierra de S. Mamede: fauna, flora y patrimonio. Qué ver cerca de Vigias.",
      h1: "El entorno: Sierra de S. Mamede y el norte del Alentejo",
      h2: "El parque natural, patrimonio medieval a 15 minutos y cómo llegar"
    },
    en: {
      title: "Natural surroundings · Serra de S. Mamede Natural Park | Vigias Alentejo",
      description: "The Serra de S. Mamede Natural Park: fauna, flora, and heritage. What to see near Vigias.",
      h1: "The surroundings: Serra de S. Mamede and northern Alentejo",
      h2: "The natural park, medieval heritage 15 minutes away, and how to get there"
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

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
           <div className="flex-1 w-full aspect-square md:aspect-[4/5] bg-zinc-200 overflow-hidden rounded-md">
             <img src="https://vigias.pt/wp-content/uploads/2023/04/4.png" alt="Serra de S. Mamede" className="w-full h-full object-cover" />
           </div>
           <div className="flex-1 text-brand-ink/80 font-sans leading-relaxed text-sm max-w-lg space-y-6">
             <p>As Vigias escondem-se na imensidão do Parque Natural da Serra de S. Mamede, um enclave geológico que cria um microclima de exceção no Alentejo. A altitude traz frescura e uma mancha florestal rica em carvalhos, castanheiros e sobreiros.</p>
             <p>A quinze minutos de distância erguem-se vilas medievais, monumentos de imponência ímpar e vestígios romanos que desenham o mapa cultural do Norte Alentejano.</p>
           </div>
        </div>
      </section>
    </>
  );
}
