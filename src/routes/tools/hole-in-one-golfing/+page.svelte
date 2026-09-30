<script lang="ts">
	import { asset } from '$app/paths';
	import { courses, type Course } from '$lib/golf';

	let selected = $state<Course['id']>(courses[0].id);
	const current = $derived(courses.find((c) => c.id === selected)!);
</script>

<svelte:head>
	<title>Hole-in-One Golfing · Toontown · ToonTools</title>
	<meta
		name="description"
		content="Toontown Rewritten hole-in-one golf guide: position, aim and strength for every hole on the Easy, Medium and Hard courses."
	/>
</svelte:head>

<h1>Hole-in-One Golfing</h1>

<div class="courses" role="tablist" aria-label="Course difficulty">
	{#each courses as course (course.id)}
		<button
			role="tab"
			class={course.id}
			aria-selected={selected === course.id}
			onclick={() => (selected = course.id)}
		>
			{course.difficulty}
		</button>
	{/each}
</div>

<div role="tabpanel" aria-label={current.name}>
	<h2>{current.name}</h2>

	<div class="scroll">
		<table>
			<thead>
				<tr>
					<th>Hole Name</th>
					<th>Position</th>
					<th>Aim + Tap</th>
					<th>Strength</th>
					<th>Notes</th>
				</tr>
			</thead>
			<tbody>
				{#each current.holes as hole (hole.name)}
					<tr>
						<th scope="row">{hole.name}</th>
						<td>{hole.position}</td>
						<td>{hole.aim}</td>
						<td>{hole.strength}</td>
						<td class="notes">{hole.notes}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<footer class="source">
	<ul>
		<li>Straight = up-arrow.</li>
		<li>Aim is one tap of an arrow key.</li>
	</ul>
	<p>
		This work is based on the original
		<a href={asset('/resources/ttgolf.pdf')} target="_blank" rel="noopener">Toontown Golf Chart (PDF)</a>
		by spidermom.
	</p>
</footer>

<style>
	.courses {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.75rem;
		margin-bottom: 1rem;
	}

	button {
		font: inherit;
		font-size: 1.15rem;
		color: var(--text);
		cursor: pointer;
		padding: 0.75rem 0.5rem;
		background: var(--surface);
		border: 3px solid var(--ink);
		border-radius: 12px;
		box-shadow: 4px 4px 0 var(--ink);
	}

	button[aria-selected='true'] {
		transform: translate(2px, 2px);
		box-shadow: 2px 2px 0 var(--ink);
	}

	.easy[aria-selected='true'] {
		background: var(--box-3);
		color: var(--on-box);
	}

	.medium[aria-selected='true'] {
		background: var(--box);
		color: var(--on-box);
	}

	.hard[aria-selected='true'] {
		background: var(--box-2);
		color: var(--on-box);
	}

	.scroll {
		max-width: 100%;
		overflow-x: auto;
		padding: 0 6px 6px 0;
	}

	table {
		border-collapse: collapse;
		background: var(--surface);
		border: 3px solid var(--ink);
		box-shadow: var(--shadow);
	}

	th,
	td {
		border: 1px solid var(--ink);
		padding: 0.35rem 0.6rem;
		text-align: center;
	}

	thead th {
		background: var(--surface-2);
	}

	tbody th {
		text-align: left;
		white-space: nowrap;
	}

	.notes {
		text-align: left;
		min-width: 14rem;
	}

	.source {
		margin-top: 2rem;
		font-size: 0.9rem;
	}

	@media (max-width: 520px) {
		button {
			font-size: 0.95rem;
			padding: 0.6rem 0.25rem;
		}
	}
</style>
