<script lang="ts">
	import { goto, preloadData } from '$app/navigation';
	import { Story } from '$lib/constants/enum';
	import { cn } from '$lib/utils';
	import { Input } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import Button from './Button.svelte';
	import NextPageIcon from './svg/next-page-icon.svelte';
	import PrevPageIcon from './svg/prev-page-icon.svelte';

	export let chapter: number = 14;
	export let storyId: number = Story.VOZER;
	let input = '';

	let className = '';
	export { className as class };
	const handleJump = () => {
		goto(`/${storyId}/${input}`);
	};

	onMount(async () => {
		await preloadData(`/${storyId}/${chapter + 1}`);
	});
</script>

<div class={cn('flex space-x-2 items-center', className)}>
	<a href={`/${storyId}/${chapter - 1}`}>
		<Button class="h-12">
			<PrevPageIcon class="w-3" />
		</Button>
	</a>
	<form on:submit|preventDefault={handleJump}>
		<div class="bg-myText p-1 rounded flex">
			<Input
				class="text-[#102542] rounded-l rounded-r-none"
				type="number"
				bind:value={input}
				placeholder="Search chapter"
			/>
			<Button class="h-full ml-1 px-4 rounded-r rounded-l-none" type="submit">Go</Button>
		</div>
	</form>
	<a href={`/${storyId}/${chapter + 1}`}>
		<Button class="h-12">
			<NextPageIcon class="w-3" />
		</Button>
	</a>
</div>
