<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { tools } from '$lib/tools';

	let { variant }: { variant: 'nav' | 'box' } = $props();

	// Hover/focus opens the menu via CSS; this handles tap on touch devices.
	let open = $state(false);
	let root: HTMLElement;

	afterNavigate(() => (open = false));
</script>

<svelte:window
	onclick={(e) => {
		if (open && !root.contains(e.target as Node)) open = false;
	}}
	onkeydown={(e) => {
		if (e.key === 'Escape') open = false;
	}}
/>

<div class="menu {variant}" class:open bind:this={root}>
	<button class="trigger" aria-haspopup="true" aria-expanded={open} onclick={() => (open = !open)}>
		Tools
		<span class="caret" aria-hidden="true"></span>
	</button>
	<ul class="dropdown">
		{#each tools as tool (tool.path)}
			<li><a href={resolve(tool.path)}>{tool.name}</a></li>
		{/each}
	</ul>
</div>

<style>
	.menu {
		position: relative;
	}

	.trigger {
		all: unset;
		box-sizing: border-box;
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		gap: 0.4em;
	}

	/* Down-pointing triangle; flips up while the menu is open. */
	.caret {
		width: 0;
		height: 0;
		border-left: 0.3em solid transparent;
		border-right: 0.3em solid transparent;
		border-top: 0.4em solid currentColor;
		transition: transform 0.15s ease;
	}

	.menu:hover .caret,
	.menu:focus-within .caret,
	.menu.open .caret {
		transform: rotate(180deg);
	}

	.trigger:focus-visible {
		outline: 3px dashed var(--ink);
		outline-offset: 4px;
	}

	.dropdown {
		display: none;
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;
		min-width: 240px;
		margin: 0;
		padding: 0.5rem;
		list-style: none;
		background: var(--bg);
		border: 3px solid var(--ink);
		border-radius: 14px;
		box-shadow: var(--shadow);
	}

	.menu:hover .dropdown,
	.menu:focus-within .dropdown,
	.menu.open .dropdown {
		display: block;
	}

	.dropdown a {
		display: block;
		padding: 0.6rem 0.9rem;
		border-radius: 8px;
		font-size: 1.15rem;
		text-decoration: none;
		white-space: nowrap;
	}

	.dropdown a:hover,
	.dropdown a:focus-visible {
		background: var(--box);
		outline: none;
	}

	/* Landing-page box: the whole box is the trigger. */
	.box .trigger {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		min-height: 160px;
		padding: 1.5rem;
	}

	.box .trigger:focus-visible {
		outline-offset: -10px;
	}

	/* Nav bar: plain text trigger; padding keeps hover alive across the gap. */
	.nav {
		padding: 0.5rem 0;
	}

	.nav .dropdown {
		left: 0;
		transform: none;
	}
</style>
