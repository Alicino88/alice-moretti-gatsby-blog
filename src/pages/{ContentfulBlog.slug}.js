import React from "react"
import { graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Text = ({ children }) => <p className="align-center">{children}</p>

//when creating a page programmatically using gatsby file system route API
//gatsby passes a lot of useful information (props) we can see by console log the.
const SingleBlog = props => {
  console.log(props)

  return (
    <div>
      <h1>{props.data.contentfulBlog.title}</h1>
      <p>{props.data.contentfulBlog.date}</p>
    </div>
  )
}

export const query = graphql`
  query getSingleBlog($slug: String) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      date(formatString: "MMMM Do, YYYY")
      content {
        raw
        references {
          children {
            ... on ContentfulAsset {
              fixed(width: 10, height: 10) {
                src
                srcSet
              }
              __typename
              contentful_id
            }
            ... on ContentfulBlog {
              id
              __typename
              contentful_id
              title
              slug
            }
          }
        }
      }
    }
  }
`
export default SingleBlog
