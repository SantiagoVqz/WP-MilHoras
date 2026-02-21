<script lang="ts">
	import { Instagram, Music } from 'lucide-svelte';

	let { size = 20 }: { size?: number } = $props();
</script>

<div class="flex items-center gap-5">
	<a
		href="https://www.instagram.com/milhorasmx"
		target="_blank"
		rel="noopener noreferrer"
		class="text-warm-taupe hover:text-warm-amber transition-colors"
		aria-label="Instagram"
	>
		<Instagram {size} />
	</a>
	<a
		href="https://soundcloud.com/milhorasmx"
		target="_blank"
		rel="noopener noreferrer"
		class="text-warm-taupe hover:text-warm-amber transition-colors"
		aria-label="SoundCloud"
	>
		<Music {size} />
	</a>
</div>
