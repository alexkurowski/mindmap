import React, { FunctionComponent, useState } from "react"
import SVG from "react-inlinesvg"
import styled from "styled-components"
import {
  StyledRoot,
  StyledMenuWrapper,
  StyledMenu,
  StyledItem,
} from "../styles/menu"
import IconSrc from "images/icons/user-circle-regular.svg"

type Props = {}

const UserMenu: FunctionComponent<Props> = (props: Props) => {
  return (
    <Root>
      <Icon>
        <SVG src={IconSrc} />
      </Icon>
      {open && (
        <MenuWrapper className="dropdown">
          <Menu>
            <Item>
              <Link href="/logout" data-method="delete">
                Log Out
              </Link>
            </Item>
          </Menu>
        </MenuWrapper>
      )}
    </Root>
  )
}

const Root = StyledRoot
const Icon = styled.a`
  display: block;
  width: 26px;
  height: 26px;
  border-radius: 0.25rem;
  cursor: pointer;
`
const MenuWrapper = styled(StyledMenuWrapper)`
  position: absolute;
  top: 26px;
  right: 0;
`
const Menu = StyledMenu
const Item = StyledItem
const Link = styled.a`
  white-space: nowrap;
`

export default UserMenu
