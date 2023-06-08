const extraColumns = {
	13: '13',
	14: '14',
	15: '15',
	16: '16',
	17: '17',
	18: '18',
	19: '19',
	20: '20',
	21: '21',
	22: '22',
	23: '23',
	24: '24',
	25: '25',
	26: '26',
	27: '27',
};

const colors = {
	white: '#FFFFFF',
	armadillo: '#36362C',
	fiord: '#3A4663',
	eastbay: '#414E73',
	oldbrick: '#93261A',
	riverbed: '#434A59',
	westar: '#E5E4E1',
	seance: '#881C9E',
	brightsun: '#FFE53D',
	windsor: '#56077C',
	pearlbush: '#EAE3DC',
	hightviolet:'#17062A',
	mercury: '#E6E6E6',
	gallery: '#EEEEEE',
	grape: '#331C4D',
	violet: '#1E0936',
	napa: '#B3A497',
	neoncarrot: '#FF8A38',
	paradiso: '#378187',
	burntorange: '#C85402',
	swisscoffee: '#D2CDCD',
	ebonyclay: '#242D44',
	lynch: '#647198',
	persianred: '#D03F2F',
	mirage: '#181F33',
	fiord: '#3A4663',
	blackwhite: '#FFFFFE',
	coldpurple: '#A2B2E1',
	carnation: '#F96B5B',
	robinseggblue: '#00DED0',
};

const max = px => {
	return `max(${Math.max(10, px * 0.8)}px,${px / 16}rem)`;
};

const { fontFamily } = require('tailwindcss/defaultTheme');

const regularSpacing = new Array(450).fill(null).reduce((result, item, i) => {
	result[i] = i < 4 ? `${i}px` : `${i / 16}rem`;
	return result;
}, {});

const largeSpecificSpacing = [545, 583, 600, 700, 758, 1400].reduce((result, item) => {
	result[item] = `${item / 16}rem`;
	return result;
}, {});

const spacing = {
	...regularSpacing,
	...largeSpecificSpacing,
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/comps/**/*.{js,ts,jsx,tsx}', './src/app/**/*.{js,ts,jsx,tsx}'],
	safelist: [
		{
			pattern: /col-(start|end)-(1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27)/,
			variants: ['sm', 'md', 'lg', 'xl', '2xl'],
		},
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--karla)', ...fontFamily.sans],
				jetbrains: ['var(--jetbrains)', ...fontFamily.sans],
				karla: ['var(--karla)', ...fontFamily.sans],
			},
			gridColumnStart: extraColumns,
			gridColumnEnd: extraColumns,
			gridTemplateColumns: {
				container: '[full-start] minmax(calc(calc(100% - 1440px) / 2), 1fr) [main-start] repeat(24, [col-start] 1fr) [main-end] minmax(calc(calc(100% - 1440px) / 2), 1fr) [full-end]',
			},
			colors,
			spacing,
			fontSize: {
				0: [
					0,
					{
						lineHeight: '0',
					},
				],
				12: [
					max(12),
					{
						lineHeight: '1',
					},
				],
				28: [
					max(28),
					{
						lineHeight: '1',
					},
				],
				32: [
					max(32),
					{
						lineHeight: '1.1',
					},
				],
				40: [
					max(40),
					{
						lineHeight: '1',
					},
				],
				56: [
					max(56),
					{
						lineHeight: '1.1',
					},
				],
			},
		},
	},
	plugins: [],
};
