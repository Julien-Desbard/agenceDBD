import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Vous êtes en ligne" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Votre site est{" "}
          <strong className="font-semibold text-neutral-950">mis en ligne</strong>
          , le nom de domaine est configuré. Tout est testé, tout fonctionne.
        </p>
        <p>
          Je vous{" "}
          <strong className="font-semibold text-neutral-950">forme</strong> à
          l’utilisation de votre site, y compris à la gestion de votre espace
          d’administration si applicable. L’objectif : que vous soyez autonome
          au lendemain de la livraison.
        </p>
        <p>
          Et je reste{" "}
          <strong className="font-semibold text-neutral-950">disponible</strong>{" "}
          après la mise en ligne pour les ajustements, les questions et la suite.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Ce qui est inclus
      </h3>
      <List>
        <ListItem title="Mise en ligne">
          Configuration du nom de domaine, hébergement, SSL. Votre site est
          accessible et sécurisé dès le premier jour.
        </ListItem>
        <ListItem title="Formation">
          Je vous montre comment mettre à jour votre contenu, gérer vos images
          et utiliser votre espace d’administration en autonomie.
        </ListItem>
        <ListItem title="Support après livraison">
          Disponible pour les ajustements post-livraison et vos questions
          techniques. Vous n’êtes pas seul une fois le projet terminé.
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
