<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.png';
	import NavBar from '$lib/components/NavBar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>ToonTools</title>
</svelte:head>

<NavBar />

<main>
	{@render children()}
</main>

<style>
	main {
		max-width: 960px;
		margin: 0 auto;
		padding: 3rem 1rem;
	}
</style>
