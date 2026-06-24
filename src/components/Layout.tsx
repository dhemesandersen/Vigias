import { Outlet, ScrollRestoration } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CookieBanner } from "./CookieBanner";
import { OfferPopup } from "./OfferPopup";
import { Language } from "../lib/i18n";

export function Layout({ lang }: { lang: Language }) {
  return (
    <div className="flex flex-col min-h-screen relative pb-16 md:pb-0 font-sans">
      <Navbar lang={lang} />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer lang={lang} />
      <CookieBanner lang={lang} />
      <OfferPopup lang={lang} />
      <ScrollRestoration />
    </div>
  );
}
