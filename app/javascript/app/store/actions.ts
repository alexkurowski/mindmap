import uuid from "uuid/v4"

let store: StoreState
let dispatch: any

export const setStore = (newStore: StoreState, newDispatch: any) => {
  store = newStore
  dispatch = newDispatch
}

export const getCurrentProject = (): Project => {
  if (store.user.currentProject) {
    const project = store.projects.find(
      project => project.uid === store.user.currentProject
    )
    if (project) {
      return project
    } else {
      return getFirstProject()
    }
  } else {
    return getFirstProject()
  }
}

export const getFirstProject = (): Project => {
  return store.projects[0]
}

export const getCurrentBoard = (): Board => {
  if (store.user.currentBoard) {
    const board = getCurrentProject().boards.find(
      board => board.uid === store.user.currentBoard
    )
    if (board) {
      return board
    } else {
      return getFirstBoard()
    }
  } else {
    return getFirstBoard()
  }
}

export const getFirstBoard = (): Board => {
  return getCurrentProject().boards[0]
}

export const createNewProject = (): Project => {
  const newBoard = {
    uid: uuid(),
    title: null,
    description: null,
    documents: [],
  }
  const newProject = {
    uid: uuid(),
    title: null,
    description: null,
    boards: [newBoard],
  }

  const { projects } = store

  dispatch({
    type: "setProjects",
    payload: [...projects, newProject],
  })

  return getCurrentProject()
}

export const updateCurrentProjectTitle = (event: any) => {
  const { projects } = store
  const currentProject = getCurrentProject()
  currentProject.title = event.target.value

  dispatch({
    type: "setProjects",
    payload: projects,
  })
}

export const selectProject = (uid: string) => {
  const { user } = store
  user.currentProject = uid

  dispatch({
    type: "setUser",
    payload: user,
  })
}
