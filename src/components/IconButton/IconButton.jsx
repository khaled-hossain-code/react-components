import React from "react"
import registry from "./registry"

function IconButton(props) {
  const { name, size, fill, onClick } = props
  const Icon = registry[name]
  const iconButtonSize = parseFloat(size) * 0.8
  const iconSize = parseFloat(size) * 0.5

  return (
    <span
      onClick={onClick}
      className="icon-button"
      style={{ height: iconButtonSize, width: iconButtonSize }}
    >
      <Icon height={iconSize} width={iconSize} fill={fill} />
    </span>
  )
}

IconButton.defaultProps = {
  size: "60px",
  fill: "#fff",
}

export default IconButton
