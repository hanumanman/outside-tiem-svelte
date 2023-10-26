<script lang="ts">
	import { currentTheme, fontSize } from '$lib/stores';
	import { Drawer, Label, Range } from 'flowbite-svelte';
	import { sineIn } from 'svelte/easing';
	import Button from './Button.svelte';
	import UserSettingsIcon from './svg/user-settings.svelte';

	let drawerHidden = true;
	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};

	function updateTheme(theme: { bg: string; text: string; button: string; buttonText: string }) {
		currentTheme.set(theme);
	}

	function updateFontSize(size: number) {
		fontSize.set(size);
	}
</script>

<Button on:click={() => (drawerHidden = false)} class="h-full">
	<UserSettingsIcon class="w-4" />
</Button>
<Drawer
	class="h-fit top-1/3 bg-myBackground text-myText rounded-r-lg border-2 border-myText border-l-0"
	transitionType="fly"
	backdrop={false}
	{transitionParams}
	bind:hidden={drawerHidden}
	id="sidebar1"
	><div class="flex justify-between">
		<h1 class="text-xl font-bold">Cài đặt</h1>
		<Button
			on:click={() => {
				updateFontSize(18);
			}}>Reset</Button
		>
	</div>
	<div class="flex mt-3 items-center space-x-3">
		<Label class="text-myText whitespace-nowrap">Cỡ chữ</Label>
		<Range bind:value={$fontSize} class="bg-transparent h-0" />
		<Label class="text-myText whitespace-nowrap">{$fontSize} px</Label>
	</div>
	<div class="flex mt-5 items-center space-x-3">
		<Label class="text-myText whitespace-nowrap">Theme</Label>
	</div>
</Drawer>
