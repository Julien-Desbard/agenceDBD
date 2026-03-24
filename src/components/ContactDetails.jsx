import React from "react";
import FadeIn from "./FadeIn";
import Offices from "./Offices";
import Border from "./Border";
import Link from "next/link";
import SocialMedia from "./SocialMedia";

const ContactDetails = () => {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Localisation
      </h2>
      <p className="mt-7 text-base text-neutral-600">
        Basé au Pont-de-Beauvoisin, en Auvergne-Rhône-Alpes. Disponible en
        remote partout en France.
      </p>
      {/* <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" /> */}
      <Border className="mt-12 pt-8">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Me contacter directement
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ["Email", "julien.desbard@gmail.com"],
            ["Téléphone", "06 69 12 08 85"],
          ].map(([label, contact]) => (
            <div key={contact}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={
                    label === "Email"
                      ? `mailto:${contact}`
                      : `tel:${contact.replace(/\s/g, "")}`
                  }
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {contact}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>
      <Border className="mt-6 pt-10">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Retrouvez-moi
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  );
};

export default ContactDetails;
