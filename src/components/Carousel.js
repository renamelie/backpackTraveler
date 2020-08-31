import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const CarouselSlide = ({ className }) => {
	const data = useStaticQuery(graphql`
		query CarouselQuery {
			allMarkdownRemark(
				sort: { fields: [frontmatter___date], order: DESC }
				filter: { frontmatter: { posttype: { eq: "blog" } } }
			) {
				edges {
					node {
						fields {
							slug
						}
						frontmatter {
							title
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
	`)

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
		<Carousel
			className={className}
			responsive={responsive}
			infinite={true}
			autoPlay={true}
			autoPlaySpeed={4000}
			style={{ marginBottom: '2rem' }}
		>
			{posts.map(({ node }) => {
				return (
					<article key={node.fields.slug}>
						<div className="articleImg">
							<Link to={node.fields.slug}>
								<Img
									fluid={node.frontmatter.image.childImageSharp.fluid}
									alt={node.frontmatter.title}
									style={{ height: '50vh', minHeight: '500px' }}
								></Img>
							</Link>
						</div>
						<div className="articleText">
							<h2>{node.frontmatter.country}</h2>
							<h4>{node.frontmatter.title}</h4>
							<p>{node.frontmatter.category}</p>
						</div>
					</article>
				)
			})}
		</Carousel>
	)
}

export default styled(CarouselSlide)`
	margin: 0 2rem;
	article {
		display: flex;
		flex-flow: column nowrap;
		margin: 0 5px;
	}

	ul {
		margin-bottom: 3rem;
	}

	.articleImg {
		flex: 3;
	}

	.articleImg img {
		transition: transform 01s ease !important;
	}

	.articleImg:hover img {
		transform: scale(1.1);
		background-color: black;
		filter: brightness(90%);
	}

	.articleText {
		border: 1px solid #f2f2f2;
		flex: 1;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		padding: 0 10%;
		min-height: 200px;
	}

	h2,
	h4 {
		margin: 0;
		text-align: center;
	}

	h2 {
		font-family: 'Epic Ride', sans-serif;
		font-size: 3rem;
		font-weight: 400;
	}

	h4 {
		font-family: 'Montserrat', sans-serif;
		font-size: 14px;
		line-height: 1.57em;
		font-weight: 500;
		margin: 5px 0;
	}

	p {
		color: #959595;
		font-family: Montserrat, sans-serif;
		line-height: 1.8em;
		text-transform: uppercase;
		font-size: 10px;
		font-weight: 400;
		letter-spacing: 0.33em;
		margin: 15px 0;
	}
`
