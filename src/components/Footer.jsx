import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-6">
        <Link href={"/"} aria-label="Home">
          <Logo className="h-8" fillOnHover>
            Agence Versatile
          </Logo>
        </Link>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link
            href="/mentions-legales"
            className="text-sm text-neutral-600 hover:text-neutral-950 transition"
          >
            Mentions légales
          </Link>
          <p className="text-sm text-neutral-700">
            © 2026 Agence Versatile — Julien Desbard
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
