import styled from "styled-components"

export const StyledRoot = styled.div`
  position: relative;

  &:hover {
    .dropdown {
      display: block !important;
    }
  }
`
export const StyledMenuWrapper = styled.div`
  display: none;
  padding-top: 1rem;
`
export const StyledMenu = styled.ul`
  background: white;
  padding: 0.5rem;
  margin: 0;
  box-shadow: 0 0 4px -1px currentColor;
  border-radius: 0.25rem;
  list-style: none;
`
export const StyledItem = styled.li`
  cursor: pointer;
`
