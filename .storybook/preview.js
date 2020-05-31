import "@storybook/addon-console"
import { addParameters } from "@storybook/react" // <- or your storybook framework
import "../src/styles/main.scss"

addParameters({
  backgrounds: [
    { name: "white", value: "#fff", default: true },
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" },
  ],
})
