import Build from "@/components/Build";
import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";
import PageIntro from "@/components/PageIntro";
import Values from "@/components/Values";
import React from "react";

// Métadonnées spécifiques à la page Mon process — surcharge le titre global
export const metadata = {
  title: "Mon process",
  description:
    "Trois étapes de la conception à la mise en ligne : découverte du besoin, développement, livraison. Un process structuré, transparent, sans mauvaise surprise.",
  alternates: {
    canonical: "https://agence-versatile.fr/process",
  },
  openGraph: {
    title: "Mon process | Agence Versatile",
    description:
      "Trois étapes de la conception à la mise en ligne : découverte du besoin, développement, livraison. Un process structuré, transparent, sans mauvaise surprise.",
    url: "https://agence-versatile.fr/process",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Agence Versatile" }],
  },
};

// ─── HowTo Schema (données structurées) ──────────────────────────────────────
// Format JSON-LD HowTo : indique à Google que cette page décrit un processus
// en étapes. Peut générer des résultats enrichis (étapes affichées directement
// dans la SERP) et améliore la compréhension du contenu par les IA de recherche.
const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Comment se déroule la création d'un site web avec Agence Versatile",
  description:
    "Trois étapes simples, de l'appel initial à la mise en ligne. Vous savez toujours où nous en sommes et ce qui vient ensuite.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Nous discutons",
      text: "Un appel de 15 à 20 minutes pour comprendre ce que vous cherchez, vos contraintes et vos délais. C'est gratuit et sans engagement. À l'issue de cet échange, je sais si je peux vous aider et comment.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Je propose, puis je construis",
      text: "Vous recevez une estimation chiffrée sous 24h. Le document détaille exactement ce qui est inclus, le délai de livraison et le prix. Une fois validé, je construis votre site avec des points d'avancement réguliers.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Vous êtes en ligne",
      text: "Votre site est mis en ligne, le nom de domaine est configuré. Je vous forme à la gestion de votre contenu. Vous êtes autonome dès la livraison, et je reste disponible pour la suite.",
    },
  ],
};

// BreadcrumbList — améliore l'affichage dans les résultats de recherche
const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://agence-versatile.fr/" },
    { "@type": "ListItem", position: 2, name: "Mon process", item: "https://agence-versatile.fr/process" },
  ],
};

const ProcessPage = () => {
  return (
    <>
      {/* Blocs JSON-LD — invisibles dans le rendu, lus par Google et les IA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <PageIntro eyebrow="Mon process" title="Comment ça marche">
        <p>
          Trois étapes simples, de l'appel initial à la mise en ligne. Vous
          savez toujours où nous en sommes et ce qui vient ensuite.
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* Discover */}
        <Discover />
        {/* Build */}
        <Build />
        {/* Deliver */}
        <Deliver />
      </div>
      {/* Values */}
      <Values />
    </>
  );
};

export default ProcessPage;
