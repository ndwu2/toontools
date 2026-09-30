<script lang="ts">
	import { resolve } from '$app/paths';
	import DropdownMenu from './DropdownMenu.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import logo from '$lib/assets/logo.png';
	import { guides } from '$lib/guides';
	import { tools } from '$lib/tools';
</script>

<nav>
	<a class="brand" href={resolve('/')}><img src={logo} alt="" />ToonTools</a>
	<div class="links">
		<a href={resolve('/')}>Home</a>
		<DropdownMenu label="Tools" href="/tools/" items={tools} variant="nav" />
		<DropdownMenu label="Guides" href="/guides/" items={guides} variant="nav" />
		<a href={resolve('/resources/')}>Resources</a>
		<a href={resolve('/about/')}>About</a>
	</div>
	<ThemeToggle />
</nav>

<style>
	nav {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem 1.5rem;
		padding: 0.5rem 1.5rem;
		background: var(--box);
		color: var(--on-box);
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
		/* Pushes the links and the theme toggle to the right. */
		margin-left: auto;
	}

	.links a {
		text-decoration: none;
	}

	.links a:hover {
		text-decoration: underline;
	}

	/* Phones: links take their own row and spread out so all five fit. */
	@media (max-width: 480px) {
		nav {
			/* Anchors the dropdowns, which span the bar at this width. */
			position: relative;
			padding: 0.5rem 1rem;
			font-size: 1rem;
		}

		/* Theme toggle stays on the top row, right of the brand. */
		.brand {
			margin-right: auto;
		}

		.links {
			order: 1;
			width: 100%;
			flex-wrap: wrap;
			justify-content: space-between;
			gap: 0 0.5rem;
		}
	}
</style>
