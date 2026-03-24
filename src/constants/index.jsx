import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Réalisations",
    links: [
      { title: "Bar du Centre", href: "/work" },
      { title: "SmartRelance", href: "/work" },
      {
        title: (
          <>
            Voir tout <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/work",
      },
    ],
  },
  {
    title: "Agence",
    links: [
      { title: "À propos", href: "/about" },
      { title: "Notre process", href: "/process" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Suivre",
    links: SocialMediaProfiles,
  },
];
