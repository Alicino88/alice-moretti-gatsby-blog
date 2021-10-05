import React from "react"
import { graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

//when creating a page programmatically using gatsby file system route API
//gatsby passes all the data as props. We can see this data by console log them.
const SingleBlog = props => {
  console.log(props)

  //you need to pass to renderRichText function not the raw object itself but the piece that contains it!
  const content = props.data.contentfulBlog.content

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
  const blog = renderRichText(content, options)

  return <div>{blog}</div>
}

/*it seems that the key to fetch the images was to manually remove the children node from the query:
references {
        children {
          ... on ContentfulAsset {
Also "contentful_id" "__typename" are necessary to access the data and render them
The documentation was very little on the topic:
https://www.gatsbyjs.com/plugins/gatsby-source-contentful/
https://www.contentful.com/developers/docs/tutorials/general/rich-text-and-gatsby/
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
