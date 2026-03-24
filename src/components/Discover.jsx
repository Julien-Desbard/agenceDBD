import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Nous discutons" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Un appel de 15 à 20 minutes pour comprendre ce que vous{" "}
          <strong className="font-semibold text-neutral-950">cherchez</strong>,
          vos contraintes et vos délais. C’est gratuit et sans engagement.
        </p>
        <p>
          À l’issue de cet échange, je sais si je peux vous{" "}
          <strong className="font-semibold text-neutral-950">aider</strong> et
          comment. Pas de jargon, pas de présentation commerciale : juste une
          conversation directe sur votre besoin.
        </p>
        <p>
          Si votre projet ne correspond pas à ce que je fais, je vous le dis
          clairement — et je vous{" "}
          <strong className="font-semibold text-neutral-950">oriente</strong>{" "}
          si je peux.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Ce qui est inclus
      </h3>
      <TagList className="mt-4">
        <TagListItem>Écoute du besoin</TagListItem>
        <TagListItem>Analyse de l’existant</TagListItem>
        <TagListItem>Premières recommandations</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
