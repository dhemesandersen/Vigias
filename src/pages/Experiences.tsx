import { Language } from "../lib/i18n";
import { SEO } from "../components/SEO";
import { Heart, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const experiencesData = [
  {
    image: "https://www.vigias.pt/fotos/CAMINHOS_VIGIAS/Vigias-LCQ_713.jpg",
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
    tag: {
      pt: "Popular",
      es: "Popular",
      en: "Popular"
    },
    description: {
      pt: [
        "O essencial só para nós.",
        "Através de caminhos rodeados por sobreiros centenários, num planalto de aves entregues à luxúria do silêncio, chega às Vigias.",
        "Escondidas na paisagem oculta e montanhosa do Parque Natural da Serra de S. Mamede, as Vigias são o local ideal para uma estadia exclusiva, num ambiente luxuoso e relaxante, onde pode desfrutar do charme das inesgotáveis paisagens do Norte Alentejano."
      ],
      es: [
        "Lo esencial solo para nosotros.",
        "A través de senderos rodeados de alcornoques centenarios, en una meseta de aves entregadas al deleite del silencio, se llega a Vigias.",
        "Escondidas en el juego oculto y montañoso del Parque Natural de la Sierra de S. Mamede, Vigias son el lugar ideal para una estancia exclusiva, en un ambiente lujoso y relajante, donde disfrutar del encanto de los inagotables paisajes del Norte Alentejano."
      ],
      en: [
        "The essential just for us.",
        "Through paths surrounded by centuries-old cork oaks, on a plateau of birds surrendered to the luxury of silence, you reach Vigias.",
        "Hidden in the hidden and mountainous landscape of the Serra de S. Mamede Natural Park, Vigias are the ideal place for an exclusive stay, in a luxurious and relaxing environment, where you can enjoy the charm of the endless landscapes of Northern Alentejo."
      ]
    }
  },
  {
    image: "https://www.vigias.pt/fotos/CAMINHOS_VIGIAS/Vigias-LCQ_199.jpg",
    title: {
      pt: "Passeios de bicicleta ao redor de Marvão",
      es: "Rutas en bicicleta alrededor de Marvão",
      en: "Biking trips around Marvão"
    },
    host: {
      pt: "Mobilidade elétrica",
      es: "Movilidad eléctrica",
      en: "Electric mobility"
    },
    tag: {
      pt: "Aventura",
      es: "Aventura",
      en: "Adventure"
    },
    description: {
      pt: [
        "Mergulhe no Parque Natural da Serra de S. Mamede e descubra vilas, castelos, caminhos rurais e paisagens abertas de uma forma mais leve, sustentável e silenciosa.",
        "A mobilidade elétrica permite explorar a região com conforto, baixa pegada ecológica e maior liberdade, respeitando o ritmo da natureza e a autenticidade do território.",
        "Uma experiência pensada para quem quer descobrir Marvão e o Norte Alentejano sem pressa, com tempo para parar, respirar e contemplar."
      ],
      es: [
        "Sumérjase en el Parque Natural de la Sierra de S. Mamede y descubra pueblos, castillos, caminos rurales y paisajes abiertos de una forma más ligera, sostenible y silenciosa.",
        "La movilidad eléctrica permite explorar la región con comodidad, una baja huella ecológica y mayor libertad, respetando el ritmo de la naturaleza y la autenticidad del territorio.",
        "Una experiencia diseñada para quienes desean descubrir Marvão y el norte de Alentejo sin prisas, con tiempo para detenerse, respirar y contemplar."
      ],
      en: [
        "Immerse yourself of the Serra de S. Mamede Natural Park and discover villages, castles, rural roads, and open landscapes in a lighter, more sustainable, and silent way.",
        "Electric mobility allows you to explore the region in comfort, with a low carbon footprint and greater freedom, respecting the rhythm of nature and the authenticity of the territory.",
        "An experience designed for those who want to discover Marvão and Northern Alentejo without haste, with time to stop, breathe, and contemplate."
      ]
    }
  },
  {
    image: "https://www.vigias.pt/fotos/ENTORNO/avistamentoaves.jpg",
    title: {
      pt: "Avistamento de aves e rapina raras",
      es: "Observación de aves y rapaces raras",
      en: "Observation of rare birds and birds of prey"
    },
    host: {
      pt: "Nas Vigias e em redor",
      es: "En Vigias y alrededores",
      en: "In Vigias and surroundings"
    },
    tag: {
      pt: "Natureza",
      es: "Naturaleza",
      en: "Nature"
    },
    description: {
      pt: [
        "Um planalto de aves entregues à luxúria do silêncio. O Parque Natural da Serra de S. Mamede é um local de eleição para a observação de espécies raras e protegidas, como o emblemático Rolieiro-europeu (uma fascinante ave de tons azuis) e diversas aves de rapina.",
        "Entre montados, zonas arborizadas e caminhos silenciosos, é possível escutar e observar sinais de aves noturnas, como corujas e mochos, além de majestosas rapinas diurnas navegando os céus das Vigias.",
        "Esta é uma experiência de contemplação, paciência e silêncio. Mais do que procurar apenas o avistamento perfeito, o convite é entrar no ritmo da natureza, seja de dia ou de noite, e descobrir a vida selvagem que habita esta serra.",
        "Os avistamentos de espécies como o rolieiro dependem sempre da época do ano (principalmente primavera e verão, durante o período de nidificação), das condições naturais e do comportamento das espécies selvagens."
      ],
      es: [
        "Una meseta de aves entregadas al deleite del silencio. El Parque Natural de la Sierra de S. Mamede es un lugar privilegiado para la observación de especies raras y protegidas, como la emblemática Carraca europea (un ave fascinante de tonos azules) y diversas aves rapaces.",
        "Entre dehesas, zonas arboladas y caminos silenciosos, es posible escuchar y observar indicios de aves nocturnas, como búhos y mochuelos, además de majestuosas rapaces diurnas navegando los cielos de Vigias.",
        "Esta es una experiencia de contemplación, paciencia y silencio. Más que buscar simplemente el avistamiento perfecto, la invitación es a entrar en el ritmo de la naturaleza y descubrir la vida silvestre que habita esta sierra.",
        "Los avistamientos de especies como la carraca europea dependen siempre de la época del año (sobre todo primavera y verano), de las condiciones naturales y del comportamiento de las especies."
      ],
      en: [
        "A plateau of birds surrendered to the luxury of silence. The Serra de S. Mamede Natural Park is a privileged location for observing rare and protected species, such as the emblematic European Roller (a fascinating bird of bright blue hues) and various birds of prey.",
        "Among cork oak forests, wooded areas, and silent paths, it is possible to listen and observe signs of nocturnal birds like owls, as well as majestic diurnal raptors sailing the skies of Vigias.",
        "This is an experience of contemplation, patience, and silence. Rather than just searching for the perfect sighting, the invitation is to step into the rhythm of nature and discover the wildlife that inhabits this mountain range.",
        "Sightings of species such as the European roller always depend on the time of year (primarily spring and summer), natural conditions, and species behavior."
      ]
    }
  },
  {
    image: "https://www.vigias.pt/fotos/CASA_GAIO/Vigias-LCQ_178.jpg",
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
    tag: {
      pt: "Gastronomia",
      es: "Gastronomía",
      en: "Gastronomy"
    },
    description: {
      pt: [
        "Inspiradas nos sabores autênticos do Alentejo e nos produtos locais, as nossas sugestões gastronómicas combinam tradição, sofisticação e conforto.",
        "A experiência de chef em casa transforma a estadia num momento ainda mais especial, sem que precise de sair das Vigias. À mesa, os ingredientes da região ganham protagonismo através de pratos pensados com cuidado, elegância e respeito pela identidade local.",
        "É uma forma íntima de descobrir o território através dos seus sabores, num ambiente reservado, sereno e exclusivo.",
        "Perfeito para jantares especiais, momentos a dois, encontros em família ou simplesmente para quem quer viver o Alentejo com mais profundidade e prazer."
      ],
      es: [
        "Inspiradas en los sabores auténticos del Alentejo y en los productos locales, nuestras propuestas gastronómicas combinan tradición, sofisticación y confort.",
        "La experiencia de chef en casa transforma su estancia en un momento aún más especial, sin necesidad de salir de Vigias. En la mesa, los ingredientes de la región cobran protagonismo a través de platos diseñados con mimo, elegancia y respeto por la identidad local.",
        "Es una forma íntima de descubrir el territorio a través de sus sabores, en un ambiente reservado, sereno y exclusivo.",
        "Perfecto para cenas especiales, momentos en pareja, encuentros familiares o simplemente para quienes quieren vivir el Alentejo con mayor profundidad y placer."
      ],
      en: [
        "Inspired by the authentic flavors of Alentejo and local products, our gastronomic suggestions combine tradition, sophistication, and comfort.",
        "The chef-at-home experience transforms your stay into an even more special moment, without having to leave Vigias. At the table, local ingredients take center stage through dishes crafted with care, elegance, and respect for the local identity.",
        "It is an intimate way to discover the territory through its flavors, in a reserved, peaceful, and exclusive setting.",
        "Perfect for special dinners, romantic moments, family gatherings, or simply for those who want to experience Alentejo with more depth and pleasure."
      ]
    }
  },
  {
    image: "https://www.vigias.pt/fotos/CASA_OCRE/CASA_OCRE00_MilkyWay_photography.jpg",
    title: {
      pt: "Observação do céu noturno no Alentejo",
      es: "Observación del cielo nocturno en el Alentejo",
      en: "Stargazing the night sky in Alentejo"
    },
    host: {
      pt: "Nas Vigias e em redor",
      es: "En Vigias y alrededores",
      en: "In Vigias and surroundings"
    },
    tag: {
      pt: "Céu Noturno",
      es: "Cielo Nocturno",
      en: "Night Sky"
    },
    description: {
      pt: [
        "À noite, o Alentejo revela uma das suas experiências mais bonitas: o silêncio do céu.",
        "Longe da agitação urbana e rodeadas pela paisagem natural da Serra de S. Mamede, as Vigias oferecem o cenário ideal para contemplar estrelas, constelações e a imensidão do céu noturno.",
        "É uma experiência simples, mas inesquecível. Basta abrandar, olhar para cima e deixar que a noite faça o resto.",
        "Entre o conforto da casa, o ar puro da serra e a tranquilidade absoluta da paisagem, observar o céu transforma-se num ritual de pausa, presença e encanto."
      ],
      es: [
        "Por la noche, el Alentejo revela una de sus experiencias más bellas: el silencio del cielo.",
        "Lejos del bullicio urbano y rodeado por el paisaje natural de la Sierra de S. Mamede, Vigias ofrece el escenario ideal para contemplar estrellas, constelaciones y la inmensidad del cielo nocturno.",
        "Es una experiencia sencilla pero inolvidable. Simplemente disminuya la velocidad, mire hacia arriba y deje que la noche haga el resto.",
        "Entre el confort de la casa, el aire puro de la montaña y la tranquilidad absoluta del paisaje, observar el cielo se convierte en un ritual de pausa, presencia y encanto."
      ],
      en: [
        "At night, Alentejo reveals one of its most beautiful experiences: the silence of the sky.",
        "Far from the urban hustle and bustle and surrounded by the natural landscape of the Serra de S. Mamede, Vigias offers the ideal setting to contemplate stars, constellations, and the vastness of the night sky.",
        "It is a simple but unforgettable experience. Just slow down, look up, and let the night do the rest.",
        "Between the comfort of the house, the fresh air of the mountains, and the absolute tranquility of the landscape, watching the sky turns into a ritual of pause, presence, and enchantment."
      ]
    }
  },
  {
    image: "https://builder.livingtours.com/public/images/produtos/zYfF9QHg31aft.jpg",
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
    tag: {
      pt: "Destaque",
      es: "Destacado",
      en: "Highlight"
    },
    description: {
      pt: [
        "Descubra o Alentejo a partir de uma nova perspetiva.",
        "Os passeios de balão permitem sobrevoar paisagens abertas, vinhas, olivais, colinas suaves e aldeias que parecem suspensas no tempo. Uma experiência serena, memorável e perfeita para quem procura ver a região de uma forma verdadeiramente especial.",
        "Depois do céu, a terra. O enoturismo convida a descobrir adegas, vinhos e sabores que fazem parte da identidade alentejana, num encontro entre paisagem, cultura e tradição.",
        "É uma combinação perfeita para quem quer viver o território com todos os sentidos: a leveza do voo, a beleza da paisagem e a profundidade dos sabores locais."
      ],
      es: [
        "Descubra el Alentejo desde una nueva perspectiva.",
        "Los paseos en globo permiten sobrevolar paisajes abiertos, viñedos, olivares, suaves colinas y pueblos que parecen suspendidos en el tiempo. Una experiencia serena, memorable e ideal para quienes buscan ver la región de una manera verdaderamente especial.",
        "Después del cielo, la tierra. El enoturismo invita a descubrir bodegas, vinos y sabores que forman parte de la identidad alentejana, en un encuentro entre paisaje, cultura y tradición.",
        "Es una combinación perfecta para quienes quieren experimentar el territorio con todos los sentidos: la ligereza del vuelo, la belleza del paisaje y la profundidad de los sabores locales."
      ],
      en: [
        "Discover Alentejo from a new perspective.",
        "Hot air balloon rides allow you to fly over open landscapes, vineyards, olive groves, rolling hills, and villages that seem suspended in time. A serene, memorable experience, perfect for those looking to see the region in a truly special way.",
        "After the sky, the land. Wine tourism invites you to discover wineries, wines, and flavors that are part of the Alentejo identity, in a meeting between landscape, culture, and tradition.",
        "It is a perfect combination for those who want to experience the territory with all their senses: the lightness of the flight, the beauty of the landscape, and the deepness of the local flavors."
      ]
    }
  }
];

export function Experiences({ lang }: { lang: Language }) {
  const [selectedExp, setSelectedExp] = useState<typeof experiencesData[number] | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedExp(null);
    };
    if (selectedExp) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedExp]);

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
      
      <section className="pt-32 pb-0 bg-white min-h-screen flex flex-col">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 mb-16 shrink-0">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-ink mb-4">{seo.h1}</h1>
          <p className="text-brand-ink/60 text-lg uppercase letter-spacing-wide font-medium text-[11px]">
            {seo.h2}
          </p>
        </div>

        {/* Checkerboard alternating split layout */}
        <div className="w-full flex-1 flex flex-col">
          {experiencesData.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx} 
                onClick={() => setSelectedExp(exp)}
                className="w-full grid grid-cols-1 md:grid-cols-2 cursor-pointer group min-h-[420px] md:min-h-[500px] lg:min-h-[600px] border-b border-brand-ink/5"
              >
                {/* Image Block */}
                <div className={`relative w-full h-[320px] sm:h-[400px] md:h-auto overflow-hidden ${isEven ? 'order-first' : 'order-first md:order-last'}`}>
                  <img 
                    src={exp.image} 
                    alt={exp.title[lang]} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out filter brightness-[0.98] contrast-[1.02] saturate-[0.93] sepia-[0.05]"
                  />
                  
                  {/* Optional Tag */}
                  {exp.tag && (
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-xs text-brand-ink px-4 py-1.5 text-[11px] tracking-widest uppercase font-semibold border border-brand-ink/5">
                      {exp.tag[lang]}
                    </div>
                  )}
                </div>
                
                {/* Text Block */}
                <div className="bg-[#F5F2ED] flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-24 xl:p-32 text-left relative">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#5A5A40] font-semibold mb-4 block">
                    {exp.host[lang]}
                  </span>
                  
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-ink leading-tight mb-6 tracking-wide">
                    {exp.title[lang]}
                  </h2>
                  
                  <p className="font-sans text-brand-ink/75 text-sm sm:text-base leading-relaxed mb-8 max-w-lg line-clamp-3">
                    {exp.description[lang][0]}
                  </p>
                  
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold text-[#5A5A40] group-hover:text-brand-ink transition-colors duration-300">
                    <span>
                      {lang === 'en' ? 'Discover more' : lang === 'es' ? 'Descubrir más' : 'Descobrir mais'}
                    </span>
                    <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Modern, Immersive Experience Detail Modal overlay */}
      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            {/* Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="fixed inset-0 bg-brand-ink/40 backdrop-blur-md"
            />
            
            {/* Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col z-20 relative font-sans text-brand-ink"
            >
              {/* Close Button overlay */}
              <button
                onClick={() => setSelectedExp(null)}
                className="absolute top-4 right-4 z-40 w-10 h-10 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors cursor-pointer backdrop-blur-xs"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Top Banner Image with gradient */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 shrink-0">
                <img
                  src={selectedExp.image}
                  alt={selectedExp.title[lang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.02] saturate-[0.93] sepia-[0.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 z-30">
                  {selectedExp.tag && (
                    <span className="bg-white/95 text-brand-ink text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2.5 inline-block select-none">
                      {selectedExp.tag[lang]}
                    </span>
                  )}
                  <h2 className="font-serif text-2xl md:text-3xl text-white tracking-wide leading-tight">
                    {selectedExp.title[lang]}
                  </h2>
                  <p className="text-white/85 font-sans text-xs mt-1 uppercase tracking-widest font-semibold">
                    {selectedExp.host[lang]}
                  </p>
                </div>
              </div>

              {/* Text, beautifully split into paragraphs */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1 text-brand-ink/80 leading-relaxed text-[15px] space-y-4">
                {selectedExp.description[lang].map((paragraph, index) => {
                  const isBriefLead = index === 0 && paragraph.length < 50;
                  return (
                    <p 
                      key={index} 
                      className={
                        isBriefLead 
                          ? "font-serif text-lg text-brand-ink/95 border-l-2 border-brand-ink/40 pl-4 italic mb-6 leading-relaxed" 
                          : "font-sans leading-relaxed text-[15px]"
                      }
                    >
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
