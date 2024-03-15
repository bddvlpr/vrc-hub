import { writable } from 'svelte/store';
import { goto } from '$app/navigation';

export type Account = {
	id: string;
	auth: string;
	name: string;
	thumbnail?: string;
};

export const accounts = writable<Account[]>([
	{
		id: 'usr_1',
		name: 'bddvlpr',
		auth: 'auth_1',
		thumbnail: 'https://avatars.githubusercontent.com/u/17461028'
	},
	{
		id: 'usr_2',
		name: 'ldgtl',
		auth: 'auth_2',
		thumbnail: 'https://avatars.githubusercontent.com/u/17461028'
	}
]);
export const currentAccount = writable<Account | null>(null);

export const activateAccount = (account: Account) => {
	// TODO: Check if token is valid.
	currentAccount.set(account);
	goto('/');
};
