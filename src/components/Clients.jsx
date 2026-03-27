import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

// Chiffres clés — Agence Versatile
const stats = [
  {
    value: "20 ans",
    label: "de pilotage de projets, de la conception à la livraison",
  },
  {
    value: "Entrepreneur",
    label: "Ancien dirigeant d'entreprise — je connais vos contraintes",
  },
  {
    value: "Écoute & rigueur",
    label: "Formé par des années de relation client et d'audit terrain",
  },
];

const Clients = () => {
  return (
    <div data-invert className="section-appear mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-md font-semibold tracking-wider text-white sm:text-left">
            Ce qui fait la différence
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <li key={stat.value} className="min-w-0">
                <FadeIn>
                  <p className="font-display text-4xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-md text-neutral-400">{stat.label}</p>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Clients;
