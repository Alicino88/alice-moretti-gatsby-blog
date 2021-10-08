import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-container">
        <p className="footer-content">
          Copyright&nbsp; <span> Alice Moretti </span>&nbsp; - 2021 | Built
          with&nbsp;
          <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener">
            Gatsby.js
          </a>
          &nbsp;and inspired by&nbsp;
          <a
            href="https://gatsby-mdx-blog-course-project.netlify.app/"
            target="_blank"
            rel="noopener"
          >
            MDX blog
          </a>
        </p>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  .footer-container {
    height: auto;
    background-color: rgba(194, 205, 214, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
  }

  .footer-content {
    font-family: Lato, "Avant Garde", Sans-Serif;
    font-size: 0.9rem;
    font-weight: 300;
    color: hsla(0, 0%, 24%, 1);
    text-align: center;
    padding: 30px 20px 30px 20px;
  }

  span {
    font-weight: bold;
  }

  a {
    color: hsla(0, 0%, 24%, 1);
  }

  a:visited {
    color: hsla(0, 0%, 24%, 1);
  }
`
export default Footer
