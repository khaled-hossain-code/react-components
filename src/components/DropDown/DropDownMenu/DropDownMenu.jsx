import React from "react"

export default function DropDownMenu(props) {
  return (
    <div className="drop-down-menu" style={props.style}>
      {props.children}
    </div>
  )
}
