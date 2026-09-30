<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';

	let {
		label,
		href,
		items,
		variant
	}: {
		label: string;
		// Landing page the trigger links to; the dropdown is a shortcut to its items.
		href: Pathname;
		items: { name: string; path: Pathname }[];
		variant: 'nav' | 'box';
	} = $props();
</script>

<!-- Hover/focus opens the menu via CSS. On touch devices a tap just follows the trigger link. -->
<div class="menu {variant}">
	<a class="trigger" href={resolve(href)}>
		{label}
		<span class="caret" aria-hidden="true"></span>
	</a>
	<ul class="dropdown">
		{#each items as item (item.path)}
			<li><a href={resolve(item.path)}>{item.name}</a></li>
		{:else}
			<li class="empty">To-do</li>
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

	.menu:focus-within .caret {
		transform: rotate(180deg);
	}

	.nav .trigger:hover {
		text-decoration: underline;
	}

	.trigger:focus-visible {
		outline: 3px dashed var(--text);
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
		color: var(--text);
		border: 3px solid var(--ink);
		border-radius: 14px;
		box-shadow: var(--shadow);
	}

	.menu:focus-within .dropdown {
		display: block;
	}

	/* Hover only where there is a real pointer; on touch it would stick open after a tap. */
	@media (hover: none) {
		.caret {
			display: none;
		}
	}

	@media (hover: hover) {
		.menu:hover .caret {
			transform: rotate(180deg);
		}

		.menu:hover .dropdown {
			display: block;
		}
	}

	.dropdown a,
	.empty {
		display: block;
		padding: 0.6rem 0.9rem;
		border-radius: 8px;
		font-size: 1.15rem;
		text-decoration: none;
		white-space: nowrap;
	}

	.empty {
		opacity: 0.6;
		font-style: italic;
	}

	.dropdown a:hover,
	.dropdown a:focus-visible {
		background: var(--box);
		color: var(--on-box);
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
		width: max-content;
		max-width: 280px;
	}

	.nav .dropdown a {
		white-space: normal;
	}

	/* Phones: span the nav bar instead of hanging off the trigger, so it can't overflow. */
	@media (max-width: 480px) {
		.nav {
			position: static;
		}

		.nav .dropdown {
			left: 1rem;
			right: 1rem;
			min-width: 0;
		}

		.nav .dropdown {
			width: auto;
			max-width: none;
		}
	}
</style>
