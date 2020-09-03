import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

const travel = ({ data, location, className }) => {
	const siteTitle = data.site.siteMetadata.title
	const imageData = data.destination.childImageSharp.fluid

	const destinationsList = data.destinations.edges
	console.log(destinationsList)

	return (
		<Layout location={location} title={siteTitle} className={className}>
			<SEO title="Travel" />
			<BackgroundImage Tag="section" className="bgImg" fluid={imageData}>
				<h1>Where to travel ?</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
					consequat massa. Integer dictum purus eget dui{' '}
					<span>imperdiet aliquam</span>. Maecenas vel orci sit amet est laoreet
					porta vel non leo. Proin mollis maximus lacus, ac.
				</p>
			</BackgroundImage>
			<div className="destinationsContent">
				{destinationsList.map(({ node }) => {
					return (
						<div key={node.name} className="oneDestination">
							<Img
								fluid={node.childImageSharp.fluid}
								alt={node.name}
								style={{ height: '100px', width: '100px', margin: '2rem' }}
							></Img>
						</div>
					)
				})}
			</div>
		</Layout>
	)
}

export default styled(travel)`
	& * {
		margin: 0;
	}

	.bgImg {
		width: 100%;
		background-position: bottom center;
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		max-height: 510px;
	}

	.bgImg h1 {
		font-family: 'Montserrat', sans-serif;
		letter-spacing: 0.3em;
		line-height: 1.57em;
		font-weight: 400;
		text-transform: uppercase;
		margin: 1rem;
	}

	.bgImg span {
		color: #f7775e;
	}

	.destinationsContent {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
	}
`

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		destination: file(absolutePath: { regex: "/Destination.png/" }) {
			childImageSharp {
				fluid(maxWidth: 1800, quality: 100) {
					...GatsbyImageSharpFluid
				}
			}
		}
		destinations: allFile(
			filter: { relativeDirectory: { eq: "destinations" } }
			sort: { fields: [name], order: ASC }
		) {
			edges {
				node {
					name
					childImageSharp {
						fluid(maxWidth: 200, maxHeight: 200, quality: 100) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		}
	}
`
