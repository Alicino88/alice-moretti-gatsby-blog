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
        <p style={{ fontFamily: "Lato" }}>
          I am Alice, a{" "}
          <a
            href="https://www.alicemoretti.com/"
            target="_blank"
            rel="noopener"
            className="link-style"
          >
            frontend developer
          </a>{" "}
          based in Helsinki. I love coding and writing about it.
        </p>
        <div className="icon-container">
          <a
            href="
    https://github.com/Alicino88?tab=repositories"
            target="_blank"
            rel="noopener"
            alt="gitHub icon"
            aria-label="Github profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/alicemoretti/"
            target="_blank"
            rel="noopener"
            alt="Linkedin icon"
            aria-label="Linkedin profile"
          >
            <FaLinkedin />
          </a>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .aboutContainer {
    text-align: center;
    padding: 1.5rem 2.3rem;
    width: 320px;
    margin: auto;
  }

  .title-container {
    position: relative;
    text-align: center;
    margin-bottom: 1.25rem;
  }

  .icon-container {
    display: flex;
    width: 30%;
    margin: auto;
    justify-content: space-around;
    margin-top: 1.5rem;
  }
  .icon-container svg {
    font-size: 1.5rem;
    color: hsla(206, 52%, 44%, 1);
  }

  h3 {
    font-family: Lato;
    font-weight: normal;
    font-size: 1rem;
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

  .link-style {
    color: hsl(206, 54%, 29%);
    font-weight: bold;
    text-decoration: none;
  }
`

export default About
