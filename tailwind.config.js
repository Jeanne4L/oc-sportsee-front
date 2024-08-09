/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		colors: {
			black: '#020203',
			red: '#FF0101',
			blue: '#4AB8FF',
			yellow: '#FDCC0C',
			pink: '#FD5181',
			white: '#FFF',
		},
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
		},
		fontSize: {
			xs: '12px',
			s: '14px',
			base: '20px',
			lg: '24px',
			xl: '48px',
		},
		fontWeight: {
			normal: '400',
			medium: '500',
			bold: '700',
		},
		extend: {
			spacing: {
				xs: '8px',
				s: '16px',
				m: '24px',
				l: '32px',
				xl: '40px',
				xxl: '80px',
				'header-height': '93px',
				'sidebar-width': '88px',
			},
			borderRadius: {
				sm: '6px',
			},
			boxShadow: {
				header: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
			},
			translate: {
				'1/2': '-18%',
				'-full': '-250%',
			},
		},
	},
	plugins: [],
} 