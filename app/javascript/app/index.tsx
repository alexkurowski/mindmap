import React, { FunctionComponent } from "react"
import ReactDOM from "react-dom"
import Main from "./components/main"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app")
  if (root) {
    ReactDOM.render(<Main />, root)
  }
})
