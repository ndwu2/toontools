<script lang="ts">
	import { page } from '$app/state';
	import BackLink from '$lib/components/BackLink.svelte';

	let { children } = $props();
</script>

<!-- Every page under /guides/ except the landing page itself. -->
{#if page.route.id !== '/guides'}
	<BackLink href="/guides/" label="Guides" />
{/if}

{@render children()}
