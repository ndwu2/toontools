// Shot data transcribed from the Toontown Golf Chart PDF (static/resources/ttgolf.pdf).
// Blank strings mean the PDF has no info for that field.

export type Hole = {
	name: string;
	position: string;
	aim: string;
	strength: string;
	notes: string;
};

export type Course = {
	id: 'easy' | 'medium' | 'hard';
	difficulty: string;
	name: string;
	holes: Hole[];
};

export const courses: Course[] = [
	{
		id: 'easy',
		difficulty: 'Easy',
		name: 'Walk in the Par',
		holes: [
			{
				name: 'Afternoon Tee',
				position: 'Center',
				aim: 'straight',
				strength: '72',
				notes: ''
			},
			{
				name: 'Down the Hatch',
				position: 'Center',
				aim: 'straight',
				strength: '81',
				notes: ''
			},
			{
				name: 'Hole in Fun',
				position: 'Center',
				aim: 'straight',
				strength: '52-55',
				notes: 'Hit up arrow first'
			},
			{
				name: 'Hole on the Range',
				position: 'Center',
				aim: 'straight',
				strength: '68',
				notes: ''
			},
			{
				name: 'Holey Mackerel!',
				position: 'Center',
				aim: 'straight',
				strength: '44-46',
				notes: ''
			},
			{
				name: 'Hot Links',
				position: 'Right',
				aim: 'straight',
				strength: '82',
				notes: 'Be sure to hit up arrow'
			},
			{
				name: 'One Little Birdie',
				position: 'Left',
				aim: 'right 32',
				strength: '77',
				notes: ''
			},
			{
				name: 'Peanut Putter',
				position: 'Center',
				aim: 'straight',
				strength: '70-75',
				notes: 'Also works on 68 and 89'
			},
			{
				name: 'Seeing Green',
				position: 'Center',
				aim: 'straight',
				strength: '54-57',
				notes: ''
			},
			{
				name: 'Swing Time',
				position: 'Center',
				aim: 'right 16',
				strength: '55',
				notes: ''
			},
			{
				name: 'Swing-A-Long',
				position: 'Center',
				aim: 'right 11',
				strength: '78',
				notes: ''
			}
		]
	},
	{
		id: 'medium',
		difficulty: 'Medium',
		name: 'Hole-some Fun',
		holes: [
			{
				name: 'At the Drive In',
				position: 'Left',
				aim: 'See Notes',
				strength: '73',
				notes: 'Aim just to the left of the middle tunnel'
			},
			{ name: 'Bogey Nights', position: '', aim: '', strength: '', notes: '' },
			{
				name: 'Bogey Nights-2',
				position: 'Center',
				aim: 'left 36',
				strength: '75',
				notes: 'Aim when block just beginning to move left'
			},
			{
				name: 'Down the Hatch-2',
				position: 'Left',
				aim: 'right 11',
				strength: '82',
				notes: ''
			},
			{
				name: 'Hole in Fun-2',
				position: 'Left',
				aim: 'straight',
				strength: '54',
				notes: 'Hit as soon as block begins to move left'
			},
			{
				name: 'Holey Mackerel!-2',
				position: 'Center',
				aim: 'right 30',
				strength: '43',
				notes: ''
			},
			{
				name: 'Hot Links-2',
				position: 'Right',
				aim: 'Up arrow',
				strength: '81',
				notes: ''
			},
			{
				name: 'No Putts About It',
				position: 'Left',
				aim: 'right 7',
				strength: '100',
				notes: '33 to hole if you get stuck on edge'
			},
			{
				name: 'Peanut Putter',
				position: 'Center',
				aim: 'straight',
				strength: '70-75',
				notes: 'Also works on 68 and 89'
			},
			{
				name: 'Rock and Roll In',
				position: 'Center',
				aim: 'right 7',
				strength: '78',
				notes: ''
			},
			{
				name: 'Rock and Roll In-2',
				position: 'Left',
				aim: 'right 15',
				strength: '85',
				notes: ''
			},
			{
				name: 'Second Wind',
				position: 'Center',
				aim: 'straight',
				strength: '63',
				notes: ''
			},
			{
				name: 'Seeing Green',
				position: 'Center',
				aim: 'straight',
				strength: '54-57',
				notes: ''
			},
			{
				name: 'Swing Time-2',
				position: 'Center',
				aim: 'right 17',
				strength: '50',
				notes: 'Hit when block starts to pass towards right'
			},
			{
				name: 'Tea Off Time',
				position: 'Center',
				aim: 'straight',
				strength: '69-72',
				notes: '36 to hole from edge'
			}
		]
	},
	{
		id: 'hard',
		difficulty: 'Hard',
		name: 'The Hole Kit and Caboodle',
		holes: [
			{
				name: 'Afternoon Tee-2',
				position: 'Right',
				aim: 'left 1',
				strength: '83',
				notes: 'Hit when block is in middle moving left'
			},
			{
				name: 'At the Drive In-2',
				position: 'Left',
				aim: 'right 37',
				strength: '65',
				notes: ''
			},
			{
				name: 'Hole on the Range-2',
				position: 'Left',
				aim: 'straight',
				strength: '70',
				notes: 'Hit when block is almost at right'
			},
			{
				name: 'No Putts About It-2',
				position: 'Right',
				aim: 'See notes',
				strength: '100',
				notes: 'Aim at small wall on left (in the center of wall)'
			},
			{
				name: 'One Little Birdie-2',
				position: 'Left',
				aim: 'right 32',
				strength: '83',
				notes: 'Hit when block starting to move towards middle either way'
			},
			{
				name: 'Peanut Putter-2',
				position: 'Center',
				aim: 'straight',
				strength: '70-75',
				notes: 'When block just over second hump (left straight 70 also works)'
			},
			{
				name: 'Second Wind-2',
				position: 'Right',
				aim: 'left 18',
				strength: '80',
				notes: '52 from back block'
			},
			{
				name: 'Seeing Green-2',
				position: 'Right',
				aim: 'straight',
				strength: '70',
				notes: ''
			},
			{
				name: 'Swing-A-Long-2',
				position: 'Center',
				aim: '',
				strength: '',
				notes: ''
			},
			{
				name: 'Tea Off Time-2',
				position: 'Center',
				aim: 'straight',
				strength: '69-72',
				notes: 'Hit when block starts to pass towards right'
			},
			{
				name: 'Whole in Won',
				position: 'Center',
				aim: 'right 2',
				strength: '74',
				notes: ''
			},
			{
				name: 'Whole in Won-2',
				position: 'Center',
				aim: 'right 2',
				strength: '73',
				notes: 'Hit when block just starts to move towards you'
			}
		]
	}
];
