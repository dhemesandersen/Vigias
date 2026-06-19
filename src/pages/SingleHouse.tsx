import { useParams, Link } from "react-router-dom";
import { Language, getRoutes, getTranslation } from "../lib/i18n";
import { houseData } from "../data/houses";
import { homeData } from "../data/home";
import { SEO } from "../components/SEO";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";
import { DirectBookWidget } from "../components/DirectBookWidget";

export function SingleHouse({ lang }: { lang: Language }) {
  const { id } = useParams<{ id: string }>();
  const r = getRoutes(lang);
  const t = getTranslation(lang);
  
  const house = (houseData[lang] as any)[id || ''] || (houseData['pt'] as any)[id || ''];
  const [currentImage, setCurrentImage] = useState(0);

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
                 A {house.h1} é uma das propriedades exclusivas das Vigias, pensada para oferecer o máximo conforto em harmonia com o Parque Natural Serra de S. Mamede. O design cuidadoso e os materiais locais integram-se na paisagem protegida.
               </p>
            </div>
            
            <DirectBookWidget houseId={id} embedded={true} lang={lang} />
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-brand-bg md:sticky top-32 p-8 text-sm text-brand-ink space-y-8 rounded-sm border border-brand-ink/10">
               <div>
                 <div className="font-semibold uppercase letter-spacing-wide tracking-widest border-b border-brand-ink/10 pb-4 mb-6 text-[11px] opacity-60">
                   Ficha Técnica
                 </div>
                 
                 {house.fichaTecnica ? (
                   <ul className="space-y-4">
                     {house.fichaTecnica.map((item: { label: string, value: string }, idx: number) => (
                       <li key={idx} className="flex flex-col gap-1">
                         <span className="font-medium text-[10px] uppercase letter-spacing-wide opacity-50">{item.label}</span>
                         <span className="font-serif text-lg">{item.value}</span>
                       </li>
                     ))}
                   </ul>
                 ) : (
                   <>
                     <p><span className="font-medium opacity-60">Lotação:</span> <br/><span className="font-serif text-lg">{house.capacity}</span></p>
                     <p className="mt-4"><span className="font-medium opacity-60">Características:</span> <br/><span className="text-sm opacity-80">{house.features}</span></p>
                   </>
                 )}
               </div>
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
}
