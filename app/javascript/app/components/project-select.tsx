import React, { FunctionComponent, useState } from "react"
import styled from "styled-components"
import { useStore, getCurrentProject } from "../store"
import {
  StyledRoot,
  StyledMenuWrapper,
  StyledMenu,
  StyledItem,
} from "../styles/menu"

type Props = {}

const defaultTitle = "Untitled Project"

const ProjectSelect: FunctionComponent<Props> = (props: Props) => {
  const { store } = useStore()
  const currentProject = getCurrentProject()

  return (
    <Root>
      <CurrentProject>{currentProject.title || defaultTitle}</CurrentProject>
      {open && (
        <MenuWrapper className="dropdown">
          <Menu>
            {store.projects.map(project => {
              if (project === currentProject) {
                return null
              } else {
                return (
                  <Item key={project.uid}>
                    <Link>{project.title || defaultTitle}</Link>
                  </Item>
                )
              }
            })}
            {store.projects.length > 1 && <ItemSeparator />}
            <Item>
              <Link onClick={() => {}}>+ New Project</Link>
            </Item>
          </Menu>
        </MenuWrapper>
      )}
    </Root>
  )
}

const Root = StyledRoot
const CurrentProject = styled.a`
  cursor: pointer;
`
const MenuWrapper = styled(StyledMenuWrapper)`
  position: absolute;
  top: 20px;
  left: 0;
`
const Menu = StyledMenu
const Item = StyledItem
const ItemSeparator = styled.li`
  display: block;
  width: 1px;
  height: 1px;
  background: currentColor;
`
const Link = styled.a`
  white-space: nowrap;
`

export default ProjectSelect
