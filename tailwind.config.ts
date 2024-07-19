import type { Config } from 'tailwindcss'

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
			},
			borderRadius: {
				sm: '6px',
			},
		},
	},
	plugins: [],
} satisfies Config
