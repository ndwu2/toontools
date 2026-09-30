<script lang="ts">
	import type { LevelTable } from '$lib/levelTables';

	let { table, maxedLabel }: { table: LevelTable; maxedLabel: string } = $props();

	const COLS = 5;

	// Rows of 5 levels; the last row gets level 50 ("Maxed") spanning whatever columns are left.
	const rows = $derived.by(() => {
		const cells = table.merits.map((merits, i) => ({ level: table.start + i, merits }));
		const out: (typeof cells)[] = [];
		for (let i = 0; i < cells.length; i += COLS) out.push(cells.slice(i, i + COLS));
		if (out.at(-1)!.length === COLS) out.push([]);
		return out;
	});
</script>

<table>
	<thead>
		<tr><th colspan={COLS}>{table.title}</th></tr>
	</thead>
	<tbody>
		{#each rows as row, r (r)}
			{@const last = r === rows.length - 1}
			<tr class="levels">
				{#each row as cell (cell.level)}
					<th class:hl={table.highlights.includes(cell.level)}>{cell.level}</th>
				{/each}
				{#if last}<th class="hl" colspan={COLS - row.length}>50</th>{/if}
			</tr>
			<tr>
				{#each row as cell (cell.level)}
					<td class:hl={table.highlights.includes(cell.level)}>{cell.merits}</td>
				{/each}
				{#if last}<td class="hl" colspan={COLS - row.length}>{maxedLabel}</td>{/if}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		border-collapse: collapse;
		background: #fff;
		border: 3px solid var(--ink);
		box-shadow: var(--shadow);
	}

	th,
	td {
		border: 1px solid var(--ink);
		padding: 0.35rem 0.6rem;
		text-align: center;
	}

	thead th,
	.levels th {
		background: #f3eee0;
	}

	.levels th.hl,
	.hl {
		background: var(--box);
	}
</style>
