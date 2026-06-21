import { useParams, Link } from "react-router-dom";
import { Language, getRoutes, getTranslation } from "../lib/i18n";
import { houseData } from "../data/houses";
import { homeData } from "../data/home";
import { SEO } from "../components/SEO";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { cn } from "../lib/utils";
import { DirectBookWidget } from "../components/DirectBookWidget";
import { VigiasBookingSection } from "../components/VigiasBookingSection";

const videoMap: Record<string, Record<Language, string>> = {
  "casa-sol": {
    pt: "7YE87FhliNk",
    en: "1yykFSFJjx8",
    es: "AfWx8DvGRzQ"
  },
  "casa-gaio": {
    pt: "XtH3M09vEY4",
    en: "U6B4pc6ugRU",
    es: "eJj8omv2eHA"
  },
  "casa-cal": {
    pt: "jVGEV57b4JU",
    en: "9p2SWvUltcE",
    es: "yA6vb1ba9Rg"
  },
  "casa-feto": {
    pt: "MRXuY6DOvEw",
    en: "-RcTbgtx-yQ",
    es: "_jvLu9WITOI"
  },
  "casa-ocre": {
    pt: "bHXbVGIPp9Q",
    en: "dXcX5SSDGiw",
    es: "C6cIa3W8vZA"
  }
};

const videoLabels = {
  pt: {
    play: "Ver o Filme da Casa",
    subtitle: "Filme de apresentação • Alta definição"
  },
  en: {
    play: "Watch House Video",
    subtitle: "Presentation film • High definition"
  },
  es: {
    play: "Ver el Video de la Casa",
    subtitle: "Vídeo de presentación • Alta definición"
  }
};

const labelTranslations: Record<string, Record<Language, string>> = {
  "Capacidade": { pt: "Capacidade", en: "Capacity", es: "Capacidad" },
  "Tipologia": { pt: "Tipologia", en: "Typology", es: "Tipología" },
  "Camas": { pt: "Camas", en: "Beds", es: "Camas" },
  "Casas de Banho": { pt: "Casas de Banho", en: "Bathrooms", es: "Cuartos de Baño" },
  "Piscina": { pt: "Piscina", en: "Pool", es: "Piscina" },
  "Climatização": { pt: "Climatização", en: "Climate Control", es: "Climatización" },
  "Cozinha": { pt: "Cozinha", en: "Kitchen", es: "Cocina" },
  "Internet": { pt: "Internet", en: "Internet", es: "Internet" }
};

