import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";

const MentionsLegalesPage = () => {
  return (
    <>
      <PageIntro eyebrow="Informations légales" title="Mentions légales">
        <p>
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
          pour la confiance en l'économie numérique.
        </p>
      </PageIntro>

      <Container className="mt-16 pb-24 sm:pb-32 lg:pb-40">
        <FadeIn>
          <div className="prose prose-neutral max-w-3xl">
            {/* Éditeur */}
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Éditeur du site
              </h2>
              <div className="mt-6 space-y-2 text-base text-neutral-600">
                <p>
                  <strong className="text-neutral-950">Nom :</strong> Julien
                  Desbard
                </p>
                <p>
                  <strong className="text-neutral-950">Activité :</strong>{" "}
                  Développeur web freelance — Agence DBD
                </p>
                <p>
                  <strong className="text-neutral-950">Adresse :</strong> Le
                  Pont-de-Beauvoisin, Auvergne-Rhône-Alpes, France
                </p>
                <p>
                  <strong className="text-neutral-950">Email :</strong>{" "}
                  <a
                    href="mailto:julien.desbard@gmail.com"
                    className="text-neutral-950 underline hover:no-underline"
                  >
                    julien.desbard@gmail.com
                  </a>
                </p>
                <p>
                  <strong className="text-neutral-950">Téléphone :</strong>{" "}
                  <a
                    href="tel:+33669120885"
                    className="text-neutral-950 underline hover:no-underline"
                  >
                    06 69 12 08 85
                  </a>
                </p>
              </div>
            </section>

            {/* Hébergement */}
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Hébergement
              </h2>
              <div className="mt-6 space-y-2 text-base text-neutral-600">
                <p>
                  Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite
                  600, San Francisco, CA 94104, États-Unis.
                </p>
                <p>
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-950 underline hover:no-underline"
                  >
                    vercel.com
                  </a>
                </p>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Propriété intellectuelle
              </h2>
              <p className="mt-6 text-base text-neutral-600">
                L'ensemble du contenu de ce site (textes, images, graphismes,
                logo) est la propriété de Julien Desbard ou fait l'objet d'une
                autorisation d'utilisation. Toute reproduction, représentation,
                modification ou exploitation, totale ou partielle, sans
                autorisation expresse et préalable est strictement interdite.
              </p>
            </section>

            {/* Données personnelles */}
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Données personnelles
              </h2>
              <div className="mt-6 space-y-4 text-base text-neutral-600">
                <p>
                  Ce site collecte les données transmises via le formulaire de
                  contact (nom, email, téléphone, message) dans le seul but de
                  répondre à votre demande. Ces données ne sont pas transmises à
                  des tiers et ne font l'objet d'aucun traitement commercial.
                </p>
                <p>
                  Conformément au Règlement Général sur la Protection des
                  Données (RGPD), vous disposez d'un droit d'accès, de
                  rectification et de suppression de vos données. Pour exercer
                  ce droit, contactez :{" "}
                  <a
                    href="mailto:julien.desbard@gmail.com"
                    className="text-neutral-950 underline hover:no-underline"
                  >
                    julien.desbard@gmail.com
                  </a>
                  .
                </p>
                <p>Ce site n'utilise pas de cookies de traçage.</p>
              </div>
            </section>

            {/* Responsabilité */}
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Limitation de responsabilité
              </h2>
              <p className="mt-6 text-base text-neutral-600">
                Julien Desbard s'efforce de maintenir les informations de ce
                site à jour et exactes, mais ne peut garantir leur exhaustivité
                ni leur absence d'erreur. Les liens vers des sites tiers sont
                fournis à titre informatif ; leur contenu n'engage pas la
                responsabilité de l'éditeur.
              </p>
            </section>
          </div>
        </FadeIn>
      </Container>
    </>
  );
};

export default MentionsLegalesPage;
