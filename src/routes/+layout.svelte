<script lang="ts">
	import '../app.pcss';
	import Toasts from '$lib/components/content/toasts.svelte';

	const { children } = $props();
</script>

<Toasts />

{@render children()}
