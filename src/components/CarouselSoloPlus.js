import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { media } from '../assets/js/helpers'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const CarouselSlide = ({ className }) => {
	const data = useStaticQuery(graphql`
		query CarouselSoloPlusQuery {
			allMarkdownRemark(
				sort: { fields: [frontmatter___date], order: DESC }
				filter: { frontmatter: { posttype: { eq: "blog" } } }
			) {
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
	`)

	const posts = data.allMarkdownRemark.edges

	const responsive = {
		all: {
			breakpoint: { max: 4000, min: 0 },
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
						<div className="articleText">
							<h2>{node.frontmatter.country}</h2>
							<h4>{node.frontmatter.title}</h4>
							<p className="cat">{node.frontmatter.category}</p>
							<p className="desc">{node.frontmatter.description}</p>
						</div>
						<div className="articleImg">
							<Link to={node.fields.slug}>
								<Img
									fluid={node.frontmatter.image.childImageSharp.fluid}
									alt={node.frontmatter.title}
									style={{ height: '50vh', minHeight: '500px' }}
								></Img>
							</Link>
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
		flex-direction: column;
		margin: 0 5px;
		background: #f9f9f9;
	}

	ul {
		margin-bottom: 3rem;
	}

	.articleImg {
		flex: 3;
	}

	${media.bigMedium`
		article {
      flex-direction: row;
			background: linear-gradient(
			to right,
			#f9f9f9 60%,
			#f9f9f9 70%,
			white 80%,
			white 90%,
			white 100%
		);
    }

		.articleImg {
			margin: 4rem 0;
		}

  `}

	.articleImg img {
		transition: transform 01s ease !important;
	}

	.articleImg:hover img {
		transform: scale(1.1);
		background-color: black;
		filter: brightness(90%);
	}

	.articleText {
		flex: 1;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		padding: 3rem;
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

	.cat {
		color: #959595;
		font-family: Montserrat, sans-serif;
		line-height: 1.8em;
		text-transform: uppercase;
		font-size: 10px;
		font-weight: 400;
		letter-spacing: 0.33em;
		margin: 15px 0;
	}

	.desc {
		text-align: center;
		text-transform: none;
		letter-spacing: 0;
	}
`
