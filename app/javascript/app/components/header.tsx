import React, { FunctionComponent, useContext } from "react"
import styled from "styled-components"
import appContext from "../context"

type Props = {}

const Header: FunctionComponent<Props> = (props: Props) => {
  const context = useContext<Context>(appContext)

  return (
    <Wrapper>
      <Left>
        <Brand>WRTR</Brand>
      </Left>
      <Right>
        <Link href="/logout" data-method="delete">
          {context.user.username}
        </Link>
      </Right>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #999;
  color: #fff;
  padding: 0.75rem 1rem;
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
