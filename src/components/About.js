import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const About = () => {
  return (
    <Wrapper>
      <section className="aboutContainer">
        <div className="title-container">
          <h3>About me</h3>
          <div className="line"></div>
        </div>
        <StaticImage
          src="../assets/images/alice_moretti.png"
          alt="Alice Moretti"
          placeholder="blurred"
          layout="constrained"
          className="image-style"
        />
        <p>
          I am Alice, a frontend developer who enjoys writing about coding
          related topics
        </p>
        <div className="icon-container">
          <FaGithub />
          <FaLinkedin />
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .aboutContainer {
    text-align: center;
    padding: 0 2.3rem;
  }

  .title-container {
    position: relative;
    text-align: center;
    margin-bottom: 1.25rem;
  }

  .line {
    position: absolute;
    top: 50%;
    left: 0px;
    width: 100%;
    height: 1.5px;
    transform: translateY(-50%);
    background: hsla(206, 52%, 44%, 1);
    z-index: -1;
  }
  .icon-container {
    display: flex;
    width: 30%;
    margin: auto;
    justify-content: space-between;
    margin-top: 1rem;
  }
  .icon-container svg {
    font-size: 1.5rem;
    color: hsla(206, 52%, 44%, 1);
  }

  h3 {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    text-transform: uppercase;
    color: hsla(206, 54%, 29%, 1);
    background-color: #ffff;
    margin-bottom: 0px;
    display: inline-block;
    padding: 0 0.5rem;
  }

  .image-style {
    width: 150px;
    margin-bottom: 1rem;
    //The box-shadow property creates a rectangular shadow behind an element's entire box,
    //while the drop-shadow() filter function creates a shadow that conforms to the shape (alpha channel) of the image itself.
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`

export default About
