import Link from "next/link";
import clsx from "clsx";
import { GithubIcon } from "@/components/ui/github-icon";
import { LinkedinIcon } from "@/components/ui/linkedin-icon";
import Stack3Icon from "@/components/ui/stack-3-icon";

export const SocialMediaProfiles = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/julien-desbard",
    Icon: LinkedinIcon,
  },
  {
    title: "GitHub",
    href: "https://github.com/Julien-Desbard",
    Icon: GithubIcon,
  },
  {
    title: "Malt",
    href: "https://www.malt.fr/profile/juliendesbard",
    Icon: Stack3Icon,
  },
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.title} (ouvre un nouvel onglet)`}
            className={clsx(
              "transition hover:text-[#f38406]",
              invert ? "text-white" : "text-neutral-950"
            )}
          >
            {/* aria-hidden : l'icône est décorative, le aria-label du lien suffit */}
            <item.Icon size={24} aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
