<script lang="ts">
	import { resolve } from '$app/paths';
	import { guideSections } from '$lib/guides';
</script>

<svelte:head>
	<title>Guides · Toontown · ToonTools</title>
</svelte:head>

<h1>Guides</h1>

{#each guideSections as section (section.title)}
	<section>
		<h2>{section.title}</h2>
		{#if section.note}<p class="note">{section.note}</p>{/if}
		<ul>
			{#each section.guides as guide (guide.path)}
				<li><a href={resolve(guide.path)}>{guide.name}</a></li>
			{/each}
		</ul>
	</section>
{/each}

<style>
	section {
		margin-bottom: 2rem;
	}

	h2 {
		margin: 0 0 0.5rem;
	}

	.note {
		margin: 0 0 0.5rem;
		font-size: 0.9rem;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		font-size: 1.2rem;
		line-height: 1.8;
	}
</style>
