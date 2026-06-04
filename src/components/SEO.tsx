import { Helmet } from "react-helmet-async";
import { Language, routes, languages } from "../lib/i18n";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  lang: Language;
}

export function SEO({ title, description, lang }: SEOProps) {
  const location = useLocation();
  const baseUrl = "https://vigias.pt";
  
  // Find the route key based on the current pathname
  const currentRoutes = routes[lang];
  let routeKey = '';
  
  for (const [key, path] of Object.entries(currentRoutes)) {
    // Exact match or base match for dynamic routes (like /pt/casas/casa-sol)
    if (location.pathname === path || (path !== `/${lang}/` && location.pathname.startsWith(path))) {
      routeKey = key;
      break;
    }
  }

  // Fallback to home if not found
  if (!routeKey) routeKey = 'home';
  
  // Extract trailing dynamic parts (like /casa-sol from /pt/casas/casa-sol)
  const basePath = currentRoutes[routeKey as keyof typeof currentRoutes];
  const dynamicPart = location.pathname.substring(basePath.length);

  return (
    <Helmet>
        <html lang={lang} />
        <title>{title}</title>
        <meta name="description" content={description} />
        
        {/* Hreflang tags para SEO */}
        {languages.map((l) => {
          const alternatePath = routes[l][routeKey as keyof typeof routes[l]];
          return (
            <link 
              key={l} 
              rel="alternate" 
              hrefLang={l} 
              href={`${baseUrl}${alternatePath}${dynamicPart}`} 
            />
          );
        })}
        {/* x-default tag recommended by Google */}
        <link 
          rel="alternate" 
          hrefLang="x-default" 
          href={`${baseUrl}${routes['pt'][routeKey as keyof typeof routes['pt']]}${dynamicPart}`} 
        />
        
        <link rel="canonical" href={`${baseUrl}${location.pathname}`} />
    </Helmet>
  );
}
