<script lang="ts">
	import SocialIcons from './SocialIcons.svelte';
	import { gsap, ScrollTrigger } from '$lib/gsap';
	import heroImg from '$lib/images/enigma-dj-booth.png?w=1400&format=webp&quality=75';

	const genres = ['Afro House', 'Disco', 'Deep House'];

	function heroAnimation(node: HTMLElement) {
		const img = node.querySelector<HTMLElement>('[data-hero-img]');
		const title = node.querySelector<HTMLElement>('[data-hero-title]');
		const pills = node.querySelectorAll<HTMLElement>('[data-hero-pill]');
		const social = node.querySelector<HTMLElement>('[data-hero-social]');

		// Set initial states
		gsap.set([title, social], { autoAlpha: 0, y: 40 });
		gsap.set(pills, { autoAlpha: 0, y: 20 });

		// Entrance timeline
		const tl = gsap.timeline({ delay: 0.3 });
		tl.to(title, { autoAlpha: 1, y: 0, duration: 1, ease: 'power3.out' })
			.to(pills, { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1 }, '-=0.5')
			.to(social, { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3');

		// Parallax on hero image
		let parallaxTrigger: ScrollTrigger | undefined;
		if (img) {
			gsap.to(img, {
				yPercent: 20,
				ease: 'none',
				scrollTrigger: {
					trigger: node,
					start: 'top top',
					end: 'bottom top',
					scrub: true,
					onRefresh: (self) => {
						parallaxTrigger = self;
					}
				}
			});
		}

		return {
			destroy() {
				tl.kill();
				parallaxTrigger?.kill();
			}
		};
	}
</script>

<section id="inicio" class="relative h-screen flex items-end overflow-hidden" use:heroAnimation>
	<!-- Background image -->
	<div class="absolute inset-0">
		<img
			data-hero-img
			src={heroImg}
			alt="Mil Horas Mx en ENIGMA"
			class="w-full h-full object-cover"
		/>
		<div class="absolute inset-0 bg-gradient-to-r from-warm-black via-warm-black/70 to-transparent"></div>
		<div class="absolute inset-0 bg-gradient-to-t from-warm-black via-warm-black/40 to-transparent"></div>
	</div>

	<!-- Content — left-aligned editorial -->
	<div class="relative z-10 px-6 md:px-12 pb-20 md:pb-24 max-w-4xl">
		<h1
			data-hero-title
			class="font-display italic font-light leading-[0.95] gsap-hidden"
			style="font-size: clamp(3.5rem, 12vw, 9rem);"
		>
			Mil Horas<br />Mx
		</h1>

		<div class="flex flex-wrap gap-3 mt-6">
			{#each genres as genre}
				<span
					data-hero-pill
					class="gsap-hidden px-4 py-1.5 text-xs tracking-widest text-warm-taupe border border-warm-border rounded-full"
				>
					{genre}
				</span>
			{/each}
		</div>

		<div data-hero-social class="mt-8 gsap-hidden">
			<SocialIcons size={22} />
		</div>
	</div>
</section>
