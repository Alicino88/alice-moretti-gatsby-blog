import React from "react"
import { graphql } from "gatsby"

const TopicTemplate = props => {
  console.log(props)
  return <div>test topic</div>
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
