<script lang="ts">
	import Tooltip from '../content/tooltip.svelte';
	import type { Snippet } from 'svelte';

	const {
		tooltip,
		href,
		children
	}: {
		tooltip: string;
		href: string;
		children?: Snippet;
	} = $props();
</script>

<Tooltip data={tooltip} position="tooltip-bottom">
	<a class="btn btn-circle btn-ghost" {href}>
		{@render children?.()}
	</a>
</Tooltip>
