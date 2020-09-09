import React from "react"
import IconButton from "../../../../IconButton"
import DropDownItem from "../../../../DropDown/DropDownMenu/child-components/DropDownItem/DropDownItem"

function SettingsSubMenu({ setActiveMenu }) {
  return (
    <div className="facebook-navbar__settings-sub-menu">
      <DropDownItem
        leftIcon={
          <IconButton
            onClick={() => setActiveMenu("add")}
            size="50px"
            name="arrow"
          />
        }
      ></DropDownItem>
      <DropDownItem>User Settings</DropDownItem>
      <DropDownItem>Profile Settings</DropDownItem>
      <DropDownItem>Profile Settings</DropDownItem>
      <DropDownItem>Profile Settings</DropDownItem>
      <DropDownItem>Profile Settings</DropDownItem>
      <DropDownItem>Profile Settings</DropDownItem>
    </div>
  )
}

export default SettingsSubMenu
