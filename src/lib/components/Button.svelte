<script lang="ts">
	import { currentTheme } from '$lib/stores';
	import { cn } from '$lib/utils';

	let className: string = '';

	export { className as class };
</script>

<button
	on:click
	style="background-color: {$currentTheme.button}; color:{$currentTheme.buttonText}"
	class={cn('flex justify-center items-center p-2 px-4 h-8 w-fit rounded-lg', className)}
	{...$$restProps}
>
	<slot />
</button>
