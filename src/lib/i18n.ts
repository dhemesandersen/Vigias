export const languages = ['pt', 'es', 'en'] as const;
export type Language = typeof languages[number];

export const translations = {
  pt: {
    nav: {
      home: 'Início',
      houses: 'Casas',
      surroundings: 'Envolvente',
      about: 'Vigias',
      experiences: 'Experiências',
      book: 'Reservas',
      contact: 'Contacto',
      blog: 'Blog',
    },
    common: {
      bookDirect: 'Reservar',
      checkAvailability: 'Verificar disponibilidade',
      viewHouses: 'Ver as casas',
      readMore: 'Ler mais',
      bookNow: 'Reservar diretamente',
      relatedHouses: 'Outras casas',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      houses: 'Casas',
      surroundings: 'Entorno',
      about: 'Vigias',
      experiences: 'Experiencias',
      book: 'Reservas',
      contact: 'Contacto',
      blog: 'Blog',
    },
    common: {
      bookDirect: 'Reservar',
      checkAvailability: 'Comprobar disponibilidad',
      viewHouses: 'Ver las casas',
      readMore: 'Leer más',
      bookNow: 'Reservar directamente',
      relatedHouses: 'Otras casas',
    },
  },
  en: {
    nav: {
      home: 'Home',
      houses: 'Houses',
      surroundings: 'Surroundings',
      about: 'About',
      experiences: 'Experiences',
      book: 'Book',
      contact: 'Contact',
      blog: 'Blog',
    },
    common: {
      bookDirect: 'Book',
      checkAvailability: 'Check availability',
      viewHouses: 'View houses',
      readMore: 'Read more',
      bookNow: 'Book directly',
      relatedHouses: 'Other houses',
    },
  }
};

export const routes = {
  pt: {
    home: '/pt/',
    houses: '/pt/casas/',
    surroundings: '/pt/envolvente/',
    about: '/pt/vigias/',
    experiences: '/pt/experiencias/',
    book: '/pt/reservas/',
    contact: '/pt/contacto/',
    blog: '/pt/blog/',
    privacy: '/pt/politica-de-privacidade/',
    terms: '/pt/termos-e-condicoes/',
  },
  es: {
    home: '/es/',
    houses: '/es/casas/',
    surroundings: '/es/entorno/',
    about: '/es/vigias/',
    experiences: '/es/experiencias/',
    book: '/es/reservas/',
    contact: '/es/contacto/',
    blog: '/es/blog/',
    privacy: '/es/politica-de-privacidad/',
    terms: '/es/terminos-y-condiciones/',
  },
  en: {
    home: '/en/',
    houses: '/en/houses/',
    surroundings: '/en/surroundings/',
    about: '/en/about/',
    experiences: '/en/experiences/',
    book: '/en/book/',
    contact: '/en/contact/',
    blog: '/en/blog/',
    privacy: '/en/privacy-policy/',
    terms: '/en/terms-and-conditions/',
  }
};

export function getTranslation(lang: Language) {
  return translations[lang];
}

export function getRoutes(lang: Language) {
  return routes[lang];
}
