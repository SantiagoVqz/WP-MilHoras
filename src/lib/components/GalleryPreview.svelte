<script lang="ts">
	import ScrollReveal from './ScrollReveal.svelte';
	import PhotoCard from './PhotoCard.svelte';
	import { ArrowRight } from 'lucide-svelte';

	import img1 from '$lib/images/enigma-dj-booth.png?w=600&format=webp&quality=75';
	import img2 from '$lib/images/club-crowd-disco.png?w=600&format=webp&quality=75';
	import img3 from '$lib/images/enigma-mixing.png?w=600&format=webp&quality=75';
	import img4 from '$lib/images/morocco-party-group.png?w=600&format=webp&quality=75';
	import img5 from '$lib/images/cafe-overhead.png?w=600&format=webp&quality=75';
	import img6 from '$lib/images/club-dj-action.png?w=600&format=webp&quality=75';

	const featured = [
		{ src: img1, alt: 'DJ set en ENIGMA con luces de neón', span: true },
		{ src: img2, alt: 'Pista llena con esferas de disco', span: false },
		{ src: img3, alt: 'Mezclando en ENIGMA', span: false },
		{ src: img4, alt: 'Fiesta temática de Marruecos', span: false },
		{ src: img5, alt: 'Vista aérea del setup en café', span: false },
		{ src: img6, alt: 'DJ en acción con visuales', span: true }
	];
</script>

<section id="galeria" class="py-24 md:py-32">
	<div class="mx-auto max-w-7xl px-6">
		<ScrollReveal>
			<p class="text-[0.65rem] uppercase tracking-[0.3em] text-brand-gray mb-12">Galería</p>
		</ScrollReveal>

		<div class="grid grid-cols-2 md:grid-cols-3 gap-2">
			{#each featured as photo, i}
				<ScrollReveal delay={i * 100} class={photo.span ? 'md:col-span-2' : ''}>
					<PhotoCard src={photo.src} alt={photo.alt} />
				</ScrollReveal>
			{/each}
		</div>

		<ScrollReveal delay={300}>
			<div class="mt-10 text-center">
				<a
					href="/galeria"
					class="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-brand-gray hover:text-white transition-colors group"
				>
					Ver más
					<ArrowRight size={16} class="group-hover:translate-x-1 transition-transform" />
				</a>
			</div>
		</ScrollReveal>
	</div>
</section>
