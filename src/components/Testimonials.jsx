import React from "react";
import GridPattern from "./GridPattern";
import clsx from "clsx";
import Container from "./Container";
import FadeIn from "./FadeIn";

// Temoignage de Mani Saeidi -- 11/03/2026
const Testimonials = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32",
        className
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              <p>
                {"\u201c"}
                {children}
                {"\u201d"}
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <p className="text-xl font-display font-semibold text-neutral-950">
                Mani Saeidi <span className="text-base font-normal italic hover:text-[#f38406] duration-300">- Client (<a href="https://www.bdc-angers.fr/#home" target="blank" className="underline underline-offset-2">Bar Du Centre</a>)</span>
              </p>
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </div>
  );
};

export default Testimonials;
