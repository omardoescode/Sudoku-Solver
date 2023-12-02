import { useContext } from "react"
import { GlobalsContext } from "../context/globals"
import { Globals, Type } from "../types/global_state"
import AskingName from "./Pages/AskingName"
import GridBox from "./Pages/Grid"
import ValButtons from "./ValButtons"
export default function CurrentPage() {
  const { type } = useContext(GlobalsContext) as Globals
  if (type == Type.ASKING_NAME) return <AskingName />
  return (
    <>
      <GridBox />
      <ValButtons />
    </>
  )
}
