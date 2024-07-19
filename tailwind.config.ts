import type { Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{html,js}'],
	theme: {
		colors: {
			black: '#020203',
			red: '#FF0101',
			blue: '#4AB8FF',
			yellow: '#FDCC0C',
			pink: '#FD5181',
		},
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
		},
		fontSize: {
			xs: ['12px', { lineHeight: '24px' }],
			s: ['14px', { lineHeight: '24px' }],
			base: ['20px', { lineHeight: '24px' }],
			lg: ['24px', { lineHeight: '24px' }],
			xl: ['48px', { lineHeight: '48px' }],
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
				DEFAULT: '6px',
			},
		},
	},
	plugins: [],
} satisfies Config
