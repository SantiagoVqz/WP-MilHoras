<script lang="ts">
	import ScrollReveal from './ScrollReveal.svelte';
	import EventCard from './EventCard.svelte';
	import { events } from '$lib/data/events';
</script>

<section id="eventos" class="py-24 md:py-32">
	<div class="mx-auto max-w-7xl px-6">
		<ScrollReveal>
			<p class="text-[0.65rem] uppercase tracking-[0.3em] text-brand-gray mb-12">Eventos</p>
		</ScrollReveal>

		<div class="divide-y divide-white/10">
			{#each events as event, i}
				<ScrollReveal delay={i * 100}>
					<EventCard {event} />
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>
