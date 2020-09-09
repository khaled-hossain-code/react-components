import React from "react"
import IconButton from "../../../../IconButton"
import DropDownItem from "../../../../DropDown/DropDownMenu/child-components/DropDownItem/DropDownItem"

function AddMenu({ setActiveMenu }) {
  return (
    <div className="facebook-navbar__add-menu">
      <DropDownItem>My Profile</DropDownItem>
      <DropDownItem
        onClick={() => setActiveMenu("settings")}
        leftIcon={<IconButton size="50px" name="cog" />}
      >
        Settings
      </DropDownItem>
    </div>
  )
}

export default AddMenu
