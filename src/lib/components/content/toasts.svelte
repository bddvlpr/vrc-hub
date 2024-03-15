<script lang="ts">
	import { toasts, type Toast } from '$lib/stores/toasts';

	const removeToast = (toast: Toast) => {
		toasts.update((toasts) => toasts.filter((t) => t !== toast));
	};
</script>

<div class="toast z-50">
	{#each $toasts as toast}
		<button class="alert {toast.type}" onclick={() => removeToast(toast)}>
			<span>{toast.message}</span>
		</button>
	{/each}
</div>
