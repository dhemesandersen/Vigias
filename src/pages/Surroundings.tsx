import { Language } from "../lib/i18n";
import { SEO } from "../components/SEO";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Surroundings({ lang }: { lang: Language }) {
  const patrimonioImages = [
    "https://www.vigias.pt/fotos/ENTORNO/DSC06966%20copia.jpg",
    "https://www.vigias.pt/fotos/ENTORNO/DSC06970%20copia.jpg",
    "https://www.vigias.pt/fotos/ENTORNO/DSC05625%20copia.jpg",
    "https://www.vigias.pt/fotos/ENTORNO/DSC05624%20copia.jpg"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % patrimonioImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % patrimonioImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + patrimonioImages.length) % patrimonioImages.length);
  };

  const seo = {
    pt: {
      title: "Envolvente natural · Parque Natural Serra de S. Mamede | Vigias Alentejo",
      description: "O Parque Natural Serra de S. Mamede: fauna, flora, percursos pedestres e património. O que ver perto das Vigias e como chegar de Madrid ou Lisboa.",
      h1: "A Envolvente",
      h2: "Serra de S. Mamede & Norte do Alentejo"
    },
    es: {
      title: "Entorno natural · Parque Natural Sierra de S. Mamede | Vigias Alentejo",
      description: "El Parque Natural Sierra de S. Mamede: fauna, flora y patrimonio. Qué ver cerca de Vigias.",
      h1: "El Entorno",
      h2: "Sierra de S. Mamede y el norte del Alentejo"
    },
    en: {
      title: "Natural surroundings · Serra de S. Mamede Natural Park | Vigias Alentejo",
      description: "The Serra de S. Mamede Natural Park: fauna, flora, and heritage. What to see near Vigias.",
      h1: "The Surroundings",
      h2: "Serra de S. Mamede & Northern Alentejo"
    }
  }[lang];

  return (
    <>
      <SEO title={seo.title} description={seo.description} lang={lang} />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 bg-[#E8E6E1]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl text-[#2e2624] tracking-tight mb-8">
             {seo.h1}
          </h1>
          <h2 className="font-sans text-sm md:text-base font-light tracking-[0.2em] uppercase text-[#2e2624]/60">
             {seo.h2}
          </h2>
        </div>
      </section>

      {/* Block 1 */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-white">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            
            {/* Left Column */}
            <div className="w-full lg:w-5/12 flex flex-col justify-between h-full min-h-[lg:800px]">
               <h3 className="font-serif text-5xl md:text-6xl lg:text-[4rem] text-[#2e2624] mb-12 leading-[1.1] tracking-tight">
                 {lang === 'pt' && <>O Oásis<br/>Alentejano</>}
                 {lang === 'es' && <>El Oasis<br/>Alentejano</>}
                 {lang === 'en' && <>The Alentejo<br/>Oasis</>}
               </h3>
               
               <div className="w-3/4 sm:w-2/3 lg:w-3/4 self-center lg:self-end mb-16 lg:mr-10">
                  <div className="aspect-[4/5] overflow-hidden">
                     <img 
                       src="https://www.vigias.pt/fotos/CAMINHOS_VIGIAS/Vigias-LCQ_363.jpg" 
                       alt="Serra de S. Mamede" 
                       className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.02] saturate-[0.93] sepia-[0.05]"
                     />
                  </div>
               </div>

               <div className="font-sans font-light text-[#2e2624]/70 leading-relaxed space-y-6 text-justify md:text-left">
                  <h4 className="text-xs md:text-sm tracking-[0.2em] font-medium text-[#2e2624] uppercase mb-4">
                    {lang === 'pt' ? 'UM LUGAR MÁGICO ONDE A NATUREZA IMPERA' : lang === 'es' ? 'UN LUGAR MÁGICO DONDE LA NATURALEZA IMPERA' : 'A MAGICAL PLACE WHERE NATURE PRESIDES'}
                  </h4>
                  <p className="text-sm md:text-[15px]">
                    {lang === 'pt' && "As Vigias escondem-se na imensidão do Parque Natural da Serra de S. Mamede, um enclave geológico que cria um microclima de exceção nas planícies do Alentejo."}
                    {lang === 'es' && "Las Vigias se esconden en la inmensidad del Parque Natural de la Sierra de S. Mamede, un enclave geológico que crea un microclima de excepción en el Alentejo."}
                    {lang === 'en' && "Vigias is hidden in the immensity of the Serra de S. Mamede Natural Park, a geological enclave that creates an exceptional microclimate in the Alentejo plains."}
                  </p>
                  <p className="text-sm md:text-[15px]">
                    {lang === 'pt' && "Aqui, a altitude traz uma frescura rara e uma mancha florestal rica em carvalhos, castanheiros e sobreiros centenários. Caminhe por trilhos desenhados pela natureza, respire o ar isento de qualquer poluição e deixe-se envolver pelo silêncio das montanhas."}
                    {lang === 'es' && "Aquí, la altitud trae una frescura rara y un bosque rico en robles, castaños y alcornoques centenarios. Camina por senderos naturales y respira el aire puro de las montañas."}
                    {lang === 'en' && "Here, the altitude brings a rare freshness and a forest rich in oaks, chestnut trees, and centennial cork oaks. Walk along trails designed by nature and breathe the pure mountain air."}
                  </p>
               </div>
            </div>

            {/* Right Column - Large Video */}
            <div className="w-full lg:w-7/12">
               <div className="w-full h-full min-h-[600px] lg:min-h-[900px] bg-gray-100 overflow-hidden relative">
                  <iframe 
                    src="https://www.youtube.com/embed/IJYMuDc7Gto?autoplay=1&mute=1&controls=0&loop=1&playlist=IJYMuDc7Gto&playsinline=1&showinfo=0&rel=0" 
                    className="absolute top-1/2 left-1/2 w-[300vw] h-[300vh] -translate-x-1/2 -translate-y-1/2 md:w-[200vw] md:h-[200vh] lg:w-[150vw] lg:h-[150vh] opacity-100 object-cover pointer-events-none"
                    frameBorder="0"
                    allow="autoplay; muted; encrypted-media"
                    title="Vigias Video"
                  />
               </div>
            </div>

         </div>
      </section>

      {/* Block 2 */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-[#F5F4F0]">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="flex flex-col justify-center order-2 md:order-1">
               <h3 className="font-serif text-3xl md:text-5xl text-[#2e2624] mb-8 leading-tight">
                 {lang === 'pt' && <>Património<br/>Intemporal</>}
                 {lang === 'es' && <>Patrimonio<br/>Atemporal</>}
                 {lang === 'en' && <>Timeless<br/>Heritage</>}
               </h3>
               <div className="font-sans font-light text-[#2e2624]/70 leading-loose space-y-6 text-justify md:text-left">
                  <p>
                    {lang === 'pt' && "A apenas quinze minutos de distância da propriedade, erguem-se vilas medievais e castelos de imponência ímpar, como o majestoso Castelo de Marvão e as muralhas de Castelo de Vide."}
                    {lang === 'es' && "A solo quince minutos se alzan villas medievales y castillos de gran magnitud, como el Castillo de Marvão y las murallas de Castelo de Vide."}
                    {lang === 'en' && "Just fifteen minutes away, medieval villages and magnificent castles rise above the hills, such as the majestic Marvão Castle and the walls of Castelo de Vide."}
                  </p>
                  <p>
                     {lang === 'pt' && "Descubra vestígios da presença romana na Cidade de Ammaia, desvende antas megalíticas e explore o rico mapa cultural que o Alto Alentejo tem para oferecer, antes de regressar ao refúgio seguro das suas Vigias."}
                     {lang === 'es' && "Descubra ruinas romanas en Ammaia, dólmenes megalíticos y todo el patrimonio cultural del Alto Alentejo antes de regresar a la tranquilidad de Vigias."}
                     {lang === 'en' && "Discover the Roman ruins of Ammaia, megalithic dolmens, and the cultural map of Alto Alentejo before returning to the peaceful sanctuary of Vigias."}
                  </p>
               </div>
            </div>
            <div className="w-full aspect-[4/5] bg-gray-200 overflow-hidden order-1 md:order-2 relative group/slider">
               {patrimonioImages.map((imgSrc, idx) => (
                  <img 
                     key={idx}
                     src={imgSrc} 
                     alt={`Património ${idx + 1}`} 
                     className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out filter brightness-[0.98] contrast-[1.02] saturate-[0.93] sepia-[0.05] ${
                        idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                     }`}
                  />
               ))}

               {/* Navigation Arrows */}
               <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/25 hover:bg-black/55 text-white backdrop-blur-xs opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 cursor-pointer"
                  aria-label="Previous image"
               >
                  <ChevronLeft className="w-6 h-6" />
               </button>
               <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/25 hover:bg-black/55 text-white backdrop-blur-xs opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 cursor-pointer"
                  aria-label="Next image"
               >
                  <ChevronRight className="w-6 h-6" />
               </button>

               {/* Dot Indicators */}
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                  {patrimonioImages.map((_, idx) => (
                     <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                           idx === currentSlide ? "bg-white w-4" : "bg-white/40 hover:bg-white/60"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                     />
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Full Width Image Block */}
      <section className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden">
         <img 
           src="https://www.vigias.pt/fotos/CAMINHOS_VIGIAS/Vigias-LCQ_247.jpg" 
           alt="Parque Natural Serra de São Mamede" 
           className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.02] saturate-[0.93] sepia-[0.05]"
         />
         <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white font-serif text-4xl md:text-6xl tracking-wide opacity-90">
               {lang === 'pt' ? 'Onde o tempo pára.' : lang === 'es' ? 'Donde el tiempo se detiene.' : 'Where time stands still.'}
            </h2>
         </div>
      </section>
    </>
  );
}
