<script lang="ts">
	let { src, alt, square = true }: { src: string; alt: string; square?: boolean } = $props();
</script>

<div class="relative overflow-hidden group {square ? 'aspect-square' : ''}">
	<img
		{src}
		{alt}
		loading="lazy"
		class="w-full object-cover group-hover:scale-105 transition-transform duration-700 {square ? 'h-full' : 'h-auto'}"
	/>
	<div class="absolute inset-0 bg-warm-amber/0 group-hover:bg-warm-amber/10 transition-colors duration-500"></div>
</div>
