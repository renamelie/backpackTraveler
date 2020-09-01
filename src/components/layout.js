import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Navbar from './NavBar/NavBar'
import Header from './header'
import Footer from './footer'

const Layout = ({ location, title, children, className }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	// const rootPath = `${__PATH_PREFIX__}/`
	// let header

	// if (location.pathname === rootPath) {
	// 	header = (
	// 		<Header siteTitle={data.site.siteMetadata.title} location={location} />
	// 	)
	// }

	return (
		<>
			<header>
				<Navbar siteTitle={data.site.siteMetadata.title} />
				<Header siteTitle={data.site.siteMetadata.title} location={location} />
			</header>
			<main className={className}>{children}</main>
			<Footer />
		</>
	)
}

export default styled(Layout)`
	/* border: 2px solid pink; */
	margin: 0;
`
