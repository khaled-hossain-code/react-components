import React from "react"
import { action } from "@storybook/addon-actions"
import FacebookNavbar from "./index"

export default {
  title: "FacebookNavbar",
  component: FacebookNavbar,
}

export const Default = () => <FacebookNavbar onClick={action("clicked")} />
