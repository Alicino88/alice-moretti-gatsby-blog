import React from "react"
import Navbar from "./Navbar"
import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="content">{children}</div>
    </div>
  )
}

export default Layout
