type StoreState = {
  user: User
  projects: Project[]
}

type StoreContext = {
  store: StoreState
  dispatch: any
}
