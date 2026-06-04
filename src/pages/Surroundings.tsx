import { Language } from "../lib/i18n";
import { SEO } from "../components/SEO";

export function Surroundings({ lang }: { lang: Language }) {
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
                       src="https://vigias.pt/wp-content/uploads/2023/04/4.png" 
                       alt="Serra de S. Mamede" 
                       className="w-full h-full object-cover filter brightness-95"
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
                    className="absolute top-1/2 left-1/2 w-[300vw] h-[300vh] -translate-x-1/2 -translate-y-1/2 md:w-[200vw] md:h-[200vh] lg:w-[150vw] lg:h-[150vh] opacity-60 object-cover pointer-events-none"
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
            <div className="w-full aspect-[4/5] bg-gray-200 overflow-hidden order-1 md:order-2">
               <img 
                 src="https://vigias.pt/wp-content/uploads/2023/05/17.jpg" 
                 alt="Marvão Panorama" 
                 className="w-full h-full object-cover filter brightness-95"
               />
            </div>
         </div>
      </section>

      {/* Full Width Image Block */}
      <section className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden">
         <img 
           src="https://vigias.pt/wp-content/uploads/2023/05/parque-natural-s-mamede.jpg" 
           alt="Parque Natural Serra de São Mamede" 
           className="w-full h-full object-cover filter brightness-[0.85]"
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
