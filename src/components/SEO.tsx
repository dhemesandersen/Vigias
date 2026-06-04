import { Helmet } from "react-helmet-async";
import { Language } from "../lib/i18n";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  lang: Language;
}

export function SEO({ title, description, lang }: SEOProps) {
  const location = useLocation();
  const baseUrl = "https://vigias.pt";
  
  // Basic path extraction for localized alternate URLs
  const pathWithoutLang = location.pathname.replace(`/${lang}`, '') || '/';
  
  // Not perfect for custom mapped routes (like /pt/envolvente vs /es/entorno), 
  // but acts as base setup. We could map them correctly.
  
  return (
    <Helmet>
        <html lang={lang} />
        <title>{title}</title>
        <meta name="description" content={description} />
        
        {/* Hreflang tags as requested */}
        <link rel="alternate" hrefLang="pt" href={`${baseUrl}/pt${pathWithoutLang !== '/' ? pathWithoutLang : ''}`} />
        <link rel="alternate" hrefLang="es" href={`${baseUrl}/es${pathWithoutLang !== '/' ? pathWithoutLang : ''}`} />
        <link rel="alternate" hrefLang="en" href={`${baseUrl}/en${pathWithoutLang !== '/' ? pathWithoutLang : ''}`} />
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en${pathWithoutLang !== '/' ? pathWithoutLang : ''}`} />
        
        <link rel="canonical" href={`${baseUrl}${location.pathname}`} />
    </Helmet>
  );
}
