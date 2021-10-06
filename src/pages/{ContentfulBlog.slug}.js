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
  const HeaderFour = ({ children }) => <h4 className="h4-style">{children}</h4>
  const Code = ({ children }) => <span className="code-style">{children}</span>
  const Bold = ({ children }) => <span className="bold-style">{children}</span>
  const Paragraph = ({ children }) => (
    <p className="paragraph-style">{children}</p>
  )

  const options = {
    renderMark: {
      [MARKS.CODE]: text => <Code>{text}</Code>,
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => <HeaderTwo>{children}</HeaderTwo>,
      [BLOCKS.HEADING_4]: (node, children) => (
        <HeaderFour>{children}</HeaderFour>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
      //Embedded_asset are the pictures contained inside the blog
      [BLOCKS.EMBEDDED_ASSET]: node => {
        console.log(node)
        console.log(node.data.target.fixed.src)
        return (
          <div className="picture-container">
            <img src={node.data.target.fixed.src} className="blog-pic" />
            <p className="small-text" style={{ textAlign: "center" }}>
              {node.data.target.description}
            </p>
          </div>
        )
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
          <p className="small-text">{date}</p>
          <GatsbyImage className="blog-main-picture" image={pathToImage} />
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

  @media (min-width: 330px) {
    .article-container {
      width: 85vw;
      margin: 0 auto;
      margin-top: -250px;
    }
    .blog-main-picture {
      border-radius: 10px 10px 0 0;
      height: 200px;
    }
    .code-style {
      display: block;
      font-weight: 300;
      font-size: 0.8rem;
      font-family: Source Code Pro;
      background-color: hsla(206, 20%, 80%, 0.23);
      padding: 20px 50px 20px 20px;
      line-height: 1.3;
    }
  }

  @media (min-width: 520px) {
    .code-style {
      padding: 20px 150px 20px 20px;
    }
  }
  @media (min-width: 800px) {
    .article-container {
      width: 70vw;
    }
    .blog-main-picture {
      height: 400px;
    }
  }

  @media (min-width: 1230px) {
    .article-container {
      width: 45vw;
    }
  }

  @media (min-width: 1500px) {
    .article-container {
      width: 40vw;
    }
  }

  .title-style {
    border-left: 3px solid hsl(27, 41%, 72%);
    padding-left: 5px;
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .small-text {
    font-family: "Lato";
    margin-bottom: 10px;
    font-size: 0.8rem;
  }

  //Raw content style:
  .h2-style {
    color: hsl(206, 54%, 29%);
    margin: 20px 0 0 0;
    font-family: Lato;
  }

  .h4-style {
    font-family: Lato;
    font-size: 1.2rem;
    color: hsla(0, 0%, 24%, 1);
  }

  .paragraph-style {
    margin-bottom: 20px;
  }

  .bold-style {
    font-weight: bold;
    color: hsla(0, 0%, 24%, 1);
  }

  .picture-container {
    display: flex;
    flex-direction: column;
  }
  .blog-pic {
    margin: auto;
    width: 300px;
  }
`

export default SingleBlog
