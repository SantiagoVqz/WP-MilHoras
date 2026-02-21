<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, delay = 0, class: className = '' }: { children: Snippet; delay?: number; class?: string } = $props();
	let isVisible = $state(false);

	function observe(node: HTMLDivElement) {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					isVisible = true;
					observer.unobserve(node);
				}
			},
			{ threshold: 0.1 }
		);
		observer.observe(node);
		return { destroy: () => observer.disconnect() };
	}
</script>

<div
	use:observe
	class="transition-all duration-700 ease-out {className}"
	style="transition-delay: {delay}ms; opacity: {isVisible ? 1 : 0}; transform: translateY({isVisible ? 0 : 30}px);"
>
	{@render children()}
</div>
