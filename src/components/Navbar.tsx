import { Link, useLocation } from "react-router-dom";
import { Language, getRoutes, getTranslation, languages } from "../lib/i18n";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar({ lang }: { lang: Language }) {
  const t = getTranslation(lang);
  const r = getRoutes(lang);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.houses, path: r.houses },
    { name: t.nav.surroundings, path: r.surroundings },
    { name: t.nav.about, path: r.about },
    { name: t.nav.experiences, path: r.experiences },
    { name: t.nav.blog, path: r.blog },
    { name: t.nav.contact, path: r.contact },
  ];

  const getLanguagePath = (targetLang: Language) => {
    return `/${targetLang}/`; 
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-12 flex items-center bg-brand-ink",
      scrolled ? "h-16 shadow-lg" : "h-24"
    )}>
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Logo */}
        <Link to={r.home} className="flex items-center gap-1 hover:opacity-80 transition-opacity">
          <img 
            src="https://vigias.pt/wp-content/uploads/2023/04/vigias-logo-e1684745176926.png" 
            alt="Vigias" 
            className={cn("object-contain transition-all duration-300", scrolled ? "h-8" : "h-12")} 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-[11px] uppercase letter-spacing-wide font-medium hover:opacity-100 transition-opacity",
                location.pathname.startsWith(link.path) && location.pathname !== '/' ? "opacity-100 text-white" : "text-white/70"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions & Lang */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex gap-4 text-[10px] font-bold tracking-tighter uppercase text-white">
            {languages.map((l) => (
              <a
                key={l}
                href={getLanguagePath(l)}
                className={cn("hover:opacity-100 transition transition-opacity", lang === l ? "opacity-100 underline underline-offset-4" : "opacity-50")}
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-ink absolute top-full left-0 right-0 p-4 shadow-xl flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-lg font-medium text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex items-center justify-between border-t border-white/20">
             <div className="flex space-x-4 text-sm font-semibold uppercase text-white">
              {languages.map((l) => (
                <a
                  key={l}
                  href={getLanguagePath(l)}
                  className={cn("hover:opacity-100 transition", lang === l ? "opacity-100 underline" : "opacity-50")}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
