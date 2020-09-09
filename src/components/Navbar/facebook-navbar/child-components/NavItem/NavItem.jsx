import React, { useState } from "react"

function NavItem(props) {
  const { icon } = props
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <li className="facebook-navbar__nav-item">
      {React.cloneElement(icon, { onClick: handleClick })}
      {isOpen && props.children}
    </li>
  )
}

export default NavItem
