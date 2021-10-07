import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

const Error = () => {
  return (
    <Layout>
      <Wrapper>
        <div className="text-container">
          <div className="owl-container">
            <StaticImage
              placeholder="blurred"
              layout="fixed"
              src="../assets/images/owl.png"
              alt="owl"
            />
            <h2 className="h2-style">Oops...</h2>
          </div>
          <h4 className="h4-style">
            The page you are looking for doesn't exist
          </h4>
        </div>
      </Wrapper>
    </Layout>
  )
}
const Wrapper = styled.section`
  background-color: rgba(194, 205, 214, 0.5);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .text-container {
    text-align: center;
  }

  .owl-container {
    display: flex;
  }

  .h2-style {
    margin-bottom: 30px;
  }
`
export default Error
