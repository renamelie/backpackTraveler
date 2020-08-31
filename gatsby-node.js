const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions

	const blogPost = path.resolve(`./src/templates/blog-post.js`)
	const categoryPost = path.resolve(`./src/templates/category-post.js`)
	const result = await graphql(
		`
			{
				allMarkdownRemark(
					sort: { fields: [frontmatter___date], order: DESC }
					limit: 1000
				) {
					edges {
						node {
							fields {
								slug
							}
							frontmatter {
								title
								posttype
							}
						}
					}
				}
			}
		`
	)

	if (result.errors) {
		throw result.errors
	}

	// Create blog posts pages.
	const posts = result.data.allMarkdownRemark.edges

	posts.forEach((post, index) => {
		const previous = index === posts.length - 1 ? null : posts[index + 1].node
		const next = index === 0 ? null : posts[index - 1].node

		console.log(post.node.frontmatter.posttype)
		if (post.node.frontmatter.posttype === 'category') {
			createPage({
				path: post.node.fields.slug,
				component: categoryPost,
				context: {
					slug: post.node.fields.slug,
					previous,
					next,
				},
			})
		} else {
			createPage({
				path: post.node.fields.slug,
				component: blogPost,
				context: {
					slug: post.node.fields.slug,
					previous,
					next,
				},
			})
		}
	})
}

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions

	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode })
		createNodeField({
			name: `slug`,
			node,
			value,
		})
	}
}
