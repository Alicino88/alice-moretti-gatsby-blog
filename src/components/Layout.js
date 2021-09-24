import React from "react"
import Navbar from "./Navbar"
import SideBar from "./SideBar"
import "../assets/css/main.css"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  console.log(isOpen)
  return (
    <div>
      <Navbar toggle={toggle} />
      <SideBar toggle={toggle} isOpen={isOpen} />
      <div className="content">{children}</div>
    </div>
  )
}

export default Layout
