import React from 'react'
import styled from 'styled-components'
import { pxToRem, media } from '../assets/js/helpers'

const MyEssentials = ({ className }) => {
	return (
		<div className={className}>
			<h3>My travel essentials</h3>
			<p>We are the Backpack Traveler, your favorite travel assistants!</p>
		</div>
	)
}

export default styled(MyEssentials)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background-color: #f7f2ee;
	padding: 2rem;
	text-align: center;

	h3,
	p {
		margin: 1rem 1rem 0;
	}

	h3 {
		font-family: Montserrat, sans-serif;
		font-weight: 400;
		font-size: ${pxToRem(17)};
		line-height: 1.33em;
		letter-spacing: 0.2em;
		text-transform: uppercase;
	}

	p {
		color: #838383;
		font-size: ${pxToRem(18)};
		line-height: 30px;
	}

	${media.medium`
		h3 {
      font-size: ${pxToRem(24)};
    }
    p {
      font-size: ${pxToRem(16)};
    }
  `};
`
