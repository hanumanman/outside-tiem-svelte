<script>
	import { bgColor, textColor } from '$lib/stores';
	import '../app.css';

	let customBgColor = '';
	bgColor.subscribe((value) => {
		customBgColor = value;
	});
	let customTextColor = '';
	textColor.subscribe((value) => {
		customTextColor = value;
	});
</script>

<div
	style="background-color: {customBgColor}; color: {customTextColor}"
	class={`min-h-screen w-screen flex`}
>
	<slot />
</div>
