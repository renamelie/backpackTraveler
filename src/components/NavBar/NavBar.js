import React, { useState } from 'react'
import NavBarLinks from './NavBarLinks'
import Logo from './Logo'
import styled from 'styled-components'

import Social from './Social'

const Navigation = styled.nav`
	background-color: rgba(247, 242, 238, 1);
	position: relative;
	display: flex;
	justify-content: space-between;
	height: 60px;
	margin: 0 auto;
	padding: 0 5vw;
	z-index: 9999;
	align-self: center;

	@media (max-width: 999px) {
		background-color: #fff;
		border-bottom: 1px solid #f2f2f2;
		position: sticky;
		height: 60px;
		top: 0;
		left: 0;
		right: 0;
		left: 0;
	}
`

const Toggle = styled.div`
	display: none;
	height: 100%;
	cursor: pointer;
	z-index: 999;

	@media (max-width: 999px) {
		display: flex;
	}
`

const Navbox = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 100%;

	@media (max-width: 999px) {
		background-color: #fff;
		position: fixed;
		flex-direction: column;
		justify-content: flex-start;
		padding-top: 60px;
		width: 50%;
		transition: all 0.3s ease-in;
		left: ${props => (props.open ? '100%' : '50%')};
		box-shadow: 0 1px 23.28px 0.72px rgba(255, 51, 102, 0.07);
	}
`

const Hamburger = styled.div`
	background-color: #111;
	width: 20px;
	height: 2px;
	transition: all 0.3s linear;
	align-self: center;
	position: relative;
	transform: ${props => (props.open ? 'rotate(-45deg)' : 'inherit')};

	::before,
	::after {
		width: 20px;
		height: 2px;
		background-color: #111;
		content: '';
		position: absolute;
		transition: all 0.3s linear;
	}

	::before {
		transform: ${props =>
			props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)'};
		top: -7px;
	}

	::after {
		opacity: ${props => (props.open ? '0' : '1')};
		transform: ${props => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
		top: 7px;
	}
`

const NavBar = ({ siteTitle }) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<Navigation>
			<Logo siteTitle={siteTitle} />
			<Toggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? <Hamburger open /> : <Hamburger />}
			</Toggle>
			{isOpen ? (
				<Navbox>
					<NavBarLinks />
				</Navbox>
			) : (
				<Navbox open>
					<NavBarLinks />
				</Navbox>
			)}
			<Social />
		</Navigation>
	)
}

export default NavBar
