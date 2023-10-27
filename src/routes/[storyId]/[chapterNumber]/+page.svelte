<script lang="ts">
	import { goto } from '$app/navigation';
	import { navigating } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import UserSettings from '$lib/components/UserSettings.svelte';
	import HomeIcon from '$lib/components/svg/home-icon.svelte';
	import { Story } from '$lib/constants/enum';
	import { fontSize } from '$lib/stores';
	import { Spinner } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const getHeader = (storyId: number) => {
		let storyName: string = '';
		if (storyId === Story.LIKE) {
			storyName = 'Cau Like';
		}
		if (storyId === Story.VOZER) {
			storyName = 'Dat doc China';
		}
		if (storyId === Story.TIME) {
			storyName = 'Wang wang';
		}
		return `${storyName} - Chapter ${data.chapter}`;
	};
</script>

<svelte:head>
	<title>{getHeader(data.storyId)}</title>
</svelte:head>

{#if $navigating}
	<Spinner class="m-auto" />
{:else}
	<div class="flex flex-col justify-center items-center px-7 py-6 min-h-[95vh]">
		<!-- Controls -->
		<div class="flex items-center mb-3 gap-2">
			<Button class="h-full " on:click={() => goto('/')}>
				<HomeIcon class="w-4" />
			</Button>
			<Pagination storyId={data.storyId} chapter={data.chapter} />
			<UserSettings />
		</div>
		<h1 class="text-xl font-bold mb-1">Chương {data.chapter}</h1>

		<!-- Page content -->
		<p style="font-size: {$fontSize + 'px'}" class="whitespace-pre-wrap">
			{data.content}
		</p>

		<!-- Controls -->
		<h1 class="text-xl font-bold mb-1">Chương {data.chapter}</h1>
		<Pagination chapter={data.chapter} storyId={data.storyId} class="mt-3" />
	</div>
{/if}
