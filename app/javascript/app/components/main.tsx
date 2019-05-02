import React, { FunctionComponent, useState } from "react"
import styled from "styled-components"
import { StoreProvider } from "../store"
import Header from "./header"
import Board from "./board"

type Props = {
  theme?: string
  font?: string
}

const Main: FunctionComponent<Props> = (props: Props) => {
  const theme = props.theme || "default"
  const font = props.font || "sans"
  const rootClassName = [`theme-${theme}`, `font-${font}`].join(" ")

  return (
    <StoreProvider>
      <Root className={rootClassName}>
        <Header />
        <Board />
      </Root>
    </StoreProvider>
  )
}

const Root = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
`

export default Main
