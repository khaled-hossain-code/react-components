import React from "react"

function DropDownItem(props) {
  const { leftIcon, rightIcon } = props
  return (
    <div className="drop-down-menu__item">
      {leftIcon && (
        <span className="drop-down-menu__left-icon">{leftIcon}</span>
      )}
      {props.children}
      {rightIcon && (
        <span className="drop-down-menu__right-icon">{rightIcon}</span>
      )}
    </div>
  )
}

export default DropDownItem
