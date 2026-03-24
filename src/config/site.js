export function constructMetadata({
  title = "Agence DBD — Développement web pour TPE/PME",
  description =
    "Julien Desbard, développeur web freelance. Je crée des sites rapides, bien référencés et faciles à gérer pour les TPE/PME, artisans et collectivités.",
  image = "/agency.PNG",
  icons = "/favicon.ico",
  noIndex = false,
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@agencedbd",
    },
    icons,
    themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
