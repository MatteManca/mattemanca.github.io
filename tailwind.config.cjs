const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ['./index.html', './src/**/*.{jsx, js}'],
	darkMode: 'class',
	theme: {
		screens: {
			'xs': '320px',
			...defaultTheme.screens
		},
		extend: {
			fontFamily: {
				Raleway: ['Raleway', 'sans-serif'],
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
};
