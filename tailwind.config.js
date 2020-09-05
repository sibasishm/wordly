const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: {
		mode: 'all',
		content: ['./src/**/*.{js,mdx}', './next.config.js'],
	},
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				'7xl': '6rem',
			},
		},
	},
	variants: {},
	plugins: [],
};
