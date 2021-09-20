import React from "react"
import styled from "styled-components"
import picture from "../assets/images/hp_pic.svg"
import { StaticImage } from "gatsby-plugin-image"

const Hero = ({ title, subtitle, homePic }) => {
  return (
    <Wrapper>
      <header className="header-style">
        <div className="header-center">
          <div className="text-container">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
          </div>
          {homePic && (
            <img src={picture} alt="girl coding" className="header-pic" />
          )}
        </div>
      </header>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .header-style {
    background-color: rgba(194, 205, 214, 0.5);
    height: 60vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header-center {
    width: 100%;
    max-width: 1170px;
    padding: 2rem;
    display: flex;
  }

  .text-container {
    width: 40%;
  }

  h1 {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 43px;
    text-transform: uppercase;
    color: #3e3e3e;
    margin-bottom: 20px;
  }

  h3 {
    font-family: Playfair Display;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 40px;
    color: #3e3e3e;
  }

  .header-pic {
    width: 900px;
    position: absolute;
    right: 40px;
    bottom: -45px;
  }
`
export default Hero
