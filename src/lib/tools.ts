import type { Pathname } from '$app/types';

export type Tool = {
	name: string;
	path: Pathname;
};

export const tools: Tool[] = [
	{ name: 'Cog Locations', path: '/tools/cog-locations/' },
	{ name: 'Cog Suit Level Tables', path: '/tools/cog-suit-level-tables/' },
	{ name: 'Hole-in-One Golfing', path: '/tools/hole-in-one-golfing/' }
];
