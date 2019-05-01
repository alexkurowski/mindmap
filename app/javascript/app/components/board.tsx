import React, { FunctionComponent } from "react"
import styled from "styled-components"

type Props = {
  board: Board
}

const Board: FunctionComponent<Props> = (props: Props) => (
  <Wrapper>Board</Wrapper>
)

const Wrapper = styled.div`
  padding: 1rem
`

export default Board
