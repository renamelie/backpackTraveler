import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Carousel from '../components/Carousel'
import MyEssentials from '../components/MyEssentials'
import Sponsors from '../components/Sponsors'
import TopCategories from '../components/TopCategories'
import CarouselSoloPlus from '../components/CarouselSoloPlus'

const BlogIndex = ({ data, location, className }) => {
	const siteTitle = data.site.siteMetadata.title

	return (
		<Layout location={location} title={siteTitle}>
			<SEO title="All posts" />
			<Carousel />
			<MyEssentials />
			<TopCategories />
			<CarouselSoloPlus />
			<Sponsors />
		</Layout>
	)
}

export default styled(BlogIndex)`
	ul {
		margin-bottom: 3rem;
	}
`

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`
