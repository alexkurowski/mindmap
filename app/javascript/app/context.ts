import { createContext } from "react"

const context = createContext<Context>(<Context>{})

export const ContextProvider = context.Provider
export const ContextConsumer = context.Consumer
export default context
