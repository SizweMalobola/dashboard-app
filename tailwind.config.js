module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			screens: {
				xxs: '320px',
			},
			colors: {
				blue: {
					lighter: '#84B7C6',
					light: '#002f58',
					dark: '#00213d',
				},
				teal: {
					light: '#0be6d8',
				},
				yellow: {
					dark: '#e6bf17',
				},
				red: {
					light: '#EC4530',
				},
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				'ropa-sans': ['"Ropa Sans"', 'serif'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
