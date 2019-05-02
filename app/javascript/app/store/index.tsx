import React, { createContext, useContext, useReducer } from "react"
import * as Actions from "./actions"
export * from "./actions"

const initialState = (data: any) => {
  const { user, projects } = data
  return {
    user,
    projects,
  }
}

const reducer = (
  state: StoreState,
  action: { type: string; payload: any }
): StoreState => {
  switch (action.type) {
    case "setUser":
      return {
        ...state,
        user: action.payload,
      }

    case "setProjects":
      return {
        ...state,
        projects: action.payload,
      }

    default:
      return state
  }
}

const StoreContext = createContext<StoreContext>({} as StoreContext)

export const StoreProvider = (props: any) => {
  const [store, dispatch] = useReducer(reducer, initialState(window))
  Actions.setStore(store, dispatch)
  const context = {
    store,
    dispatch,
  }

  return (
    <StoreContext.Provider value={context}>
      {props.children}
    </StoreContext.Provider>
  )
}

export const useStore = (): StoreContext => {
  const context = useContext(StoreContext)
  return context
}
