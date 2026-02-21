<script lang="ts">
	import ScrollReveal from './ScrollReveal.svelte';
	import EventCard from './EventCard.svelte';
	import { events } from '$lib/data/events';
</script>

<section id="eventos" class="py-24 md:py-32">
	<div class="mx-auto max-w-7xl px-6">
		<ScrollReveal>
			<p class="text-sm tracking-widest text-warm-taupe mb-12">Eventos</p>
		</ScrollReveal>

		<div class="divide-y divide-warm-border">
			{#each events as event, i}
				<ScrollReveal delay={i * 100}>
					<EventCard {event} />
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>
