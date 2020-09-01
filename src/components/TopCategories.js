import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { media } from '../assets/js/helpers'

const TopCategories = ({ className }) => {
	const data = useStaticQuery(graphql`
		query CategoriesQuery {
			allMarkdownRemark(
				sort: { fields: [frontmatter___date], order: DESC }
				filter: { frontmatter: { posttype: { eq: "category" } } }
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
							destinations
							image {
								childImageSharp {
									fixed(width: 110, height: 75, quality: 100) {
										...GatsbyImageSharpFixed_withWebp
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

	return (
		<div className={className}>
			<h3>Top categories</h3>
			<p>We are That Backpacker, Melissa and Johnathan (that's us!)</p>
			<div className="articles">
				{posts.map(({ node }) => {
					return (
						<article key={node.fields.slug}>
							<div className="articleImg">
								<Link to={node.fields.slug}>
									<Img
										fixed={node.frontmatter.image.childImageSharp.fixed}
										alt={node.frontmatter.title}
									></Img>
								</Link>
							</div>
							<div className="articleText">
								<h4>{node.frontmatter.title}</h4>
								<p>{node.frontmatter.destinations}</p>
							</div>
						</article>
					)
				})}
			</div>
		</div>
	)
}

export default styled(TopCategories)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 3rem;
	text-align: center;

	.articles {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		margin: 1rem;
	}

	article {
		border: 1px solid transparent;
		margin: 1rem;
		padding: 1.5rem;
		cursor: pointer;
		min-width: 220px;
	}

	${media.bigMedium`
    article {
			padding: 1.5rem 1rem;
		}
	`}

	article:hover {
		border: 1px solid #ededed;
	}

	.articleImg {
		transition: transform 0.2s ease !important;
	}

	article:hover .articleImg {
		transform: translateY(-5px);
	}

	& h4 {
		font-family: 'Montserrat', sans-serif;
		font-size: 14px;
		line-height: 1.57em;
		font-weight: 500;
		margin: 5px 0;
	}

	& .articleText p {
		font-size: 10px;
		margin: 0;
	}
`
