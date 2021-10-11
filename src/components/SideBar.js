import React from "react"
import styled from "styled-components"
import { IoMdClose } from "react-icons/io"
import { Link } from "gatsby"

const SideBar = ({ toggle, isOpen }) => {
  return (
    /* sidebar class is always applied. When isOpen is true the the class
      showSidebar is also applied*/
    <Wrapper>
      <aside className={`sidebar ${isOpen ? "showSidebar" : ""}`}>
        <button aria-label="Close" className="close-btn" onClick={toggle}>
          <IoMdClose />
        </button>
        <div className="sidebar-container">
          <Link to="/" className="sidebar-links" onClick={toggle}>
            Home
          </Link>
          <Link to="/blogs" className="sidebar-links" onClick={toggle}>
            Blogs
          </Link>
        </div>
      </aside>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffff;
    transition: all 0.3s linear;
    display: grid;
    padding-left: 2rem;
    z-index: 999;
    /*when the isOpen state (see Layout component) is equal to false, the sidebar is completely hidden 
  by translating it of -100% along the x axis. When, isOpen is true, the showSidebar class is applied: the transition is applied
  to the transform property, the sidebar is translated along the x axis so to be visible. */
    transform: translateX(-100%);
    visibility: hidden;
  }
  .showSidebar {
    transform: translateX(0);
    visibility: visible;
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: transparent;
    font-size: 3rem;
    cursor: pointer;
    color: hsl(206 54% 29%);
  }
  .sidebar-container {
    margin-top: 150px;
  }
  .sidebar-links {
    display: block;
    text-decoration: none;
    font-family: Lato, "Avant Garde", Sans-Serif;
    color: hsl(206 54% 29%);
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`
export default SideBar
