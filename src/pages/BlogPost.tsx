import { useParams, Link, Navigate } from "react-router-dom";
import { Language, getRoutes, getTranslation } from "../lib/i18n";
import { blogData } from "../data/blog";
import { SEO } from "../components/SEO";

export function BlogPost({ lang }: { lang: Language }) {
  const { slug } = useParams<{ slug: string }>();
  const r = getRoutes(lang);
  const t = getTranslation(lang);
  
  const posts = blogData[lang];
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to={r.blog} />;
  }

  return (
    <>
      <SEO title={post.seo.title} description={post.seo.description} lang={lang} />
      
      <article className="pt-24 pb-24 px-4 sm:px-6 lg:px-8 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Link to={r.blog} className="text-stone-400 uppercase tracking-widest text-xs font-semibold hover:text-olive-900 transition mb-12 inline-block">
             &larr; Voltar ao Blog
          </Link>
          
          <h1 className="font-serif text-4xl md:text-5xl text-olive-900 mb-8 leading-tight">{post.title}</h1>
          
          <div className="prose prose-stone max-w-none text-olive-800 font-sans leading-relaxed text-lg mb-16">
             <p className="lead text-xl text-stone-500 font-serif italic mb-8">{post.summary}</p>
             <p>{post.content}</p>
          </div>
          
          <div className="border-t border-sand-300 pt-12 flex flex-col items-center">
             <p className="text-stone-500 mb-6 text-center">Gostaria de explorar o Alto Alentejo connosco?</p>
             <div className="flex gap-4">
               <Link to={r.houses} className="border border-olive-900 text-olive-900 px-8 py-3 font-medium uppercase text-sm hover:bg-olive-900 hover:text-white transition">
                  {t.common.viewHouses}
               </Link>
               <Link to={r.book} className="bg-olive-900 text-warm-white px-8 py-3 font-medium hover:bg-olive-800 transition uppercase text-sm">
                  {t.common.bookDirect}
               </Link>
             </div>
          </div>
        </div>
      </article>
    </>
  );
}
