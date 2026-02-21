<script lang="ts">
	import SocialIcons from './SocialIcons.svelte';
</script>

<footer class="border-t border-white/10 py-12">
	<div class="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
		<p class="text-xs uppercase tracking-[0.2em] font-bold">Mil Horas Mx</p>
		<SocialIcons size={18} />
		<p class="text-xs text-brand-gray">&copy; {new Date().getFullYear()} Mil Horas Mx</p>
	</div>
</footer>
