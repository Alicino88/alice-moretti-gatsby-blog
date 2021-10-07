import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { FiArrowRight } from "react-icons/fi"
import SeeAllBtn from "../components/SeeAllBtn"
import { Link } from "gatsby"

const query = graphql`
  {
    allContentfulBlog(
      sort: { fields: date, order: DESC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        date(formatString: "MMMM Do, YYYY")
        featured
        id
        title
        slug
        topics
        textPreview {
          textPreview
        }
        picture {
          title
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

const BlogPosts = () => {
  const data = useStaticQuery(query)
  const {
    allContentfulBlog: { nodes: blogs },
  } = data
  //console.log(blogs)

  return (
    <div>
      {blogs.map(blog => {
        const pathToImage = getImage(blog.picture)
        return (
          <Wrapper key={blog.title}>
            <article className="article-container">
              <GatsbyImage
                image={pathToImage}
                alt={blog.picture.title}
                className="blog-img"
              ></GatsbyImage>
              <div className="text-container">
                <div className="topic-container">
                  {blog.topics.map(topic => {
                    return (
                      <button className="btn-topic" key={topic}>
                        {topic}
                      </button>
                    )
                  })}
                </div>

                <h1 className="title-style">{blog.title}</h1>

                <div className="underline"></div>
                <p>{blog.textPreview.textPreview}</p>
                <Link to={`/${blog.slug}`} className="link">
                  <div className="continue-reading-container">
                    <p className="continue-reading-text">Continue reading</p>
                    <button className="btn-arrow">
                      <FiArrowRight />
                    </button>
                  </div>
                </Link>
                <footer className="date-container">
                  <p className="date">{blog.date}</p>
                </footer>
              </div>
            </article>
          </Wrapper>
        )
      })}
      <SeeAllBtn />
    </div>
  )
}

const Wrapper = styled.section`
  .blog-img {
    width: 100%;
    border-radius: 5px;
  }

  .text-container {
    padding: 2rem 1rem 4rem 1rem;
    text-align: center;
  }

  .title-style {
    text-align: center;
    margin-bottom: 0.8rem;
  }

  .underline {
    width: 6rem;
    height: 2px;
    margin-left: 0px;
    background: hsla(207, 20%, 80%, 0.5);
    margin-bottom: 1rem;
    margin: auto;
    margin-bottom: 20px;
  }

  .topic-container {
    display: flex;
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 939px) {
    .continue-reading-container {
      justify-content: center;
    }
  }

  @media (min-width: 700px) {
    h1 {
      font-size: 1.5rem;
    }

    .text-container {
      padding: 2rem 2rem 4rem 2rem;
    }
  }
  @media (min-width: 940px) {
    .article-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-bottom: 70px;
    }
    .topic-container {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 1rem;
    }
    .title-style {
      text-align: start;
    }

    .underline {
      margin-left: 0;
    }
    .text-container {
      padding: 1rem 2rem;
      text-align: left;
    }

    .date-container {
      margin-top: 3.5rem;
    }
  }
`

export default BlogPosts
