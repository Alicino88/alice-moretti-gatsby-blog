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
          <div className="picture-container">
            {homePic && (
              <img src={picture} alt="girl coding" className="header-pic" />
            )}
          </div>
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
    width: 90%;
  }

  h1 {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 43px;
    text-transform: uppercase;
    color: #3e3e3e;
    margin-bottom: 20px;
  }

  h3 {
    font-family: Playfair Display;
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 40px;
    color: #3e3e3e;
  }

  .header-pic {
    display: none;
  }

  @media (min-width: 768px) {
    .text-container {
      width: 70%;
    }
    .header-pic {
      display: block;
      width: 500px;
      position: absolute;
      right: 40px;
      bottom: 0px;
      z-index: -1;
    }

    @media (min-width: 900px) {
      .text-container {
        width: 40%;
      }
      .header-pic {
        z-index: 0;
        bottom: 0px;
      }

      @media (min-width: 1170px) {
        .header-pic {
          width: 600px;
        }
        .picture-container {
          width: 60%;
        }
      }
      @media (min-width: 1440px) {
        .header-pic {
          width: 700px;
          margin-right: 50px;
        }
      }
    }
  }
`
export default Hero
