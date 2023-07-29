<script lang="ts">
	import { cn } from '$lib/utils';

	export let action = (e: MouseEvent) => {
		console.log(e);
	};
	type ButtonType = 'button' | 'submit' | 'reset' | null | undefined;
	export let type: ButtonType = 'button';
	export let className = '';
</script>

<button
	on:click={action}
	{type}
	class={cn(
		'bg-primary-600 rounded px-2 text-[#102542] flex aspect-square justify-center items-center',
		className
	)}
>
	<slot />
</button>
