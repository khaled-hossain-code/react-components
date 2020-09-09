import React, { useState, useRef, useEffect } from "react"
import { CSSTransition } from "react-transition-group"
import AddMenu from "../Menu/AddMenu"
import SettingsSubMenu from "../Menu/SettingsSubMenu"
import DropDownMenu from "../../../../DropDown/DropDownMenu"

function AddNav() {
  const [activeMenu, setActiveMenu] = useState("add")
  const [addNavHeight, setMenuHeight] = useState(null)
  const addNavRef = useRef(null)

  useEffect(() => {
    console.log(addNavRef.current?.firstChild.offsetHeight)
    setMenuHeight(addNavRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight
    setMenuHeight(height)
  }

  return (
    <div className="facebook-navbar__add-nav" ref={addNavRef}>
      <DropDownMenu style={{ height: addNavHeight }}>
        <CSSTransition
          in={activeMenu === "add"}
          timeout={500}
          classNames="facebook-navbar__add-menu"
          unmountOnExit
          onEnter={calcHeight}
        >
          <AddMenu setActiveMenu={setActiveMenu} />
        </CSSTransition>
        <CSSTransition
          in={activeMenu === "settings"}
          timeout={500}
          classNames="facebook-navbar__settings-sub-menu"
          unmountOnExit
          onEnter={calcHeight}
        >
          <SettingsSubMenu setActiveMenu={setActiveMenu} />
        </CSSTransition>
      </DropDownMenu>
    </div>
  )
}

export default AddNav