const valueTranslations: Record<string, Record<Language, string>> = {
  // "casa-sol"
  "4 pessoas": { pt: "4 pessoas", en: "4 people", es: "4 personas" },
  "2 Suites (uma com banheira independente)": { 
    pt: "2 Suites (uma com banheira independente)", 
    en: "2 Suites (one with freestanding bathtub)", 
    es: "2 Suites (una con bañera independiente)" 
  },
  "2 camas de casal King Size": { 
    pt: "2 camas de casal King Size", 
    en: "2 King Size double beds", 
    es: "2 camas de matrimonio King Size" 
  },
  "2 privativas + 1 serviço": { 
    pt: "2 privativas + 1 serviço", 
    en: "2 private + 1 half bath", 
    es: "2 privadas + 1 aseo" 
  },
  "Privada de água salgada": { 
    pt: "Privada de água salgada", 
    en: "Private saltwater pool", 
    es: "Privada de agua salada" 
  },
  "Ar condicionado e Lareira de duas faces": { 
    pt: "Ar condicionado e Lareira de duas faces", 
    en: "Air conditioning & Two-sided fireplace", 
    es: "Aire acondicionado & Chimenea de doble cara" 
  },
  "Luz natural e totalmente equipada": { 
    pt: "Luz natural e totalmente equipada", 
    en: "Natural light & fully equipped kitchen", 
    es: "Luz natural y cocina totalmente equipada" 
  },
  "Wi-Fi (Starlink)": { 
    pt: "Wi-Fi (Starlink)", 
    en: "Wi-Fi (Starlink)", 
    es: "Wi-Fi (Starlink)" 
  },

  // "casa-gaio"
  "2 pessoas": { pt: "2 pessoas", en: "2 people", es: "2 personas" },
  "Loft em open-space": { 
    pt: "Loft em open-space", 
    en: "Open-space loft", 
    es: "Loft en open-space" 
  },
  "1 cama de casal King Size": { 
    pt: "1 cama de casal King Size", 
    en: "1 King Size double bed", 
    es: "1 cama de matrimonio King Size" 
  },
  "1 com duche amplo + banheira no quarto": { 
    pt: "1 com duche amplo + banheira no quarto", 
    en: "1 with large shower + in-room bathtub", 
    es: "1 con ducha amplia + bañera en el dormitorio" 
  },
  "Ar condicionado e Lareira suspensa": { 
    pt: "Ar condicionado e Lareira suspensa", 
    en: "Air conditioning & Suspended fireplace", 
    es: "Aire acondicionado & Chimenea suspendida" 
  },
  "Totalmente equipada": { 
    pt: "Totalmente equipada", 
    en: "Fully equipped kitchen", 
    es: "Cocina totalmente equipada" 
  },
  "Wi-Fi": { pt: "Wi-Fi", en: "Wi-Fi", es: "Wi-Fi" },

  // "casa-cal"
  "6 pessoas": { pt: "6 pessoas", en: "6 people", es: "6 personas" },
  "2 Suites + Mezanino": { 
    pt: "2 Suites + Mezanino", 
    en: "2 Suites + Mezzanine", 
    es: "2 Suites + Altillo" 
  },
  "3 camas de casal": { 
    pt: "3 camas de casal", 
    en: "3 double beds", 
    es: "3 camas de matrimonio" 
  },
  "3 completas": { 
    pt: "3 completas", 
    en: "3 full bathrooms", 
    es: "3 baños completos" 
  },
  "Privada e ampla": { 
    pt: "Privada e ampla", 
    en: "Spacious private pool", 
    es: "Piscina privada y amplia" 
  },
  "Ar condicionado e recuperador de calor": { 
    pt: "Ar condicionado e recuperador de calor", 
    en: "Air conditioning & wood burner", 
    es: "Aire acondicionado & estufa de leña" 
  },
  "Wi-Fi de alta velocidade": { 
    pt: "Wi-Fi de alta velocidade", 
    en: "High-speed Wi-Fi", 
    es: "Wi-Fi de alta velocidad" 
  },

  // "casa-feto"
  "2 Suites independentes": { 
    pt: "2 Suites independentes", 
    en: "2 independent suites", 
    es: "2 Suites independientes"  
  },
  "2 camas de casal": { 
    pt: "2 camas de casal", 
    en: "2 double beds", 
    es: "2 camas de matrimonio" 
  },
  "2 com acesso ao exterior": { 
    pt: "2 com acesso ao exterior", 
    en: "2 bathrooms with outdoor access", 
    es: "2 baños con acceso al exterior" 
  },
  "Privada com deck panorâmico": { 
    pt: "Privada com deck panorâmico", 
    en: "Private pool under panoramic deck", 
    es: "Piscina privada con porche panorámico" 
  },
  "Ar condicionado": { 
    pt: "Ar condicionado", 
    en: "Air conditioning", 
    es: "Aire acondicionado" 
  },

  // "casa-ocre"
  "5 pessoas": { pt: "5 pessoas", en: "5 people", es: "5 personas" },
  "T2 + Mezanino": { 
    pt: "T2 + Mezanino", 
    en: "2-Bedroom + Mezzanine", 
    es: "T2 + Altillo" 
  },
  "1 cama King (suite principal), 2 singles ou King (quarto), 1 sofá-cama individual (mezanino)": { 
    pt: "1 cama King (suite principal), 2 singles ou King (quarto), 1 sofá-cama individual (mezanino)", 
    en: "1 King bed (main suite), 2 singles or 1 King (bedroom), 1 single sofa bed (mezzanine)", 
    es: "1 cama King (suite principal), 2 individuales o King (habitación), 1 sofá cama individual (altillo)" 
  },
  "2 na casa principal, 1 no anexo de serviço": { 
    pt: "2 na casa principal, 1 no anexo de serviço", 
    en: "2 in the main house, 1 in the garden room", 
    es: "2 en la casa principal, 1 en el anexo de servicio" 
  },
  "Privada grande com bar e zona lounge": { 
    pt: "Privada grande com bar e zona lounge", 
    en: "Large private pool with bar & lounge area", 
    es: "Piscina privada grande con bar y zona lounge" 
  },
  "Ar condicionado e Lareira": { 
    pt: "Ar condicionado e Lareira", 
    en: "Air conditioning & Fireplace", 
    es: "Aire acondicionado & Chimenea" 
  }
};

