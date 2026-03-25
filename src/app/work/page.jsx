// Métadonnées spécifiques à la page Réalisations — surcharge le titre global
export const metadata = {
	title: 'Réalisations',
	description:
		'Projets web livrés par Agence DBD : site de restaurant avec CMS, application SaaS de conformité documentaire, contribution à un projet de mémoire collective.',
	alternates: {
		canonical: 'https://agence-dbd.vercel.app/work',
	},
	openGraph: {
		title: 'Réalisations | Agence DBD',
		description:
			'Projets web livrés par Agence DBD : site de restaurant avec CMS, application SaaS de conformité documentaire, contribution à un projet de mémoire collective.',
		url: 'https://agence-dbd.vercel.app/work',
		images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Agence DBD' }],
	},
}

// BreadcrumbList — améliore l'affichage dans les résultats de recherche
const breadcrumbLd = {
	'@context': 'https://schema.org',
	'@type': 'BreadcrumbList',
	itemListElement: [
		{ '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://agence-dbd.vercel.app/' },
		{ '@type': 'ListItem', position: 2, name: 'Réalisations', item: 'https://agence-dbd.vercel.app/work' },
	],
}

// ItemList — expose les projets comme entités structurées lisibles par les IA
const itemListLd = {
	'@context': 'https://schema.org',
	'@type': 'ItemList',
	name: 'Réalisations — Agence DBD',
	url: 'https://agence-dbd.vercel.app/work',
	itemListElement: [
		{
			'@type': 'ListItem',
			position: 1,
			item: {
				'@type': 'CreativeWork',
				name: 'Bar du Centre — Angers',
				description:
					"Site complet d'une brasserie angevine réalisé en 2025. Next.js, Strapi CMS, PostgreSQL. Le client gère ses contenus en autonomie.",
				url: 'https://bdc-angers.fr',
				author: { '@type': 'Person', '@id': 'https://agence-dbd.vercel.app/#julien-desbard' },
			},
		},
		{
			'@type': 'ListItem',
			position: 2,
			item: {
				'@type': 'CreativeWork',
				name: 'Their Memory — Mémoire collective en ligne',
				description:
					'Contribution bénévole en 2025 à theirmemory.org : nouvelles fonctionnalités, UI et base de données. Next.js, TypeScript, PostgreSQL.',
				url: 'https://theirmemory.org',
				author: { '@type': 'Person', '@id': 'https://agence-dbd.vercel.app/#julien-desbard' },
			},
		},
		{
			'@type': 'ListItem',
			position: 3,
			item: {
				'@type': 'CreativeWork',
				name: 'SmartConform — Conformité documentaire par IA',
				description:
					"Application SaaS (2025) permettant aux TPE/PME de suivre leurs documents réglementaires. L'IA (Claude API) extrait les dates de validité et envoie des alertes avant expiration. Next.js 15, TypeScript, PostgreSQL, Prisma.",
				url: 'https://smart-relance.vercel.app',
				author: { '@type': 'Person', '@id': 'https://agence-dbd.vercel.app/#julien-desbard' },
			},
		},
	],
}

import PageIntro from '@/components/PageIntro'
import Container from '@/components/Container'
import FadeIn, { FadeInStagger } from '@/components/FadeIn'
import Border from '@/components/Border'
import { TagList, TagListItem } from '@/components/TagList'
import Link from 'next/link'
import Image from 'next/image'
import imageBdc from '@/images/bdc.webp'
import imageSmartconform from '@/images/smartconform.webp'
import imageTheirmemory from '@/images/theirmemory.webp'

// Données des projets — Agence DBD
const projects = [
	{
		title: 'Bar du Centre — Angers',
		client: 'Brasserie angevine',
		year: '2025',
		description:
			"Site complet d'une brasserie angevine : cadrage du besoin, conception, développement et mise en ligne. Le site est rapide, bien référencé sur Google, et le client gère ses contenus, sa carte et ses événements sans intervention technique. Il est autonome, comme il l'avait souhaité.",
		missions: [
			'Découverte du besoin',
			'Conception',
			'Développement',
			'Mise en ligne',
			'Formation du client',
		],
		technologies: [
			'Next.js',
			'TypeScript',
			'Node.js / Express',
			'PostgreSQL',
			'Strapi CMS',
		],
		href: 'https://bdc-angers.fr',
		image: imageBdc,
	},
	{
		title: 'Their Memory — Mémoire collective en ligne',
		client: 'Contribution bénévole',
		year: '2025',
		description:
			"Participation bénévole au projet theirmemory.org : développement de nouvelles fonctionnalités, amélioration de l'interface utilisateur et travail sur la base de données d'une application de mémoire collective.",
		missions: [
			'Nouvelles fonctionnalités',
			'Interface utilisateur',
			'Base de données',
		],
		technologies: [
			'Next.js',
			'TypeScript',
			'JavaScript',
			'Node.js',
			'PostgreSQL',
		],
		href: 'https://theirmemory.org',
		image: imageTheirmemory,
	},
	{
		title: 'SmartConform — Conformité documentaire par IA',
		client: 'Projet SAAS',
		year: '2025',
		description:
			"Application SaaS qui permet aux TPE/PME de suivre leurs documents réglementaires (assurances, certifications, attestations). L'IA extrait automatiquement les dates de validité et envoie des alertes avant expiration — pour éviter les amendes et les marchés perdus.",
		missions: [
			'Conception produit',
			'Développement',
			'Intégration IA',
			'Architecture SaaS',
		],
		technologies: [
			'Next.js 15',
			'TypeScript',
			'Node.js',
			'PostgreSQL',
			'Claude API (Anthropic)',
			'Prisma',
		],
		href: 'https://smart-relance.vercel.app',
		image: imageSmartconform,
	},
]

const WorkPage = () => {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
			<PageIntro eyebrow="Réalisations" title="Des projets concrets, livrés.">
				<p>
					Trois réalisations récentes : des sites rapides, bien référencés, des
					outils SaaS pensés pour un usage quotidien, et une contribution
					bénévole à un projet à impact.
				</p>
			</PageIntro>

			<Container className="mt-16 sm:mt-20 lg:mt-24">
				<FadeInStagger>
					<div className="space-y-24">
						{projects.map((project) => (
							<FadeIn key={project.title}>
								<Border className="pt-16">
									<div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
										{/* Méta */}
										<div>
											<p className="font-display text-sm font-semibold tracking-wider text-neutral-950 pb-6">
												{project.client}
											</p>
											{/* <p className="mt-1 text-sm text-neutral-600">
                        {project.year}
                      </p> */}
											{project.image && (
												<div className="mt-6 overflow-hidden rounded-2xl">
													<Link
														href={project.href}
														target="_blank"
														rel="noopener noreferrer"
													>
														<Image
															src={project.image}
															alt={project.title}
															className="w-full object-cover"
														/>
													</Link>
												</div>
											)}
										</div>

										{/* Description */}
										<div className="lg:col-span-2">
											<h2 className="font-display text-2xl font-semibold text-neutral-950">
												<Link
													href={project.href}
													target="_blank"
													rel="noopener noreferrer"
													className="hover:text-[#f38406] transition cursor-pointer"
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
		</>
	)
}

export default WorkPage
