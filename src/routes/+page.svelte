<script lang="ts">
	import { resolve } from '$app/paths';
	import DropdownMenu from '$lib/components/DropdownMenu.svelte';
	import { tools } from '$lib/tools';
</script>

<svelte:head>
	<title>ToonTools · Toontown</title>
	<meta name="description" content="Tools and guides for Toontown." />
</svelte:head>

<h1>ToonTools</h1>

<div class="boxes">
	<div class="box tools">
		<DropdownMenu label="Tools" href="/tools/" items={tools} variant="box" />
	</div>
	<a class="box resources" href={resolve('/resources/')}>Resources</a>
	<a class="box about" href={resolve('/about/')}>About</a>
	<a class="box guides" href={resolve('/guides/')}>Guides</a>
</div>

<style>
	h1 {
		font-size: clamp(2.5rem, 8vw, 4.5rem);
		text-align: center;
		margin: 0 0 2rem;
	}

	.boxes {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 1.5rem;
	}

	.box {
		border: 4px solid var(--ink);
		border-radius: 20px;
		box-shadow: var(--shadow);
		font-size: 1.75rem;
		text-decoration: none;
		transition: transform 0.1s ease;
	}

	.box:hover {
		transform: translate(-2px, -2px);
	}

	a.box {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 160px;
		padding: 1.5rem;
	}

	.tools {
		background: var(--box);
		color: var(--on-box);
	}
	.resources {
		background: var(--box-2);
		color: var(--on-box);
	}
	.about {
		background: var(--box-3);
		color: var(--on-box);
	}
	/* Full-width bar under the other boxes. */
	a.guides {
		grid-column: 1 / -1;
		min-height: 90px;
		background: var(--box-4);
		color: var(--on-box);
	}
</style>
