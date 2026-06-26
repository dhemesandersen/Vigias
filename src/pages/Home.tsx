import { useState } from "react";
import { Link } from "react-router-dom";
import { Language, getRoutes } from "../lib/i18n";
import { SEO } from "../components/SEO";
import { homeData } from "../data/home";
import { DirectBookWidget } from "../components/DirectBookWidget";
import { FaqSection } from "../components/FaqSection";
import { Mountain, Leaf, Castle, Star, ShieldCheck, Play, X } from "lucide-react";

const ctaTranslations = {
  pt: {
    title: "Reserve a sua estadia",
    description: "Consulte disponibilidade em tempo real e reserve diretamente connosco, sem intermediários.",
    button: "Verificar disponibilidade",
    badgeLine1: "Reserva direta",
    badgeLine2: "sem intermediários"
  },
  es: {
    title: "Reserve su estancia",
    description: "Consulte disponibilidad en tiempo real y reserve directamente con nosotros, sin intermediarios.",
    button: "Verificar disponibilidad",
    badgeLine1: "Reserva directa",
    badgeLine2: "sin intermediarios"
  },
  en: {
    title: "Reserve your stay",
    description: "Check real-time availability and book directly with us, with no intermediaries.",
    button: "Check availability",
    badgeLine1: "Direct booking",
    badgeLine2: "no intermediaries"
  }
};

