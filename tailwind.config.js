/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./build/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				'bg-light-mode': '#FFFBF5',
				'custom-purple': '#301E67',
				'custom-blue': '#5B8FB9',
				'custom-mint': '#B6EADA',
			},
		},
	},
	plugins: [],
};
