<script lang="ts">
	import ScrollReveal from './ScrollReveal.svelte';
</script>

<section id="contacto" class="py-24 md:py-32">
	<div class="mx-auto max-w-7xl px-6 text-center">
		<ScrollReveal>
			<p class="text-[0.65rem] uppercase tracking-[0.3em] text-brand-gray mb-8">Contacto</p>
		</ScrollReveal>
		<ScrollReveal delay={100}>
			<h2
				class="font-bold uppercase tracking-[0.15em] leading-tight"
				style="font-size: clamp(1.8rem, 4vw, 3rem);"
			>
				¿Listo para el próximo evento?
			</h2>
		</ScrollReveal>
		<ScrollReveal delay={200}>
			<p class="mt-4 text-brand-gray text-sm md:text-base max-w-lg mx-auto">
				Disponible para eventos privados, clubs, festivales y sesiones corporativas.
			</p>
		</ScrollReveal>
		<ScrollReveal delay={300}>
			<a
				href="mailto:milhorasmx@gmail.com?subject=Reservación"
				class="inline-block mt-8 px-8 py-3 border border-white/30 text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
			>
				Reservar ahora
			</a>
		</ScrollReveal>
	</div>
</section>
