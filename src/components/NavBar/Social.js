import React from 'react'
import Styled from 'styled-components'
import {
	FaInstagram,
	FaTwitter,
	FaFacebookF,
	FaPinterestP,
	FaYoutube,
} from 'react-icons/fa'

const Social = ({ className }) => {
	return (
		<div className={className}>
			<a
				href="https://www.instagram.com/ren.amelie"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaInstagram />
			</a>
			<a href="/" target="_blank" rel="noopener noreferrer">
				<FaTwitter />
			</a>
			<a href="/" target="_blank" rel="noopener noreferrer">
				<FaFacebookF />
			</a>
			<a href="/" target="_blank" rel="noopener noreferrer">
				<FaPinterestP />
			</a>
			<a href="/" target="_blank" rel="noopener noreferrer">
				<FaYoutube />
			</a>
		</div>
	)
}

export default Styled(Social)`
  display: flex;
  flex-direction: row;
	justify-content: center;
	align-items: center;

  svg {
    color: #959595;
    font-size: 13px;
    margin: 5px;
  }

  a {
    display: flex;
  }

  a:hover svg {
    color: black;
  }

  @media (max-width: 999px) {
    display: none;
  }

`
