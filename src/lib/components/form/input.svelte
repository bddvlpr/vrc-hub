<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	let {
		value,
		label,
		placeholder = label,
		...props
	}: {
		value?: unknown;
		label?: string;
		placeholder?: string;
	} & HTMLInputAttributes = $props();
</script>

{#if label}
	<div class="label">
		<span class="label-text">{label}</span>
	</div>
{/if}
<input class="input input-bordered" {placeholder} bind:value {...props} />
