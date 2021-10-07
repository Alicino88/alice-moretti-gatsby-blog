import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FiArrowRight } from "react-icons/fi"
import styled from "styled-components"
import { Link } from "gatsby"

const AllBlogPosts = ({ blogs }) => {
  return (
    <Wrapper>
      <div className="blog-container">
        {blogs.map(blog => {
          const pathToImage = getImage(blog.picture)
          return (
            <Link to={`/${blog.slug}`} className="link" key={blog.title}>
              <article className="article-container">
                <GatsbyImage
                  image={pathToImage}
                  placeholder="blurred"
                  className="picture-style"
                  alt=""
                />
                <div className="text-container">
                  <h1 className="title-style">{blog.title}</h1>

                  <p>{blog.textPreview.textPreview}</p>
                  <div className="continue-reading-container">
                    <p className="continue-reading-text">Continue reading</p>
                    <button className="btn-arrow">
                      <FiArrowRight />
                    </button>
                  </div>
                  <footer className="date-container">
                    <p className="date">{blog.date}</p>
                  </footer>
                </div>
              </article>
            </Link>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .blog-container {
    width: 100%;
    max-width: 1270px;
    padding: 1.2rem;
    padding-bottom: 6rem;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    column-gap: 1.5rem;
    row-gap: 2rem;
    justify-content: center;
  }

  .article-container {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  .article-container:hover {
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.25);
  }

  .picture-style {
    width: 100%;
    height: 230px;
    border-radius: 10px 10px 0 0;
  }
  .text-container {
    padding: 1.5rem 1rem;
  }

  .title-style {
    margin-bottom: 1rem;
  }
`

export default AllBlogPosts
