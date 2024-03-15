import { get } from 'svelte/store';
import type { LayoutLoad } from './$types';
import { goto } from '$app/navigation';
import { currentAccount } from '$lib/stores/accounts';

export const load: LayoutLoad = () => {
	const account = get(currentAccount);

	if (!account) return goto('/accounts');
	return { account };
};
