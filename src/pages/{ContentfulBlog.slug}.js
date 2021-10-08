//to render the rich text field from Contentful it was necessary to use the renderRichText method
//together with the "@contentful/rich-text-types" package.
//Overall the steps are:
//1.Fetching the raw content
//2.Render it with renderRichText
//3.style it using BLOCKS and MARKS

import React from "react"
import { graphql } from "gatsby"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

//By creating the page {ContentfulBlog.slug}.js Gatsby creates automatically a page for each slug
//file system route API has been used for this https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/
//I haven't used the slugify package as Gatbsy uses sindresorhus/slugify to create the slug in {ContentfulBlog.slug}.js
//which works with a different logic other than slugify. Instead, I have created a slug field in Contentful.

//For example, in BlogPosts.js, to create a Link to the single blog page,
//I used "Link to={`/${blog.slug}`}"", the slug is "matched" to the one of {ContentfulBlog.slug}.js
//and slug is also passed as variable to the query.
//This allows to fetch the content only for that specific blog post.

//when creating a page programmatically using gatsby file system route API
//gatsby passes all the data as props. We can see this data by console log them.
const SingleBlog = props => {
  //console.log(props)

  //you need to pass to renderRichText function not the raw object itself but the piece that contains it!
  const content = props.data.contentfulBlog.content

  //styling raw content:
  const HeaderTwo = ({ children }) => <h2 className="h2-style">{children}</h2>
  const HeaderFour = ({ children }) => <h4 className="h4-style">{children}</h4>
  const Code = ({ children }) => (
    <pre>
      <span className="code-style">{children}</span>
    </pre>
  )
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
      //[INLINES.HYPERLINK]: (node, children) => (
      // <a target="_blank">{children}</a>
      //),
      [BLOCKS.HEADING_2]: (node, children) => <HeaderTwo>{children}</HeaderTwo>,
      [BLOCKS.HEADING_4]: (node, children) => (
        <HeaderFour>{children}</HeaderFour>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
      //Embedded_asset are the pictures contained inside the blog
      [BLOCKS.EMBEDDED_ASSET]: node => {
        //(node)
        //console.log(node.data.target.fixed.src)
        return (
          <div className="picture-container">
            <img src={node.data.target.fixed.src} className="blog-pic" alt="" />
            <p className="small-text" style={{ textAlign: "center" }}>
              {node.data.target.description}
            </p>
          </div>
        )
      },
    },
  }

  //{`${title}` | "by Alice Moretti"}
  //renderRichText takes as arguments the object containing the object with the raw content
  //and the options defining styles and additional assets such as pictures
  const blog = renderRichText(content, options)
  const title = props.data.contentfulBlog.title
  const metaDescription = props.data.contentfulBlog.metaDescription
  const date = props.data.contentfulBlog.date
  const pathToImage = getImage(props.data.contentfulBlog.picture)
  return (
    <Layout>
      <SEO
        title={`${title}` + " | by Alice Moretti"}
        description={metaDescription}
      />
      <Wrapper>
        <div>
          <div className="header-background"></div>
          <article className="article-container">
            <h1 className="title-style">{title}</h1>
            <p className="small-text">{date}</p>
            <GatsbyImage
              className="blog-main-picture"
              image={pathToImage}
              alt=""
            />
            <div>{blog}</div>
          </article>
        </div>
      </Wrapper>
    </Layout>
  )
}

/*it seems that the key to fetch the images (ContentfulAsset) was to manually remove the children 
node from the query:
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
      metaDescription
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
      max-width: 680px;
      margin: 0 auto;
      margin-top: -250px;
    }
    .blog-main-picture {
      border-radius: 10px 10px 0 0;
      height: 200px;
      margin-bottom: 40px;
    }
    .code-style {
      display: block;
      font-weight: 300;
      font-size: 0.9rem;
      font-family: Source Code Pro;
      background-color: hsla(206, 20%, 80%, 0.23);
      padding: 20px 30px 20px 20px;
      line-height: 1.3;
      margin-top: 15px;
      margin-bottom: 15px;
      //Properties necessary so that the code doesn't overflow the container
      white-space: pre-wrap;
      overflow-wrap: break-word;
    }
  }

  @media (min-width: 520px) {
    .code-style {
      padding: 20px 100px 20px 20px;
    }
  }
  @media (min-width: 800px) {
    .article-container {
      width: 70vw;
    }
    .blog-main-picture {
      height: 400px;
    }
    p {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 1230px) {
    .article-container {
      width: 45vw;
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
    font-family: "Lato", "Avant Garde", Sans-Serif;
    margin-bottom: 10px;
    font-size: 0.8rem;
  }

  //Raw content style:
  .h2-style {
    font-size: 1.5rem;
  }

  .paragraph-style {
    margin-bottom: 20px;
  }

  .bold-style {
    font-weight: bold;
  }

  .picture-container {
    display: flex;
    flex-direction: column;
  }
  .blog-pic {
    margin: auto;
    width: 300px;
  }

  a {
    color: hsla(0, 0%, 24%, 1);
  }
`

export default SingleBlog
