import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Image from 'gatsby-image'
import styled from 'styled-components'
import { pxToRem, media } from '../assets/js/helpers'
import {
	FaInstagram,
	FaFacebookF,
	FaTwitter,
	FaPinterestP,
	FaYoutube,
	FaDribbble,
} from 'react-icons/fa'

const FooterContact = ({ className }) => {
	const data = useStaticQuery(graphql`
		query FooterQuery {
			site {
				siteMetadata {
					social {
						instagram
					}
				}
			}
			worldMap: file(absolutePath: { regex: "/world-map.png/" }) {
				childImageSharp {
					fixed(width: 300, height: 194) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`)

	return (
		<div className={className}>
			<div className="whereContent">
				<h6 className="hr">Where we are now</h6>
				<Image
					fixed={data.worldMap.childImageSharp.fixed}
					alt="Where we are now"
				/>
				<p>Paris, France</p>
			</div>
			<div className="followContent">
				<h6 className="hr">Follow us</h6>
				<ul>
					<li>
						<FaInstagram />
						<span>Instagram</span>
					</li>
					<li>
						<FaFacebookF />
						<span>Facebook</span>
					</li>
					<li>
						<FaTwitter />
						<span>Twitter</span>
					</li>
					<li>
						<FaPinterestP />
						<span>Pinterest</span>
					</li>
					<li>
						<FaYoutube />
						<span>Youtube</span>
					</li>
					<li>
						<FaDribbble />
						<span>Dribble</span>
					</li>
				</ul>
			</div>
			<div className="newsContent">
				<h6 className="hr">Newsletter</h6>
				<form
					name="mailchimp"
					method="POST"
					data-netlify="true"
					data-netlify-honeypot="bot-field"
				>
					<input type="hidden" name="form-name" value="mailchimp" />
					<input type="hidden" name="bot-field" />

					<label>
						<input type="email" name="email" placeholder="Email Address" />
					</label>

					<button type="submit">SUBSCRIBE</button>
				</form>
			</div>
		</div>
	)
}

export default styled(FooterContact)`
	display: flex;
	flex-direction: column;
	padding: 1rem;
	text-align: center;
	padding: 2rem 10px 2rem;

	${media.bigMedium`
    flex-direction: row;
  `}

	& > * {
		flex: 1;
	}

	h6 {
		margin: 2rem 0;
	}

	.hr,
	p {
		font-family: Montserrat, sans-serif;
		color: #999;
		font-size: 10px;
		line-height: 1.8em;
		font-weight: 500;
		font-style: normal;
		letter-spacing: 0.2em;
		text-transform: uppercase;
	}

	p {
		font-weight: 600;
	}

	.hr {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.hr::before,
	.hr::after {
		border-top: 0.0625em solid;
		content: '';
		flex: 1;
		color: #f2f2f2;
		margin: 0 1em;
	}

	.followContent ul {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 20px;
		margin: 0;
	}

	.followContent ul li {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.followContent svg {
		font-size: ${pxToRem(28)};
		margin: 0.5rem;
	}

	.followContent ul li span {
		font-family: Montserrat, sans-serif;
		font-weight: 400;
		color: #959595;
		letter-spacing: 0.33em;
		font-size: 8px;
		text-transform: uppercase;
		margin-top: 4px;
	}

	input[type='email'],
	.newsContent button {
		font-family: Montserrat, sans-serif;
		width: 100%;
		padding: 0 20%;
	}

	input[type='email'] {
		margin: 0 0 25px;
		padding: 9px 16px;
		font-size: 12px;
		font-weight: 400;
		line-height: calc(50px - (9px * 2) - 2px);
		color: #959595;
		background-color: #fff;
		border: 1px solid #c6c6c6;
		border-radius: 0;
		cursor: text;
		transition: border-color 0.2s ease-in-out;
		font-style: italic;
		outline: none;
		text-align: center;
	}

	.newsContent form {
		display: flex;
		flex-direction: column;
		margin: 5% 10%;
	}

	.newsContent button {
		color: #fff;
		background-color: #000;
		margin: 0;
		font-size: 12px;
		line-height: 2em;
		letter-spacing: 0.2em;
		font-weight: 400;
		text-transform: uppercase;
		outline: 0;
		transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
			border-color 0.2s ease-in-out;
		padding: 9px 41px 10px;
		border: 1px solid transparent;
		cursor: pointer;
	}
`
