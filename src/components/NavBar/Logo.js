import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FcGlobe } from 'react-icons/fc'

const Logo = ({ siteTitle, className }) => (
	<div className={className}>
		<Link to="/">
			<h1>{siteTitle}</h1>
			<FcGlobeIcon />
		</Link>
	</div>
)

const FcGlobeIcon = styled(FcGlobe)`
	height: 100%;
	font-size: 2rem;

	display: block;

	@media (max-width: 768px) {
		display: none;
	}
`

Logo.propTypes = {
	siteTitle: PropTypes.string,
}

Logo.defaultProps = {
	siteTitle: ``,
}

export default styled(Logo)`
	margin: auto 0;

	h1 {
		display: none;
		margin: 0;
		font-family: 'Epic Ride';
		font-weight: 400;
		color: black;
		text-decoration: none;
	}

	svg:hover {
		transition: all 0.3s linear;
		transform: rotate(180deg);
	}

	@media (max-width: 768px) {
		h1 {
			display: block;
		}
	}
`