export function Home({ lang }: { lang: Language }) {
  const data = homeData[lang];
  const r = getRoutes(lang);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <SEO title={data.seo.title} description={data.seo.description} lang={lang} />
      
      {/* Bloco 1 - Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-ink">
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          {/* YouTube Video Background */}
          <iframe 
            src="https://www.youtube.com/embed/IJYMuDc7Gto?autoplay=1&mute=1&controls=0&loop=1&playlist=IJYMuDc7Gto&playsinline=1&showinfo=0&rel=0&enablejsapi=1&iv_load_policy=3&modestbranding=1" 
            style={{
              width: "115vw",
              height: "64.69vw",
              minHeight: "115vh",
              minWidth: "204.44vh"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none"
            frameBorder="0"
            allow="autoplay; muted; encrypted-media"
            title="Vigias Video"
          />
          <div className="absolute inset-0 bg-brand-ink/10 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center animate-fade-in">
           <p className="text-[11px] uppercase letter-spacing-wide text-brand-bg/80 mb-6 font-medium tracking-widest">
             {data.hero.subtitle}
           </p>
           <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] letter-spacing-tight text-white mb-10 max-w-2xl">
             {data.hero.h1}
           </h1>
           <div className="flex flex-col sm:flex-row gap-6 items-center">
              <Link to={r.houses} className="text-white text-[11px] uppercase tracking-widest hover:text-white/70 transition-opacity flex items-center gap-2 border-b border-white/30 pb-1">
                {data.hero.cta1}
              </Link>
              <Link to={r.book} className="bg-brand-bg text-brand-ink py-4 px-10 text-xs uppercase letter-spacing-wide font-medium hover:bg-white transition-colors">
                {data.hero.cta2}
              </Link>
           </div>
           
           {/* YouTube Video popup trigger */}
           <button 
             onClick={() => setIsModalOpen(true)}
             className="mt-10 text-white/95 text-[10px] uppercase tracking-widest hover:text-white transition-all flex items-center gap-3 font-medium border border-white/40 bg-white/5 hover:bg-white/15 px-7 py-3.5 rounded-none cursor-pointer animate-pulse-glow shadow-sm"
           >
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
             </span>
             <Play className="w-3 h-3 fill-current ml-0.5" />
             {lang === 'pt' ? 'Ver o Filme das Casas' : lang === 'es' ? 'Ver el Filme de las Casas' : 'Watch Houses Film'}
           </button>
        </div>
      </section>

      {/* video YouTube Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-brand-ink/95 backdrop-blur-md z-[60] flex items-center justify-center p-4 sm:p-6 md:p-10 transition-opacity duration-300">
          {/* Click background to close */}
          <div 
            className="absolute inset-0 cursor-default" 
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal box */}
          <div className="relative w-full max-w-4xl bg-black rounded shadow-2xl overflow-hidden z-10 border border-white/10 aspect-video">
            {/* Close button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white hover:scale-105 transition-all bg-black/50 hover:bg-black/80 p-2.5 rounded-full backdrop-blur-sm z-20 border border-white/10 cursor-pointer"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
            
            <iframe 
              src={
                lang === 'pt' 
                ? "https://www.youtube.com/embed/yWMFi3b5oOg?autoplay=1&rel=0&modestbranding=1" 
                : lang === 'es'
                ? "https://www.youtube.com/embed/gp3L3MIr1Nk?autoplay=1&rel=0&modestbranding=1"
                : "https://www.youtube.com/embed/-uBa-MJf4RY?autoplay=1&rel=0&modestbranding=1"
              }
              className="w-full h-full border-0 absolute inset-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Vigias Houses Film"
            />
          </div>
        </div>
      )}

      {/* Bloco 2 - Casas */}
      <section className="py-24 px-12 bg-brand-bg">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 h-[auto] lg:h-[65vh] min-h-[500px]">
          {data.casas.items.map((casa, index) => (
             <Link 
               key={casa.id} 
               to={casa.link} 
               className="group relative flex-1 hover:flex-[1.5] lg:hover:flex-[1.8] transition-[flex] duration-700 ease-in-out cursor-pointer overflow-hidden min-h-[160px] lg:min-h-0"
             >
                <img 
                  src={casa.image} 
                  alt={casa.name} 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0 brightness-[0.98] contrast-[1.02] saturate-[0.93] sepia-[0.05] ${casa.id === "casa-ocre" ? "lg:object-right object-bottom" : (casa.id === "casa-sol" || casa.id === "casa-gaio") ? "lg:object-center object-bottom" : ""}`} 
                />
                {casa.hoverImage && (
                  <img src={casa.hoverImage} alt={casa.name} className={`absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 brightness-[0.98] contrast-[1.02] saturate-[0.93] sepia-[0.05] ${casa.id === "casa-ocre" ? "lg:object-right object-bottom" : (casa.id === "casa-sol" || casa.id === "casa-gaio") ? "lg:object-center object-bottom" : ""}`} />
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
                
                <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end">
                   <h3 className="font-serif text-2xl text-white mt-1 mb-1">{casa.name}</h3>
                   <div className="overflow-hidden transition-all duration-700 ease-in-out max-h-0 group-hover:max-h-10 opacity-0 group-hover:opacity-100">
                     <p className="text-white/80 font-sans text-[11px] mb-2 mt-1 whitespace-nowrap">{casa.capacity}</p>
                   </div>
                </div>
             </Link>
          ))}
        </div>
      </section>

      {/* Bloco 3 - A Envolvente e Parque Natural */}
      <section 
         className="relative py-32 flex items-center justify-center bg-brand-ink bg-scroll md:bg-fixed bg-center bg-cover overflow-hidden" 
         style={{ backgroundImage: "url('https://www.vigias.pt/fotos/CAMINHOS_VIGIAS/Vigias-LCQ_363.jpg')" }}
      >
         <div className="absolute inset-0 bg-brand-ink/40 mix-blend-multiply"></div>
         <div className="absolute inset-0 bg-black/20"></div>
         <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center justify-center px-6 md:px-12">
             <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4 letter-spacing-tight">
               A Envolvente
             </h2>
             <p className="font-serif text-xl md:text-2xl text-white/80 mb-6 max-w-2xl">
               O Parque Natural Serra de S. Mamede não é um cenário de fundo. É a realidade.
             </p>
             <p className="text-white/70 text-sm md:text-base max-w-3xl mb-12 font-sans font-light tracking-wide">
               Sobreiros centenários, águias imperiais ibéricas e aldeias medievais a nove minutos. E o silêncio como constante.
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10 w-full text-white">
                <div className="flex flex-col items-center">
                   <div className="w-12 h-12 mb-6 opacity-80 flex items-center justify-center">
                     <Mountain className="w-8 h-8 stroke-[1.5]" />
                   </div>
                   <h3 className="font-serif text-3xl mb-2">56.000 ha</h3>
                   <p className="text-[11px] uppercase letter-spacing-wide tracking-widest opacity-70">De parque natural</p>
                </div>
                <div className="flex flex-col items-center border-t md:border-t-0 md:border-l border-white/20 pt-12 md:pt-0">
                   <div className="w-12 h-12 mb-6 opacity-80 flex items-center justify-center">
                     <Castle className="w-8 h-8 stroke-[1.5]" />
                   </div>
                   <h3 className="font-serif text-3xl mb-2">A 15 min</h3>
                   <p className="text-[11px] uppercase letter-spacing-wide tracking-widest opacity-70">De Marvão</p>
                </div>
                <div className="flex flex-col items-center border-t md:border-t-0 md:border-l border-white/20 pt-12 md:pt-0">
                   <div className="w-12 h-12 mb-6 opacity-80 flex items-center justify-center">
                     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                   </div>
                   <h3 className="font-serif text-3xl mb-2">Céu Estrelado</h3>
                   <p className="text-[11px] uppercase letter-spacing-wide tracking-widest opacity-70">Sem poluição luminosa</p>
                </div>
             </div>

             <div className="mt-20 max-w-4xl pt-10 border-t border-white/20">
               <p className="text-white/60 text-xs md:text-sm leading-relaxed text-justify md:text-center md:text-justify-none">
                 As Vigias, escondidas na paisagem oculta e montanhosa do Parque Natural da Serra de S. Mamede, integradas no seu fascinante ecossistema de sobreiros e carvalhos. Um parque de 56.061 ha onde coabitam águia imperial ibérica, águia de Bonelli, texugo, raposa, javali e lince ibérico. Além da fauna, o montado alberga lavanda, tomilho, rosmaninho e alecrim, que estabelecem uma simbiose com os sobreiros.
               </p>
             </div>
         </div>
      </section>

      {/* Bloco 4 - Reviews reais */}
      <section className="py-24 px-12 bg-white">
         <div className="max-w-5xl mx-auto flex flex-col items-center">
            <h2 className="font-serif text-3xl md:text-5xl text-brand-ink mb-16 text-center letter-spacing-tight">{data.reviews.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
               {data.reviews.items.map((review, i) => (
                  <div key={i} className="flex flex-col border-t border-brand-ink/10 pt-8">
                     <p className="text-brand-ink/80 text-sm leading-relaxed mb-8 flex-1">"{review.text}"</p>
                     <div className="flex gap-1 mb-2.5">
                        {Array.from({ length: 5 }).map((_, starIdx) => (
                           <Star key={starIdx} className="w-3.5 h-3.5 fill-amber-500 text-amber-500 stroke-[1.5]" />
                        ))}
                     </div>
                     <span className="text-[11px] tracking-widest uppercase font-medium text-brand-ink/60">{review.name} · {review.from}</span>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Bloco 6 - Reservas (direct-book) */}
      <section className="py-20 px-6 md:px-12 bg-white">
         <div className="max-w-7xl mx-auto bg-brand-bg rounded-sm overflow-hidden flex flex-col md:flex-row shadow-sm border border-brand-ink/5">
            {/* Painel Esquerdo - Texto e Botão */}
            <div className="w-full md:w-[50%] lg:w-[45%] p-8 sm:p-12 md:p-14 lg:p-16 flex flex-col justify-center bg-brand-bg text-brand-ink">
               <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-brand-ink mb-6">
                  {ctaTranslations[lang].title}
               </h2>
               <p className="text-sm text-brand-ink/70 leading-relaxed mb-10 max-w-md">
                  {ctaTranslations[lang].description}
               </p>
               <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  <Link 
                     to={r.book}
                     className="inline-block bg-[#1A1A1A] hover:bg-neutral-800 text-white font-sans font-medium text-xs tracking-[0.16em] uppercase transition-colors px-8 py-4.5 whitespace-nowrap text-center shadow-md shadow-brand-ink/5 rounded-none"
                  >
                     {ctaTranslations[lang].button}
                  </Link>
                  <div className="flex items-center gap-3">
                     <div className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-olive/20 bg-brand-olive/5">
                        <ShieldCheck className="w-5 h-5 text-brand-olive stroke-[1.2]" />
                     </div>
                     <div className="flex flex-col">
                        <span className="text-[9px] sm:text-[10px] font-sans font-semibold tracking-[0.15em] text-[#5A5A40] uppercase leading-tight">
                           {ctaTranslations[lang].badgeLine1}
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-sans font-semibold tracking-[0.15em] text-brand-ink/50 uppercase leading-snug">
                           {ctaTranslations[lang].badgeLine2}
                        </span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Painel Direito - Imagem Panorâmica */}
            <div className="w-full md:w-[50%] lg:w-[55%] h-[280px] sm:h-[350px] md:h-auto min-h-[350px] relative overflow-hidden">
               <img 
                  src="https://www.vigias.pt/fotos/CASA_SOL/Vigias-LCQ_623.jpg" 
                  alt="Vigias Landscapes" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
                  referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-[#1A1A1A]/5 mix-blend-multiply"></div>
            </div>
         </div>
      </section>

      {/* Bloco FAQ */}
      <FaqSection title={data.faq?.title || "FAQ"} items={data.faq?.items || []} />

      {/* Bloco 7 - Texto SEO */}
      <section className="py-12 px-12 bg-brand-bg">
          <div className="max-w-7xl mx-auto text-center">
              <p className="text-[10px] text-brand-ink/40 max-w-4xl mx-auto">
                 {data.seoText}
              </p>
          </div>
      </section>
    </>
  );
}
