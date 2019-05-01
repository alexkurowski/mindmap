import React, { FunctionComponent, useState } from "react"
import styled from "styled-components"
import { ContextProvider } from "../context"
import Header from "./header"
import Board from "./board"

type Props = {
  theme?: string
  font?: string
}

const Main: FunctionComponent<Props> = (props: Props) => {
  const currentBoard = {} as Board
  const context = {
    user: window.user,
    projects: window.projects,
  }
  const theme = props.theme || "default"
  const font = props.font || "sans"
  const wrapperClassName = [`theme-${theme}`, `font-${font}`].join(" ")

  return (
    <ContextProvider value={context}>
      <Wrapper className={wrapperClassName}>
        <Header />
        <Board board={currentBoard} />
      </Wrapper>
    </ContextProvider>
  )
}

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
`

export default Main
