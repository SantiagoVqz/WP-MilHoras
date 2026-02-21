<script lang="ts">
	let { src, alt }: { src: string; alt: string } = $props();
</script>

<div class="overflow-hidden aspect-square">
	<img
		{src}
		{alt}
		loading="lazy"
		class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
	/>
</div>
