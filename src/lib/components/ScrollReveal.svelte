<script lang="ts">
	import type { Snippet } from 'svelte';
	import { gsap } from '$lib/gsap';

	let {
		children,
		delay = 0,
		class: className = ''
	}: { children: Snippet; delay?: number; class?: string } = $props();

	function reveal(node: HTMLElement) {
		gsap.set(node, { autoAlpha: 0, y: 30 });

		const tween = gsap.to(node, {
			autoAlpha: 1,
			y: 0,
			duration: 0.8,
			delay: delay / 1000,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: node,
				start: 'top 90%',
				once: true
			}
		});

		return {
			destroy() {
				tween.scrollTrigger?.kill();
				tween.kill();
			}
		};
	}
</script>

<div use:reveal class={className}>
	{@render children()}
</div>
