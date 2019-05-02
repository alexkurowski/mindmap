import React, { FunctionComponent, useRef, useState, useEffect } from "react"
import SVG from "react-inlinesvg"
import styled from "styled-components"
import { createNewProject } from "../store"
import {
  StyledRoot,
  StyledMenuWrapper,
  StyledMenu,
  StyledItem,
} from "../styles/menu"
import IconSrc from "images/icons/user-circle-regular.svg"

type Props = {}

const UserMenu: FunctionComponent<Props> = (props: Props) => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => setOpen(!open)

  const root = useRef<HTMLDivElement>()
  const handleOutsideClick = event => {
    if (!root.current.contains(event.target)) {
      setOpen(false)
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick)
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [])

  return (
    <Root ref={root}>
      <Icon onClick={toggleOpen}>
        <SVG src={IconSrc} />
      </Icon>
      {open && (
        <MenuWrapper>
          <Menu>
            <Item onClick={createNewProject}>
              <Link>Create New Project</Link>
            </Item>
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
  right: -0.5rem;
`
const Menu = StyledMenu
const Item = StyledItem
const Link = styled.a`
  color: inherit;
  font-weight: bold;
  white-space: nowrap;
  text-decoration: none;
`

export default UserMenu
