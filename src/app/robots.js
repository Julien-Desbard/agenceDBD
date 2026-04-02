// robots.js — généré automatiquement par Next.js à l'adresse /robots.txt
// Indique aux robots d'indexation (Googlebot, etc.) ce qu'ils peuvent explorer.
// `allow: "/"` : tout le site est indexable.
// `sitemap` : pointe vers le fichier sitemap pour faciliter la découverte des pages.

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://agence-versatile.fr/sitemap.xml",
  };
}
