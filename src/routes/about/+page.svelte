<script lang="ts">
	import anderson from '$lib/assets/anderson.png';
</script>

<svelte:head>
	<title>About · Toontown · ToonTools</title>
</svelte:head>

<h1>About</h1>
<div class="about">
	<div class="text">
		<p>Hi there, this is Anderson! \o</p>
		<p>
			I got tired of searching for the same things and keeping too many tabs open, 
			especially since these Fandom wiki pages tend to slow down my computer heavily 
			(though that might just be a settings or lack of adblock thing).
		</p>
		<p>
			Here I'm creating tools and guides, and compiling a list of resources I use while playing the game, not only
			to compile information in one place for myself, but also share that information with other (hopefully new!) players.
			Not sure if there is a market for that in the age old game Toontown. However, 
			 I have always wanted to build a tool for a game I play that me and other players can use. 
		</p>
		<p>
			The guides are completely based on my own experiences and observations,
			I'm by no means an expert, so feel free to let me know if I'm wrong or incorrect by sending me a message on reddit u/ndwu.
			As a former new player, I think it'd be nice to have the general strategies and information in one place for easy reading.
		</p>
		<p>
			Thanks for reading my blurb, this site is fairly informal, its goal is to deliver information in a concise manner.
			If you enjoy the tool and want to support my work, you can
			<a href="https://ko-fi.com/ndwu2" target="_blank" rel="noopener noreferrer">buy me a coffee</a>!
		</p>

		<p>
			Disclaimer: ToonTools is not affiliated with Toontown Rewritten or Toontown Online.
		</p>
	</div>
	<img
		src={anderson}
		alt="Anderson, a cream-colored mouse Toon, waving in front of a purple Cog tube man"
		width="640"
		height="796"
	/>
</div>

<style>
	.about {
		display: flex;
		align-items: flex-start;
		gap: 2rem;
	}

	.text {
		flex: 1;
		line-height: 1.5;
	}

	.text > p:first-child {
		margin-top: 0;
	}

	img {
		flex: none;
		width: 320px;
		max-width: 100%;
		height: auto;
		border: 4px solid var(--ink);
		border-radius: 20px;
		box-shadow: var(--shadow);
	}

	/* Stack on narrow screens: text first, image centered below. */
	@media (max-width: 700px) {
		.about {
			flex-direction: column;
			align-items: center;
		}
	}
</style>
