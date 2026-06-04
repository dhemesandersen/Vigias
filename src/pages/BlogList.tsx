import { Language, getRoutes, getTranslation } from "../lib/i18n";
import { SEO } from "../components/SEO";
import { Link } from "react-router-dom";
import { blogData } from "../data/blog";

export function BlogList({ lang }: { lang: Language }) {
  const seo = {
    pt: {
      title: "Blog Vigias · Alto Alentejo, Serra de S. Mamede e slow travel",
      description: "Guias e artigos sobre o Alto Alentejo, Serra de S. Mamede, Marvão, Castelo de Vide, casas privadas, natureza, património e slow travel.",
      h1: "Blog Vigias",
      h2: "Guias para viver o Alto Alentejo com calma"
    },
    es: {
      title: "Blog Vigias · Alto Alentejo, Sierra de S. Mamede y slow travel",
      description: "Guías y artículos sobre el Alto Alentejo, Sierra de S. Mamede, Marvão...",
      h1: "Blog Vigias",
      h2: "Guías para vivir el Alto Alentejo con calma"
    },
    en: {
      title: "Vigias Blog · Northern Alentejo, Serra de S. Mamede and slow travel",
      description: "Guides and articles about Northern Alentejo, Serra de S. Mamede, Marvão...",
      h1: "Vigias Blog",
      h2: "Guides to experience Northern Alentejo peacefully"
    }
  }[lang];

  const r = getRoutes(lang);
  const t = getTranslation(lang);
  const posts = blogData[lang];

  return (
    <>
      <SEO title={seo.title} description={seo.description} lang={lang} />
      
      <section className="pt-24 pb-24 px-4 sm:px-6 lg:px-8 bg-warm-white min-h-[70vh]">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-olive-900 mb-6">{seo.h1}</h1>
          <p className="text-stone-500 text-lg md:text-xl font-light tracking-wide uppercase mb-12">
            {seo.h2}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
           {posts.map((post) => (
             <article key={post.slug} className="group flex flex-col gap-6">
                <Link to={`${r.blog}${post.slug}`} className="block">
                  <div className="aspect-[4/3] overflow-hidden rounded-md mb-6 bg-zinc-200">
                     {post.image && (
                       <img 
                         src={post.image} 
                         alt={post.title} 
                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                       />
                     )}
                  </div>
                  <h3 className="font-serif text-2xl text-brand-ink mb-3 group-hover:text-brand-ink/70 transition-colors leading-snug">{post.title}</h3>
                  <p className="text-brand-ink/60 font-sans mb-4 line-clamp-2 text-sm">{post.summary}</p>
                  <span className="text-brand-ink uppercase letter-spacing-wide text-[10px] font-bold group-hover:underline underline-offset-4">
                    {t.common.readMore}
                  </span>
                </Link>
             </article>
           ))}
        </div>
      </section>
    </>
  );
}
