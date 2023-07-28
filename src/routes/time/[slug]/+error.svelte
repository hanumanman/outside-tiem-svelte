<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
</script>

<div class="flex w-screen h-screen flex-col space-y-5 items-center justify-center p-5">
	<h1>{$page.status}: {$page.error?.message}</h1>
	<p>
		Chương {$page.params.slug} à? Chắc là tôi không có hoặc là tác giả chưa viết, nói chung kệ con mẹ
		bạn
	</p>
	<a href="/time/14" class="hover:underline">
		<Button>Quay lại</Button>
	</a>
</div>
