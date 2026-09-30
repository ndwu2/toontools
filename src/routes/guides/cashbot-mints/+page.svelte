<script lang="ts">
	import GuideToc from '$lib/components/GuideToc.svelte';

	const sections = [
		{ id: 'coin-mint', name: 'Coin Mint' },
		{ id: 'bullion-mint', name: 'Bullion Mint' }
	];
</script>

<svelte:head>
	<title>Cashbot Mints Guide · Toontown · ToonTools</title>
</svelte:head>

<h1>Cashbot Mints</h1>

<GuideToc {sections} />

<h2 id="coin-mint">Coin Mint</h2>

<p>Generally, the coin mint is very easy to get through. Just utilize your standard
	sound combos, or use lure to ensure you make it through. Be sure to hold at least 2 of
	the gags you need for the auditor, the reason being the double gag tax during the 
	bear market phase.
</p>

<h3>The Coin Mint Auditor</h3>
<p>For your math, the Mint Auditor has <strong>750</strong> health.</p>
<p>The main thing to understand is the two phases the Mint Auditor has:</p>
<ul>
	<li>
		<strong>Bear market:</strong> Gags cost double due to gag tax, and toons have 50% increased
		defense when there are an odd number of cogs.
	</li>
	<li><strong>Bull market:</strong> Toons have and take increased damage of 25%.</li>
</ul>
<p>You can always hover over the icons to read the buffs and debuffs as well.</p>
<p>The cogs are two level 10 cogs and one level 9 cog, and all three will receive a +150 health buff.</p>
<p>
	The general strategy I've seen: On Turn 1 (under Bear Market), 1 person will lure, 2 will burst down the level 9 (usually 2 storm
	and 2 cake), and the last will poke the Auditor, since lure lasts shorter on boss cogs. After he switches to Bull Market, you focus damage onto
	the Auditor. Clean-up remaining cogs.
</p>

<h2 id="bullion-mint">Bullion Mint</h2>
<p>Don't really have much experience here, I'll fill this out as I do more Bullion.</p>
<p>
	For your math, the Mint Auditor has 1150 health here, and the bull market damage increase is 50%.
</p>

<style>
	h3 {
		margin: 1.5rem 0 0.5rem;
	}

	p,
	li {
		line-height: 1.5;
	}

	ul {
		padding-left: 1.25rem;
	}
</style>
