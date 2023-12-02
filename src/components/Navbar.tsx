import { useContext } from "react"
import Button from "./Button"
import { GridContext } from "../context/grid"
import { Grid } from "../types/grid"
import { GlobalsContext } from "../context/globals"
import { Globals } from "../types/global_state"

export default function Navbar() {
  const { solveSudoku, restartGame } = useContext(GridContext) as Grid
  const { name } = useContext(GlobalsContext) as Globals
  return (
    <nav className="px-4 py-2 border-b flex justify-between items-center bg-indigo-900 text-white">
      <div className="flex items-end">
        <h1 className="text-3xl font-semibold">Sudoku</h1>
        {name && <p className="pl-2">Hello,{name}</p>}
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
