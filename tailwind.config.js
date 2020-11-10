const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	future: {
		purgeLayersByDefault: true,
		removeDeprecatedGapUtilities: true,
	},
	purge: {
		mode: 'all',
		content: ['./components/*.{js,tsx}', './pages/*.{js,tsx}'],
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
