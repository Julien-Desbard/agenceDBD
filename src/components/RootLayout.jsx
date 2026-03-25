"use client";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import Container from "./Container";
import Link from "next/link";
import Logo from "./Logo";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";
import clsx from "clsx";
import Offices from "./Offices";
import SocialMedia from "./SocialMedia";
import Footer from "./Footer";

// Liens de navigation — partagés entre la barre desktop et le menu mobile
const NAV_LINKS = [
  { href: "/work", label: "Réalisations" },
  { href: "/process", label: "Notre process" },
  { href: "/about", label: "À propos" },
  { href: "/#contact", label: "Contact" },
];

const Header = ({
  panelId,
  invert = false,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
}) => {
  return (
    <Container>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"} aria-label="Home">
          <Logo invert={invert}>Agence DBD</Logo>
        </Link>

        {/* Liens de navigation inline — visibles uniquement sur desktop */}
        {/* aria-label distingue cette nav des 2 autres présentes sur la page */}
        <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-x-8">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                "text-sm font-semibold transition-colors duration-200",
                invert
                  ? "text-white hover:text-[#f38406]"
                  : "text-neutral-950 hover:text-[#f38406]"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-x-8">
          <Button href={"/#contact"} invert={invert}>
            Demander un devis
          </Button>

          {/* Hamburger — visible uniquement sur mobile */}
          <div className="lg:hidden">
            <button
              ref={toggleRef}
              type="button"
              onClick={onToggle}
              aria-expanded={expanded.toString()}
              aria-controls={panelId}
              className={clsx(
                "group -m-2.5 rounded-full p-2.5 transition",
                invert ? "hover:bg-white/10" : "hover:bg-neutral-950/10"
              )}
              aria-label="Toggle navigation"
            >
              <Icon
                className={clsx(
                  "h-6 w-6",
                  invert
                    ? "fill-white group-hover:fill-neutral-200"
                    : "fill-neutral-950 group-hover:fill-neutral-700"
                )}
              />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

const NavigationRow = ({ children }) => {
  return (
    <div className="even:mt-px sm:bg-neutral-950">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  );
};

const NavigationItem = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
    >
      {children}
      <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
    </Link>
  );
};

const Navigation = () => {
  return (
    // aria-label distingue ce menu mobile de la navbar desktop
    <nav aria-label="Menu mobile" className="mt-px font-display text-5xl font-medium tracking-tight text-white">
      <NavigationRow>
        <NavigationItem href="/work">Réalisations</NavigationItem>
        <NavigationItem href="/process">Notre process</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href="/about">À propos</NavigationItem>
        <NavigationItem href="/#contact">Contact</NavigationItem>
      </NavigationRow>
    </nav>
  );
};

const RootLayoutInner = ({ children }) => {
  const panelId = useId();
  const [expanded, setExpanded] = useState(false);
  // scrollInvert : true quand la navbar passe au-dessus d'une section sombre
  const [scrollInvert, setScrollInvert] = useState(false);
  const openRef = useRef();
  const closeRef = useRef();
  const navRef = useRef();
  const shouldReduceMotion = useReducedMotion();

  // Ferme le menu si on clique sur un lien pointant vers la page actuelle
  useEffect(() => {
    function onClick(event) {
      if (event.target.closest("a")?.href === window.location.href) {
        setExpanded(false);
      }
    }
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  // Détecte si la navbar est au-dessus d'une section à fond sombre [data-invert]
  useEffect(() => {
    // Hauteur approximative de la navbar fixe en pixels
    const NAV_HEIGHT = 72;

    const check = () => {
      const darkSections = document.querySelectorAll("[data-invert]");
      let shouldInvert = false;

      darkSections.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // La section est sous la navbar si son haut est au-dessus de NAV_HEIGHT
        // et son bas est encore dans le viewport
        if (rect.top <= NAV_HEIGHT && rect.bottom >= 0) {
          shouldInvert = true;
        }
      });

      setScrollInvert(shouldInvert);
    };

    window.addEventListener("scroll", check, { passive: true });
    check(); // Vérification au chargement initial
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      {/*
        Skip link — visible uniquement au focus clavier (Tab).
        Permet aux utilisateurs de lecteur d'écran / navigation au clavier
        de sauter la navbar et d'aller directement au contenu principal.
        WCAG 2.4.1 — obligatoire niveau AA.
      */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-neutral-950 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Aller au contenu principal
      </a>

      <header>
        {/* Navbar fixe — toujours visible en haut de page */}
        <div
          style={{ borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}
          className={clsx(
            "fixed left-0 right-0 top-0 z-40 py-5 transition-colors duration-300",
            scrollInvert
              ? "bg-neutral-950"
              : "bg-white"
          )}
          aria-hidden={expanded ? "true" : undefined}
          inert={expanded ? "" : undefined}
        >
          <Header
            panelId={panelId}
            icon={HiMenuAlt4}
            toggleRef={openRef}
            expanded={expanded}
            invert={scrollInvert}
            onToggle={() => {
              setExpanded((expanded) => !expanded);
              window.setTimeout(() =>
                closeRef.current?.focus({ preventScroll: true })
              );
            }}
          />
        </div>

        {/* Menu mobile plein écran — même comportement qu'avant */}
        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? "auto" : 0 }}
          className="relative z-50 overflow-hidden bg-neutral-950 pt-2"
          aria-hidden={expanded ? undefined : "true"}
          inert={expanded ? undefined : ""}
        >
          <motion.div layout className="bg-neutral-800">
            <div ref={navRef} className="bg-neutral-950 pb-16 pt-14">
              <Header
                invert
                panelId={panelId}
                icon={IoMdClose}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={() => {
                  setExpanded((expanded) => !expanded);
                  window.setTimeout(() =>
                    openRef.current?.focus({ preventScroll: true })
                  );
                }}
              />
            </div>
            {/* Navigation */}
            <Navigation />
            <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
              <Container>
                <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                  <div>
                    <h2 className="font-display text-base font-semibold text-white">
                      Localisation
                    </h2>
                    <Offices
                      invert
                      className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                    />
                  </div>
                  <div className="sm:border-l sm:border-transparent sm:pl-16">
                    <h2 className="font-display text-base font-semibold text-white">
                      Follow us
                    </h2>
                    <SocialMedia className="mt-6" invert />
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        </motion.div>
      </header>

      {/*
        Zone de contenu principale.
        mt-16 : pousse la carte blanche juste en-dessous de la navbar fixe
        (la navbar fait ~66px, le menu mobile fermé fait 8px, 8+64=72px ≈ hauteur nav)
      */}
      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-white mt-16 pt-14"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
        >
          {/* id="main-content" est la cible du skip link ci-dessus */}
          <main id="main-content" className="w-full flex-auto">{children}</main>
          {/* Footer */}
          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
};

const RootLayout = ({ children }) => {
  const pathName = usePathname();
  return <RootLayoutInner key={pathName}>{children}</RootLayoutInner>;
};

export default RootLayout;
