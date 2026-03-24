import Clients from '@/components/Clients'
import ContactDetails from '@/components/ContactDetails'
import ContactForm from '@/components/ContactForm'
import Container from '@/components/Container'
import FadeIn from '@/components/FadeIn'
import SectionIntro from '@/components/SectionIntro'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'

export default function Home() {
	return (
		<main className="text-black">
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

			{/* Section contact — accessible via /#contact depuis la navbar */}
			<div id="contact" className="pb-12 sm:pb-16">
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
			</div>
		</main>
	)
}
