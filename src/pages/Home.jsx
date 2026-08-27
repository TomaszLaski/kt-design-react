import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import Marquee from '../components/sections/Marquee';
import Statement from '../components/sections/Statement';
import Work from '../components/sections/Work';
import Packshots from '../components/sections/Packshots';
import Branding from '../components/sections/Branding';
import Motion from '../components/sections/Motion';
import Websites from '../components/sections/Websites';
import Model3D from '../components/sections/Model3D';
import ContactCTA from '../components/sections/ContactCTA';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Marquee />
				<Statement />
				<Work />
				<Packshots />
				<Branding />
				<Motion />
				<Websites />
				<Model3D />
				<ContactCTA />
			</main>
		</>
	);
}
