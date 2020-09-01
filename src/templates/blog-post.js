import React from 'react'
import { Link, graphql } from 'gatsby'

import styled from 'styled-components'
import Img from 'gatsby-image'
import { media } from '../assets/js/helpers'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPostTemplate = ({ data, pageContext, location, className }) => {
	const post = data.markdownRemark
	const siteTitle = data.site.siteMetadata.title
	const { previous, next } = pageContext

	const imageData = post.frontmatter.image.childImageSharp.fluid

	return (
		<Layout location={location} title={siteTitle} className={className}>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
			/>
			<article>
				<div className="content">
					<Img fluid={imageData} alt={post.frontmatter.title}></Img>
					<header className="articleText">
						<h2>{post.frontmatter.country}</h2>
						<h4>{post.frontmatter.title}</h4>
						<p>{post.frontmatter.category}</p>
					</header>
					<section dangerouslySetInnerHTML={{ __html: post.html }} />
				</div>

				<footer>
					<span>{post.frontmatter.name}</span>
					<span>{post.frontmatter.date}</span>
				</footer>
			</article>

			<nav>
				<ul>
					<li>
						{previous && (
							<Link to={previous.fields.slug} rel="prev">
								← PREVIOUS
							</Link>
						)}
					</li>
					<li>
						{next && (
							<Link to={next.fields.slug} rel="next">
								NEXT →
							</Link>
						)}
					</li>
				</ul>
			</nav>
			<Bio />
		</Layout>
	)
}

export default styled(BlogPostTemplate)`
	margin: 0 5%;
	article {
		display: flex;
		flex-direction: column;
	}

	.content {
		background-color: white;
		margin: 5% 0;
	}

	${media.bigMedium`
		.content {
			margin: 0 0 5%;
		}
  `};

	.content img {
		max-height: 500px;
	}

	.content > div {
		max-height: 500px;
	}

	& .articleText {
		margin: 2rem 0;
	}

	& .articleText > * {
		font-weight: 400;
	}

	& .articleText h2 {
		font-size: 44px;
		margin: 0.5rem 0;
	}

	& .articleText h4 {
		font-size: 24px;
	}

	& .articleText p {
		font-size: 10px;
	}

	& nav {
		display: flex;
		width: 100%;
	}

	& nav ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		list-style: none;
		padding: 0;
		width: 100%;
		height: 80px;
		margin: 0;
	}

	& nav ul li {
		margin: 0;
	}

	& footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #959595;
		border-top: 1px solid #f2f2f2;
		border-bottom: 1px solid #f2f2f2;
	}

	${media.medium`
		& footer {
			flex-direction: row;
			justify-content: space-between;
		}

  `};

	& footer span {
		font-family: Montserrat, sans-serif;
		line-height: 1.8em;
		text-transform: uppercase;
		font-weight: 400;
		letter-spacing: 0.33em;
		margin: 15px 0;
	}
`

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		site {
			siteMetadata {
				title
			}
		}
		markdownRemark(fields: { slug: { eq: $slug } }) {
			id
			excerpt(pruneLength: 160)
			html
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				description
				country
				category
				name
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
`
