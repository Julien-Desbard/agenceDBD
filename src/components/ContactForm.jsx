import React, { useId } from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import Button from "./Button";

// Champ select stylisé — reprend le style de TextInput
const SelectInput = ({ label, name, children }) => {
  const id = useId();
  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <select
        id={id}
        name={name}
        defaultValue=""
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl appearance-none"
      >
        <option value="" disabled></option>
        {children}
      </select>
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-6 text-sm font-semibold text-neutral-950"
      >
        {label}
      </label>
    </div>
  );
};

const ContactForm = () => {
  return (
    <FadeIn>
      {/* TODO: remplacer action par votre ID Formspree une fois créé */}
      <form action="#" method="POST">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Votre demande
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Nom" name="name" autoComplete="name" required />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
          <TextInput
            label="Téléphone (optionnel)"
            type="tel"
            name="phone"
            autoComplete="tel"
          />
          <TextInput
            label="Entreprise (optionnel)"
            name="company"
            autoComplete="organization"
          />
          <SelectInput label="Type de besoin" name="type">
            <option value="vitrine">Site vitrine</option>
            <option value="refonte">Refonte de site existant</option>
            <option value="institutionnel">Site institutionnel</option>
            <option value="outil">Outil interne / dashboard</option>
            <option value="autre">Autre</option>
          </SelectInput>
          <TextInput label="Message" name="message" required />
        </div>
        <Button type="submit" className="mt-10">
          Envoyer ma demande
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
