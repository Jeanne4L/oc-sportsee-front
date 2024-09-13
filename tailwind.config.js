/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				black: '#020203',
				red: '#FF0101',
				blue: '#4AB8FF',
				yellow: '#FDCC0C',
				pink: '#FD5181',
				white: '#FFF',
				lightGrey: '#FBFBFB',
				grey: '#74798C',
				redBg: 'rgba(255, 1, 1, 0.1)',
				blueBg: 'rgba(74, 184, 255, 0.1)',
				yellowBg: 'rgba(253, 204, 12, 0.1)',
				pinkBg: 'rgba(253, 81, 129, 0.1)',
				greyChartBg: '#282D30',
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
				xxl: '112px',
			},
			fontWeight: {
				normal: '400',
				medium: '500',
				bold: '700',
				black: '900',
			},
			spacing: {
				xs: '8px',
				s: '16px',
				m: '24px',
				l: '32px',
				xl: '40px',
				xxl: '80px',
				'sidebar-width': '72px',
				'header-height': '93px',
				'stat-card': '198px',
				'chart-height': '200px',
				'chart-desktop-height': '300px',
				'error-img-height': '500px',
			},
			borderRadius: {
				sm: '6px',
			},
			boxShadow: {
				header: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
			},
			translate: {
				'1/2': '-24%',
				'-full': '-250%',
			},
			lineHeight: {
				'error-code': '.8',
			},
		},
	},
	safelist: ['bg-redBg', 'bg-blueBg', 'bg-yellowBg', 'bg-pinkBg'],
	plugins: [],
}
