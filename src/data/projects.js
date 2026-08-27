// Featured work. Images migrated from the original VIZCO portfolio.
// `image` may be swapped for real product renders later; when absent, the
// gradient `tone` (r1-r5) acts as a placeholder.
import warsaw from '@/assets/mieszkanie/MIESZKANIE1.jpg';
import fjords from '@/assets/fritti/Fritti1.jpg';
import sofa from '@/assets/sofas/1.jpg';
import barn from '@/assets/stodola/1.jpg';
import iceCubes from '@/assets/IceCubes/1.jpg';

export const projects = [
	{
		title: 'Warsaw Apartment',
		category: 'Archviz',
		image: warsaw,
		alt: 'Minimalist interior visualization of a Warsaw apartment',
		span: 7,
		aspect: '16 / 10',
		tone: 'r1',
	},
	{
		title: 'Frittihus Fjords',
		category: 'Archviz',
		image: fjords,
		alt: 'House and sauna set on the Swedish fjords',
		span: 5,
		aspect: '4 / 3.55',
		tone: 'r2',
	},
	{
		title: 'Upholstered Furniture',
		category: 'Product · Motion',
		image: sofa,
		alt: 'Product visualization of an upholstered sofa',
		span: 4,
		aspect: '1 / 1',
		tone: 'r3',
	},
	{
		title: 'Barn House',
		category: 'Archviz',
		image: barn,
		alt: 'Evening interior of a barn-style house',
		span: 4,
		aspect: '1 / 1',
		tone: 'r4',
	},
	{
		title: 'Ice Cubes',
		category: 'Archviz',
		image: iceCubes,
		alt: 'Architectural building resembling stacked ice cubes',
		span: 4,
		aspect: '1 / 1',
		tone: 'r5',
	},
];
