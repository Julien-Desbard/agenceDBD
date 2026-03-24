import RootLayout from "@/components/RootLayout";
import "./globals.css";

// ─── Métadonnées globales ─────────────────────────────────────────────────────
// Ces métadonnées s'appliquent à toutes les pages du site.
// Chaque page peut les surcharger en exportant sa propre constante `metadata`.
// `metadataBase` est obligatoire pour que Next.js génère des URLs absolues
// (Open Graph, sitemap, canonical).
export const metadata = {
  metadataBase: new URL("https://agence-dbd.vercel.app"),

  // Template : chaque page injecte son titre à la place de "%s"
  // Ex : "Réalisations | Agence DBD"
  title: {
    template: "%s | Agence DBD",
    default: "Agence DBD — Développeur web freelance en Savoie (73)",
  },

  description:
    "Julien Desbard, développeur web freelance à Pont-de-Beauvoisin (Savoie). 20 ans d'expérience en gestion de projet, entrepreneuriat et audit. Sites rapides, bien référencés, livrés avec rigueur.",

  keywords: [
    "développeur web Pont-de-Beauvoisin",
    "développeur web Savoie",
    "création site web Savoie",
    "freelance web 73",
    "agence web Savoie",
    "site web artisan Savoie",
    "refonte site web Savoie",
  ],

  authors: [{ name: "Julien Desbard" }],

  // Open Graph : utilisé par les réseaux sociaux pour les previews de liens
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Agence DBD",
    url: "https://agence-dbd.vercel.app",
    title: "Agence DBD — Développeur web freelance en Savoie (73)",
    description:
      "Sites web performants, bien référencés, livrés avec rigueur. Basé à Pont-de-Beauvoisin, intervient dans toute la Savoie.",
  },

  // Autorise les robots à indexer et suivre les liens
  robots: {
    index: true,
    follow: true,
  },

  // Twitter/X card — contrôle l'aperçu affiché quand le lien est partagé sur X
  // "summary_large_image" affiche une grande image + titre + description
  twitter: {
    card: "summary_large_image",
    title: "Agence DBD — Développeur web freelance en Savoie (73)",
    description:
      "Sites web performants, bien référencés, livrés avec rigueur. Basé à Pont-de-Beauvoisin, intervient dans toute la Savoie.",
  },
};

// ─── Données structurées Schema.org ──────────────────────────────────────────
// Format JSON-LD recommandé par Google pour enrichir les résultats de recherche.
// Google lit ce bloc pour comprendre qu'il s'agit d'un service professionnel
// localisé — utile pour apparaître dans le pack local (carte + 3 résultats).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Agence DBD",
  url: "https://agence-dbd.vercel.app",
  description:
    "Développeur web freelance en Savoie. Sites performants, bien référencés, livrés avec rigueur.",
  founder: {
    "@type": "Person",
    name: "Julien Desbard",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressLocality: "Pont-de-Beauvoisin",
    postalCode: "73330",
    addressRegion: "Savoie",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "City", name: "Pont-de-Beauvoisin" },
    { "@type": "AdministrativeArea", name: "Savoie" },
  ],
  priceRange: "€€",
};

export default function Layout({ children }) {
  return (
    // lang="fr" : indique aux moteurs de recherche que le contenu est en français
    <html
      lang="fr"
      className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
    >
      <body className="flex min-h-full flex-col">
        {/* Bloc JSON-LD — invisible dans le rendu, lu par Google et les IA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
