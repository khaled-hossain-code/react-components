import React from "react"
import { action } from "@storybook/addon-actions"
import SocialMediaBtn from "./SocialMediaBtn"

export default {
  title: "SocialMediaBtn",
  component: SocialMediaBtn,
}

export const Text = () => <SocialMediaBtn onClick={action("clicked")} />
