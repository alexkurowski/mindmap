type User = {
  username: string
  currentProject: string
  currentBoard: string
  currentDocument: string
}

type Project = {
  uid: string
  title: string | null
  description: string | null
  boards: Board[]
}

type Board = {
  uid: string
  title: string | null
  description: string | null
  documents: Document[]
}

type Document = {
  uid: string
  title: string
  text: string
}
