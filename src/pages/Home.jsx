import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import WhyRender from '../components/sections/WhyRender';
import Deliverables from '../components/sections/Deliverables';
import Pipeline from '../components/sections/Pipeline';
import Work from '../components/sections/Work';
import About from '../components/sections/About';
import Tools from '../components/sections/Tools';
import ContactCTA from '../components/sections/ContactCTA';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<WhyRender />
				<Deliverables />
				<Pipeline />
				<Work />
				<About />
				<Tools />
				<ContactCTA />
			</main>
			<Footer />
		</>
	);
}
