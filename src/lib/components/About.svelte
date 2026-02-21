<script lang="ts">
	import ScrollReveal from './ScrollReveal.svelte';
	import aboutImg from '$lib/images/enigma-low-angle.png?w=800&format=webp&quality=75';
</script>

<section id="sobre-mi" class="py-24 md:py-32">
	<div class="mx-auto max-w-7xl px-6">
		<ScrollReveal>
			<p class="text-[0.65rem] uppercase tracking-[0.3em] text-brand-gray mb-12">Sobre mí</p>
		</ScrollReveal>

		<div class="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
			<div>
				<ScrollReveal delay={100}>
					<h2
						class="font-bold uppercase tracking-[0.15em] leading-tight"
						style="font-size: clamp(1.8rem, 4vw, 3rem);"
					>
						La música es mi lenguaje
					</h2>
				</ScrollReveal>
				<ScrollReveal delay={200}>
					<p class="mt-6 text-brand-gray leading-relaxed text-sm md:text-base">
						Soy Mil Horas Mx, DJ y selector musical basado en la Ciudad de México. Mi sonido
						navega entre el afro house, disco y deep house — siempre buscando ese groove que
						conecta con la pista.
					</p>
				</ScrollReveal>
				<ScrollReveal delay={300}>
					<p class="mt-4 text-brand-gray leading-relaxed text-sm md:text-base">
						Desde sesiones íntimas en cafés hasta noches épicas en clubs como ENIGMA,
						cada set es un viaje sonoro diseñado para hacer mover. He tenido el privilegio
						de compartir cabina con artistas increíbles y llevar mi música a escenarios
						diversos, siempre con la misma pasión.
					</p>
				</ScrollReveal>
			</div>
			<ScrollReveal delay={200}>
				<div class="overflow-hidden">
					<img
						src={aboutImg}
						alt="Mil Horas Mx en ENIGMA Club"
						class="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
					/>
				</div>
			</ScrollReveal>
		</div>
	</div>
</section>
