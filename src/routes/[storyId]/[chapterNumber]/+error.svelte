<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
</script>

<div class="flex w-screen h-screen flex-col space-y-5 items-center justify-center p-5">
	<h1>{$page.status}: {$page.error?.message}</h1>
	<p>
		Chương {$page.params.chapterNumber} à? Chắc là tôi không có hoặc là tác giả chưa viết, nói chung
		kệ con mẹ bạn
	</p>
	<a href="/">
		<Button class="w-fit whitespace-nowrap px-3 py-2 rounded-lg">Quay lại</Button>
	</a>
</div>
