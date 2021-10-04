import React from "react"
import { graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

//when creating a page programmatically using gatsby file system route API
//gatsby passes a lot of useful information (props) we can see by console log the.
const SingleBlog = props => {
  console.log(props)

  //you need to pass to renderRichText function not the raw property but the piece that contains it!
  const raw = props.data.contentfulBlog.content

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        console.log(node.data.target.fixed.src)
        return <img src={node.data.target.fixed.src} />
      },
    },
  }

  //renderRichText takes the object containing the raw content and the options defining styles and additional
  //assets such as pictures
  const blog = renderRichText(raw, options)

  return <div>{blog}</div>
}

/*it seems that the key to fetch the images was to manually remove the children node from the query:
references {
        children {
          ... on ContentfulAsset {

https://www.gatsbyjs.com/plugins/gatsby-source-contentful/
*/
export const query = graphql`
  query getSingleBlog($slug: String) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      contentful_id
      date(formatString: "MMMM Do, YYYY")
      content {
        raw
        references {
          ... on ContentfulAsset {
            id
            contentful_id
            __typename
            title
            description
            fixed {
              src
              srcSet
              width
              height
            }
          }
        }
      }
    }
  }
`

export default SingleBlog
