import { Language } from "../lib/i18n";
import { SEO } from "../components/SEO";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { VigiasBookingSection } from "../components/VigiasBookingSection";
import { YoutubeBackground } from "../components/YoutubeBackground";

export function About({ lang }: { lang: Language }) {
  const paisagensImages = [
    "https://www.vigias.pt/fotos/CAMINHOS_VIGIAS/Vigias-LCQ_179.jpg",
    "https://www.vigias.pt/fotos/CAMINHOS_VIGIAS/Vigias-LCQ_199.jpg",
    "https://www.vigias.pt/fotos/CAMINHOS_VIGIAS/Vigias-LCQ_242.jpg",
    "https://www.vigias.pt/fotos/CAMINHOS_VIGIAS/Vigias-LCQ_257.jpg",
    "https://www.vigias.pt/fotos/CAMINHOS_VIGIAS/Vigias-LCQ_193.jpg"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % paisagensImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % paisagensImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + paisagensImages.length) % paisagensImages.length);
  };

  const seo = {
    pt: {
      title: "Quem somos · A Nossa História | Vigias Alentejo",
      description: "A história das Vigias, uma propriedade no Parque Natural Serra de S. Mamede. Luxo silencioso e absoluto respeito pelo ecossistema.",
      h1: "VIGIAS",
      h2: "A História de um Lugar que Decidiu Ficar em Silêncio"
    },
    es: {
      title: "Quiénes somos · Nuestra Historia | Vigias Alentejo",
      description: "La historia de Vigias, una propiedad en el Parque Natural... Cinco casas privadas construidas con materiales locales.",
      h1: "VIGIAS",
      h2: "La Historia de un Lugar que Decidió Quedarse en Silencio"
    },
    en: {
      title: "Who we are · Our Story | Vigias Alentejo",
      description: "The history of Vigias, a property in the Natural Park... Five private houses built with local materials.",
      h1: "VIGIAS",
      h2: "The Story of a Place that Decided to Stay Silent"
    }
  }[lang];

  return (
    <>
      <SEO title={seo.title} description={seo.description} lang={lang} />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 bg-[#E8E6E1]">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <img src="https://criealgo.pro/vigias/vigiaslogo1.png" alt="Vigias" className="h-16 md:h-24 mb-10 object-contain" />
          <h2 className="font-sans text-sm md:text-base font-light tracking-[0.2em] uppercase text-[#2e2624]/60">
             {seo.h2}
          </h2>
        </div>
      </section>

      {/* Block 1 */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-white">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
               
               {/* Left Column */}
               <div className="w-full flex flex-col justify-between">
                  <h3 className="font-serif text-5xl md:text-6xl lg:text-[4rem] text-[#2e2624] mb-12 leading-[1.1] tracking-tight">
                    {lang === 'pt' && <>O Renascer<br/>do Montado</>}
                    {lang === 'es' && <>El Renacer<br/>del Montado</>}
                    {lang === 'en' && <>The Rebirth<br/>of the Montado</>}
                  </h3>
                  
                  <div className="w-full max-w-md mb-12">
                     <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src="https://www.vigias.pt/fotos/CAMINHOS_VIGIAS/Vigias-LCQ_061.jpg" 
                          alt="Vigias Nature" 
                          className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.02] saturate-[0.93] sepia-[0.05]"
                        />
                     </div>
                  </div>
               </div>

               {/* Right Column - Text */}
               <div className="font-sans font-light text-[#2e2624]/70 leading-relaxed space-y-6 text-justify md:text-left pt-0 lg:pt-24">
                  <h4 className="text-xs md:text-sm tracking-[0.2em] font-medium text-[#2e2624] uppercase mb-4">
                    {lang === 'pt' ? 'UM LUGAR MÁGICO ONDE A NATUREZA IMPERA' : lang === 'es' ? 'UN LUGAR MÁGICO DONDE LA NATURALEZA IMPERA' : 'A MAGICAL PLACE WHERE NATURE PRESIDES'}
                  </h4>
                  <p className="text-sm md:text-[15px]">
                    {lang === 'pt' && "Vigias nasce da vontade de recuperação de um monte abandonado, com profundo respeito pelas pré-existências. A utilização da pedra, extraída da própria topografia, e a integração orgânica com o montado, devolvem a este lugar a sua dignidade original."}
                    {lang === 'es' && "Vigias nace de la voluntad de recuperar un monte abandonado, con profundo respeto por el entorno. El uso de la piedra autóctona y la integración orgánica con el montado, devuelven a este lugar su dignidad original."}
                    {lang === 'en' && "Vigias was born from the desire to recover an abandoned piece of land, with profound respect for what already existed. The use of local stone and organic integration with the cork oak forest restore this place to its original dignity."}
                  </p>
                  <p className="text-sm md:text-[15px]">
                    {lang === 'pt' && "O luxo, aqui, define-se pela abundância de espaço, pela escala da paisagem e pelo corte voluntário com a urgência do tempo. Na sua essência, abraçamos o conceito de «comporta lifestyle» adaptado às planícies intocáveis do Alto Alentejo."}
                    {lang === 'es' && "El lujo, aquí, se define por la abundancia de espacio y el corte voluntario con la urgencia del tiempo. En su esencia, abrazamos el «comporta lifestyle» adaptado a las llanuras del Alto Alentejo."}
                    {lang === 'en' && "Luxury here is defined by the abundance of space, the scale of the landscape and the voluntary break from the urgency of time. We embrace the «comporta lifestyle» adapted to the untouched plains of the Alto Alentejo."}
                  </p>
               </div>
            </div>

            {/* Horizontal Video Banner (Landscape format) */}
            <div className="w-full mt-20 aspect-video md:aspect-[21/9] max-h-[550px] bg-gray-100 overflow-hidden relative border border-brand-ink/5 shadow-sm">
               <YoutubeBackground 
                 videoId="IJYMuDc7Gto"
                 startSeconds={63}
                 endSeconds={68}
                 style={{
                   width: "115vw",
                   height: "64.69vw",
                   minHeight: "115%",
                   minWidth: "204.44%",
                   transform: "translate(-50%, -50%)",
                   top: "50%",
                   left: "50%",
                 }}
                 className="opacity-100"
               />
               {/* Transparent overlay to block clicks/touches from reaching the iframe */}
               <div className="absolute inset-0 bg-transparent z-10 pointer-events-auto" />
            </div>

         </div>
      </section>

      {/* Block 2 */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-[#F5F4F0]">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
             <div className="flex flex-col justify-center order-2 md:order-1">
               <h3 className="font-serif text-3xl md:text-5xl text-[#2e2624] mb-8 leading-tight">
                 {lang === 'pt' && <>Conservação<br/>Silenciosa</>}
                 {lang === 'es' && <>Conservación<br/>Silenciosa</>}
                 {lang === 'en' && <>Silent<br/>Conservation</>}
               </h3>
               <div className="font-sans font-light text-[#2e2624]/70 leading-loose space-y-6 text-justify md:text-left">
                  <p>
                    {lang === 'pt' && "Em cada detalhe, desde o aprovisionamento passivo de energia à ausência absoluta de iluminação decorativa exterior, a sustentabilidade não é um manifesto, mas uma prática silenciosa e contínua que assegura o equilíbrio do frágil ecossistema que nos acolhe."}
                    {lang === 'es' && "En cada detalle, la sostenibilidad no es un manifiesto, sino una práctica silenciosa y continua que asegura el equilibrio del frágil ecosistema que nos acoge."}
                    {lang === 'en' && "In every detail, sustainability is not a manifesto, but a silent and continuous practice that ensures the balance of the fragile ecosystem that welcomes us."}
                  </p>
                  <p>
                    {lang === 'pt' && "Os nossos materiais são locais, respeitando a herança histórica de Marvão, garantindo que as paredes respirem a mesma cor de terra que as suporta e que os nossos hóspedes tenham uma autêntica ligação com a fauna e flora."}
                    {lang === 'es' && "Nuestros materiales son locales, respetando la herencia histórica de Marvão, garantizando que los huéspedes tengan una auténtica conexión con la fauna y flora."}
                    {lang === 'en' && "Our materials are local, respecting the historical heritage of Marvão, ensuring that guests have an authentic connection with the fauna and flora."}
                  </p>
               </div>
            </div>
            <div className="w-full aspect-[4/5] bg-gray-200 overflow-hidden order-1 md:order-2">
               <img 
                 src="https://www.vigias.pt/fotos/CASA_SOL/Vigias-LCQ_623.jpg" 
                 alt="Vigias Pool & Deck" 
                 className="w-full h-full object-cover filter brightness-95"
               />
            </div>
         </div>
      </section>

      {/* Booking Section */}
      <VigiasBookingSection lang={lang} discreet={true} />

      {/* Full Width Image Block */}
      <section className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden group/slider">
         {paisagensImages.map((imgSrc, idx) => (
            <img 
               key={idx}
               src={imgSrc} 
               alt={`Paisagens Eternas ${idx + 1}`} 
               className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out filter brightness-[0.85] contrast-[1.02] saturate-[0.93] sepia-[0.05] ${
                  idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
               }`}
            />
         ))}

         {/* Navigation Arrows */}
         <button 
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/50 text-white backdrop-blur-xs opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 cursor-pointer"
            aria-label="Previous image"
         >
            <ChevronLeft className="w-6 h-6" />
         </button>
         <button 
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/50 text-white backdrop-blur-xs opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 cursor-pointer"
            aria-label="Next image"
         >
            <ChevronRight className="w-6 h-6" />
         </button>

         {/* Text Overlay */}
         <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <h2 className="text-white font-serif text-4xl md:text-6xl tracking-wide opacity-90 select-none">
               {lang === 'pt' && "Paisagens Eternas"}
               {lang === 'es' && "Paisajes Eternos"}
               {lang === 'en' && "Eternal Landscapes"}
            </h2>
         </div>

         {/* Dot Indicators */}
         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {paisagensImages.map((_, idx) => (
               <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                     idx === currentSlide ? "bg-white w-5" : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
               />
            ))}
         </div>
      </section>
    </>
  );
}
