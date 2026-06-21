import * as React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Language, getRoutes, getTranslation } from "../lib/i18n";
import { blogData } from "../data/blog";
import { SEO } from "../components/SEO";

const blogIllustrations: Record<string, { url: string; caption: Record<Language, string> }[]> = {
  "slow-travel-alto-alentejo-serra-s-mamede": [
    {
      url: "https://www.vigias.pt/fotos/CASA_GAIO/Vigias-LCQ_159.jpg",
      caption: {
        pt: "A arquitetura de autor das Vigias enquadra a paisagem através de rasgos rasgados de luz e vidro.",
        en: "Vigias' signature architecture frames the landscape through sweeping expanses of light and glass.",
        es: "La arquitectura de autor de Vigias encuadra el paisaje a través de amplios ventanales de luz y cristal."
      }
    },
    {
      url: "https://www.vigias.pt/fotos/CASA_OCRE/CASA_OCRE09_dron_rtq002.png",
      caption: {
        pt: "Vista aérea das propriedades integradas no ecossistema protegido da Serra de S. Mamede.",
        en: "Aerial view of the properties nested inside the protected Serra de S. Mamede ecosystem.",
        es: "Vista aérea de las propiedades integradas en el ecosistema protegido de la Sierra de S. Mamede."
      }
    }
  ],
  "serra-s-mamede-natureza-silencio-patrimonio": [
    {
      url: "https://www.vigias.pt/fotos/CASA_OCRE/CASA_OCRE00_MilkyWay_photography.jpg",
      caption: {
        pt: "O céu das Vigias, isento de poluição luminosa, revela noites estreladas de rara beleza.",
        en: "The pristine sky at Vigias, free from light pollution, reveals starry nights of rare intensity.",
        es: "El cielo de Vigias, libre de contaminación lumínica, revela noches estrelladas de rara nidez."
      }
    },
    {
      url: "https://www.vigias.pt/fotos/CASA_FETO/CASA_FETO00007.jpg",
      caption: {
        pt: "Os caminhos rústicos e vegetação mediterrânica criam uma envolvente viva de calmaria.",
        en: "Rustic lanes and Mediterranean vegetation envelope the property in living serenity.",
        es: "Los senderos rústicos y la vegetación mediterránea crean un entorno vivo de calma."
      }
    }
  ],
  "casas-privadas-alentejo-luxo-silencioso": [
    {
      url: "https://www.vigias.pt/fotos/CASA_CAL/IMG_3149.jpg",
      caption: {
        pt: "Cada casa usufrui de uma piscina privativa de água salgada, sem partilhas ou ruídos.",
        en: "Each villa features a private saltwater pool, with no shared areas or interruptions.",
        es: "Cada casa goza de su propia piscina privada de agua salada, sin zonas comunes ni ruidos."
      }
    },
    {
      url: "https://www.vigias.pt/fotos/CASA_SOL/Vigias-LCQ_047.jpg",
      caption: {
        pt: "O conforto desenhado ao detalhe, com materiais nobres locais e acolhimento caloroso.",
        en: "Comfort meticulously designed with noble local materials and warm hospitality.",
        es: "El confort diseñado al detal con materiales nobles locales y una cálida acogida."
      }
    }
  ]
};

const sectionLabels = {
  pt: {
    title: "Outras Histórias",
    subtitle: "Continue a ler mais sobre as Vigias e a nossa envolvente",
    readMore: "Ler Artigo"
  },
  en: {
    title: "More Stories",
    subtitle: "Continue reading about Vigias and our surroundings",
    readMore: "Read Article"
  },
  es: {
    title: "Otras Historias",
    subtitle: "Siga leyendo más sobre Vigias y nuestro entorno",
    readMore: "Leer Artículo"
  }
};

