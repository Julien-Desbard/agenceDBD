import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn, { FadeInStagger } from "@/components/FadeIn";
import Border from "@/components/Border";
import { TagList, TagListItem } from "@/components/TagList";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

// Données des projets — Agence DBD
const projects = [
  {
    title: "Bar du Centre — Angers",
    client: "Brasserie angevine",
    year: "2025",
    description:
      "Site complet d'une brasserie angevine : cadrage du besoin, conception, développement et mise en ligne. Le site est rapide, bien référencé sur Google, et le client gère ses contenus, sa carte et ses événements sans intervention technique.",
    missions: [
      "Cadrage du besoin",
      "Conception",
      "Développement",
      "Mise en ligne",
      "Formation du client",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js / Express",
      "PostgreSQL",
      "Strapi CMS",
    ],
    href: "https://bdc-angers.fr",
  },
  {
    title: "SmartRelance — Relances intelligentes",
    client: "Projet personnel",
    year: "2025",
    description:
      "Application web qui génère des relances de factures personnalisées grâce à l'intelligence artificielle. Chaque message est adapté au contexte et à l'historique du client.",
    missions: ["Conception produit", "Développement", "Intégration IA"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "API Claude (Anthropic)",
    ],
    href: "https://smart-relance.vercel.app",
  },
];

const WorkPage = () => {
  return (
    <>
      <PageIntro eyebrow="Réalisations" title="Des projets concrets, livrés.">
        <p>
          Deux exemples récents de ce que je crée : des sites rapides, bien
          référencés, et des outils pensés pour être utilisés au quotidien.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeInStagger>
          <div className="space-y-24">
            {projects.map((project) => (
              <FadeIn key={project.title}>
                <Border className="pt-16">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Méta */}
                    <div>
                      <p className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                        {project.client}
                      </p>
                      <p className="mt-1 text-sm text-neutral-600">
                        {project.year}
                      </p>
                    </div>

                    {/* Description */}
                    <div className="lg:col-span-2">
                      <h2 className="font-display text-2xl font-semibold text-neutral-950">
                        <Link
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-neutral-700 transition"
                        >
                          {project.title}
                        </Link>
                      </h2>
                      <p className="mt-6 text-base text-neutral-600">
                        {project.description}
                      </p>

                      <h3 className="mt-8 font-display text-sm font-semibold text-neutral-950">
                        Missions
                      </h3>
                      <TagList className="mt-4">
                        {project.missions.map((mission) => (
                          <TagListItem key={mission}>{mission}</TagListItem>
                        ))}
                      </TagList>

                      <h3 className="mt-8 font-display text-sm font-semibold text-neutral-950">
                        Technologies
                      </h3>
                      <TagList className="mt-4">
                        {project.technologies.map((tech) => (
                          <TagListItem key={tech}>{tech}</TagListItem>
                        ))}
                      </TagList>
                    </div>
                  </div>
                </Border>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>

      <ContactSection />
    </>
  );
};

export default WorkPage;
