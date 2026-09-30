<script lang="ts">
	import { resolve } from '$app/paths';
	import ToolsMenu from './ToolsMenu.svelte';
	import logo from '$lib/assets/logo.png';
</script>

<nav>
	<a class="brand" href={resolve('/')}><img src={logo} alt="" />ToonTools</a>
	<div class="links">
		<ToolsMenu variant="nav" />
		<a href={resolve('/resources/')}>Resources</a>
		<a href={resolve('/about/')}>About</a>
	</div>
</nav>

<style>
	nav {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem 1.5rem;
		padding: 0.5rem 1.5rem;
		background: var(--box);
		border-bottom: 4px solid var(--ink);
		font-size: 1.2rem;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 1.6rem;
		text-decoration: none;
	}

	.brand img {
		height: 2.5rem;
	}

	.links {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.links a {
		text-decoration: none;
	}

	.links a:hover {
		text-decoration: underline;
	}
</style>
