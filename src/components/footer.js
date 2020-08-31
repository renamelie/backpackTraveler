import React from 'react'
import styled from 'styled-components'
import { media } from '../assets/js/helpers'
import { BsHeartHalf } from 'react-icons/bs'

import FooterContact from './FooterContact'

const footer = ({ className }) => {
	return (
		<footer className={className}>
			<FooterContact />
			<div className="lastFooter">
				<div>
					Made with love <BsHeartHalf /> by
					<a
						href="https://renamelie.netlify.app/"
						target="_blank"
						rel="noreferrer"
					>
						{' '}
						renamelie
					</a>
				</div>
				<ul>
					<li>LIFESTYLE</li>
					<li>MOMENTS</li>
					<li>ADVENTURE</li>
					<li>EXPLORE</li>
					<li>VACATION</li>
				</ul>
			</div>
		</footer>
	)
}

export default styled(footer)`
	.lastFooter {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem;
		background-color: #f7f2ee;
	}

	${media.bigMedium`
    .lastFooter {
      flex-direction: row;
      justify-content: space-between;
    }
	`}

	.lastFooter > * {
		margin: 1rem;
	}

	.lastFooter ul {
		list-style: none;
		display: flex;
		flex-direction: column;
	}

	${media.small`
		.lastFooter ul {
      flex-direction: row;
    }
  `}

	.lastFooter ul li {
		color: #959595;
		font-size: 10px;
		font-weight: 500;
		letter-spacing: 0.33em;
		line-height: 27px;
		text-align: center;
		margin: 0 1rem;
		cursor: pointer;
		transition: 0.2s ease;
	}

	.lastFooter ul li:hover {
		color: black;
	}
`
