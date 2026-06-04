import { Language } from "../lib/i18n";
import { SEO } from "../components/SEO";

export function About({ lang }: { lang: Language }) {
  const seo = {
    pt: {
      title: "Quem somos · História e sustentabilidade | Vigias Alentejo",
      description: "A história das Vigias, uma propriedade no Parque Natural Serra de S. Mamede. Cinco casas privadas construídas com materiais locais e respeito pelo ecossistema.",
      h1: "Vigias: a história de um lugar que decidiu ficar em silencio",
      h2: "História, filosofia e sustentabilidade"
    },
    es: {
      title: "Quiénes somos · Historia y sostenibilidad | Vigias Alentejo",
      description: "La historia de Vigias, una propiedad en el Parque Natural... Cinco casas privadas construidas con materiales locales.",
      h1: "Vigias: la historia de un lugar que decidió quedarse en silencio",
      h2: "Historia, filosofía y sostenibilidad"
    },
    en: {
      title: "Who we are · History and sustainability | Vigias Alentejo",
      description: "The history of Vigias, a property in the Natural Park... Five private houses built with local materials.",
      h1: "Vigias: the story of a place that decided to stay silent",
      h2: "History, philosophy and sustainability"
    }
  }[lang];

  return (
    <>
      <SEO title={seo.title} description={seo.description} lang={lang} />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-cream-100">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="font-serif text-4xl md:text-5xl text-olive-900 mb-6">{seo.h1}</h1>
          <p className="text-stone-500 text-lg md:text-xl font-light tracking-wide uppercase mb-12">
            {seo.h2}
          </p>
        </div>

        <div className="max-w-3xl mx-auto prose prose-stone max-w-none text-olive-800 font-sans leading-relaxed text-lg">
           <p>Vigias nasce da vontade de recuperação de um monte abandonado, com profundo respeito pelas pré-existências. A utilização da pedra, extraída da própria topografia, e a integração com o montado, devolvem a este lugar a sua dignidade original.</p>
           <p>O luxo, aqui, define-se pela abundância de espaço, pela escala da paisagem e pelo corte voluntário com a urgência do tempo.</p>
           
           <h3 className="font-serif text-2xl text-olive-900 mt-12 mb-6">A nossa abordagem</h3>
           <p>Em cada detalhe, do aprovisionamento de energia à ausência de iluminação decorativa exterior para não interferir na observação noturna, a sustentabilidade não é um manifesto, mas uma prática silenciosa.</p>
        </div>
      </section>
    </>
  );
}
