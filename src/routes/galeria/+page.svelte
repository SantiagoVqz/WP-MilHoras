<script lang="ts">
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import PhotoCard from '$lib/components/PhotoCard.svelte';
	import { ArrowLeft } from 'lucide-svelte';

	import img01 from '$lib/images/enigma-dj-booth.png?w=600&format=webp&quality=75';
	import img02 from '$lib/images/enigma-mixing-crew.png?w=600&format=webp&quality=75';
	import img03 from '$lib/images/dj-crew-booth.png?w=600&format=webp&quality=75';
	import img04 from '$lib/images/club-crowd-disco.png?w=600&format=webp&quality=75';
	import img05 from '$lib/images/house-party-dj.png?w=600&format=webp&quality=75';
	import img06 from '$lib/images/enigma-mixing.png?w=600&format=webp&quality=75';
	import img07 from '$lib/images/enigma-low-angle.png?w=600&format=webp&quality=75';
	import img08 from '$lib/images/morocco-party-group.png?w=600&format=webp&quality=75';
	import img09 from '$lib/images/morocco-party-crew.png?w=600&format=webp&quality=75';
	import img10 from '$lib/images/cabin-dj-session.png?w=600&format=webp&quality=75';
	import img11 from '$lib/images/club-crowd-wide.png?w=600&format=webp&quality=75';
	import img12 from '$lib/images/club-dj-action.png?w=600&format=webp&quality=75';
	import img13 from '$lib/images/cafe-duo.png?w=600&format=webp&quality=75';
	import img14 from '$lib/images/cafe-overhead.png?w=600&format=webp&quality=75';
	import img15 from '$lib/images/cafe-group.png?w=600&format=webp&quality=75';
	import img16 from '$lib/images/cafe-session.png?w=600&format=webp&quality=75';
	import img17 from '$lib/images/cafe-overhead-smile.png?w=600&format=webp&quality=75';

	const allPhotos = [
		{ src: img01, alt: 'DJ set en ENIGMA con luces de neón' },
		{ src: img02, alt: 'Sesión de mezcla en grupo en ENIGMA' },
		{ src: img03, alt: 'Crew de DJs en la cabina' },
		{ src: img04, alt: 'Pista llena con esferas de disco' },
		{ src: img05, alt: 'DJ set en fiesta privada' },
		{ src: img06, alt: 'Mezclando en ENIGMA, vista lateral' },
		{ src: img07, alt: 'DJ en ENIGMA, ángulo bajo' },
		{ src: img08, alt: 'Fiesta temática de Marruecos, grupo' },
		{ src: img09, alt: 'Crew en la fiesta de Marruecos' },
		{ src: img10, alt: 'Sesión de DJ en cabaña' },
		{ src: img11, alt: 'Vista panorámica del club' },
		{ src: img12, alt: 'DJ en acción con visuales de colores' },
		{ src: img13, alt: 'Sesión en café con amigo' },
		{ src: img14, alt: 'Vista aérea del setup en café' },
		{ src: img15, alt: 'Grupo en el café' },
		{ src: img16, alt: 'Sesión de DJ en barra de café' },
		{ src: img17, alt: 'Vista aérea en café, sonriendo' }
	];
</script>

<svelte:head>
	<title>Galería — Mil Horas Mx</title>
	<meta name="description" content="Galería de fotos de Mil Horas Mx — momentos en clubs, cafés y eventos." />
</svelte:head>

<section class="pt-28 pb-24 md:pb-32">
	<div class="mx-auto max-w-7xl px-6">
		<ScrollReveal>
			<a
				href="/"
				class="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-brand-gray hover:text-white transition-colors group mb-12"
			>
				<ArrowLeft size={16} class="group-hover:-translate-x-1 transition-transform" />
				Inicio
			</a>
		</ScrollReveal>

		<ScrollReveal>
			<h1
				class="font-bold uppercase tracking-[0.15em] leading-tight mb-12"
				style="font-size: clamp(1.8rem, 4vw, 3rem);"
			>
				Galería
			</h1>
		</ScrollReveal>

		<div class="grid grid-cols-2 md:grid-cols-3 gap-2">
			{#each allPhotos as photo, i}
				<ScrollReveal delay={i * 50}>
					<PhotoCard src={photo.src} alt={photo.alt} />
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>
