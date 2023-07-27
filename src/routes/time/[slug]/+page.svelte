<script lang="ts">
	import Pagination from '$lib/components/Pagination.svelte';
	/** @type {import('./$types').PageData} */
	export let data: { content: string; chapter: number };
</script>

<div class="flex flex-col items-center px-3">
	<Pagination chapter={data.chapter} className="mb-2" />

	<h1 class="text-xl font-bold mb-1">Chương {data.chapter}</h1>
	<p class="whitespace-pre-wrap">{data.content}</p>
	<Pagination chapter={data.chapter} className="mt-2" />
</div>
