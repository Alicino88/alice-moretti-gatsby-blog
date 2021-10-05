import React from "react"
import { graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

//when creating a page programmatically using gatsby file system route API
//gatsby passes all the data as props. We can see this data by console log them.
const SingleBlog = props => {
  console.log(props)

  //you need to pass to renderRichText function not the raw object itself but the piece that contains it!
  const content = props.data.contentfulBlog.content

  //styling raw content:
  const HeaderTwo = ({ children }) => <h2 className="h2-style">{children}</h2>
  const Code = ({ children }) => <span className="code-style">{children}</span>

  const options = {
    renderMark: {
      [MARKS.CODE]: text => <Code>{text}</Code>,
    },
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => <HeaderTwo>{children}</HeaderTwo>,

      [BLOCKS.EMBEDDED_ASSET]: node => {
        console.log(node.data.target.fixed.src)
        return <img src={node.data.target.fixed.src} />
      },
    },
  }

  //renderRichText takes as arguments the object containing the object with the raw content
  //and the options defining styles and additional assets such as pictures
  const blog = renderRichText(content, options)
  const title = props.data.contentfulBlog.title
  const date = props.data.contentfulBlog.date
  const pathToImage = getImage(props.data.contentfulBlog.picture)
  return (
    <Wrapper>
      <div>
        <div className="header-background"></div>
        <article className="article-container">
          <h1 className="title-style">{title}</h1>
          <p className="paragraph-style">{date}</p>
          <GatsbyImage className="blog-picture" image={pathToImage} />
          <div>{blog}</div>
        </article>
      </div>
    </Wrapper>
  )
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
      picture {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
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

const Wrapper = styled.section`
  .header-background {
    background-color: hsla(206, 20%, 80%, 0.5);
    height: 400px;
  }

  .article-container {
    //padding: 0 400px 0 400px;
    width: 40vw;
    margin: 0 auto;
    margin-top: -250px;
  }

  .title-style {
    border-left: 3px solid hsl(27, 41%, 72%);
    padding-left: 5px;
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .paragraph-style {
    font-family: "Lato";
    margin-bottom: 10px;
    font-size: 0.8rem;
  }

  .blog-picture {
    border-radius: 10px 10px 0 0;
    height: 400px;
  }
  //Raw content style:
  .h2-style {
    color: hsl(206, 54%, 29%);
    margin: 20px 0 20px 0;
    font-family: Lato;
  }

  .code-style {
    display: block;
  }
`

export default SingleBlog
