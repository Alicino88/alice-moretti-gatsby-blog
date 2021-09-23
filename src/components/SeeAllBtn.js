import React from "react"
import styled from "styled-components"
import { FiArrowRight } from "react-icons/fi"

const SeeAllBtn = () => {
  return (
    <Wrapper>
      <button className="btn-style">
        <p className="see-all-text">see all</p>
        <FiArrowRight className="arrow-style" />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .btn-style {
    background: transparent;
    border: 1px solid #3678ab;
    box-sizing: border-box;
    border-radius: 10px;
    color: #3678ab;
    padding: 0.8rem 1.5rem;
    display: flex;
    align-items: center;
  }

  .btn-style:hover {
    background: rgba(194, 205, 214, 0.5);
  }
  .see-all-text {
    font-family: Lato;
    font-size: 18px;
    text-transform: uppercase;
    color: #3678ab;
  }
  .arrow-style {
    font-size: 2rem;
  }
`

export default SeeAllBtn
