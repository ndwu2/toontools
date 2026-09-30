// Promotion currency needed to advance from each suit level, transcribed from the wiki tables.
// Checked against shticker.org/promotions.

export type Tier = {
	cog: string;
	// First of the 5 levels this cog covers; merits[i] is for level start + i.
	start: number;
	merits: number[];
};

// Covers levels start..49 in order; level 50 is always "Maxed".
export type LevelTable = {
	title: string;
	start: number;
	merits: number[];
	highlights: number[];
};

export type Department = {
	id: 'bossbot' | 'lawbot' | 'cashbot' | 'sellbot';
	name: string;
	icon?: string;
	// Promotion currency (proper noun).
	currency: string;
	tiers: Tier[];
	top: LevelTable;
	v2: LevelTable;
};

const PROMOTION_LEVELS = [15, 20, 30, 40];

export const departments: Department[] = [
	{
		id: 'bossbot',
		name: 'Bossbot',
		icon: '/cogs/bossbot.png',
		currency: 'Stock Options',
		tiers: [
			{ cog: 'Flunky', start: 1, merits: [50, 60, 70, 80, 300] },
			{ cog: 'Pencil Pusher', start: 2, merits: [70, 80, 90, 100, 400] },
			{ cog: 'Yesman', start: 3, merits: [120, 140, 160, 180, 700] },
			{ cog: 'Micromanager', start: 4, merits: [190, 220, 250, 280, 1100] },
			{ cog: 'Downsizer', start: 5, merits: [310, 360, 410, 460, 1800] },
			{ cog: 'Head Hunter', start: 6, merits: [500, 580, 660, 740, 2900] },
			{ cog: 'Corporate Raider', start: 7, merits: [810, 940, 1070, 1200, 4700] },
			{ cog: 'The Big Cheese', start: 8, merits: [1310, 1520, 1730, 1940, 7600] }
		],
		top: {
			title: 'The Big Cheese disguise',
			start: 13,
			highlights: PROMOTION_LEVELS,
			// prettier-ignore
			merits: [
				1310, 7600, 1310, 1520, 1730, // 13–17
				1940, 7600, 1310, 1520, 1730, // 18–22
				1940, 2150, 2360, 2570, 2780, // 23–27
				2990, 7600, 1310, 1520, 1730, // 28–32
				1940, 2150, 2360, 2570, 2780, // 33–37
				2990, 7600, 1310, 1520, 1730, // 38–42
				1940, 2150, 2360, 2570, 2780, // 43–47
				2990, 7600 // 48–49
			]
		},
		v2: {
			title: 'Upgraded Bossbot Cog disguise',
			start: 8,
			highlights: [],
			// prettier-ignore
			merits: [
				2620, 3040, 3460, 3880, 15200, // 8–12
				2620, 15200, 2620, 3040, 3460, // 13–17
				3880, 15200, 2620, 3040, 3460, // 18–22
				3880, 4300, 4720, 5140, 5560, // 23–27
				5980, 15200, 2620, 3040, 3460, // 28–32
				3880, 4300, 4720, 5140, 5560, // 33–37
				5980, 15200, 2620, 3040, 3460, // 38–42
				3880, 4300, 4720, 5140, 5560, // 43–47
				5980, 15200 // 48–49
			]
		}
	},
	{
		id: 'lawbot',
		name: 'Lawbot',
		icon: '/cogs/lawbot.png',
		currency: 'Jury Notices',
		tiers: [
			{ cog: 'Bottom Feeder', start: 1, merits: [40, 50, 60, 70, 250] },
			{ cog: 'Bloodsucker', start: 2, merits: [60, 70, 80, 90, 350] },
			{ cog: 'Double Talker', start: 3, merits: [100, 120, 140, 160, 600] },
			{ cog: 'Ambulance Chaser', start: 4, merits: [160, 190, 220, 250, 950] },
			{ cog: 'Back Stabber', start: 5, merits: [260, 310, 360, 410, 1550] },
			{ cog: 'Spin Doctor', start: 6, merits: [420, 500, 580, 660, 2500] },
			{ cog: 'Legal Eagle', start: 7, merits: [680, 810, 940, 1070, 4050] },
			{ cog: 'Big Wig', start: 8, merits: [1100, 1310, 1520, 1730, 6550] }
		],
		top: {
			title: 'Big Wig disguise',
			start: 13,
			highlights: PROMOTION_LEVELS,
			// prettier-ignore
			merits: [
				1100, 6550, 1100, 1310, 1520, // 13–17
				1730, 6550, 1100, 1310, 1520, // 18–22
				1730, 1940, 2150, 2360, 2570, // 23–27
				2780, 6550, 1100, 1310, 1520, // 28–32
				1730, 1940, 2150, 2360, 2570, // 33–37
				2780, 6550, 1100, 1310, 1520, // 38–42
				1730, 1940, 2150, 2360, 2570, // 43–47
				2780, 6550 // 48–49
			]
		},
		v2: {
			title: 'Upgraded Lawbot Cog disguise',
			start: 8,
			highlights: [],
			// prettier-ignore
			merits: [
				2200, 2620, 3040, 3460, 13100, // 8–12
				2200, 13100, 2200, 2620, 3040, // 13–17
				3460, 13100, 2200, 2620, 3040, // 18–22
				3460, 3880, 4300, 4720, 5140, // 23–27
				5560, 13100, 2200, 2620, 3040, // 28–32
				3460, 3880, 4300, 4720, 5140, // 33–37
				5560, 13100, 2200, 2620, 3040, // 38–42
				3460, 3880, 4300, 4720, 5140, // 43–47
				5560, 13100 // 48–49
			]
		}
	},
	{
		id: 'cashbot',
		name: 'Cashbot',
		icon: '/cogs/cashbot.png',
		currency: 'Cogbucks',
		tiers: [
			{ cog: 'Short Change', start: 1, merits: [30, 40, 50, 60, 200] },
			{ cog: 'Penny Pincher', start: 2, merits: [50, 60, 70, 80, 300] },
			{ cog: 'Tightwad', start: 3, merits: [80, 100, 120, 140, 500] },
			{ cog: 'Bean Counter', start: 4, merits: [130, 160, 190, 220, 800] },
			{ cog: 'Number Cruncher', start: 5, merits: [210, 260, 310, 360, 1300] },
			{ cog: 'Money Bags', start: 6, merits: [340, 420, 500, 580, 2100] },
			{ cog: 'Loan Shark', start: 7, merits: [550, 680, 810, 940, 3400] },
			{ cog: 'Robber Baron', start: 8, merits: [890, 1100, 1310, 1520, 5500] }
		],
		top: {
			title: 'Robber Baron disguise',
			start: 13,
			highlights: PROMOTION_LEVELS,
			// prettier-ignore
			merits: [
				890, 5500, 890, 1100, 1310, // 13–17
				1520, 5500, 890, 1100, 1310, // 18–22
				1520, 1730, 1940, 2150, 2360, // 23–27
				2570, 5500, 890, 1100, 1310, // 28–32
				1520, 1730, 1940, 2150, 2360, // 33–37
				2570, 5500, 890, 1100, 1310, // 38–42
				1520, 1730, 1940, 2150, 2360, // 43–47
				2570, 5500 // 48–49
			]
		},
		v2: {
			title: 'Upgraded Cashbot Cog disguise',
			start: 8,
			highlights: [],
			// prettier-ignore
			merits: [
				1780, 2200, 2620, 3040, 11000, // 8–12
				1780, 11000, 1780, 2200, 2620, // 13–17
				3040, 11000, 1780, 2200, 2620, // 18–22
				3040, 3460, 3880, 4300, 4720, // 23–27
				5140, 11000, 1780, 2200, 2620, // 28–32
				3040, 3460, 3880, 4300, 4720, // 33–37
				5140, 11000, 1780, 2200, 2620, // 38–42
				3040, 3460, 3880, 4300, 4720, // 43–47
				5140, 11000 // 48–49
			]
		}
	},
	{
		id: 'sellbot',
		name: 'Sellbot',
		icon: '/cogs/sellbot.png',
		currency: 'Merits',
		tiers: [
			{ cog: 'Cold Caller', start: 1, merits: [20, 30, 40, 50, 150] },
			{ cog: 'Telemarketer', start: 2, merits: [40, 50, 60, 70, 250] },
			{ cog: 'Name Dropper', start: 3, merits: [60, 80, 100, 120, 400] },
			{ cog: 'Glad Hander', start: 4, merits: [100, 130, 160, 190, 650] },
			{ cog: 'Mover & Shaker', start: 5, merits: [160, 210, 260, 310, 1050] },
			{ cog: 'Two-Face', start: 6, merits: [260, 340, 420, 500, 1700] },
			{ cog: 'The Mingler', start: 7, merits: [420, 550, 680, 810, 2750] },
			{ cog: 'Mr. Hollywood', start: 8, merits: [680, 890, 1100, 1310, 4450] }
		],
		top: {
			title: 'Mr. Hollywood disguise',
			start: 13,
			highlights: PROMOTION_LEVELS,
			// prettier-ignore
			merits: [
				680, 4450, 680, 890, 1100, // 13–17
				1310, 4450, 680, 890, 1100, // 18–22
				1310, 1520, 1730, 1940, 2150, // 23–27
				2360, 4450, 680, 890, 1100, // 28–32
				1310, 1520, 1730, 1940, 2150, // 33–37
				2360, 4450, 680, 890, 1100, // 38–42
				1310, 1520, 1730, 1940, 2150, // 43–47
				2360, 4450 // 48–49
			]
		},
		v2: {
			title: 'Upgraded Sellbot Cog disguise',
			start: 8,
			highlights: [],
			// prettier-ignore
			merits: [
				1360, 1780, 2200, 2620, 8900, // 8–12
				1360, 8900, 1360, 1780, 2200, // 13–17
				2620, 8900, 1360, 1780, 2200, // 18–22
				2620, 3040, 3460, 3880, 4300, // 23–27
				4720, 8900, 1360, 1780, 2200, // 28–32
				2620, 3040, 3460, 3880, 4300, // 33–37
				4720, 8900, 1360, 1780, 2200, // 38–42
				2620, 3040, 3460, 3880, 4300, // 43–47
				4720, 8900 // 48–49
			]
		}
	}
];
