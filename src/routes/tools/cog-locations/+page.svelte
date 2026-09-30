<script lang="ts">
	import { asset } from '$app/paths';
	import { departments } from '$lib/levelTables';
	import { canSpawn, cogs, playgrounds, streets, type Playground } from '$lib/cogLocations';
	import { SvelteSet } from 'svelte/reactivity';

	// Empty set means every playground is shown.
	const pickedPlaygrounds = new SvelteSet<Playground['id']>();
	let pickedCog = $state<string | null>(null);

	function togglePlayground(id: Playground['id']) {
		if (pickedPlaygrounds.has(id)) pickedPlaygrounds.delete(id);
		else pickedPlaygrounds.add(id);
	}

	const shownPlaygrounds = $derived(
		playgrounds.filter((p) => !pickedPlaygrounds.size || pickedPlaygrounds.has(p.id))
	);

	const cog = $derived(cogs.find((c) => c.name === pickedCog));
	// Streets the picked cog can roam, grouped by playground.
	const cogGroups = $derived(
		cog
			? shownPlaygrounds
					.map((p) => ({
						playground: p,
						streets: streets.filter((s) => s.playground === p.id && canSpawn(cog, s))
					}))
					.filter((g) => g.streets.length)
			: []
	);
</script>

<svelte:head>
	<title>Cog Locations · ToonTools</title>
</svelte:head>

<h1>Cog Locations</h1>

<div class="playgrounds" aria-label="Filter by playground">
	{#each playgrounds as p (p.id)}
		<button aria-pressed={pickedPlaygrounds.has(p.id)} onclick={() => togglePlayground(p.id)}>
			{#if p.icon}<img src={asset(p.icon)} alt="" />{/if}
			<span>{p.name}</span>
		</button>
	{/each}
</div>

<div class="scroll">
	<table class="chances">
		<thead>
			<tr>
				<th class="street">Street</th>
				{#each departments as d (d.id)}
					<th>
						{#if d.icon}<img src={asset(d.icon)} alt="" />{/if}
						<span>{d.name}</span>
					</th>
				{/each}
			</tr>
		</thead>
		{#each shownPlaygrounds as p (p.id)}
			<tbody>
				<tr class="pg-row"><th colspan={1 + departments.length}>{p.name}</th></tr>
				{#each streets.filter((s) => s.playground === p.id) as s (s.name)}
					<tr>
						<th class="street" scope="row">{s.name}</th>
						{#each departments as d (d.id)}
							{@const pct = s.chance[d.id]}
							<td class="pct" class:zero={!pct} style="--pct: {pct}%">{pct ? `${pct}%` : '–'}</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		{/each}
	</table>
</div>

<p class="note">Share of street Cogs from each department. Data from the Toontown Rewritten wiki.</p>

<section class="locator">
	<h2>Find a Cog</h2>

	{#each departments as d (d.id)}
		<div class="dept-row">
			{#if d.icon}<img src={asset(d.icon)} alt={d.name} title={d.name} />{/if}
			<div class="chips">
				{#each cogs.filter((c) => c.dept === d.id) as c (c.name)}
					<button
						class="chip"
						aria-pressed={pickedCog === c.name}
						onclick={() => (pickedCog = pickedCog === c.name ? null : c.name)}
					>
						{c.name}
					</button>
				{/each}
			</div>
		</div>
	{/each}

	{#if cog}
		<h3>{cog.name} <span class="sub">levels {cog.minLevel}–{cog.maxLevel}</span></h3>
		{#if cog.invasionOnly}
			<p class="note">
				{cog.name} only appears on streets during an invasion. Cog buildings aren't included here.
			</p>
		{:else if cogGroups.length}
			<table>
				<thead>
					<tr><th>Street</th><th>Levels</th><th>{departments.find((d) => d.id === cog.dept)!.name} %</th></tr>
				</thead>
				{#each cogGroups as g (g.playground.id)}
					<tbody>
						<tr class="pg-row"><th colspan="3">{g.playground.name}</th></tr>
						{#each g.streets as s (s.name)}
							<tr>
								<th scope="row">{s.name}</th>
								<td>{s.minLevel}–{s.maxLevel}</td>
								<td class="pct" style="--pct: {s.chance[cog.dept]}%">{s.chance[cog.dept]}%</td>
							</tr>
						{/each}
					</tbody>
				{/each}
			</table>
		{:else}
			<p>Doesn't roam any street in the selected playgrounds.</p>
		{/if}
	{/if}
</section>

<style>
	button {
		font: inherit;
		color: var(--ink);
		cursor: pointer;
		background: #fff;
		border: 3px solid var(--ink);
		border-radius: 12px;
		box-shadow: 4px 4px 0 var(--ink);
	}

	button[aria-pressed='true'] {
		background: var(--box);
		transform: translate(2px, 2px);
		box-shadow: 2px 2px 0 var(--ink);
	}

	.playgrounds {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 0.75rem;
		margin-bottom: 1.5rem;
	}

	.playgrounds button {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
		padding: 0.5rem 0.25rem;
		font-size: 0.85rem;
	}

	.playgrounds img {
		width: 100%;
		max-width: 3.5rem;
	}

	.scroll {
		max-width: 100%;
		overflow-x: auto;
		padding: 0 6px 6px 0;
	}

	table {
		border-collapse: collapse;
		background: #fff;
		border: 3px solid var(--ink);
		box-shadow: var(--shadow);
	}

	.chances {
		width: 100%;
	}

	th,
	td {
		border: 1px solid var(--ink);
		padding: 0.35rem 0.6rem;
		text-align: center;
	}

	thead th {
		background: #f3eee0;
		font-size: 0.85rem;
		vertical-align: bottom;
	}

	thead img {
		display: block;
		width: 1.75rem;
		margin: 0 auto 0.15rem;
	}

	.street,
	tbody th {
		text-align: left;
		font-weight: normal;
		white-space: nowrap;
	}

	.pg-row th {
		background: var(--bg);
		font-weight: bold;
	}

	/* Cell tint scales with the percentage. */
	.pct {
		background: color-mix(in srgb, var(--box-3) var(--pct), #fff);
	}

	.pct.zero {
		color: #999;
	}

	.note {
		font-size: 0.9rem;
	}

	.locator {
		margin-top: 3rem;
	}

	.dept-row {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 0.6rem;
	}

	.dept-row > img {
		flex: none;
		width: 2.25rem;
	}

	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	.chip {
		padding: 0.25rem 0.6rem;
		font-size: 0.85rem;
		border-width: 2px;
		border-radius: 999px;
		box-shadow: 2px 2px 0 var(--ink);
	}

	.chip[aria-pressed='true'] {
		box-shadow: 1px 1px 0 var(--ink);
		transform: translate(1px, 1px);
	}

	h3 {
		margin: 1.5rem 0 0.75rem;
	}

	.sub {
		font-size: 0.9rem;
		font-weight: normal;
	}

	@media (max-width: 640px) {
		.playgrounds {
			grid-template-columns: repeat(3, 1fr);
		}

		th,
		td {
			padding: 0.3rem 0.4rem;
		}
	}
</style>
