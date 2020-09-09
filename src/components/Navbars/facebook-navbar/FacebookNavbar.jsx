import React from "react"
import Navbar from "./child-components/Navbar/Navbar"
import NavItem from "./child-components/NavItem/NavItem"
import IconButton from "../../IconButton"
import AddNav from "./child-components/Nav/AddNav"

export default function FacebookNavbar(props) {
  return (
    <Navbar>
      <NavItem icon={<IconButton name="plus" />}>
        <AddNav />
      </NavItem>
      <NavItem icon={<IconButton name="bell" />}>
        {/* <Notification Nav */}
      </NavItem>
      <NavItem icon={<IconButton name="messenger" />}></NavItem>
    </Navbar>
  )
}
