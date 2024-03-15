<script lang="ts">
	import Plus from 'lucide-svelte/icons/plus';
	import Avatar from '$lib/components/content/avatar.svelte';
	import { accounts, activateAccount } from '$lib/stores/accounts';
	import { t } from '$lib/translations';
</script>

<div class="flex h-screen flex-col items-center justify-center gap-2">
	<div class="inline-flex pb-2 text-4xl font-semibold">{$t('pages./accounts.title')}</div>
	<ul class="menu w-64 rounded-box bg-base-200">
		{#each $accounts as account}
			<li>
				<button onclick={() => activateAccount(account)}>
					<Avatar src={account.thumbnail} />
					{account.name}
				</button>
			</li>
		{/each}
		<li>
			<a href="/accounts/add">
				<Plus />
				{$t('pages./accounts.add')}
			</a>
		</li>
	</ul>
</div>
