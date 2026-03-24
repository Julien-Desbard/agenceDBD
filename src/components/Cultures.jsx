import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div data-invert className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Mes engagements"
        title="Ce sur quoi vous pouvez compter."
        invert
      >
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Un seul interlocuteur" invert>
            Du début à la fin, vous parlez directement avec moi.
          </GridListItem>
          <GridListItem title="Des résultats" invert>
            Je vous explique les choses clairement, sans jargon ni termes techniques.
          </GridListItem>
          <GridListItem title="Transparence" invert>
            Périmètre clair, prix fixe. Vous savez
            ce qui est inclus avant de signer.
          </GridListItem>
          <GridListItem title="Qualité et conformité" invert>
            Sites rapides, bien référencés, sécurisés et conformes aux
            standards du web et exigences RGAA.
          </GridListItem>
          <GridListItem title="Suivi après livraison" invert>
            Une fois votre site en ligne, je reste disponible. Pour les
            ajustements, les questions, et la suite.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
