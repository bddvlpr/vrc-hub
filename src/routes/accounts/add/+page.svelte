<script lang="ts">
	import CircleArrowLeft from 'lucide-svelte/icons/circle-arrow-left';
	import { signIn } from '$lib/api/service/auth';
	import Input from '$lib/components/form/input.svelte';
	import { sendToast } from '$lib/stores/toasts';
	import { t } from '$lib/translations';

	let email = $state('');
	let password = $state('');

	let busy = $state(false);

	const submit = async () => {
		busy = true;
		const response = await signIn(email, password).finally(() => (busy = false));

		switch (response.state) {
			case 'success':
				// TODO: Handle account adding
				break;
			case 'twoFactor':
				// TODO: Handle two factor
				break;
			case 'failed':
				sendToast({ type: 'alert-error', message: response.error });
				break;
		}
	};
</script>

<div class="flex h-screen flex-col items-center justify-center gap-4">
	<div class="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
		<form class="card-body" onsubmit={submit}>
			<h1 class="w-full text-center text-2xl font-semibold">{$t('pages./accounts/add.title')}</h1>
			<div class="form-control">
				<Input
					type="email"
					placeholder={$t('pages./accounts/add.email')}
					label={$t('pages./accounts/add.email')}
					required
					bind:value={email}
				/>
			</div>

			<div class="form-control">
				<Input
					type="password"
					placeholder={$t('pages./accounts/add.password')}
					label={$t('pages./accounts/add.password')}
					required
					bind:value={password}
				/>
				<div class="label">
					<a
						href="https://vrchat.com/home/password"
						target="_blank"
						class="link-hover link label-text-alt"
					>
						{$t('pages./accounts/add.forgot')}
					</a>
				</div>
			</div>

			<div class="form-control mt-6">
				<button class="btn btn-primary" disabled={busy}>
					{$t('pages./accounts/add.login')}
				</button>
			</div>
		</form>
	</div>
	<a class="link link-neutral" href="/accounts">
		<CircleArrowLeft />
	</a>
</div>
