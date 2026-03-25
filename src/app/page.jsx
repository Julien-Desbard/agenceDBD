import Clients from '@/components/Clients'
import ContactDetails from '@/components/ContactDetails'
import ContactForm from '@/components/ContactForm'
import Container from '@/components/Container'
import FadeIn from '@/components/FadeIn'
import SectionIntro from '@/components/SectionIntro'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'

// ─── FAQ Schema (données structurées) ────────────────────────────────────────
// Format JSON-LD recommandé par Google pour les "résultats enrichis" (FAQ).
// Google peut afficher ces questions directement sous le lien dans les résultats
// de recherche, ce qui augmente la surface visible et le taux de clic.
const faqJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	mainEntity: [
		{
			'@type': 'Question',
			name: 'Combien coûte la création d\'un site web ?',
			acceptedAnswer: {
				'@type': 'Answer',
				// Réponse citable par les IA : fourchettes tarifaires concrètes
				text: 'Un site vitrine démarre à partir de 1 500 €. Une refonte de site se situe généralement entre 1 200 € et 3 500 €. Un outil interne sur mesure varie entre 3 000 € et 10 000 € selon la complexité. Chaque projet fait l\'objet d\'une estimation détaillée sous 24h, sans engagement.',
			},
		},
		{
			'@type': 'Question',
			name: 'Combien de temps faut-il pour créer un site web ?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'En fonction de la complexité du projet, entre 2 et 8 semaines. Le délai est précisé dans la proposition initiale.',
			},
		},
		{
			'@type': 'Question',
			name: 'Vous intervenez uniquement en Savoie ?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'Je suis basé à Pont-de-Beauvoisin (Savoie) mais j\'interviens à distance partout en France.',
			},
		},
		{
			'@type': 'Question',
			name: 'Pourrai-je modifier mon site moi-même après la livraison ?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'Oui. Pour les sites avec CMS, je vous forme à la gestion de votre contenu lors de la livraison. Vous êtes autonome dès le premier jour.',
			},
		},
		{
			'@type': 'Question',
			name: 'Proposez-vous un suivi après la mise en ligne ?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'Oui. Je reste disponible pour les ajustements, les questions techniques et l\'évolution de votre site après la livraison.',
			},
		},
	],
}

export default function Home() {
	return (
		<main className="text-black">
			{/* Bloc JSON-LD FAQ — invisible dans le rendu, lu par Google */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
			/>

			<Container className="mt-24 sm:mt-32">
				<FadeIn className="max-w-3xl">
					<h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
						Votre prochain client vous cherche.{' '}
						<span className="text-[#f38406] text-focus-in">
							Devenez visible
						</span>
					</h1>
					<p className="mt-6 text-xl text-neutral-600 subtitle-appear">
						Je prends le temps de comprendre votre activité puis je conçois un site que votre public trouve utile et que Google met en avant.
						<br />
						Vous restez concentré sur votre métier. Vos clients vous trouvent.
					</p>
				</FadeIn>
			</Container>
			<Clients />
			<Testimonials className="mt-24 sm:mt-32 lg:mt-40">
				Julien a su répondre à mon besoin en toute autonomie, tout en restant à
				l'écoute. Pédagogue, même avec un client novice, il a créé un site que
				nous pouvons gérer facilement.
			</Testimonials>
			<Services />

			{/*
				<section> plutôt que <div> : les lecteurs d'écran naviguent entre
				les sections via la touche S — cette section devient découvrable.
				aria-label : annoncé quand la section reçoit le focus.
			*/}
			<section id="contact" aria-label="Contact — Parlons de votre projet" className="pb-12 sm:pb-16">
				<SectionIntro
					eyebrow="Contact"
					title="Parlons de votre projet"
					className="mt-24 sm:mt-32 lg:mt-40"
				>
					<p>
						Décrivez votre besoin en quelques mots. Je vous réponds sous 24h
						avec une première estimation.
					</p>
				</SectionIntro>
				<Container className="mt-16">
					<div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
						<ContactDetails />
						<ContactForm />
					</div>
				</Container>
			</section>
		</main>
	)
}
