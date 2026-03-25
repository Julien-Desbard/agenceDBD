// Métadonnées spécifiques à la page À propos — surcharge le titre global
export const metadata = {
	title: 'À propos',
	description:
		"Julien Desbard, développeur web freelance en Savoie. 20 ans d'expérience en gestion de projet, entrepreneuriat et audit au service de votre présence en ligne.",
	alternates: {
		canonical: 'https://agence-dbd.vercel.app/about',
	},
	openGraph: {
		title: 'À propos | Agence DBD',
		description:
			"Julien Desbard, développeur web freelance en Savoie. 20 ans d'expérience en gestion de projet, entrepreneuriat et audit.",
		url: 'https://agence-dbd.vercel.app/about',
		images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Agence DBD' }],
	},
}

// Schema Person — identifie Julien Desbard comme entité humaine vérifiable
// sameAs relie ses profils externes au graphe de connaissance des moteurs IA
const personLd = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	'@id': 'https://agence-dbd.vercel.app/#julien-desbard',
	name: 'Julien Desbard',
	url: 'https://agence-dbd.vercel.app/about',
	jobTitle: 'Développeur web freelance',
	description:
		"Développeur web freelance basé à Pont-de-Beauvoisin (Savoie). Spécialisé en Next.js et TypeScript. 20 ans d'expérience en gestion de projet, entrepreneuriat et audit.",
	email: 'julien.desbard@gmail.com',
	telephone: '+33669120885',
	worksFor: {
		'@type': 'ProfessionalService',
		'@id': 'https://agence-dbd.vercel.app/#organization',
	},
	knowsAbout: [
		'Développement web',
		'Next.js',
		'TypeScript',
		'React',
		'Node.js',
		'PostgreSQL',
		'SEO technique',
		'Accessibilité web RGAA',
		'Gestion de projet',
	],
	sameAs: [
		'https://www.linkedin.com/in/julien-desbard',
		'https://github.com/Julien-Desbard',
		'https://www.malt.fr/profile/juliendesbard',
	],
}

// BreadcrumbList — améliore l'affichage dans les résultats de recherche
const breadcrumbLd = {
	'@context': 'https://schema.org',
	'@type': 'BreadcrumbList',
	itemListElement: [
		{ '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://agence-dbd.vercel.app/' },
		{ '@type': 'ListItem', position: 2, name: 'À propos', item: 'https://agence-dbd.vercel.app/about' },
	],
}

import Container from '@/components/Container'
import Cultures from '@/components/Cultures'
import FadeIn from '@/components/FadeIn'
import PageIntro from '@/components/PageIntro'
import { StatList, StatListItem } from '@/components/StatList'
import Image from 'next/image'
import photoJulien from '@/images/desbard.webp'
import React from 'react'

const AboutPage = () => {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
			<PageIntro
				eyebrow="À propos"
				title="Un développeur web qui connaît la réalité du terrain"
			>
				<p>
					Avant de devenir développeur web, j'ai passé vingt ans dans des
					environnements où il fallait livrer, écouter et s'adapter. Ce parcours
					change la façon dont je travaille avec vous.
				</p>
			</PageIntro>

			{/* Photo + texte détaillé */}
			<Container className="mt-16">
				<FadeIn>
					<div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-[auto_1fr] items-start">
						<div className="max-w-xs overflow-hidden rounded-2xl">
							<Image
								src={photoJulien}
								alt="Julien Desbard"
								className="w-full object-cover"
							/>
						</div>
						<div className="space-y-6 text-base text-neutral-600">
							<p>
								J'ai créé et dirigé ma propre entreprise de diagnostics
								immobiliers. J'ai piloté des équipes et des projets
								opérationnels sur plusieurs pays. J'ai passé des années en
								relation client, à comprendre des besoins et résoudre des
								problèmes concrets. Et j'ai dirigé un pôle audit, où chaque
								détail compte et où la conformité n'est pas une option.
							</p>
							<p>
								Aujourd'hui, je mets cette expérience au service de votre
								présence en ligne. Quand vous m'expliquez votre besoin, je
								comprends ce qu'il y a derrière — vos contraintes, votre public,
								vos obligations. Et je conçois un site qui y répond vraiment.
							</p>
						</div>
					</div>
				</FadeIn>
			</Container>

			<Container className="mt-16">
				<StatList>
					<StatListItem
						value="20 ans"
						label="de pilotage de projets, de la conception à la livraison"
					/>
					<StatListItem
						value="Entrepreneur"
						label="Ancien dirigeant d'entreprise — je connais vos contraintes"
					/>
					<StatListItem
						value="Écoute & rigueur"
						label="Formé par des années de relation client et d'audit terrain"
					/>
				</StatList>
			</Container>
			<Cultures />
		</>
	)
}

export default AboutPage
