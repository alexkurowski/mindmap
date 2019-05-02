import React, { FunctionComponent, useState } from "react"
import styled from "styled-components"
import {
  useStore,
  getCurrentProject,
  updateCurrentProjectTitle,
  createNewProject,
  selectProject,
} from "../store"
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

  const [edit, setEdit] = useState(false)
  const toggleEdit = () => setEdit(!edit)

  return (
    <Root>
      {(edit && (
        <EditCurrentProject
          type="text"
          autoFocus
          value={currentProject.title || defaultTitle}
          onChange={updateCurrentProjectTitle}
          onBlur={toggleEdit}
          onKeyPress={(event: any) => {
            if (event.key === "Enter") {
              toggleEdit()
            }
          }}
        />
      )) || (
        <CurrentProject onClick={toggleEdit}>
          {currentProject.title || defaultTitle}
        </CurrentProject>
      )}
      <MenuWrapper className="dropdown">
        <Menu>
          {store.projects.map(project => {
            if (project === currentProject) {
              return null
            } else {
              return (
                <Item
                  key={project.uid}
                  onClick={() => selectProject(project.uid)}
                >
                  <Link>{project.title || defaultTitle}</Link>
                </Item>
              )
            }
          })}
        </Menu>
      </MenuWrapper>
    </Root>
  )
}

const Root = styled(StyledRoot)`
  &:hover {
    .dropdown {
      display: block !important;
    }
  }
`
const CurrentProject = styled.a`
  font-size: 1rem;
  cursor: pointer;
`
const EditCurrentProject = styled.input`
  padding: 0.4rem 0.5rem;
  margin: -0.4rem -0.5rem;
  border: none;
  outline: 1px solid #ccc;
  font-size: 1rem;
  font-family: inherit;
`
const MenuWrapper = styled(StyledMenuWrapper)`
  display: none;
  position: absolute;
  top: 20px;
  left: -0.5rem;
`
const Menu = StyledMenu
const Item = StyledItem
const Link = styled.a`
  white-space: nowrap;
`

export default ProjectSelect
