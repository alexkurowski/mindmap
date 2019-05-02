import React, { FunctionComponent } from "react"
import styled from "styled-components"
import ProjectSelect from "./project-select"
import UserMenu from "./user-menu"

type Props = {}

const Header: FunctionComponent<Props> = (props: Props) => {
  return (
    <Root>
      <Left>
        <ProjectSelect />
      </Left>
      <Right>
        <UserMenu />
      </Right>
    </Root>
  )
}

const Root = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 0.75rem 1rem;
  box-shadow: 0px -15px 10px 10px currentColor;
`
const Left = styled.div``
const Right = styled.div``
const Brand = styled.span``
const Link = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export default Header
