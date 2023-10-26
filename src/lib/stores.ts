import { readable, writable } from 'svelte/store';

export const bgColor = writable('#102542');
export const textColor = writable('#CDD7D6');
export const fontSize = writable(18);
export const themes = readable({
	dark: {
		kanagawa: {
			bg: '#1e1f28',
			text: '#dcd7ba',
			button: '#7aa89f'
		},
		catppuccin: {
			bg: '#1e1e2e',
			text: '#89dceb',
			button: '#f38ba8'
		}
	},
	light: {
		catppuccin: {
			bg: '#eff1f5',
			text: ' 	#4c4f69',
			button: '#fe640b'
		},
		kanagawa: {
			bg: '#dcd7ba',
			text: '#1e1f28',
			button: '#2d4f67'
		}
	}
});
export const currentTheme = writable({
	bg: '#1e1f28',
	text: '#dcd7ba',
	button: '#7aa89f',
	buttonText: '#54546d'
});
