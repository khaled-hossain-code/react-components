import React from "react"

function Navbar(props) {
  return (
    <nav className="facebook-navbar">
      <ul className="facebook-navbar__nav">{props.children}</ul>
    </nav>
  )
}

export default Navbar
