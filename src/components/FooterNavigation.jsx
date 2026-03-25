import { navigation } from "@/constants";
import Link from "next/link";

const FooterNavigation = () => {
  return (
    // aria-label distingue cette nav du footer des 2 navs du header
    <nav aria-label="Navigation secondaire">
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((item) => (
          <li key={item.title}>
            {/* h3 plutôt que div : les lecteurs d'écran naviguent par headings */}
            <h3 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {item.title}
            </h3>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {item.links.map((link) => (
                <li key={link.title} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNavigation;
