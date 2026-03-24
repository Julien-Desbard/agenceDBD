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
