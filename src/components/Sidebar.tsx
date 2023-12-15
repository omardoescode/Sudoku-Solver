import { useContext } from "react"
import { GlobalsContext } from "../context/globals"
import { Globals, Theme } from "../types/global_state"
import { Input } from "./ui/input"
import { ModeToggle } from "./mode-toggle"
export default function Sidebar() {
  const { name, setName } = useContext(GlobalsContext) as Globals
  return (
    <div className="w-64 h-screen bg-indigo-950 text-white absolute top-0 -left-64 flex flex-col gap-4 items-center">
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Change your name"
        className="bg-transparent mx-2 border-0 text-white placeholder:text-white outline-none focus:ring-0 border-b border-b-white rounded-none py-1 px-4 w-fit items-center box-content"
      />

      <ModeToggle />
    </div>
  )
}
