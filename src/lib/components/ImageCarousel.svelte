<script lang="ts">
	import { asset } from '$app/paths';

	let { images, folder }: { images: { file: string; alt: string }[]; folder: string } = $props();

	let index = $state(0);
	const current = $derived(images[index]);
	const src = $derived(current && asset(`${folder}/${current.file}`));

	let dialog = $state<HTMLDialogElement>();

	function step(delta: number) {
		index = (index + delta + images.length) % images.length;
	}

	function onDialogKey(e: KeyboardEvent) {
		if (e.key === 'ArrowLeft') step(-1);
		if (e.key === 'ArrowRight') step(1);
	}
</script>

{#if images.length === 0}
	<p class="empty">Images coming soon.</p>
{:else}
	<figure>
		<button class="thumb" onclick={() => dialog?.showModal()} aria-label="Expand {current.alt}">
			<img {src} alt={current.alt} />
		</button>
		<figcaption>
			<button class="nav" onclick={() => step(-1)} aria-label="Previous image">&larr;</button>
			<span>{index + 1} / {images.length}</span>
			<button class="nav" onclick={() => step(1)} aria-label="Next image">&rarr;</button>
		</figcaption>
	</figure>

	<!-- Clicking the backdrop (the dialog itself, outside the image) closes it. -->
	<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
	<dialog
		bind:this={dialog}
		onclick={(e) => e.target === dialog && dialog?.close()}
		onkeydown={onDialogKey}
	>
		<img {src} alt={current.alt} />
		<div class="controls">
			<button class="nav" onclick={() => step(-1)} aria-label="Previous image">&larr;</button>
			<span>{index + 1} / {images.length}</span>
			<button class="nav" onclick={() => step(1)} aria-label="Next image">&rarr;</button>
			<button class="nav" onclick={() => dialog?.close()} aria-label="Close">&times;</button>
		</div>
	</dialog>
{/if}

<style>
	figure {
		margin: 0;
	}

	.thumb {
		all: unset;
		display: block;
		width: fit-content;
		margin: 0 auto;
		cursor: zoom-in;
	}

	.thumb:focus-visible img {
		outline: 3px dashed var(--ink);
		outline-offset: 3px;
	}

	img {
		display: block;
		max-width: 100%;
		max-height: 420px;
		width: auto;
		height: auto;
		border: 3px solid var(--ink);
		border-radius: 12px;
		background: #fff;
	}

	figcaption,
	.controls {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin-top: 0.75rem;
		font-size: 1.1rem;
	}

	.nav {
		font: inherit;
		font-size: 1.3rem;
		cursor: pointer;
		padding: 0.25rem 0.9rem;
		background: var(--box);
		color: var(--ink);
		border: 3px solid var(--ink);
		border-radius: 10px;
		box-shadow: 3px 3px 0 var(--ink);
	}

	.nav:active {
		transform: translate(2px, 2px);
		box-shadow: 1px 1px 0 var(--ink);
	}

	dialog {
		max-width: 95vw;
		max-height: 95vh;
		padding: 1rem;
		background: var(--bg);
		border: 4px solid var(--ink);
		border-radius: 20px;
		box-shadow: var(--shadow);
	}

	dialog::backdrop {
		background: rgb(0 0 0 / 0.6);
	}

	dialog img {
		max-height: calc(95vh - 7rem);
		margin: 0 auto;
	}

	.controls span {
		color: var(--ink);
	}

	.empty {
		opacity: 0.7;
	}
</style>
