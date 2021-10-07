import React from "react"
import styled from "styled-components"
import { FiArrowRight } from "react-icons/fi"
import { Link } from "gatsby"

const SeeAllBtn = () => {
  return (
    <Wrapper>
      <Link to="/blogs" style={{ textDecoration: "none" }}>
        <button className="btn-style">
          <p className="see-all-text">see all</p>
          <FiArrowRight className="arrow-style" />
        </button>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  margin-bottom: 5rem;
  .btn-style {
    background: #3678ab;
    border: 2px solid #3678ab;
    box-sizing: border-box;
    border-radius: 10px;
    color: #ffff;
    padding: 0.3rem 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .see-all-text {
    font-family: Lato;
    font-size: 1rem;
    text-transform: uppercase;

    color: #ffff;
  }
  .arrow-style {
    font-size: 2rem;
  }

  @media (min-width: 1176px) {
    display: block;
    .btn-style {
      padding: 0.7rem 1.4rem;
      background: transparent;
      color: #3678ab;
    }

    .see-all-text {
      color: #3678ab;
    }

    .btn-style:hover {
      background: rgba(194, 205, 214, 0.5);
    }
  }
`

export default SeeAllBtn
