import { css } from 'styled-components'

export const colors = {
	primary: '#2c3e50',
	accent: '#b5adde',
	white: '#f3ebe8',
	black: '#1f1f1f',
	lightGrey: '#f7f5f6',
	grey: '#41484c',
}

export const pxToRem = (px = 16) => {
	return `${px / 16}rem`
}

export const layout = (px = 1170) => {
	return `
    max-width: ${pxToRem(px)};
    margin: 0 auto;
    padding: 0 ${pxToRem(8)};`
}

const sizes = {
	large: 1200,
	bigMedium: 1000,
	medium: 768,
	small: 600,
	smaller: 321,
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (min-width: ${sizes[label] / 16}rem) {
			${css(...args)}
		}
	`
	return acc
}, {})
