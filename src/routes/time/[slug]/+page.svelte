<script lang="ts">
	import { navigating } from '$app/stores';
	import Pagination from '$lib/components/Pagination.svelte';
	import { bgColor, textColor } from '$lib/stores';
	import { Button, Drawer, Label, Range, Spinner } from 'flowbite-svelte';

	import { sineIn } from 'svelte/easing';
	import type { PageData } from './$types';
	export let data: PageData;

	let hidden1 = true;
	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};
	let customFontSize = 18;

	function updateBgColor(color: string) {
		bgColor.set(color);
	}
	function updateTextColor(color: string) {
		textColor.set(color);
	}
</script>

<svelte:head>
	<title>Wang wang - Chapter {data.chapter}</title>
</svelte:head>

{#if $navigating}
	<Spinner class="m-auto" />
{:else}
	<div class="flex flex-col justify-center items-center px-7 py-6 min-h-[95vh]">
		<Drawer
			class="h-fit top-1/3 bg-myBackground text-myText rounded-r-lg border-2 border-myText border-l-0"
			transitionType="fly"
			backdrop={false}
			{transitionParams}
			bind:hidden={hidden1}
			id="sidebar1"
			><div class="flex justify-between">
				<h1 class="text-xl font-bold">Cài đặt</h1>
				<Button
					class="p-2"
					on:click={() => {
						customFontSize = 18;
					}}>Reset</Button
				>
			</div>
			<div class="flex mt-3 items-center space-x-3">
				<Label class="text-myText whitespace-nowrap">Cỡ chữ</Label>
				<Range bind:value={customFontSize} class="bg-transparent h-0" />
				<Label class="text-myText whitespace-nowrap">{customFontSize} px</Label>
			</div>
			<div class="flex mt-5 items-center space-x-3">
				<Label class="text-myText whitespace-nowrap">Theme</Label>
				<Button
					aria-label="set-theme-white"
					class="bg-white border-2 border-myText h-8"
					on:click={() => {
						updateBgColor('#ffff');
						updateTextColor('rgb(27, 27, 27, 1)');
					}}
				/>
				<Button
					aria-label="set-theme-default"
					class="bg-myBackground border-2 border-myText h-8"
					on:click={() => {
						updateBgColor('#102542');
						updateTextColor('#CDD7D6');
					}}
				/>
				<Button
					aria-label="set-theme-pink"
					class="bg-[#FFC0CB] border-2 border-myText h-8"
					on:click={() => {
						updateBgColor('#FFC0CB');
						updateTextColor('#333333');
					}}
				/>
				<Button
					aria-label="set-theme-gray"
					class="bg-[#2B2B2B] border-2 border-myText h-8"
					on:click={() => {
						updateBgColor('#2B2B2B');
						updateTextColor('#CDD7D6');
					}}
				/>
			</div>
		</Drawer>

		<!-- Page content -->
		<div class="flex">
			<Pagination chapter={data.chapter} className="mb-3" />
			<Button
				on:click={() => (hidden1 = false)}
				arial-label="settings"
				class="flex justify-center items-center ml-2 p-0 h-12 aspect-square"
			>
				<div class="w-4">
					<svg
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							d="M7.324 9.917A2.479 2.479 0 0 1 7.99 7.7l.71-.71a2.484 2.484 0 0 1 2.222-.688 4.538 4.538 0 1 0-3.6 3.615h.002ZM7.99 18.3a2.5 2.5 0 0 1-.6-2.564A2.5 2.5 0 0 1 6 13.5v-1c.005-.544.19-1.072.526-1.5H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h7.687l-.697-.7ZM19.5 12h-1.12a4.441 4.441 0 0 0-.579-1.387l.8-.795a.5.5 0 0 0 0-.707l-.707-.707a.5.5 0 0 0-.707 0l-.795.8A4.443 4.443 0 0 0 15 8.62V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.12c-.492.113-.96.309-1.387.579l-.795-.795a.5.5 0 0 0-.707 0l-.707.707a.5.5 0 0 0 0 .707l.8.8c-.272.424-.47.891-.584 1.382H8.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1.12c.113.492.309.96.579 1.387l-.795.795a.5.5 0 0 0 0 .707l.707.707a.5.5 0 0 0 .707 0l.8-.8c.424.272.892.47 1.382.584v1.12a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.12c.492-.113.96-.309 1.387-.579l.795.8a.5.5 0 0 0 .707 0l.707-.707a.5.5 0 0 0 0-.707l-.8-.795c.273-.427.47-.898.584-1.392h1.12a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5ZM14 15.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
						/>
					</svg>
				</div>
			</Button>
		</div>
		<h1 class="text-xl font-bold mb-1">Chương {data.chapter}</h1>

		<p
			style="font-size: {customFontSize + 'px'}"
			class="whitespace-pre-wrap !text-[{customFontSize + 'px'}]"
		>
			{data.content}
		</p>

		<h1 class="text-xl font-bold mb-1">Chương {data.chapter}</h1>
		<Pagination chapter={data.chapter} className="mt-3" />
	</div>
{/if}
