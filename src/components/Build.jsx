import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.webp";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Je propose, puis je construis" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Sous 24h après notre échange, vous recevez une{" "}
          <strong className="font-semibold text-neutral-950">estimation</strong>{" "}
          chiffrée. Le document détaille exactement ce qui est inclus, le délai
          de livraison et le prix. Pas de surprise, pas de jargon.
        </p>
        <p>
          Une fois validé, je construis votre site. Vous le voyez{" "}
          <strong className="font-semibold text-neutral-950">avancer</strong>{" "}
          en temps réel sur un lien de prévisualisation, et vous pouvez me
          faire part de vos remarques à tout moment.
        </p>
        <p>
          Nous discutons{" "}
          <strong className="font-semibold text-neutral-950">
            régulièrement
          </strong>{" "}
          pour nous assurer que le résultat correspond exactement à ce que vous
          attendez. Les ajustements en cours de route font partie du processus.
        </p>
      </div>
      <Blockquote
        author={{ name: "Mani Saeidi", role: "Client" }}
        className="mt-12"
      >
        Julien a su répondre à mon besoin en toute autonomie, tout en restant à
        l’écoute. Il a créé un site que mon équipe et moi pouvons gérer et
        faire évoluer facilement.
      </Blockquote>
    </Section>
  );
};

export default Build;
