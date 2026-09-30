import type { Pathname } from '$app/types';

export type Guide = {
	name: string;
	path: Pathname;
};

export type GuideSection = {
	title: string;
	// Small message shown under the section title.
	note?: string;
	guides: Guide[];
};

export const guideSections: GuideSection[] = [
	{
		title: 'Getting Started',
		guides: [
			{ name: 'General Combat Strategy and Philosophy', path: '/guides/combat-strategy/' },
			{ name: 'Gag Training + Organic', path: '/guides/gag-training/' }
		]
	},
	{
		title: 'Cog HQs',
		note: 'It is expected that you understand the general strategy before tackling these.',
		// Ordered by headquarters: Sellbot, Cashbot, Lawbot, Bossbot. Facilities first, then bosses.
		guides: [
			{ name: 'Sellbot Factories', path: '/guides/sellbot-factories/' },
			{ name: 'Cashbot Mints', path: '/guides/cashbot-mints/' },
			{ name: 'Lawbot DA Offices', path: '/guides/lawbot-da-offices/' },
			{ name: 'Bossbot Golf Courses', path: '/guides/bossbot-golf-courses/' },
			{ name: 'Vice President (VP)', path: '/guides/vp/' },
			{ name: 'Chief Financial Officer (CFO)', path: '/guides/cfo/' },
			{ name: 'Chief Justice (CJ)', path: '/guides/cj/' },
			{ name: 'Chief Executive Officer (CEO)', path: '/guides/ceo/' }
		]
	}
];

export const guides: Guide[] = guideSections.flatMap((s) => s.guides);
