<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import GalleryPreview from '$lib/components/GalleryPreview.svelte';
	import Events from '$lib/components/Events.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<svelte:head>
	<title>Mil Horas Mx — DJ & Selector Musical</title>
	<meta name="description" content="Mil Horas Mx — DJ y selector musical basado en CDMX. Afro house, disco y deep house. Disponible para eventos y sesiones." />
	<meta property="og:title" content="Mil Horas Mx — DJ & Selector Musical" />
	<meta property="og:description" content="DJ y selector musical basado en CDMX. Afro house, disco y deep house." />
	<meta property="og:type" content="website" />
</svelte:head>

<Hero />
<About />
<GalleryPreview />
<Events />
<Contact />
