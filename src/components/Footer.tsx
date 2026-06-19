import { Link } from "react-router-dom";
import { Language, getRoutes, getTranslation } from "../lib/i18n";
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

export function Footer({ lang }: { lang: Language }) {
  const t = getTranslation(lang);
  const r = getRoutes(lang);

  return (
    <footer className="bg-[#2e2624] text-[#E8E6E1] py-16 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Reviews Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 opacity-90 pb-12 border-b border-[#E8E6E1]/10">
          
          {/* Booking */}
          <div className="flex flex-col items-center justify-center gap-3">
             <img src="https://criealgo.pro/vigias/6.png" alt="Booking.com" className="h-6 object-contain" />
             <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-widest">{lang === 'en' ? 'Superb' : 'Soberbo'}</span>
                <div className="bg-[#003580] text-white px-1.5 py-0.5 rounded text-[11px] font-bold">9,4</div>
             </div>
          </div>

          {/* TripAdvisor */}
          <div className="flex flex-col items-center justify-center gap-3">
             <img src="https://criealgo.pro/vigias/5.png" alt="Tripadvisor" className="h-7 object-contain" />
             <div className="flex items-center gap-1">
                {[1,2,3,4,5].map((i) => (
                   <div key={i} className="w-2.5 h-2.5 bg-[#00aa6c] rounded-full" />
                ))}
             </div>
          </div>

          {/* Google */}
          <div className="flex flex-col items-center justify-center gap-3">
             <img src="https://criealgo.pro/vigias/4.png" alt="Google" className="h-4 md:h-5 object-contain mt-1" />
             <div className="flex items-center gap-2">
                <span className="text-xs font-bold">4,7</span>
                <div className="flex text-[#fbbc04] font-serif text-base tracking-widest">
                   ★★★★★
                </div>
             </div>
          </div>
        </div>
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
           
          {/* Logo (Left Col) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
             <div>
                <Link to={r.home}>
                  <img src="https://criealgo.pro/vigias/vigiaslogo1.png" alt="Vigias" className="h-20 md:h-24 object-contain filter brightness-0 invert mb-6 hover:opacity-80 transition-opacity" />
                </Link>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#E8E6E1]/60 leading-relaxed max-w-xs">
                  {lang === 'pt' && "Vigias, um essencial, superior e infinito, onde o tempo é eterno e a alma levita!"}
                  {lang === 'es' && "¡Vigias, un esencial, superior e infinito, donde el tiempo es eterno y el alma levita!"}
                  {lang === 'en' && "Vigias, an essential, superior and infinite, where time is eternal and the soul levitates!"}
                </p>
             </div>
          </div>

          {/* Navigation Columns (Middle) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 lg:px-8">
             <div>
                <h4 className="text-[10px] tracking-widest uppercase text-[#E8E6E1]/60 mb-6">{lang === 'pt' ? 'Explorar' : lang === 'es' ? 'Explorar' : 'Explore'}</h4>
                <ul className="space-y-4 font-sans text-xs uppercase tracking-widest text-[#E8E6E1]/90">
                  <li><Link to={r.houses} className="hover:text-white transition-colors block">{t.nav.houses}</Link></li>
                  <li><Link to={r.surroundings} className="hover:text-white transition-colors block">{t.nav.surroundings}</Link></li>
                  <li><Link to={r.experiences} className="hover:text-white transition-colors block">{t.nav.experiences}</Link></li>
                  <li><Link to={r.blog} className="hover:text-white transition-colors block">{t.nav.blog}</Link></li>
                </ul>
             </div>

             <div>
                <h4 className="text-[10px] tracking-widest uppercase text-[#E8E6E1]/60 mb-6">{lang === 'pt' ? 'Sobre' : lang === 'es' ? 'Sobre' : 'About'}</h4>
                <ul className="space-y-4 font-sans text-xs uppercase tracking-widest text-[#E8E6E1]/90">
                  <li><Link to={r.about} className="hover:text-white transition-colors block">{lang === 'pt' ? 'A Nossa Visão' : lang === 'es' ? 'Nuestra Visión' : 'Our Vision'}</Link></li>
                  <li><Link to={r.about} className="hover:text-white transition-colors block">{lang === 'pt' ? 'Sustentabilidade' : lang === 'es' ? 'Sostenibilidad' : 'Sustainability'}</Link></li>
                  <li><Link to={r.terms} className="hover:text-white transition-colors block">{lang === 'pt' ? 'Termos e Condições' : lang === 'es' ? 'Términos y Condiciones' : 'Terms & Conditions'}</Link></li>
                </ul>
             </div>
          </div>

          {/* Socials & Contact (Right Col) */}
          <div className="lg:col-span-3 flex flex-col items-start lg:items-end">
             <h4 className="text-[10px] tracking-widest uppercase text-[#E8E6E1]/60 mb-6">{lang === 'pt' ? 'Siga-nos' : lang === 'es' ? 'Síguenos' : 'Follow Us'}</h4>
             <div className="flex gap-4 mb-10">
                <a href="https://www.instagram.com/_vigias_/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-[#E8E6E1]/30 flex items-center justify-center hover:bg-[#E8E6E1] hover:text-[#2e2624] transition-all">
                   <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.facebook.com/casadavigia.turismo" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-[#E8E6E1]/30 flex items-center justify-center hover:bg-[#E8E6E1] hover:text-[#2e2624] transition-all">
                   <Facebook className="w-4 h-4" />
                </a>
             </div>

             <a href="mailto:info@vigias.pt" className="border border-[#E8E6E1]/30 px-8 py-3 text-[10px] tracking-[0.2em] uppercase hover:bg-[#E8E6E1] hover:text-[#2e2624] transition-all mb-8 block text-center w-full lg:w-auto">
                {lang === 'pt' ? 'ENTRE EM CONTACTO' : lang === 'es' ? 'CONTÁCTANOS' : 'GET IN TOUCH'}
             </a>
             
             <div className="text-right font-sans font-light text-[10px] text-[#E8E6E1]/60 leading-relaxed uppercase tracking-wider">
                Parque Natural da Serra de S. Mamede<br/>
                Alentejo, Portugal
             </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E8E6E1]/20 pt-8 flex flex-col xl:flex-row justify-between items-center gap-6">
           <div className="flex flex-wrap items-center justify-center xl:justify-start gap-4 text-[10px] uppercase text-[#E8E6E1]/60">
              <Link to={r.terms} className="hover:text-white transition-colors">{lang === 'pt' ? 'Termos e Condições' : lang === 'es' ? 'Términos y Condiciones' : 'Terms and Conditions'}</Link>
              <span className="hidden md:block">|</span>
              <Link to={r.privacy} className="hover:text-white transition-colors">{lang === 'pt' ? 'Política de Privacidade' : lang === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}</Link>
              <span className="hidden md:block">|</span>
              <a href="https://www.livroreclamacoes.pt/Inicio/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{lang === 'pt' ? 'Livro de Reclamações' : lang === 'es' ? 'Libro de Reclamaciones' : 'Complaints Book'}</a>
              <span className="hidden md:block">|</span>
              <a href="https://rnt.turismodeportugal.pt/RNT/Pesquisa_ET.aspx" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">RNET 11039, 11113 e 11749</a>
           </div>
           
           <div className="text-[10px] text-[#E8E6E1]/50 text-center md:text-right uppercase tracking-wider">
              Copyright {new Date().getFullYear()} © Vigias. {lang === 'pt' ? 'Todos os direitos reservados' : lang === 'es' ? 'Todos los derechos reservados' : 'All rights reserved'}. Created by CrieAlgo.
           </div>
        </div>

      </div>
    </footer>
  );
}
