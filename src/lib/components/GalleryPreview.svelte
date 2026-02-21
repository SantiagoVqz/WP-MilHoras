<script lang="ts">
	import ScrollReveal from './ScrollReveal.svelte';
	import { gsap, ScrollTrigger } from '$lib/gsap';
	import { ArrowRight } from 'lucide-svelte';

	import img1 from '$lib/images/enigma-dj-booth.png?w=900&format=webp&quality=75';
	import img2 from '$lib/images/club-crowd-disco.png?w=900&format=webp&quality=75';
	import img3 from '$lib/images/enigma-mixing.png?w=900&format=webp&quality=75';
	import img4 from '$lib/images/morocco-party-group.png?w=900&format=webp&quality=75';
	import img5 from '$lib/images/cafe-overhead.png?w=900&format=webp&quality=75';
	import img6 from '$lib/images/club-dj-action.png?w=900&format=webp&quality=75';

	const featured = [
		{ src: img1, alt: 'DJ set en ENIGMA con luces de neón', caption: 'ENIGMA Club' },
		{ src: img2, alt: 'Pista llena con esferas de disco', caption: 'Noche de Disco' },
		{ src: img3, alt: 'Mezclando en ENIGMA', caption: 'En la Cabina' },
		{ src: img4, alt: 'Fiesta temática de Marruecos', caption: 'Morocco Night' },
		{ src: img5, alt: 'Vista aérea del setup en café', caption: 'Café Session' },
		{ src: img6, alt: 'DJ en acción con visuales', caption: 'Club Visuals' }
	];

	/** Staggered card dimensions — even = tall, odd = shorter */
	function cardWidth(i: number): string {
		return i % 2 === 0 ? '50vw' : '35vw';
	}
	function cardHeight(i: number): string {
		return i % 2 === 0 ? '70vh' : '55vh';
	}

	/** Zero-padded index for ghost numbers */
	function ghostIndex(i: number): string {
		return String(i + 1).padStart(2, '0');
	}

	function horizontalScroll(node: HTMLElement) {
		const ctx = gsap.context(() => {
			gsap.matchMedia().add('(min-width: 768px)', () => {
				const track = node.querySelector<HTMLElement>('[data-gallery-track]');
				const progressBar = node.querySelector<HTMLElement>('[data-progress-bar]');
				if (!track) return;

				const cards = track.querySelectorAll<HTMLElement>('[data-gallery-card]');
				const images = track.querySelectorAll<HTMLElement>('[data-gallery-img]');

				// Wait one frame so the browser has completed layout paint
				requestAnimationFrame(() => {
					const scrollAmount = () => track.scrollWidth - window.innerWidth;

					const scrollTween = gsap.to(track, {
						x: () => -scrollAmount(),
						ease: 'none',
						scrollTrigger: {
							trigger: node,
							start: 'top top',
							end: () => `+=${scrollAmount()}`,
							pin: true,
							scrub: 1,
							invalidateOnRefresh: true,
							onUpdate: (self) => {
								if (progressBar) {
									gsap.set(progressBar, {
										scaleX: self.progress,
										force3D: true
									});
								}
							}
						}
					});

					// Image parallax within cards
					images.forEach((img) => {
						gsap.fromTo(
							img,
							{ xPercent: -5 },
							{
								xPercent: 5,
								ease: 'none',
								scrollTrigger: {
									trigger: img.closest('[data-gallery-card]'),
									containerAnimation: scrollTween,
									start: 'left right',
									end: 'right left',
									scrub: true
								}
							}
						);
					});

					// Cards fly in from outside the viewport
					cards.forEach((card, i) => {
						// Alternate entry: even cards from bottom-right, odd from top-right
						const yOffset = i % 2 === 0 ? 80 : -60;

						gsap.fromTo(
							card,
							{
								xPercent: 40,
								y: yOffset,
								rotate: i % 2 === 0 ? 4 : -3,
								scale: 0.85,
								opacity: 0,
								clipPath: 'inset(0 100% 0 0)'
							},
							{
								xPercent: 0,
								y: 0,
								rotate: 0,
								scale: 1,
								opacity: 1,
								clipPath: 'inset(0 0% 0 0)',
								duration: 1,
								ease: 'power3.out',
								scrollTrigger: {
									trigger: card,
									containerAnimation: scrollTween,
									start: 'left 100%',
									end: 'left 50%',
									scrub: true
								}
							}
						);
					});
				});
			});
		}, node);

		return {
			destroy() {
				ctx.revert();
			}
		};
	}