export function SingleHouse({ lang }: { lang: Language }) {
  const { id } = useParams<{ id: string }>();
  const r = getRoutes(lang);
  const t = getTranslation(lang);
  
  const house = (houseData[lang] as any)[id || ''] || (houseData['pt'] as any)[id || ''];
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!house) {
    return <div className="p-24 text-center">House not found</div>;
  }

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % house.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + house.images.length) % house.images.length);

  return (
    <>
      <SEO title={house.seo.title} description={house.seo.description} lang={lang} />
      
      {/* Hero Image Slider */}
      <section className="relative h-[65vh] bg-brand-ink overflow-hidden">
         {/* Slider Images */}
         {house.images.map((img: string, idx: number) => (
           <div 
             key={idx} 
             className={cn(
               "absolute inset-0 transition-opacity duration-1000",
               idx === currentImage ? "opacity-100" : "opacity-0"
             )}
           >
             <img src={img} alt={`${house.h1} - Imagem ${idx + 1}`} className={cn("w-full h-full object-cover", id === "casa-ocre" && idx === 0 && "object-right")} />
             <div className="absolute inset-0 bg-brand-ink/20 mix-blend-multiply"></div>
           </div>
         ))}
         
         {/* Navigation Arrows */}
         {house.images.length > 1 && (
           <>
             <button 
               onClick={prevImage}
               className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors z-10"
             >
               <ChevronLeft className="w-6 h-6" />
             </button>
             <button 
               onClick={nextImage}
               className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors z-10"
             >
               <ChevronRight className="w-6 h-6" />
             </button>
             
             {/* Indicators */}
             <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                {house.images.map((_: any, idx: number) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      idx === currentImage ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
                    )}
                  />
                ))}
             </div>
           </>
         )}
      </section>

      {/* House Content */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="flex-1 lg:w-2/3">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-ink mb-6 letter-spacing-tight">{house.h1}</h1>
            <p className="text-brand-ink/60 font-serif text-xl md:text-2xl italic mb-12">
               {house.h2}
            </p>
            
            <div className="text-brand-ink/80 font-sans leading-relaxed text-sm space-y-6 mb-8">
               <p>
                 {lang === 'pt' && `A ${house.h1} é uma das propriedades exclusivas das Vigias, pensada para oferecer o máximo conforto em harmonia com o Parque Natural Serra de S. Mamede. O design cuidadoso e os materiais locais integram-se na paisagem protegida.`}
                 {lang === 'en' && `A ${house.h1} is one of Vigias' exclusive properties, designed to offer supreme comfort in harmony with the Serra de S. Mamede Natural Park. The careful design and local materials integrate seamlessly into the protected landscape.`}
                 {lang === 'es' && `La ${house.h1} es una de las propiedades exclusivas de Vigias, pensada para ofrecer el máximo confort en armonía con el Parque Natural de la Sierra de S. Mamede. El cuidado diseño y los materiales locales se integran en el paisaje protegido.`}
               </p>
            </div>

            {/* Elegant Video Player Widget */}
            {videoMap[id || ''] && (
              <div className="mb-10">
                <div 
                  onClick={() => setIsModalOpen(true)}
                  className="group relative w-full h-[220px] sm:h-[280px] rounded bg-brand-ink overflow-hidden cursor-pointer shadow-sm border border-brand-ink/10 transition-all duration-[800ms] ease-out hover:shadow-lg hover:border-brand-ink/20"
                >
                  {/* Photo Cover of the House */}
                  <img 
                    src={house.images[0]} 
                    alt={`Vídeo de apresentação ${house.h1}`} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 opacity-80"
                  />
                  
                  {/* Dark slate overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/95 via-brand-ink/60 to-brand-ink/10 mix-blend-multiply transition-opacity duration-700" />
                  
                  {/* Centered play interface */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-500 ease-out group-hover:bg-white group-hover:text-brand-ink group-hover:scale-110 group-hover:border-white shadow-2xl mb-4">
                      <Play className="w-5 h-5 fill-current ml-0.5 transition-colors duration-500" />
                    </div>
                    
                    <span className="font-serif text-xl tracking-wide mb-1.5 text-white text-center">
                      {videoLabels[lang]?.play || videoLabels['pt'].play}
                    </span>
                    <span className="font-sans text-[10px] uppercase tracking-widest opacity-60 text-white/90 text-center">
                      {videoLabels[lang]?.subtitle || videoLabels['pt'].subtitle}
                    </span>
                  </div>

                  {/* Corner tag label */}
                  <div className="absolute top-4 left-4 font-sans text-[9px] uppercase tracking-widest text-white/95 bg-brand-ink/40 backdrop-blur-[2px] px-2.5 py-1 rounded-[1px] border border-white/10 font-bold">
                    Film
                  </div>
                </div>
              </div>
            )}
            
            {id !== "casa-gaio" && id !== "casa-cal" && id !== "casa-feto" && id !== "casa-ocre" && id !== "casa-sol" && <DirectBookWidget houseId={id} embedded={true} lang={lang} />}
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-brand-bg md:sticky top-32 p-8 text-sm text-brand-ink space-y-8 rounded-sm border border-brand-ink/10">
               <div>
                 <div className="font-semibold uppercase tracking-widest border-b border-brand-ink/10 pb-4 mb-6 text-[11px] opacity-60">
                   {lang === 'en' ? 'Technical Specifications' : 'Ficha Técnica'}
                 </div>
                 
                 {(() => {
                   const ptHouse = (houseData['pt'] as any)[id || ''];
                   const fichaTecnicaToUse = ptHouse?.fichaTecnica || [];
                   if (fichaTecnicaToUse.length > 0) {
                     return (
                       <ul className="space-y-4">
                         {fichaTecnicaToUse.map((item: { label: string, value: string }, idx: number) => {
                           const translatedLabel = labelTranslations[item.label]?.[lang] || item.label;
                           const translatedValue = valueTranslations[item.value]?.[lang] || item.value;
                           return (
                             <li key={idx} className="flex flex-col gap-1">
                               <span className="font-medium text-[10px] uppercase tracking-widest opacity-50">{translatedLabel}</span>
                               <span className="font-serif text-lg">{translatedValue}</span>
                             </li>
                           );
                         })}
                       </ul>
                     );
                   }
                   return (
                     <>
                       <p><span className="font-medium opacity-60">{lang === 'en' ? 'Capacity' : lang === 'es' ? 'Capacidad' : 'Lotação'}:</span> <br/><span className="font-serif text-lg">{house.capacity}</span></p>
                       <p className="mt-4"><span className="font-medium opacity-60">{lang === 'en' ? 'Features' : lang === 'es' ? 'Características' : 'Características'}:</span> <br/><span className="text-sm opacity-80">{house.features}</span></p>
                     </>
                   );
                 })()}
               </div>
            </div>
          </div>
        </div>
      </section>

      {(id === "casa-gaio" || id === "casa-cal" || id === "casa-feto" || id === "casa-ocre" || id === "casa-sol") && <VigiasBookingSection houseId={id} lang={lang} />}

      {/* Gallery Grid */}
      {((house.galleryImages && house.galleryImages.length > 0) || house.images.length > 1) && (
        <section className="pb-24 px-6 md:px-12 bg-white">
           <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(house.galleryImages || house.images.slice(1)).map((img: string, idx: number) => (
                <img key={idx} src={img} alt={`Gallery ${idx}`} className="w-full h-auto aspect-[4/3] object-cover rounded-sm bg-zinc-200" />
              ))}
           </div>
        </section>
      )}
      
      {/* Related Houses */}
      <section className="py-24 px-6 md:px-12 bg-brand-bg text-center border-t border-brand-ink/5">
         <h3 className="font-serif text-2xl md:text-3xl text-brand-ink mb-12">{t.common.relatedHouses}</h3>
         
         {/* Beautiful responsive grid layout of other 4 houses */}
         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
           {homeData[lang].casas.items
             .filter((casa: any) => casa.id !== id)
             .map((casa: any) => (
                <Link 
                  key={casa.id} 
                  to={casa.link} 
                  className="group block text-left"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-zinc-200">
                    <img 
                      src={casa.image} 
                      alt={casa.name} 
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0 brightness-[0.98] contrast-[1.02] saturate-[0.93] sepia-[0.05] ${casa.id === "casa-ocre" ? "object-right" : ""}`} 
                    />
                    {casa.hoverImage && (
                      <img 
                        src={casa.hoverImage} 
                        alt={casa.name} 
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 brightness-[0.98] contrast-[1.02] saturate-[0.93] sepia-[0.05]" 
                      />
                    )}
                  </div>
                  <h4 className="font-serif text-lg text-brand-ink mt-4 transition-colors group-hover:text-brand-ink/75">
                    {casa.name}
                  </h4>
                  <p className="text-brand-ink/60 font-sans text-xs mt-1 uppercase tracking-wider">
                    {casa.capacity}
                  </p>
                </Link>
             ))}
         </div>

         <Link to={r.houses} className="inline-block border-b border-brand-ink text-brand-ink uppercase letter-spacing-wide text-[11px] font-bold pb-1 hover:opacity-60 transition-opacity">
            {t.common.viewHouses}
         </Link>
      </section>

      {/* video YouTube Modal */}
      {isModalOpen && videoMap[id || ''] && (
        <div className="fixed inset-0 bg-brand-ink/95 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 transition-opacity duration-300">
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
              className="absolute top-4 right-4 text-white/70 hover:text-white hover:scale-105 transition-all bg-black/50 hover:bg-black/80 p-2.5 rounded-full backdrop-blur-sm z-20 border border-white/10"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
            
            <iframe 
              src={`https://www.youtube.com/embed/${videoMap[id || ''][lang]}?autoplay=1&rel=0&modestbranding=1`}
              className="w-full h-full border-0 absolute inset-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={house.h1}
            />
          </div>
        </div>
      )}
    </>
  );
}
