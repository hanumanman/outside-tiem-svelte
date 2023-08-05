<script lang="ts">
	import { goto } from '$app/navigation';
	import { cn } from '$lib/utils';
	import { Button, Input } from 'flowbite-svelte';

	export let className = '';
	export let chapter: number = 14;
	let input = '';

	// const handleNextPage = () => {
	// 	chapter += 1;
	// 	goto(`/time/${chapter}`);
	// };
	// const handlePrevPage = () => {
	// 	chapter -= 1;
	// 	goto(`/time/${chapter}`);
	// };
	const handleJump = () => {
		goto(`/time/${input}`);
	};
</script>

<div class={cn('flex space-x-2 items-center', className)}>
	<a href={`/time/${chapter - 1}`} data-sveltekit-preload-data>
		<Button class="h-12" aria-label="handlePrevPage">
			<div class="w-3">
				<svg
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 10 16"
				>
					<path
						d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z"
					/>
				</svg>
			</div>
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
			<Button class="ml-1 rounded-r rounded-l-none" type="submit">Go</Button>
		</div>
	</form>
	<a href="/time/{chapter + 1}" data-sveltekit-preload-data>
		<Button class="h-12" aria-label="handleNextPage">
			<div class="w-3">
				<svg
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 10 16"
				>
					<path
						d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z"
					/>
				</svg>
			</div>
		</Button>
	</a>
</div>
