import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Sponsors = ({ className }) => {
	const data = useStaticQuery(graphql`
		query SponsorsQuery {
			allFile(
				filter: { relativeDirectory: { eq: "sponsors" } }
				sort: { fields: [name], order: ASC }
			) {
				edges {
					node {
						name
						childImageSharp {
							fixed(width: 135, height: 48, quality: 100) {
								...GatsbyImageSharpFixed
							}
						}
					}
				}
			}
		}
	`)

	const sponsorsList = data.allFile.edges

	const responsive = {
		LargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 1200 },
			items: 6,
		},
		midDesktop: {
			breakpoint: { max: 1200, min: 900 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 900, min: 800 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 800, min: 600 },
			items: 3,
		},
		mobile: {
			breakpoint: { max: 600, min: 0 },
			items: 2,
		},
	}

	return (
		<div className={className}>
			<h3>Our sponsors</h3>
			<Carousel
				responsive={responsive}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={5000}
				arrows={false}
			>
				{sponsorsList.map(({ node }) => {
					return (
						<div className="sponsorsImg" key={node.name}>
							<Img
								fixed={node.childImageSharp.fixed}
								alt={node.name}
								style={{ height: '48px', width: '135px' }}
							></Img>
						</div>
					)
				})}
			</Carousel>
		</div>
	)
}

export default styled(Sponsors)`
	text-align: center;
	padding: 2rem;

	& > div {
		margin: 2rem;
	}

	.sponsorsImg img {
		cursor: pointer;
		transition: transform 01s ease !important;
	}
`
