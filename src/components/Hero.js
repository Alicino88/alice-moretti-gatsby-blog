import React from "react"
import styled from "styled-components"
import picture from "../assets/images/hp_pic.svg"
import { StaticImage } from "gatsby-plugin-image"

const Hero = ({ title, subtitle, homePic, blogsPic }) => {
  return (
    <Wrapper>
      <header className="header-style">
        {blogsPic && (
          <StaticImage
            src="../assets/images/hero.jpeg"
            alt="hands on computer"
            className="blogs-pic"
            placeholder="tracedSVG"
            //by adding the layout property the image became visible also on small screens
            layout="fullWidth"
          />
        )}
        <div className="header-center">
          <div>
            <div className="text-container">
              <h1>{title}</h1>
              <h3>{subtitle}</h3>
            </div>
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
    height: 70vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .blogs-pic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70vh;
    z-index: -1;
    opacity: 0.4;
  }

  .header-center {
    width: 100%;
    max-width: 1170px;
    padding: 2rem;
    display: flex;
    align-items: center;
    position: relative;
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
      .header-pic {
        z-index: 0;
        bottom: 0px;
      }

      @media (min-width: 1170px) {
        .header-pic {
          width: 700px;
        }
        .picture-container {
          width: 60%;
        }
      }
      @media (min-width: 1440px) {
        .header-pic {
          right: 0;
          width: 800px;
        }
      }
    }
  }
`
export default Hero
