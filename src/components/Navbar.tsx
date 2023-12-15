import { useContext, useState, useEffect } from "react"
import { Button } from "./ui/button"
import { GridContext } from "../context/grid"
import { Grid } from "../types/grid"
import { GlobalsContext } from "../context/globals"
import { Globals } from "../types/global_state"
import { CiMenuBurger } from "react-icons/ci"

export default function Navbar() {
  const { solveSudoku, restartGame } = useContext(GridContext) as Grid
  const { name } = useContext(GlobalsContext) as Globals
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    isOpen
      ? document.body.classList.add("show-navbar")
      : document.body.classList.remove("show-navbar")
  }, [isOpen])

  return (
    <nav
      className={`px-4 py-2 border-b flex justify-between items-center bg-indigo-900 text-white`}
    >
      <div className="flex items-center gap-2">
        <Button onClick={() => setIsOpen((val) => !val)} size="icon">
          <CiMenuBurger size={28} className="p-1" />
        </Button>
        <div className="flex items-end">
          <h1 className="text-3xl font-semibold hidden md:block">Sudoku</h1>
          {name && <p className="pl-2">Hello, {name}</p>}
        </div>
      </div>

      <ul className="flex items-center gap-2">
        <li>
          <Button onClick={restartGame}>Start a new game!</Button>
        </li>
        <li>
          <Button onClick={solveSudoku}>Solve!</Button>
        </li>
      </ul>
    </nav>
  )
}
