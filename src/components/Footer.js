import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-container">
        Copyright&nbsp; <span> Alice Moretti </span>&nbsp; - 2021 | Built
        with&nbsp;
        <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener">
          Gatsby.js
        </a>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  .footer-container {
    height: 80px;
    background-color: rgba(194, 205, 214, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Lato, "Avant Garde", Sans-Serif;
    font-size: 0.9rem;
    font-weight: 300;
    color: hsla(0, 0%, 24%, 1);
    margin-top: 60px;
  }

  span {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: hsla(0, 0%, 24%, 1);
  }

  a:visited {
    color: hsla(0, 0%, 24%, 1);
  }
`
export default Footer
