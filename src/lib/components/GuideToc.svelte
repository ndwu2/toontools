<script lang="ts">
	let { sections }: { sections: { id: string; name: string }[] } = $props();
</script>

<nav aria-label="Table of contents">
	<h2>Table of Contents</h2>
	<ol>
		{#each sections as section (section.id)}
			<li><a href="#{section.id}">{section.name}</a></li>
		{/each}
	</ol>
</nav>

<style>
	nav {
		display: inline-block;
		margin-bottom: 1rem;
		padding: 1rem 1.5rem;
		background: var(--surface);
		border: 4px solid var(--ink);
		border-radius: 20px;
		box-shadow: var(--shadow);
	}

	h2 {
		margin: 0 0 0.5rem;
		font-size: 1.2rem;
	}

	ol {
		margin: 0;
		padding-left: 1.25rem;
		line-height: 1.6;
	}
</style>
