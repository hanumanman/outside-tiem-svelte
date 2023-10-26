<script>
	import { currentTheme } from '$lib/stores';
	import '../app.css';
</script>

<div
	style="background-color: {$currentTheme.bg}; color: {$currentTheme.text}"
	class={`min-h-screen w-screen flex`}
>
	<slot />
</div>
