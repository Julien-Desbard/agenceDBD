// sitemap.js — généré automatiquement par Next.js à l'adresse /sitemap.xml
// Google lit ce fichier pour découvrir et indexer toutes les pages du site.
// `priority` indique l'importance relative (1 = plus important, 0 = moins important).
// `changeFrequency` indique à quelle fréquence le contenu change.
// `lastModified` reflète la date de dernière modification réelle du contenu
// (pas la date de build) — les crawlers utilisent ce signal pour prioriser le recrawl.

export default function sitemap() {
  return [
    {
      url: "https://agence-dbd.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://agence-dbd.vercel.app/work",
      lastModified: new Date("2025-01-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://agence-dbd.vercel.app/process",
      lastModified: new Date("2025-01-15"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://agence-dbd.vercel.app/about",
      lastModified: new Date("2025-01-15"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://agence-dbd.vercel.app/mentions-legales",
      lastModified: new Date("2025-01-15"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
