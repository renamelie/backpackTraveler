import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { pxToRem } from '../../assets/js/helpers'
import { AiFillStar } from 'react-icons/ai'

const pageList = [
	{
		link: '/',
		text: 'Home',
	},
	{
		link: '/pages',
		text: 'Pages',
	},
	{
		link: '/travel',
		text: 'Travel',
		icon: `AiFillStar`,
	},
	{
		link: '/blog',
		text: 'Blog',
	},
	{
		link: '/shop',
		text: 'Shop',
	},
	{
		link: '/elements',
		text: 'Elements',
	},
]

const NavItem = styled(Link)`
	color: #111;
	position: relative;
	display: inline-block;
	white-space: nowrap;
	margin: 0 1vw;
	transition: all 200ms ease-in;
	text-transform: uppercase;

	:after {
		color: transparent;
		background: #f7775e;
		position: absolute;
		width: 0%;
		height: 1px;
		bottom: 0;
		left: 0;
		right: 0;
		content: '.';
		transition: all 0.4s ease-in;
	}

	:hover {
		color: #f7775e;
		::after {
			width: 100%;
		}
	}

	@media (max-width: 999px) {
		padding: 10px 0;
		font-size: ${pxToRem(11)};
		z-index: 6;
	}

	span {
		font-size: ${pxToRem(11)};
		font-weight: 500;
		letter-spacing: 0.23em;
	}
`

const IconStar = styled(AiFillStar)`
	color: #f7775e;
	font-size: 10px;
	position: absolute;
	top: 5px;
	right: -8px;
`

const NavBarLinks = () => {
	return (
		<>
			{pageList.map(({ link, text, icon }) => (
				<NavItem key={text} activeClassName="navActive" to={link}>
					<span>{text}</span>
					{icon && <IconStar />}
				</NavItem>
			))}
		</>
	)
}

export default NavBarLinks
