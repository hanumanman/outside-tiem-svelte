<script lang="ts">
	import { goto } from '$app/navigation';
	import { cn } from '$lib/utils';
	import { Button, Input } from 'flowbite-svelte';
	import GoTriangleLeft from 'svelte-icons/go/GoTriangleLeft.svelte';
	import GoTriangleRight from 'svelte-icons/go/GoTriangleRight.svelte';

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

<div class={cn('flex space-x-2', className)}>
	<Button on:click={handlePrevPage}>
		<div class="w-3">
			<GoTriangleLeft />
		</div>
	</Button>
	<form on:submit|preventDefault={handleJump}>
		<div class="bg-myText p-1 rounded flex">
			<Input class="text-[#102542] rounded-l rounded-r-none" type="number" bind:value={input} />
			<Button class="ml-1 rounded-r rounded-l-none" type="submit">Go</Button>
		</div>
	</form>
	<Button on:click={handleNextPage}>
		<div class="w-3">
			<GoTriangleRight />
		</div>
	</Button>
</div>
