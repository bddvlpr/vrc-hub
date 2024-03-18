<script lang="ts">
	import Cog from 'lucide-svelte/icons/cog';
	import Globe from 'lucide-svelte/icons/globe';
	import Satellite from 'lucide-svelte/icons/satellite';
	import Search from 'lucide-svelte/icons/search';
	import Users from 'lucide-svelte/icons/users';
	import NavbarIcon from '$lib/components/navigation/navbar-icon.svelte';
	import { t } from '$lib/translations';

	const { children } = $props();
</script>

<div class="px-4 py-2">
	<div class="navbar rounded-xl bg-base-200">
		<div class="navbar-start ml-2">
			<a class="btn btn-ghost text-xl" href="/">
				<span class="text-primary">
					<Satellite />
				</span>
				VRC Hub
			</a>
		</div>
		<div class="navbar-center">
			<NavbarIcon tooltip={$t('common.navbar.worlds')} href="/worlds">
				<Globe />
			</NavbarIcon>
			<NavbarIcon tooltip={$t('common.navbar.friends')} href="/friends">
				<Users />
			</NavbarIcon>
			<NavbarIcon tooltip={$t('common.navbar.search')} href="/search">
				<Search />
			</NavbarIcon>
		</div>
		<div class="navbar-end mr-2">
			<NavbarIcon tooltip={$t('common.navbar.settings')} href="/settings">
				<Cog />
			</NavbarIcon>
		</div>
	</div>
</div>

{@render children()}
