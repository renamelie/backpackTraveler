import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Navbar from './NavBar/NavBar'
import Header from './header'

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

	return (
		<>
			<header>
				<Navbar siteTitle={data.site.siteMetadata.title} />
				<Header siteTitle={data.site.siteMetadata.title} />
			</header>
			<main className={className}>{children}</main>
			<footer>
				© {new Date().getFullYear()}, Built with
				{` `}
				<a href="https://www.gatsbyjs.org">Gatsby</a>
			</footer>
		</>
	)
}

export default styled(Layout)`
	margin: 0 auto;
	padding: 0 1.0875rem;
`
