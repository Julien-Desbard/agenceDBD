import Clients from '@/components/Clients'
import ContactSection from '@/components/ContactSection'
import Container from '@/components/Container'
import FadeIn from '@/components/FadeIn'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'

export default function Home() {
	return (
		<main className="text-black">
			<Container className="mt-24 sm:mt-32">
				<FadeIn className="max-w-3xl">
					<h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
						Votre prochain client vous cherche.{' '}
						<span className="text-[#d97706]">Soyez visible</span>.
					</h1>
					<p className="mt-6 text-xl text-neutral-600">
						Je prends le temps de comprendre votre activité pour concevoir un
						site que votre public trouve utile et que Google met en avant.{' '}
						<br />
						Vous restez concentré sur votre métier.
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
			<ContactSection />
		</main>
	)
}
