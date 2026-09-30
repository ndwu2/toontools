<script lang="ts">
	import { onMount } from 'svelte';

	let dark = $state(false);

	// The inline script in app.html has already applied any saved theme.
	onMount(() => {
		dark = document.documentElement.dataset.theme === 'dark';
	});

	function toggle() {
		dark = !dark;
		document.documentElement.dataset.theme = dark ? 'dark' : 'light';
		try {
			localStorage.setItem('theme', dark ? 'dark' : 'light');
		} catch {
			// Storage blocked: the choice just won't persist.
		}
	}
</script>

<button
	aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
	title={dark ? 'Light mode' : 'Dark mode'}
	onclick={toggle}
>
	<svg viewBox="0 0 24 24" aria-hidden="true">
		{#if dark}
			<circle cx="12" cy="12" r="4.5" />
			<path
				d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"
			/>
		{:else}
			<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" />
		{/if}
	</svg>
</button>

<style>
	button {
		display: inline-flex;
		padding: 0.35rem;
		color: var(--text);
		cursor: pointer;
		background: var(--surface);
		border: 3px solid var(--ink);
		border-radius: 50%;
		box-shadow: 2px 2px 0 var(--ink);
	}

	svg {
		width: 1.25rem;
		height: 1.25rem;
		fill: currentColor;
		stroke: currentColor;
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
	}
</style>
