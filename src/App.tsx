/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { HousesList } from "./pages/HousesList";
import { SingleHouse } from "./pages/SingleHouse";
import { Surroundings } from "./pages/Surroundings";
import { About } from "./pages/About";
import { Experiences } from "./pages/Experiences";
import { Book } from "./pages/Book";
import { Contact } from "./pages/Contact";
import { BlogList } from "./pages/BlogList";
import { BlogPost } from "./pages/BlogPost";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { Terms } from "./pages/Terms";
import { languages } from "./lib/i18n";

const getRouterBasename = () => {
  const pathname = window.location.pathname;
  if (pathname.startsWith("/vigias")) {
    return "/vigias";
  }
  const base = (import.meta as any).env.BASE_URL || "/";
  if (base === "/" || base === "./") {
    return undefined;
  }
  return base.replace(/\/$/, "");
};

const routerBasename = getRouterBasename();

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navigate to="/pt/" replace />,
    },
    ...languages.map((lang) => ({
      path: `/${lang}`,
      element: <Layout lang={lang} />,
      children: [
        { index: true, element: <Home lang={lang} /> },
        // Use exact names from brief where needed.
        // Mapping the "Casas" page
        {
          path: lang === "pt" || lang === "es" ? "casas" : "houses",
          element: <HousesList lang={lang} />,
        },
        {
          path: lang === "pt" || lang === "es" ? "casas/:id" : "houses/:id",
          element: <SingleHouse lang={lang} />,
        },
        // Mapping the "Envolvente" page
        {
          path:
            lang === "pt"
              ? "envolvente"
              : lang === "es"
                ? "entorno"
                : "surroundings",
          element: <Surroundings lang={lang} />,
        },
        // Mapping the "Vigias" (About) page
        {
          path: lang === "pt" || lang === "es" ? "vigias" : "about",
          element: <About lang={lang} />,
        },
        // Mapping the "Experiências" page
        {
          path: lang === "en" ? "experiences" : "experiencias",
          element: <Experiences lang={lang} />,
        },
        // Mapping the "Reservas" page
        {
          path: lang === "en" ? "book" : "reservas",
          element: <Book lang={lang} />,
        },
        // Mapping the "Contacto" page
        {
          path: lang === "en" ? "contact" : "contacto",
          element: <Contact lang={lang} />,
        },
        // Blog
        { path: "blog", element: <BlogList lang={lang} /> },
        { path: "blog/:slug", element: <BlogPost lang={lang} /> },
        // Privacy and Terms routes
        {
          path:
            lang === "pt"
              ? "politica-de-privacidade"
              : lang === "es"
                ? "politica-de-privacidad"
                : "privacy-policy",
          element: <PrivacyPolicy lang={lang} />,
        },
        {
          path:
            lang === "pt"
              ? "termos-e-condicoes"
              : lang === "es"
                ? "terminos-y-condiciones"
                : "terms-and-conditions",
          element: <Terms lang={lang} />,
        },
      ],
    })),
  ],
  {
    basename: routerBasename,
  },
);

export default function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
