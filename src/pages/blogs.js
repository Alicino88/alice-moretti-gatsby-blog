import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Title from "../components/Title"
import Topics from "../components/Topics"
import AllBlogPosts from "../components/AllBlogPosts"
import { graphql } from "gatsby"

const Blogs = ({ data }) => {
  const {
    allContentfulBlog: { nodes: blogs },
  } = data
  return (
    <Layout>
      <div>
        <Hero
          title="all blogs"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
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
