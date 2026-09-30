<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';

	let { href, label }: { href: Pathname; label: string } = $props();
</script>

<a href={resolve(href)}>← Back to {label}</a>

<style>
	a {
		display: inline-block;
		margin-bottom: 0.5rem;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
