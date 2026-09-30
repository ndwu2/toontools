<script lang="ts">
	import { asset } from '$app/paths';
	import { departments, type Department } from '$lib/levelTables';
	import LevelGrid from '$lib/components/LevelGrid.svelte';

	let selected = $state<Department['id']>(departments[0].id);
	const current = $derived(departments.find((d) => d.id === selected)!);
	// Independent of the department choice, so switching bots keeps this as-is.
	let v2 = $state(false);
</script>

<svelte:head>
	<title>Cog Suit Level Tables · Toontown · ToonTools</title>
	<meta
		name="description"
		content="Toontown Rewritten cog suit promotion requirements for every Sellbot, Cashbot, Lawbot and Bossbot disguise level, including v2.0."
	/>
</svelte:head>

<h1>Cog Suit Level Tables</h1>

<div class="departments" role="tablist" aria-label="Cog department">
	{#each departments as dept (dept.id)}
		<button
			role="tab"
			aria-selected={selected === dept.id}
			onclick={() => (selected = dept.id)}
		>
			{#if dept.icon}
				<img src={asset(dept.icon)} alt={dept.name} />
			{:else}
				{dept.name}
			{/if}
		</button>
	{/each}
</div>

<button class="v2" aria-pressed={v2} onclick={() => (v2 = !v2)}>
	<span class="switch" aria-hidden="true"></span>
	v2.0 Cogs
</button>

<div role="tabpanel" aria-label="{current.name}{v2 ? ' v2.0' : ''}">
	<h2>{current.name}{v2 ? ' v2.0' : ''}</h2>
	<p class="note">{current.currency} needed to advance from each level.</p>

	<div class="tables">
		{#if v2}
			<LevelGrid table={current.v2} maxedLabel="Maxed v2.0" />
		{:else}
			<table class="tiers">
				<thead>
					<tr><th colspan="6">Normal {current.name} Cog Disguise</th></tr>
				</thead>
				<tbody>
					{#each current.tiers as tier (tier.cog)}
						<tr class="levels">
							<th class="cog" rowspan="2">{tier.cog}</th>
							{#each tier.merits as _, i (i)}
								<th>{tier.start + i}</th>
							{/each}
						</tr>
						<tr>
							{#each tier.merits as merits, i (i)}
								<td>{merits}</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
			<LevelGrid table={current.top} maxedLabel="Maxed" />
		{/if}
	</div>
</div>

<style>
	.departments {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0.75rem;
		margin-bottom: 1rem;
	}

	button {
		font: inherit;
		font-size: 1.15rem;
		color: var(--ink);
		cursor: pointer;
		padding: 0.75rem 0.5rem;
		background: #fff;
		border: 3px solid var(--ink);
		border-radius: 12px;
		box-shadow: 4px 4px 0 var(--ink);
	}

	button[aria-selected='true'],
	.v2[aria-pressed='true'] {
		background: var(--box);
		transform: translate(2px, 2px);
		box-shadow: 2px 2px 0 var(--ink);
	}

	.v2 {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		padding: 0.5rem 1rem;
		margin-bottom: 2rem;
	}

	.switch {
		position: relative;
		width: 2.4rem;
		height: 1.3rem;
		background: var(--bg);
		border: 2px solid var(--ink);
		border-radius: 999px;
	}

	.switch::after {
		content: '';
		position: absolute;
		top: 1px;
		left: 1px;
		width: calc(1.3rem - 6px);
		height: calc(1.3rem - 6px);
		background: var(--ink);
		border-radius: 50%;
		transition: transform 0.15s ease;
	}

	.v2[aria-pressed='true'] .switch::after {
		transform: translateX(1.1rem);
	}

	.note {
		margin-top: 0;
	}

	.tables {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		gap: 2rem;
		max-width: 100%;
		overflow-x: auto;
		padding: 0 6px 6px 0;
	}

	.tiers {
		border-collapse: collapse;
		background: #fff;
		border: 3px solid var(--ink);
		box-shadow: var(--shadow);
	}

	.tiers th,
	.tiers td {
		border: 1px solid var(--ink);
		padding: 0.35rem 0.6rem;
		text-align: center;
	}

	.tiers thead th,
	.tiers .levels th:not(.cog) {
		background: #f3eee0;
	}

	.tiers .cog {
		font-weight: normal;
		min-width: 8rem;
	}

	button img {
		display: block;
		max-width: 100%;
		max-height: 5rem;
		margin: 0 auto;
	}

	@media (max-width: 520px) {
		button {
			font-size: 0.95rem;
			padding: 0.6rem 0.25rem;
		}
	}
</style>
