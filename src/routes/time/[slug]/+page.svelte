<script lang="ts">
	import { navigating } from '$app/stores';
	import Pagination from '$lib/components/Pagination.svelte';
	import { Spinner } from 'flowbite-svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="flex flex-col items-center px-3 min-h-[95vh] justify-center">
	{#if $navigating}
		<Spinner />
	{:else}
		<div class="flex flex-col items-center">
			<Pagination chapter={data.chapter} className="mb-2" />

			<h1 class="text-xl font-bold mb-1">Chương {data.chapter}</h1>
		</div>

		<p class="whitespace-pre-wrap">{data.content}</p>
		<div class="flex flex-col items-center">
			<h1 class="text-xl font-bold mb-1">Chương {data.chapter}</h1>
			<Pagination chapter={data.chapter} className="mt-2" />
		</div>
	{/if}
</div>
