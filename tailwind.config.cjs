/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,ts,svelte}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')]
};

module.exports = config;
