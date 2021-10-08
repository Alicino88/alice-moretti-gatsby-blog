import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Title from "../components/Title"
import Topics from "../components/Topics"
import AllBlogPosts from "../components/AllBlogPosts"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

const TopicTemplate = props => {
  //console.log(props)
  const {
    data: {
      allContentfulBlog: { nodes: blogs },
    },
  } = props
  return (
    <Layout>
      <SEO />
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
  query GetTopics($topic: String) {
    allContentfulBlog(
      sort: { fields: date, order: DESC }
      filter: { topics: { eq: $topic } }
    ) {
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
export default TopicTemplate
