<script lang="ts">
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';
	import { resources, soundComboImages } from '$lib/resources';
</script>

<svelte:head>
	<title>Resources · Toontown · ToonTools</title>
</svelte:head>

<h1>Resources</h1>

<ul class="resources">
	{#each resources as resource (resource.url)}
		<li class="card">
			<h2><a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.name}</a></h2>
			<p>{resource.description}</p>
		</li>
	{/each}

	<li class="card">
		<h2>Basic &amp; Org Sound Combos</h2>
		<p>
			Reference charts for sound combos using basic and organic gags. Credit to
			<a
				href="https://www.reddit.com/r/toontownrewritten/comments/17yvsn7/basic_and_org_sound_combos/"
				target="_blank"
				rel="noopener noreferrer">u/professorurso on r/toontownrewritten</a
			>.
		</p>
		<details>
			<summary>Show charts</summary>
			<ImageCarousel images={soundComboImages} folder="/resources/sound-combos" />
		</details>
	</li>
</ul>

<style>
	.resources {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 1.5rem;
	}

	.card {
		background: #fff;
		border: 4px solid var(--ink);
		border-radius: 20px;
		box-shadow: var(--shadow);
		padding: 1.25rem 1.5rem;
	}

	h2 {
		margin: 0 0 0.5rem;
		font-size: 1.5rem;
	}

	p {
		margin: 0 0 1rem;
		line-height: 1.5;
	}

	.card > p:last-child {
		margin-bottom: 0;
	}

	summary {
		display: inline-block;
		cursor: pointer;
		padding: 0.35rem 1rem;
		background: var(--box);
		border: 3px solid var(--ink);
		border-radius: 10px;
		box-shadow: 3px 3px 0 var(--ink);
		list-style: none;
	}

	summary::-webkit-details-marker {
		display: none;
	}

	details[open] summary {
		margin-bottom: 1rem;
	}

	details[open] summary::after {
		content: ' (hide)';
	}
</style>
