<script lang="ts">
	import { resolve } from '$app/paths';
	import { tools } from '$lib/tools';
</script>

<svelte:head>
	<title>Tools · Toontown · ToonTools</title>
</svelte:head>

<h1>Tools</h1>

<ul>
	{#each tools as tool (tool.path)}
		<li><a href={resolve(tool.path)}>{tool.name}</a></li>
	{/each}
</ul>

<style>
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		font-size: 1.2rem;
		line-height: 1.8;
	}
</style>
