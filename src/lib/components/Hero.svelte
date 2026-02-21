<script lang="ts">
	import SocialIcons from './SocialIcons.svelte';
	import { ChevronDown } from 'lucide-svelte';
	import heroImg from '$lib/images/enigma-dj-booth.png?w=1400&format=webp&quality=75';

	let mounted = $state(false);

	$effect(() => {
		mounted = true;
	});
</script>

<section id="inicio" class="relative h-screen flex items-center justify-center overflow-hidden">
	<!-- Background image -->
	<div class="absolute inset-0">
		<img src={heroImg} alt="Mil Horas Mx en ENIGMA" class="w-full h-full object-cover" />
		<div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
	</div>

	<!-- Content -->
	<div class="relative z-10 text-center px-6">
		<h1
			class="font-bold uppercase tracking-[0.3em] transition-all duration-1000 ease-out"
			style="font-size: clamp(2.5rem, 8vw, 7rem); opacity: {mounted ? 1 : 0}; transform: translateY({mounted ? 0 : 40}px);"
		>
			Mil Horas Mx
		</h1>
		<p
			class="mt-4 text-brand-gray uppercase tracking-[0.25em] transition-all duration-1000 ease-out delay-300"
			style="font-size: clamp(0.7rem, 1.5vw, 0.9rem); opacity: {mounted ? 1 : 0}; transform: translateY({mounted ? 0 : 30}px);"
		>
			Afro House &middot; Disco &middot; Deep House
		</p>
		<div
			class="mt-8 transition-all duration-1000 ease-out delay-500"
			style="opacity: {mounted ? 1 : 0}; transform: translateY({mounted ? 0 : 20}px);"
		>
			<SocialIcons size={22} />
		</div>
	</div>

	<!-- Scroll indicator -->
	<div
		class="absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 ease-out delay-700 animate-bounce"
		style="opacity: {mounted ? 0.5 : 0};"
	>
		<ChevronDown size={28} />
	</div>
</section>
