module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				blue: {
					light: '#002f58',
					dark: '#00213d',
				},
				teal: {
					light: '#0be6d8',
				},
				yellow: {
					dark: '#e6bf17',
				},
			},
			fontFamily: {
				molengo: ['Molengo', 'serif'],
				kreon: ['Kreon', 'sans-serif'],
				'libre-franklin': ['"Libre Franklin"', 'cursive'],
				'ropa-sans': ['"Ropa Sans"', 'serif'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
