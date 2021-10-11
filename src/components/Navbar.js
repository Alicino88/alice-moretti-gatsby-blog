import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
//icons from https://react-icons.github.io/react-icons/
import { FiAlignJustify } from "react-icons/fi"

const Navbar = ({ toggle }) => {
  return (
    <Wrapper>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-links">
            <Link to="/" className="nav-link" activeClassName="active-link">
              Home
            </Link>
            <Link
              to="/blogs"
              className="nav-link"
              activeClassName="active-link"
            >
              Blog
            </Link>
          </div>
          {/*when clicking on the button, the toggle function is fired. This function, defined inside the 
          Layout component toggles between open and close state for the SideBar. */}
          <button aria-label="Open menu" className="nav-btn" onClick={toggle}>
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
    z-index: 1;
    position: relative;
  }
  .nav-center {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 2rem;
    max-width: 1270px;
  }
  .nav-links {
    visibility: hidden;
  }
  .nav-link {
    text-transform: uppercase;
    margin-right: 2rem;
    font-family: Lato, "Avant Garde", Sans-Serif;
    color: #3e3e3e;
    text-decoration: none;
  }

  .active-link {
    border-bottom: 4px solid #b28f70;
    padding-bottom: 5px;
  }

  .nav-btn {
    background-color: transparent;
    border: none;
  }
  .nav-btn svg {
    font-size: 2rem;
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
