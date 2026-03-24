import React, { useId } from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import Button from "./Button";

// Champ select stylisé
const SelectInput = ({ name, placeholder, children }) => {
  const id = useId();
  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <select
        id={id}
        name={name}
        defaultValue=""
        required
        className="peer block w-full border border-neutral-300 bg-transparent px-6 p-3 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl appearance-none"
      >
        {/* L'option placeholder : disabled pour ne pas être choisie, hidden pour ne pas être dans la liste */}
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {children}
      </select>
      
      {/* Petit chevron (flèche) à droite */}
      <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center">
        <svg 
          className="h-5 w-5 text-neutral-400" 
          viewBox="0 0 20 20" 
          fill="currentColor" 
          aria-hidden="true"
        >
          <path 
            fillRule="evenodd" 
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" 
            clipRule="evenodd" 
          />
        </svg>
      </div>
    </div>
  );
};

const TextArea = ({ label, name, required }) => {
  const id = useId();
  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <textarea
        id={id}
        name={name}
        required={required}
        rows={2}
        placeholder=" " // Nécessaire pour l'animation du label si tu en utilises une
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl resize-y"
      />
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
          
          {/* Utilisation du nouveau SelectInput sans label externe */}
          <SelectInput name="type" placeholder="Type de besoin">
            <option value="vitrine">Site vitrine</option>
            <option value="refonte">Refonte de site existant</option>
            <option value="institutionnel">Site institutionnel</option>
            <option value="outil">Outil interne / dashboard</option>
            <option value="autre">Autre</option>
          </SelectInput>

          <TextArea label="Message" name="message" required />
        </div>
        <Button type="submit" className="mt-10">
          Envoyer ma demande
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;