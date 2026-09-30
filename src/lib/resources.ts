export type Resource = {
	name: string;
	url: string;
	description: string;
};

export const resources: Resource[] = [
	{
		name: 'ToonHQ',
		url: 'https://toonhq.org/',
		description:
			'The game is borderline unplayable without this. This is for party finder, cog invasions, and field offices.'
	},
	{
		name: 'Toontown Combos Calculator',
		url: 'https://zzzachzzz.github.io/toontown-combos/calc',
		description:
			'The combo calculator that I mostly end up using that I found online, part of the inspiration for making a tool that just lives on GitHub Pages as well for me.'
	}
];

// Images live in static/resources/sound-combos/. Add each filename here in display order.
export const soundComboImages: { file: string; alt: string }[] = [
	{ file: '01-basic.png', alt: 'Basic sound combos chart' },
	{ file: '02-trunk.png', alt: 'Trunk sound combos chart' },
	{ file: '03-stairs.png', alt: 'Stairs sound combos chart' },
	{ file: '04-triangle.png', alt: 'Triangle sound combos chart' },
	{ file: '05-standard-fog.png', alt: 'Standard fog sound combos chart' },
	{ file: '06-opera.png', alt: 'Opera sound combos chart' }
];
