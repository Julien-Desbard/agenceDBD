import RootLayout from "@/components/RootLayout";
import "./globals.css";

// ─── Métadonnées globales ─────────────────────────────────────────────────────
// Ces métadonnées s'appliquent à toutes les pages du site.
// Chaque page peut les surcharger en exportant sa propre constante `metadata`.
// `metadataBase` est obligatoire pour que Next.js génère des URLs absolues
// (Open Graph, sitemap, canonical).
export const metadata = {
  metadataBase: new URL("https://agence-versatile.fr"),

  // Template : chaque page injecte son titre à la place de "%s"
  // Ex : "Réalisations | Agence Versatile"
  title: {
    template: "%s | Agence Versatile",
    default: "Agence Versatile — Développeur web freelance en Savoie (73)",
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

  // URL canonique de la homepage — évite le contenu dupliqué (http/https, www, trailing slash)
  alternates: {
    canonical: "https://agence-versatile.fr",
  },

  // Open Graph : utilisé par les réseaux sociaux pour les previews de liens
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Agence Versatile",
    url: "https://agence-versatile.fr",
    title: "Agence Versatile — Développeur web freelance en Savoie (73)",
    description:
      "Sites web performants, bien référencés, livrés avec rigueur. Basé à Pont-de-Beauvoisin, intervient dans toute la Savoie.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Agence Versatile" }],
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
    title: "Agence Versatile — Développeur web freelance en Savoie (73)",
    description:
      "Sites web performants, bien référencés, livrés avec rigueur. Basé à Pont-de-Beauvoisin, intervient dans toute la Savoie.",
    images: ["/og-image.png"],
  },
};

// ─── Données structurées Schema.org ──────────────────────────────────────────
// Format JSON-LD recommandé par Google pour enrichir les résultats de recherche.
// @id crée un identifiant stable permettant aux moteurs IA de relier les entités
// entre elles (graphe de connaissance). sameAs lie l'entité à ses profils externes.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://agence-versatile.fr/#organization",
  name: "Agence Versatile",
  url: "https://agence-versatile.fr",
  description:
    "Développeur web freelance en Savoie. Sites performants, bien référencés, livrés avec rigueur.",
  telephone: "+33669120885",
  email: "julien.desbard@gmail.com",
  priceRange: "€€",
  serviceType: [
    "Création de site vitrine",
    "Refonte de site web",
    "Site institutionnel",
    "Outil interne et dashboard",
  ],
  founder: {
    "@type": "Person",
    "@id": "https://agence-versatile.fr/#julien-desbard",
    name: "Julien Desbard",
  },
  address: {
    "@type": "PostalAddress",
    // streetAddress omis intentionnellement (adresse personnelle non publiée)
    addressLocality: "Pont-de-Beauvoisin",
    postalCode: "73330",
    addressRegion: "Auvergne-Rhône-Alpes",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.5308,
    longitude: 5.6706,
  },
  areaServed: [
    { "@type": "City", name: "Pont-de-Beauvoisin" },
    { "@type": "AdministrativeArea", name: "Savoie" },
    { "@type": "Country", name: "France" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+33669120885",
    email: "julien.desbard@gmail.com",
    contactType: "customer service",
    availableLanguage: "French",
  },
  // sameAs : liste les profils externes vérifiables — signal clé pour la
  // reconnaissance d'entité par les moteurs IA (ChatGPT, Perplexity, Claude)
  sameAs: [
    "https://www.linkedin.com/in/julien-desbard",
    "https://github.com/Julien-Desbard",
    "https://www.malt.fr/profile/juliendesbard",
  ],
};

// WebSite schema — lie le site à son éditeur et facilite la compréhension
// de la structure globale par les moteurs de recherche et IA
const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://agence-versatile.fr/#website",
  url: "https://agence-versatile.fr",
  name: "Agence Versatile",
  description: "Développeur web freelance en Savoie — Julien Desbard",
  publisher: {
    "@type": "ProfessionalService",
    "@id": "https://agence-versatile.fr/#organization",
  },
  inLanguage: "fr-FR",
};

export default function Layout({ children }) {
  return (
    // lang="fr" : indique aux moteurs de recherche que le contenu est en français
    <html
      lang="fr"
      className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
    >
      <body className="flex min-h-full flex-col">
        {/* Blocs JSON-LD — invisibles dans le rendu, lus par Google et les IA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
