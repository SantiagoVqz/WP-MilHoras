<script lang="ts">
	import type { Event } from '$lib/data/events';

	let { event }: { event: Event } = $props();
</script>

<div class="flex items-center gap-6 md:gap-10 py-6">
	<div class="text-center min-w-[60px]">
		<p class="text-3xl md:text-4xl font-bold leading-none">{event.date}</p>
		<p class="text-xs uppercase tracking-[0.2em] text-brand-gray mt-1">{event.month}</p>
	</div>
	<div class="flex-1">
		<h3 class="text-base md:text-lg font-bold uppercase tracking-[0.1em]">{event.title}</h3>
		<p class="text-sm text-brand-gray mt-1">
			{event.venue} &middot; {event.city} &middot; {event.time}
		</p>
	</div>
	<p class="hidden md:block text-xs uppercase tracking-[0.15em] text-brand-gray">{event.day}</p>
</div>
