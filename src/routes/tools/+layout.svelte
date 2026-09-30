<script lang="ts">
	import { page } from '$app/state';
	import BackLink from '$lib/components/BackLink.svelte';

	let { children } = $props();
</script>

<!-- Every page under /tools/ except the landing page itself. -->
{#if page.route.id !== '/tools'}
	<BackLink href="/tools/" label="Tools" />
{/if}

{@render children()}
