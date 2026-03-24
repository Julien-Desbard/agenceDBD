import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.webp";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Ce que je peux faire pour vous."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>Des solutions concrètes pour votre présence en ligne.</p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Site vitrine">
              Un site professionnel, rapide, mobile-friendly et facile à
              modifier. Pensé pour être trouvé sur Google et convaincre vos
              visiteurs.
            </ListItem>
            <ListItem title="Refonte de site existant">
              Votre site est lent, daté ou mal référencé ? Je le modernise sans
              perdre votre contenu ni votre historique SEO.
            </ListItem>
            <ListItem title="Site institutionnel">
              Sites pour mairies, collectivités et établissements publics.
              Conformes aux exigences d’accessibilité (RGAA) et aux standards
              du web.
            </ListItem>
            <ListItem title="Outil interne / dashboard">
              Espace sécurisé sur mesure pour gérer vos clients, commandes,
              planning ou tout autre processus interne.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
