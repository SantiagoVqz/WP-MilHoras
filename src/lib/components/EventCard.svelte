<script lang="ts">
	import type { Event } from '$lib/data/events';

	let { event }: { event: Event } = $props();
</script>

<div class="flex items-center gap-6 md:gap-10 py-6 border-l-2 border-transparent hover:border-warm-amber pl-4 transition-colors duration-300 group">
	<div class="text-center min-w-[60px]">
		<p
			class="font-display font-light leading-none"
			style="font-size: clamp(3rem, 6vw, 5rem);"
		>
			{event.date}
		</p>
		<p class="text-xs tracking-widest text-warm-taupe mt-1">{event.month}</p>
	</div>
	<div class="flex-1">
		<h3 class="font-display italic text-base md:text-lg group-hover:text-warm-amber transition-colors duration-300">
			{event.title}
		</h3>
		<p class="text-sm text-warm-taupe mt-1">
			{event.venue} &middot; {event.city} &middot; <span class="text-warm-amber">{event.time}</span>
		</p>
	</div>
	<p class="hidden md:block text-xs tracking-widest text-warm-taupe">{event.day}</p>
</div>
