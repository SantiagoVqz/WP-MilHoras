<script lang="ts">
	import ScrollReveal from './ScrollReveal.svelte';
	import { gsap } from '$lib/gsap';
	import aboutImg from '$lib/images/enigma-low-angle.png?w=800&format=webp&quality=75';

	function clipReveal(node: HTMLElement) {
		gsap.set(node, { clipPath: 'inset(100% 0 0 0)' });

		const tween = gsap.to(node, {
			clipPath: 'inset(0% 0 0 0)',
			duration: 1.2,
			ease: 'power3.inOut',
			scrollTrigger: {
				trigger: node,
				start: 'top 80%',
				once: true
			}
		});

		return {
			destroy() {
				tween.scrollTrigger?.kill();
				tween.kill();
			}
		};
	}
</script>

<section id="sobre-mi" class="py-24 md:py-32">
	<div class="mx-auto max-w-7xl px-6">
		<ScrollReveal>
			<p class="text-sm tracking-widest text-warm-taupe mb-12">Sobre mí</p>
		</ScrollReveal>

		<div class="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
			<!-- Image — 7 cols with bleed -->
			<div class="relative md:col-span-7 md:-ml-6">
				<span
					class="absolute -left-4 -top-8 font-display font-light text-[12rem] leading-none text-white/[0.03] select-none pointer-events-none hidden md:block"
				>
					01
				</span>
				<div use:clipReveal class="overflow-hidden">
					<img
						src={aboutImg}
						alt="Mil Horas Mx en ENIGMA Club"
						class="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
					/>
				</div>
			</div>

			<!-- Text — 5 cols -->
			<div class="md:col-span-5">
				<ScrollReveal delay={100}>
					<h2
						class="font-display italic font-light leading-tight"
						style="font-size: clamp(1.8rem, 4vw, 3rem);"
					>
						La música es mi lenguaje
					</h2>
				</ScrollReveal>
				<ScrollReveal delay={200}>
					<div class="w-12 h-px bg-warm-amber mt-6 mb-6"></div>
				</ScrollReveal>
				<ScrollReveal delay={250}>
					<p class="text-warm-taupe leading-relaxed text-sm md:text-base">
						Soy Mil Horas Mx, DJ y selector musical basado en la Ciudad de México. Mi sonido
						navega entre el afro house, disco y deep house — siempre buscando ese groove que
						conecta con la pista.
					</p>
				</ScrollReveal>
				<ScrollReveal delay={350}>
					<p class="mt-4 text-warm-taupe leading-relaxed text-sm md:text-base">
						Desde sesiones íntimas en cafés hasta noches épicas en clubs como ENIGMA,
						cada set es un viaje sonoro diseñado para hacer mover. He tenido el privilegio
						de compartir cabina con artistas increíbles y llevar mi música a escenarios
						diversos, siempre con la misma pasión.
					</p>
				</ScrollReveal>
			</div>
		</div>
	</div>
</section>
