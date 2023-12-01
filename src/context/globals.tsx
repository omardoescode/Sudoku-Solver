import { createContext, ReactNode, useState } from "react"
import { Globals, Theme, Type } from "../types/global_state"

export const GlobalsContext = createContext<Globals | null>(null)

const GlobalsProvidor = ({ children }: { children: ReactNode }) => {
  const [type, setType] = useState<Type>(
    localStorage.getItem("name") ? Type.HOMEPAGE : Type.ASKING_NAME
  )
  const [name, setName] = useState<string>(localStorage.getItem("name") ?? "")
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) ?? Theme.SYSTEM
  )

  return (
    <GlobalsContext.Provider value={{ type, name, theme, setType }}>
      {children}
    </GlobalsContext.Provider>
  )
}

export default GlobalsProvidor
