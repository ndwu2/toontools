<script lang="ts">
	import GuideToc from '$lib/components/GuideToc.svelte';

	const sections = [
		{ id: 'short-factory', name: 'Short Factory' },
		{ id: 'long-factory', name: 'Long Factory' },
		{ id: 'factory-foreman', name: 'The Factory Foreman' }
	];
</script>

<svelte:head>
	<title>Sellbot Factories Guide · Toontown · ToonTools</title>
</svelte:head>

<h1>Sellbot Factories</h1>

<GuideToc {sections} />

<p>
	This is the first Cog HQ dungeon that you'll do. Unique to the Sellbot Factories, sellbot suit/disguise parts drop
 	after a run of this and will be how you complete your first suit. The others will be through tasklines.
	I don't actually think there is anything necessarily different between the Scrap and Steel factories 
	other than cog level. Scrap factory is <strong>levels 3-7</strong>. Steel factory is <strong>levels 9-12</strong>.
	The main difference are the two routes, you want to save one foghorn for the final boss (or highest sound!).
</p>

<h2 id="short-factory">Short Factory</h2>
<p>
	The short route common route is:
</p>
<ol>
	<li>
		<strong>Lobby</strong>: three Cogs guard the button that unlocks the door. Fight
		them and press the button to unlock the door.
	</li>
	<li><strong>Lobby Hallway</strong>: take the right path to the Gear Room.</li>
	<li><strong>Gear Room</strong>: three Skelecogs.</li>
	<li><strong>East Catwalk</strong>: jump on the goons' heads to disable them, if you step into the light you take damage.</li>
	<li>
		<strong>Warehouse</strong>: dodge the goons, fight the Cogs on top of the middle building.
		Press the buttons to crush and clear out the goons, then continue through the door.
	</li>
	<li>
		<strong>East and West Silos</strong>: three Cogs at the top of each. Both silo control room
		buttons have to be pressed to open the Center Silo.
	</li>
	<li>
		<strong>Center Silo Control Room</strong>: the Factory Foreman and three other Cogs.
	</li>
</ol>

<h2 id="long-factory">Long Factory</h2>
<p>Honestly, I've only done a long factory once, I'm sure I'll be doing it more
	to farm for my Sellbot Suit, but I will provide more information on this soon.
</p>

<h2 id="factory-foreman">The Factory Foreman</h2>

<p>
	The mechanic of this boss is burn damage, and low time to choose gags, once the Foreman's health
	dips below 50%, he goes into overtime getting a damage boost, dealing burn damage every turn, and reducing the turn timer.
	However, the general strategy for both difficulties is roughly the same.
</p>
<p>The Scrap Foreman's hp is <strong>250</strong> and the Steel Foreman's hp is <strong>750</strong>.</p>
<p>The general strategy is to use 4 Foghorns turn 1, then DPS down the Foreman after, in the Steel version, 1 more trunk/foghorn will kill the level 12 while
	the rest can focus the Foreman.
</p>