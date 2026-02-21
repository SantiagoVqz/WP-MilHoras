<script lang="ts">
	import { Menu, X } from 'lucide-svelte';
	import { gsap } from '$lib/gsap';

	let scrolled = $state(false);
	let menuOpen = $state(false);

	const links = [
		{ label: 'Inicio', href: '/#inicio' },
		{ label: 'Sobre mí', href: '/#sobre-mi' },
		{ label: 'Galería', href: '/#galeria' },
		{ label: 'Eventos', href: '/#eventos' },
		{ label: 'Contacto', href: '/#contacto' }
	];

	function handleScroll() {
		scrolled = window.scrollY > 50;
	}

	function closeMenu() {
		menuOpen = false;
	}

	function mobileMenuAnimation(node: HTMLElement) {
		const items = node.querySelectorAll<HTMLElement>('[data-mobile-link]');
		gsap.set(items, { autoAlpha: 0, y: 30 });
		gsap.to(items, {
			autoAlpha: 1,
			y: 0,
			duration: 0.5,
			ease: 'power3.out',
			stagger: 0.08
		});

		return {
			destroy() {}
		};
	}
</script>

<svelte:window onscroll={handleScroll} />

<nav
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled
		? 'bg-warm-dark/90 backdrop-blur-md'
		: 'bg-transparent'}"
>
	<div class="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
		<a href="/" class="font-display italic text-lg text-warm-cream">Mil Horas</a>

		<!-- Desktop nav -->
		<div class="hidden md:flex items-center gap-8">
			{#each links as link}
				<a
					href={link.href}
					class="relative text-sm text-warm-taupe hover:text-warm-cream transition-colors group"
				>
					{link.label}
					<span
						class="absolute left-1/2 -translate-x-1/2 -bottom-1 h-px w-0 bg-warm-amber transition-all duration-300 group-hover:w-full"
					></span>
				</a>
			{/each}
		</div>

		<!-- Mobile hamburger -->
		<button class="md:hidden text-white" onclick={() => (menuOpen = !menuOpen)} aria-label="Menú">
			{#if menuOpen}
				<X size={24} />
			{:else}
				<Menu size={24} />
			{/if}
		</button>
	</div>

	<!-- Mobile overlay -->
	{#if menuOpen}
		<div
			class="fixed inset-0 top-16 bg-warm-black/98 backdrop-blur-md md:hidden z-40"
			use:mobileMenuAnimation
		>
			<div class="flex flex-col items-center justify-center h-full gap-10">
				{#each links as link}
					<a
						data-mobile-link
						href={link.href}
						onclick={closeMenu}
						class="gsap-hidden font-display italic text-3xl text-warm-taupe hover:text-warm-cream transition-colors"
					>
						{link.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>
