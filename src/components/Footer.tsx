import { Link } from "react-router-dom";
import { Language, getRoutes, getTranslation } from "../lib/i18n";

export function Footer({ lang }: { lang: Language }) {
  const t = getTranslation(lang);
  const r = getRoutes(lang);

  return (
    <footer className="bg-brand-ink text-brand-bg py-16 px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <img src="https://vigias.pt/wp-content/uploads/2023/04/vigias-logo-e1684745176926.png" alt="Vigias" className="h-10 md:h-14 object-contain brightness-0 invert mb-6" />
          <p className="text-brand-bg/60 text-sm leading-relaxed max-w-xs">
            {lang === 'pt' && "Cinco casas privadas no Parque Natural Serra de S. Mamede. Luxo silencioso e contacto direto com a natureza."}
            {lang === 'es' && "Cinco casas privadas en el Parque Natural Serra de S. Mamede. Lujo silencioso y contacto directo con la naturaleza."}
            {lang === 'en' && "Five private houses in the Serra de S. Mamede Natural Park. Quiet luxury and direct contact with nature."}
          </p>
        </div>
        
        <div>
          <h4 className="font-medium text-[11px] letter-spacing-wide uppercase mb-6 text-brand-bg/40">Explore</h4>
          <ul className="space-y-3 text-sm text-brand-bg/80">
            <li><Link to={r.houses} className="hover:text-white hover:opacity-100 transition">{t.nav.houses}</Link></li>
            <li><Link to={r.surroundings} className="hover:text-white hover:opacity-100 transition">{t.nav.surroundings}</Link></li>
            <li><Link to={r.experiences} className="hover:text-white hover:opacity-100 transition">{t.nav.experiences}</Link></li>
            <li><Link to={r.blog} className="hover:text-white hover:opacity-100 transition">{t.nav.blog}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-[11px] letter-spacing-wide uppercase mb-6 text-brand-bg/40">{t.nav.contact}</h4>
          <ul className="space-y-3 text-sm text-brand-bg/80">
            <li><a href="mailto:info@vigias.pt" className="hover:text-white hover:opacity-100 transition">info@vigias.pt</a></li>
            <li>
               <a href="https://wa.me/351XXXXXXXXX" target="_blank" rel="noreferrer" className="hover:text-white hover:opacity-100 transition">
                  WhatsApp
               </a>
            </li>
            <li>Parque Natural Serra de S. Mamede<br/>Alentejo, Portugal</li>
          </ul>
        </div>

        <div>
           <Link
            to={r.book}
            className="inline-block border border-brand-bg/20 text-brand-bg px-8 py-4 text-xs font-medium letter-spacing-wide uppercase hover:bg-brand-bg hover:text-brand-ink transition"
          >
            {t.common.bookDirect}
          </Link>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-brand-bg/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] letter-spacing-wide uppercase text-brand-bg/40">&copy; {new Date().getFullYear()} Vigias. All rights reserved.</p>
        <div className="flex gap-6 text-[10px] letter-spacing-wide uppercase text-brand-bg/40">
           <Link to={r.terms} className="hover:text-white transition">Termos & Condições</Link>
           <Link to={r.privacy} className="hover:text-white transition">Política de Privacidade</Link>
        </div>
      </div>
    </footer>
  );
}
