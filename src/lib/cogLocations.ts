// Street data from the Toontown Rewritten wiki "Street" page (toontownrewritten.wiki/Street).
import { departments, type Department } from './levelTables';

export type DeptId = Department['id'];

export type Playground = {
	id: 'ttc' | 'dd' | 'dg' | 'mml' | 'tb' | 'ddl';
	name: string;
	icon?: string;
};

export type Street = {
	name: string;
	playground: Playground['id'];
	connectsTo: string;
	minLevel: number;
	maxLevel: number;
	// Department spawn chance in percent.
	chance: Record<DeptId, number>;
};

export type Cog = {
	name: string;
	dept: DeptId;
	minLevel: number;
	maxLevel: number;
	// The top 2 cogs of each department only roam streets during invasions.
	invasionOnly: boolean;
};

export const playgrounds: Playground[] = [
	{ id: 'ttc', name: 'Toontown Central', icon: '/playgrounds/ttc.png' },
	{ id: 'dd', name: "Donald's Dock", icon: '/playgrounds/dd.png' },
	{ id: 'dg', name: 'Daisy Gardens', icon: '/playgrounds/dg.png' },
	{ id: 'mml', name: "Minnie's Melodyland", icon: '/playgrounds/mml.png' },
	{ id: 'tb', name: 'The Brrrgh', icon: '/playgrounds/tb.png' },
	{ id: 'ddl', name: "Donald's Dreamland", icon: '/playgrounds/ddl.png' }
];

const street = (
	playground: Playground['id'],
	name: string,
	connectsTo: string,
	[minLevel, maxLevel]: [number, number],
	[bossbot, lawbot, cashbot, sellbot]: [number, number, number, number]
): Street => ({
	name,
	playground,
	connectsTo,
	minLevel,
	maxLevel,
	chance: { bossbot, lawbot, cashbot, sellbot }
});

// Percentages are Bossbot, Lawbot, Cashbot, Sellbot (same column order as the wiki).
export const streets: Street[] = [
	street('ttc', 'Loopy Lane', 'Alto Avenue', [1, 3], [10, 70, 10, 10]),
	street('ttc', 'Punchline Place', 'Barnacle Boulevard', [1, 3], [10, 10, 40, 40]),
	street('ttc', 'Silly Street', 'Elm Street', [1, 3], [25, 25, 25, 25]),
	street('dd', 'Seaweed Street', 'Maple Street', [3, 6], [0, 0, 90, 10]),
	street('dd', 'Barnacle Boulevard', 'Punchline Place', [2, 4], [90, 10, 0, 0]),
	street('dd', 'Lighthouse Lane', 'Walrus Way', [3, 6], [40, 40, 10, 10]),
	street('dg', 'Elm Street', 'Silly Street', [2, 4], [0, 20, 10, 70]),
	street('dg', 'Maple Street', 'Seaweed Street', [3, 6], [10, 70, 0, 20]),
	street('dg', 'Oak Street', 'Sellbot Headquarters', [3, 6], [5, 5, 5, 85]),
	street('mml', 'Alto Avenue', 'Loopy Lane', [2, 4], [0, 0, 50, 50]),
	street('mml', 'Baritone Boulevard', 'Sleet Street', [3, 6], [0, 0, 90, 10]),
	street('mml', 'Tenor Terrace', 'Lullaby Lane', [3, 6], [50, 50, 0, 0]),
	street('tb', 'Sleet Street', 'Baritone Boulevard', [5, 7], [10, 20, 30, 40]),
	street('tb', 'Walrus Way', 'Lighthouse Lane', [5, 7], [90, 10, 0, 0]),
	street('tb', 'Polar Place', 'Lawbot Headquarters', [7, 9], [5, 85, 5, 5]),
	street('ddl', 'Lullaby Lane', 'Tenor Terrace', [6, 9], [25, 25, 25, 25]),
	street('ddl', 'Pajama Place', 'Cashbot Headquarters', [6, 9], [5, 5, 85, 5])
];

// Each cog spawns at 5 levels starting from its tier, same as its suit table row.
export const cogs: Cog[] = departments.flatMap((d) =>
	d.tiers.map((t, i) => ({
		name: t.cog,
		dept: d.id,
		minLevel: t.start,
		maxLevel: t.start + t.merits.length - 1,
		invasionOnly: i >= d.tiers.length - 2
	}))
);

// A cog can roam a street (outside invasions) if its department spawns there and its levels
// overlap the street's. Cog buildings are not included.
export function canSpawn(cog: Cog, s: Street): boolean {
	return (
		!cog.invasionOnly &&
		s.chance[cog.dept] > 0 &&
		cog.minLevel <= s.maxLevel &&
		cog.maxLevel >= s.minLevel
	);
}