export function BlogPost({ lang }: { lang: Language }) {
  const { slug } = useParams<{ slug: string }>();
  const r = getRoutes(lang);
  const t = getTranslation(lang);
  
  const posts = blogData[lang];
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to={r.blog} />;
  }

  // Get other 2 posts for the recommended stories grid
  const otherPosts = posts.filter(p => p.slug !== post.slug).slice(0, 2);

  // Filter content to exclude "Ligações Recomendadas" sections
  const rawBlocks = post.content.split("\n\n");
  const cleanBlocks: string[] = [];
  for (const block of rawBlocks) {
    const trimmed = block.trim();
    if (
      trimmed.startsWith("## Ligações Recomendadas") || 
      trimmed.startsWith("## Enlaces Recomendados") || 
      trimmed.startsWith("## Recommended Links")
    ) {
      break; 
    }
    cleanBlocks.push(block);
  }

  const illustrations = blogIllustrations[post.slug] || [];
  let heading2Count = 0;

  return (
    <>
      <SEO title={post.seo.title} description={post.seo.description} lang={lang} />
      
      <article className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Link to={r.blog} className="text-stone-400 uppercase tracking-widest text-xs font-semibold hover:text-olive-900 transition mb-8 inline-block">
             {lang === 'es' ? '← Volver al Blog' : lang === 'en' ? '← Back to Blog' : '← Voltar ao Blog'}
          </Link>
          
          <h1 className="font-serif text-3xl sm:text-4xl text-olive-900 mb-8 leading-tight tracking-tight">{post.title}</h1>

          {post.image && (
            <div className="w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-md mb-12 bg-zinc-200">
              <img 
                src={post.image} 
                alt={post.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover" 
              />
            </div>
          )}
          
          <div className="prose prose-stone max-w-none text-olive-800 font-sans leading-relaxed text-lg mb-16 animate-fade-in">
             <p className="lead text-lg sm:text-xl text-stone-500 font-serif italic mb-8 leading-relaxed border-l-2 border-olive-900/40 pl-6">{post.summary}</p>
             <div className="space-y-6 text-stone-700">
                {cleanBlocks.map((block, idx) => {
                  const trimmed = block.trim();
                  if (!trimmed) return null;
                  
                  let preIllustration: React.ReactNode = null;

                  if (trimmed.startsWith("##")) {
                    heading2Count++;
                    if (heading2Count === 3 && illustrations[0]) {
                      preIllustration = (
                        <div key={`illustration-0-${idx}`} className="my-10">
                          <div className="w-full aspect-[16/10] overflow-hidden rounded-md bg-stone-100">
                            <img 
                              src={illustrations[0].url} 
                              alt={illustrations[0].caption[lang]} 
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover hover:scale-[1.01] transition-transform duration-500"
                            />
                          </div>
                          <p className="text-stone-500 text-sm italic mt-3 text-center max-w-2xl mx-auto leading-relaxed border-b border-stone-200/40 pb-6">
                            {illustrations[0].caption[lang]}
                          </p>
                        </div>
                      );
                    } else if (heading2Count === 5 && illustrations[1]) {
                      preIllustration = (
                        <div key={`illustration-1-${idx}`} className="my-10">
                          <div className="w-full aspect-[16/10] overflow-hidden rounded-md bg-stone-100">
                            <img 
                              src={illustrations[1].url} 
                              alt={illustrations[1].caption[lang]} 
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover hover:scale-[1.01] transition-transform duration-500"
                            />
                          </div>
                          <p className="text-stone-500 text-sm italic mt-3 text-center max-w-2xl mx-auto leading-relaxed border-b border-stone-200/40 pb-6">
                            {illustrations[1].caption[lang]}
                          </p>
                        </div>
                      );
                    }
                  }

                  let contentElement: React.ReactNode = null;

                  if (trimmed.startsWith("###")) {
                    contentElement = (
                      <h3 key={idx} className="font-serif text-xl text-olive-900 mt-8 mb-4 font-semibold">
                        {trimmed.replace(/^###\s*/, "")}
                      </h3>
                    );
                  } else if (trimmed.startsWith("##")) {
                    contentElement = (
                      <h2 key={idx} className="font-serif text-xl sm:text-2xl text-olive-900 mt-10 mb-5 font-semibold border-b border-stone-200/60 pb-2">
                        {trimmed.replace(/^##\s*/, "")}
                      </h2>
                    );
                  } else if (trimmed.startsWith("-") || trimmed.startsWith("*")) {
                    const items = trimmed.split("\n").map(item => item.replace(/^[-*]\s*/, ""));
                    contentElement = (
                      <ul key={idx} className="list-disc pl-6 space-y-2.5 my-5 text-stone-700">
                        {items.map((item, itemIdx) => (
                          <li key={itemIdx} className="leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    );
                  } else {
                    contentElement = (
                      <p key={idx} className="leading-relaxed text-stone-700 text-[16px] sm:text-[17px]">
                        {trimmed.split("\n").map((line, lineIdx) => (
                          <span key={lineIdx}>
                            {line}
                            {lineIdx < trimmed.split("\n").length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    );
                  }

                  return (
                    <div key={`block-${idx}`}>
                      {preIllustration}
                      {contentElement}
                    </div>
                  );
                })}
             </div>
          </div>
          
          <div className="border-t border-stone-200 pt-10 flex flex-col items-center">
             <p className="text-stone-500 text-sm mb-6 text-center">
               {lang === 'en' 
                 ? 'Would you like to explore Northern Alentejo with us?' 
                 : lang === 'es' 
                 ? '¿Le gustaría explorar el Alto Alentejo con nosotros?' 
                 : 'Gostaria de explorar o Alto Alentejo connosco?'}
             </p>
             <div className="flex gap-4">
                <Link to={r.houses} className="border border-olive-900 text-olive-900 px-6 py-2.5 font-medium uppercase text-xs tracking-wider hover:bg-olive-900 hover:text-white transition">
                   {t.common.viewHouses}
                </Link>
                <Link to={r.book} className="bg-olive-900 text-warm-white px-6 py-2.5 font-medium hover:bg-olive-800 transition uppercase text-xs tracking-wider">
                   {t.common.bookDirect}
                </Link>
             </div>
          </div>
        </div>
      </article>

      {/* Recommended Articles Section */}
      {otherPosts.length > 0 && (
        <section className="bg-stone-50/60 border-t border-stone-200/50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 text-center sm:text-left">
              <h2 className="font-serif text-2xl text-olive-900 mb-2">
                {sectionLabels[lang].title}
              </h2>
              <p className="text-stone-400 text-sm">
                {sectionLabels[lang].subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherPosts.map((op) => (
                <article key={op.slug} className="group flex flex-col bg-white rounded-md border border-stone-200/40 overflow-hidden shadow-sm hover:shadow-md hover:border-stone-200/80 transition-all duration-300">
                  <Link to={`${r.blog}${op.slug}`} className="block overflow-hidden aspect-[16/10] bg-stone-100">
                    <img 
                      src={op.image} 
                      alt={op.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </Link>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-serif text-lg text-olive-900 mb-2 leading-snug group-hover:text-olive-700 transition-colors line-clamp-2">
                      <Link to={`${r.blog}${op.slug}`}>
                        {op.title}
                      </Link>
                    </h3>
                    
                    <p className="text-stone-500 text-xs leading-relaxed mb-6 line-clamp-2 flex-grow">
                      {op.summary}
                    </p>

                    <div className="mt-auto pt-4 border-t border-stone-100">
                      <Link 
                        to={`${r.blog}${op.slug}`} 
                        className="text-olive-900 text-[10px] uppercase tracking-widest font-bold group-hover:text-olive-700 flex items-center gap-1 transition-colors"
                      >
                        {sectionLabels[lang].readMore} <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
