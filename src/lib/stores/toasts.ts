import { writable } from 'svelte/store';

export type Toast = {
	message: string;
	type: 'alert-info' | 'alert-success' | 'alert-warning' | 'alert-error';
};

export const toasts = writable<Toast[]>([]);

export const sendToast = (toast: Toast, timeout = 5000) => {
	toasts.update((t) => [...t, toast]);
	setTimeout(() => {
		toasts.update((t) => t.slice(1));
	}, timeout);
};
