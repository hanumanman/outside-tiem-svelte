<script lang="ts">
	import { goto } from '$app/navigation';
	import { cn } from '$lib/utils';
	import GoTriangleLeft from 'svelte-icons/go/GoTriangleLeft.svelte';
	import GoTriangleRight from 'svelte-icons/go/GoTriangleRight.svelte';
	import Button from './Button.svelte';

	export let className = '';
	export let chapter: number = 14;
	let input = '';

	const handleNextPage = () => {
		chapter += 1;
		goto(`/time/${chapter}`);
	};
	const handlePrevPage = () => {
		chapter -= 1;
		goto(`/time/${chapter}`);
	};
	const handleJump = () => {
		goto(`/time/${input}`);
	};
</script>

<div class={cn('flex w-full justify-center space-x-2', className)}>
	<Button action={handlePrevPage}>
		<div class="w-5 aspect-square">
			<GoTriangleLeft />
		</div>
	</Button>
	<div class="bg-[#CDD7D6] p-1 rounded">
		<form on:submit|preventDefault={handleJump}>
			<input class="text-[#102542]" type="number" bind:value={input} />
			<Button className="ml-1" type="submit">Go</Button>
		</form>
	</div>
	<Button action={handleNextPage}>
		<div class="w-5 aspect-square">
			<GoTriangleRight />
		</div>
	</Button>
</div>
