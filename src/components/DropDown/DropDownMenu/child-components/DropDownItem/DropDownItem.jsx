import React from "react"

function DropDownItem(props) {
  const { leftIcon, rightIcon, onClick } = props
  return (
    <div className="drop-down-menu__item" onClick={onClick}>
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
