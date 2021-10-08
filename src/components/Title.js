import React from "react"
import styled from "styled-components"

const Title = () => {
  return (
    <Wrapper>
      <div className="title-container">
        <h2 className="title-style">topics</h2>
        <div className="line"></div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .title-container {
    position: relative;
    width: 200px;
    margin: 0 auto 2rem auto;
    text-align: center;
  }
  .title-style {
    font-family: Lato, "Avant Garde", Sans-Serif;
    font-size: 36px;
    background-color: #ffff;
    padding: 0 0.5rem;
    display: inline-block;
    font-weight: normal;
    text-transform: uppercase;
    color: hsla(206, 54%, 29%, 1);
  }
`
export default Title
