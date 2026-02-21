<script lang="ts">
	import ScrollReveal from './ScrollReveal.svelte';
	import { gsap } from '$lib/gsap';

	function magnetic(node: HTMLElement) {
		function onMove(e: MouseEvent) {
			const rect = node.getBoundingClientRect();
			const x = e.clientX - rect.left - rect.width / 2;
			const y = e.clientY - rect.top - rect.height / 2;
			gsap.to(node, {
				x: x * 0.3,
				y: y * 0.3,
				duration: 0.4,
				ease: 'power2.out'
			});
		}

		function onLeave() {
			gsap.to(node, {
				x: 0,
				y: 0,
				duration: 0.6,
				ease: 'elastic.out(1, 0.4)'
			});
		}

		node.addEventListener('mousemove', onMove);
		node.addEventListener('mouseleave', onLeave);

		return {
			destroy() {
				node.removeEventListener('mousemove', onMove);
				node.removeEventListener('mouseleave', onLeave);
			}
		};
	}
</script>

<section id="contacto" class="py-24 md:py-32 grain-overlay">
	<div class="relative z-10 mx-auto max-w-7xl px-6 text-center">
		<ScrollReveal>
			<p class="text-sm tracking-widest text-warm-taupe mb-8">Contacto</p>
		</ScrollReveal>
		<ScrollReveal delay={100}>
			<h2
				class="font-display italic font-light leading-tight"
				style="font-size: clamp(2rem, 5vw, 3.5rem);"
			>
				¿Listo para el próximo evento?
			</h2>
		</ScrollReveal>
		<ScrollReveal delay={200}>
			<p class="mt-4 text-warm-taupe text-sm md:text-base max-w-lg mx-auto">
				Disponible para eventos privados, clubs, festivales y sesiones corporativas.
			</p>
		</ScrollReveal>
		<ScrollReveal delay={300}>
			<div class="mt-8 inline-block">
				<a
					use:magnetic
					href="mailto:milhorasmx@gmail.com?subject=Reservación"
					class="inline-block px-8 py-3 border border-warm-amber/40 text-sm tracking-widest text-warm-amber hover:bg-warm-amber hover:text-warm-black transition-all duration-300"
				>
					Reservar ahora
				</a>
			</div>
			<div class="w-8 h-px bg-warm-amber/40 mx-auto mt-8"></div>
		</ScrollReveal>
	</div>
</section>
