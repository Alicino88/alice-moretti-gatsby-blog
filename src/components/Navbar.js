import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
//icons from https://react-icons.github.io/react-icons/
import { FiAlignJustify } from "react-icons/fi"

const Navbar = () => {
  return (
    <Wrapper>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-links">
            <Link className="nav-link">Home</Link>
            <Link className="nav-link">All blogs</Link>
          </div>
          <button className="nav-btn">
            <FiAlignJustify />
          </button>
        </div>
      </nav>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .navbar {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    height: 5rem;
  }
  .nav-center {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 2rem;
  }
  .nav-links {
    visibility: hidden;
  }
  .nav-link {
    text-transform: uppercase;
    margin-right: 2rem;
    font-family: Lato;
    color: #3e3e3e;
  }

  .nav-btn {
    background-color: transparent;
    border: none;
  }
  .nav-btn svg {
    font-size: 1.5rem;
    color: #3e3e3e;
  }

  @media screen and (min-width: 768px) {
    .nav-btn {
      display: none;
    }
    .nav-links {
      visibility: visible;
      display: block;
    }
  }
`
export default Navbar
