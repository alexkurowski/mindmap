import { useStore } from "./index"

export const getCurrentProject = () => {
  const { store } = useStore()

  if (store.user.currentProject) {
    return store.projects.find(
      project => project.uid === store.user.currentProject
    )
  } else {
    return store.projects[0]
  }
}

export const getCurrentBoard = () => {
  const { store } = useStore()

  if (store.user.currentBoard) {
    return getCurrentProject().boards.find(
      board => board.uid === store.user.currentBoard
    )
  } else {
    return getCurrentProject().boards[0]
  }
}
