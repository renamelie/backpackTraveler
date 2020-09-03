import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Navbar from './NavBar/NavBar'
import Header from './header'
import Footer from './footer'
import ScrollTop from '../components/ScrollTo'

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
				<Header siteTitle={data.site.siteMetadata.title} location={location} />
			</header>
			<ScrollTop />
			<main className={className}>{children}</main>
			<Footer />
		</>
	)
}

export default styled(Layout)`
	margin: 0;
`
