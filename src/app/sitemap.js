// sitemap.js — généré automatiquement par Next.js à l'adresse /sitemap.xml
// Google lit ce fichier pour découvrir et indexer toutes les pages du site.
// `priority` indique l'importance relative (1 = plus important, 0 = moins important).
// `changeFrequency` indique à quelle fréquence le contenu change.

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
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://agence-dbd.vercel.app/process",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://agence-dbd.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
