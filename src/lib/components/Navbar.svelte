<script lang="ts">
	import { page } from '$app/stores';
	import { Menu, X } from 'lucide-svelte';

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
</script>

<svelte:window onscroll={handleScroll} />

<nav
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled
		? 'bg-black/90 backdrop-blur-sm'
		: 'bg-transparent'}"
>
	<div class="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
		<a href="/" class="text-sm font-bold tracking-[0.2em] uppercase">Mil Horas</a>

		<!-- Desktop nav -->
		<div class="hidden md:flex items-center gap-8">
			{#each links as link}
				<a
					href={link.href}
					class="text-xs uppercase tracking-[0.15em] text-brand-gray hover:text-white transition-colors"
				>
					{link.label}
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
		<div class="fixed inset-0 top-16 bg-black/95 backdrop-blur-sm md:hidden z-40">
			<div class="flex flex-col items-center justify-center h-full gap-8">
				{#each links as link}
					<a
						href={link.href}
						onclick={closeMenu}
						class="text-2xl uppercase tracking-[0.2em] text-brand-gray hover:text-white transition-colors"
					>
						{link.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>
