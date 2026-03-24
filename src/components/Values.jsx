import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro eyebrow="Mes valeurs" title="Ce qui guide chaque projet.">
        <p>
          Trois principes simples que j'applique systématiquement, quel que
          soit le projet.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Réactivité">
            Vous recevez une estimation sous 24h — vous savez rapidement si votre projet est faisable et à quel coût.
          </GridListItem>
          <GridListItem title="Transparence">
            Prix fixe, périmètre clair, pas de coûts cachés. Ce qui est écrit
            dans le devis,  c'est ce qui est livré.
          </GridListItem>
          <GridListItem title="Qualité">
            Sites rapides, sécurisés, conformes aux standards du web et bien
            référencés sur Google.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
