import React from "react"
import Navbar from "./child-components/Navbar/Navbar"
import NavItem from "./child-components/NavItem/NavItem"
import IconButton from "../../IconButton"
import DropDownMenu from "../../DropDown/DropDownMenu"
import DropDownItem from "../../DropDown/DropDownMenu/child-components/DropDownItem/DropDownItem"
export default function FacebookNavbar(props) {
  return (
    <Navbar>
      <NavItem icon={<IconButton name="plus" />}>
        <DropDownMenu>
          <DropDownItem>only text</DropDownItem>{" "}
          <DropDownItem
            leftIcon={<IconButton size="50px" name="bell" />}
            rightIcon={<IconButton size="50px" name="messenger" />}
          >
            text with icon
          </DropDownItem>
        </DropDownMenu>
      </NavItem>
      <NavItem icon={<IconButton name="bell" />}></NavItem>
      <NavItem icon={<IconButton name="messenger" />}></NavItem>
    </Navbar>
  )
}
