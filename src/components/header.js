import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { media } from '../assets/js/helpers'

import icon1 from '../images/header-icon-1.png'
import icon2 from '../images/header-icon-2.png'
import icon3 from '../images/header-icon-3.png'
import icon4 from '../images/header-icon-4.png'

const Header = ({ siteTitle, className, location }) => {
	const rootPath = `${__PATH_PREFIX__}/`
	let header

	if (location.pathname === rootPath) {
		header = (
			<>
				<div className="left">
					<div className="cat">
						<span>
							<img src={icon1} alt="icon1" />
						</span>
						<p>Get Inspired</p>
					</div>
					<div className="cat">
						<span>
							<img src={icon2} alt="icon2" />
						</span>
						<p>My Books</p>
					</div>
				</div>
				<div className="mid">
					<Link to="/">
						<h1>{siteTitle}</h1>
						<p>Never Ending Footsteps</p>
					</Link>
				</div>
				<div className="right">
					<div className="cat">
						<span>
							<img src={icon3} alt="icon3" />
						</span>
						<p>Travel Guides</p>
					</div>
					<div className="cat">
						<span>
							<img src={icon4} alt="icon4" />
						</span>
						<p>About Me</p>
					</div>
				</div>
			</>
		)
	} else {
		header = (
			<div className="mid">
				<Link to="/">
					<h1>{siteTitle}</h1>
					<p>Never Ending Footsteps</p>
				</Link>
			</div>
		)
	}

	return <div className={className}>{header}</div>
}

export default styled(Header)`
	display: none;
	justify-content: space-between;
	margin: 3rem 0;
	text-align: center;

	${media.bigMedium`
		display: flex;
	`}

	& > * {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		width: 100%;
	}

	& img {
		margin: 0;
	}

	& p {
		font-family: 'Lora', serif;
		margin: 0;
	}

	.cat {
		display: flex;
		flex-direction: column;
	}

	.cat span {
		cursor: pointer;
	}

	.cat span img {
		transition: transform 0.2s ease !important;
	}

	.cat span:hover img {
		transform: translateY(-5px);
	}

	svg {
		color: black;
		font-size: 3rem;
	}

	& h1 {
		margin: 0;
		font-family: 'Epic Ride';
		font-weight: 400;
		font-size: 5rem;
		color: black;
		text-decoration: none;
	}

	& p {
		color: #959595;
		font-family: Montserrat, sans-serif;
		font-size: 10px;
		font-weight: 500;
		letter-spacing: 0.33em;
		text-transform: uppercase;
	}
`
