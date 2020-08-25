import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Slider from '../components/Slider'
import MyEssentials from '../components/MyEssentials'

const BlogIndex = ({ data, location, className }) => {
	const siteTitle = data.site.siteMetadata.title
	const posts = data.allMarkdownRemark.edges

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		midDesktop: {
			breakpoint: { max: 3000, min: 1300 },
			items: 4,
		},
		desktop: {
			breakpoint: { max: 1300, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 600 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 600, min: 0 },
			items: 1,
		},
	}

	return (
		<Layout location={location} title={siteTitle}>
			<SEO title="All posts" />
			<Carousel
				className={className}
				responsive={responsive}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={4000}
				style={{ marginBottom: '2rem' }}
			>
				{posts.map(({ node }) => {
					const dataNode = node

					return (
						<Slider
							key={node.fields.slug}
							dataNode={dataNode}
							slug={node.fields.slug}
						/>
					)
				})}
			</Carousel>
			<MyEssentials />
		</Layout>
	)
}

export default styled(BlogIndex)`
	ul {
		margin-bottom: 3rem;
	}
`

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						description
						country
						category
						image {
							childImageSharp {
								fluid(maxWidth: 1920, quality: 100) {
									...GatsbyImageSharpFluid_withWebp
								}
							}
						}
					}
				}
			}
		}
	}
`