</script>

<section id="galeria" class="py-24 md:py-0">
	<!-- ─── MOBILE LAYOUT ─── -->
	<div class="md:hidden">
		<div class="px-6 pb-8">
			<ScrollReveal>
				<p class="text-sm tracking-widest text-warm-taupe mb-4">Galería</p>
			</ScrollReveal>
			<ScrollReveal delay={100}>
				<h2
					class="font-display italic font-light leading-tight"
					style="font-size: clamp(1.8rem, 4vw, 3rem);"
				>
					Momentos en la pista
				</h2>
			</ScrollReveal>
		</div>

		<div class="grid grid-cols-2 gap-3 px-6">
			{#each featured as photo, i}
				<ScrollReveal
					delay={i * 80}
					class={i === 0 || i === 3 ? 'col-span-2' : ''}
				>
					<div class="relative group overflow-hidden rounded-sm">
						<img
							src={photo.src}
							alt={photo.alt}
							loading="lazy"
							class="w-full h-full object-cover aspect-square"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end"
						>
							<span class="p-3 text-xs font-display italic text-white">
								{photo.caption}
							</span>
						</div>
					</div>
				</ScrollReveal>
			{/each}
		</div>
	</div>

	<!-- ─── DESKTOP LAYOUT ─── -->
	<div use:horizontalScroll class="hidden md:block md:h-screen md:overflow-hidden relative">
		<!-- Heading overlaid on the scroll area -->
		<div class="absolute top-12 left-0 z-10 px-12 pointer-events-none">
			<ScrollReveal>
				<p class="text-sm tracking-widest text-warm-taupe mb-4">Galería</p>
			</ScrollReveal>
			<ScrollReveal delay={100}>
				<h2
					class="font-display italic font-light leading-tight"
					style="font-size: clamp(1.8rem, 4vw, 3rem);"
				>
					Momentos en la pista
				</h2>
			</ScrollReveal>
		</div>

		<!-- Film grain overlay -->
		<div class="grain-overlay absolute inset-0 pointer-events-none z-[2]"></div>

		<!-- Horizontal track — inline styles for reliable layout -->
		<div
			data-gallery-track
			style="display: flex; width: fit-content; gap: 2vw; align-items: center; height: 100%; padding-left: 4vw; padding-right: 4vw;"
		>
			{#each featured as photo, i}
				<div
					data-gallery-card
					class="relative group overflow-hidden rounded-sm"
					style="flex: none; width: {cardWidth(i)}; height: {cardHeight(i)};"
				>
					<!-- Ghost index number -->
					<span
						class="absolute -left-2 -top-4 font-display font-light text-[10rem] leading-none text-white/[0.04] select-none pointer-events-none z-[1]"
					>
						{ghostIndex(i)}
					</span>

					<!-- Image with parallax (110% wide, offset -5% to allow movement) -->
					<div class="absolute inset-0 overflow-hidden">
						<img
							data-gallery-img
							src={photo.src}
							alt={photo.alt}
							loading="lazy"
							class="absolute top-0 h-full object-cover transition-transform duration-700 group-hover:scale-105"
							style="width: 110%; left: -5%;"
						/>
					</div>

					<!-- Hover caption reveal -->
					<div
						class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end z-[1]"
					>
						<span
							class="p-5 text-sm font-display italic text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
						>
							{photo.caption}
						</span>
					</div>
				</div>
			{/each}
		</div>

		<!-- Amber progress bar -->
		<div class="absolute bottom-0 left-0 right-0 h-px bg-white/10 z-[3]">
			<div
				data-progress-bar
				class="h-full bg-warm-amber origin-left"
				style="transform: scaleX(0);"
			></div>
		</div>
	</div>

	<!-- "Ver más" link -->
	<div class="mx-auto max-w-7xl px-6 md:px-12 mt-10 md:mt-16">
		<ScrollReveal>
			<a
				href="/galeria"
				class="inline-flex items-center gap-2 text-sm tracking-widest text-warm-taupe hover:text-warm-cream transition-colors group"
			>
				Ver más
				<ArrowRight size={16} class="group-hover:translate-x-1 transition-transform" />
			</a>
		</ScrollReveal>
	</div>
</section>
