import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const MyEssentials = ({ className }) => {
	const data = useStaticQuery(graphql`
		query MyEssentialsQuery {
			allFile(
				filter: { relativeDirectory: { eq: "essentials" } }
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
	`)

	const essentialsList = data.allFile.edges

	// console.log(essentialsList)

	return (
		<div className={className}>
			<h3>My travel essentials</h3>
			<p>We are the Backpack Traveler, your favorite travel assistants!</p>
			<div className="essentialsPix">
				{essentialsList.map(({ node }) => {
					// console.log(node.name)
					return (
						<div key={node.name}>
							<Img
								fluid={node.childImageSharp.fluid}
								alt={node.name}
								style={{ height: '190px', width: '190px', margin: '1rem' }}
							></Img>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default styled(MyEssentials)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	text-align: center;

	background-color: #f7f2ee;
	transition: 0.2s;

	& img {
		transition: transform 2s ease;
		transition: 0.2s !important;
	}

	& img:hover {
		transform: translateY(-7px);
	}

	.essentialsPix {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-around;
		margin: 1rem;
	}
`
