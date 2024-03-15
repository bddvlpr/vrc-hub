<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	let {
		src,
		size = 'w-8',
		style = 'rounded-lg',
		placeholder = '?',
		...props
	}: {
		src?: string;
		size?: string;
		style?: 'rounded-full' | 'rounded-lg' | 'rounded-md' | 'rounded-sm' | 'rounded-none';
		placeholder?: string;
	} & HTMLImgAttributes = $props();

	let failed = $state(false);
</script>

<div class="avatar" class:placeholder>
	{#if !src || failed}
		<div class="{size} {style} bg-neutral text-neutral-content">
			<span>{placeholder}</span>
		</div>
	{:else}
		<div class="{size} {style}">
			<img
				{src}
				{...props}
				onerror={() => {
					failed = true;
					placeholder = '?';
				}}
			/>
		</div>
	{/if}
</div>
