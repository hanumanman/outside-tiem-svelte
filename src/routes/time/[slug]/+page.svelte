<script lang="ts">
	import { navigating } from '$app/stores';
	import Pagination from '$lib/components/Pagination.svelte';
	import { bgColor, textColor } from '$lib/stores';
	import { Button, Drawer, Label, Range, Spinner } from 'flowbite-svelte';
	import MdSettings from 'svelte-icons/md/MdSettings.svelte';
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
	<button
		class="p-1 pl-0 rounded-r-lg h-12 w-4 fixed top-1/3 text-white bg-slate-950 opacity-60 shadow hover:bg-slate-800"
		on:click={() => (hidden1 = false)}><MdSettings /></button
	>
	<div class="flex flex-col justify-center items-center px-7 py-6 min-h-[95vh]">
		<Drawer
			class="h-fit top-1/3 bg-myBackground text-myText rounded-r-lg shadow"
			transitionType="fly"
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
			<div class="flex mt-3 items-center space-x-3">
				<Label class="text-myText whitespace-nowrap">Theme</Label>
				<Button
					class="bg-white border-2 border-myText"
					on:click={() => {
						updateBgColor('#ffff');
						updateTextColor('rgb(27, 27, 27, 1)');
					}}
				/>
				<Button
					class="bg-myBackground border-2 border-myText"
					on:click={() => {
						updateBgColor('#102542');
						updateTextColor('#CDD7D6');
					}}
				/>
				<Button
					class="bg-[#FFC0CB] border-2 border-myText"
					on:click={() => {
						updateBgColor('#FFC0CB');
						updateTextColor('#333333');
					}}
				/>
				<Button
					class="bg-[#2B2B2B] border-2 border-myText"
					on:click={() => {
						updateBgColor('#2B2B2B');
						updateTextColor('#CDD7D6');
					}}
				/>
			</div>
		</Drawer>

		<!-- Page content -->
		<Pagination chapter={data.chapter} className="mb-2" />
		<h1 class="text-xl font-bold mb-1">Chương {data.chapter}</h1>

		<p
			style="font-size: {customFontSize + 'px'}"
			class="whitespace-pre-wrap !text-[{customFontSize + 'px'}]"
		>
			{data.content}
		</p>

		<h1 class="text-xl font-bold mb-1">Chương {data.chapter}</h1>
		<Pagination chapter={data.chapter} className="mt-2" />
	</div>
{/if}
