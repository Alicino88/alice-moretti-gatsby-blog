//this page displays all the blog posts from the latest to the oldest
//the query is done below and the data are passed as props to the AllBlogPosts component.

/*How to create a page for each different topic:
I have used the gatsby-node.js file (created in the root folder) and then the 
createPage function https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node#createPages.
How it works:
1.user clicks on the topic tag that has a link to={`/blogs/${topic}`} (see Topics.js component)
2.gatsby-node.js defines that when user clicks on this link he goes to `src/templates/topic-template.js`
3.topic-template.js looks like blogs.js exept that the blogs are filtered by topic
4.A page query in topic-template.js is done using the $topic variable and only the relevant blogs are displayed
*/

import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Title from "../components/Title"
import Topics from "../components/Topics"
import AllBlogPosts from "../components/AllBlogPosts"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
const Blogs = ({ data }) => {
  const {
    allContentfulBlog: { nodes: blogs },
  } = data
  return (
    <Layout>
      <SEO title=" All Blogs | Alice Moretti" description="this is the blog" />
      <div>
        <Hero
          title="all blogs"
          subtitle="Writing is a great way to understand whether you have actually understood!"
          blogsPic
        />
        <div className="main-container-blogs">
          <Title />
          <Topics />
          <AllBlogPosts blogs={blogs} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulBlog(sort: { fields: date, order: DESC }) {
      nodes {
        date(formatString: "MMMM Do, YYYY")
        id
        title
        slug
        topics
        textPreview {
          textPreview
        }
        picture {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 436
            height: 369
          )
        }
      }
    }
  }
`

export default Blogs
