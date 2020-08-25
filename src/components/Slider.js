import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Slider = ({ dataNode, slug, className }) => {
	// console.log(dataNode)
	console.log(slug)

	return (
		<article className={className}>
			<div className="articleImg">
				<Link to={slug}>
					<Img
						fluid={dataNode.frontmatter.image.childImageSharp.fluid}
						alt={dataNode.frontmatter.title}
						style={{ height: '50vh', minHeight: '500px' }}
					></Img>
				</Link>
			</div>
			<div className="articleText">
				<h2>{dataNode.frontmatter.country}</h2>
				<h4>{dataNode.frontmatter.title}</h4>
				<p>{dataNode.frontmatter.category}</p>
			</div>
		</article>
	)
}

export default styled(Slider)`
	display: flex;
	flex-flow: column nowrap;
	margin: 0 5px;

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
