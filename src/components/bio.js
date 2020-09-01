import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import styled from 'styled-components'
import { pxToRem, media } from '../assets/js/helpers'

const Bio = ({ className }) => {
	const data = useStaticQuery(graphql`
		query BioQuery {
			avatar: file(absolutePath: { regex: "/profile-me.png/" }) {
				childImageSharp {
					fixed(width: 100, height: 100) {
						...GatsbyImageSharpFixed
					}
				}
			}
			site {
				siteMetadata {
					author {
						name
						summary
					}
					social {
						instagram
					}
				}
			}
		}
	`)

	const { author, social } = data.site.siteMetadata
	return (
		<div className={className}>
			<Image fixed={data.avatar.childImageSharp.fixed} alt={author.name} />
			<p>
				{author.summary}{' '}
				<a
					href={`https://www.instagram.com/${social.instagram}`}
					target="_blank"
					rel="noreferrer"
				>
					Follow me on Insta
				</a>{' '}
				!
				<br />
				<strong>{author.name}</strong>
			</p>
		</div>
	)
}

export default styled(Bio)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: ${pxToRem(30)} 0;
	padding: ${pxToRem(20)};
	background-color: white;

	& img {
		border-radius: 50%;
		border: 1px solid pink;
	}

	& div {
		min-width: 100px;
		min-height: 100px;
	}

	& p {
		margin: ${pxToRem(10)};
	}

	& a {
		color: black;
		text-decoration: underline;
		box-shadow: none;
	}

	${media.small`
		flex-direction: row;
	`}
`
