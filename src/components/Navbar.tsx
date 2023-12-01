import { useContext } from "react"
import Button from "./Button"
import { GridContext } from "../context/grid"
import { Grid } from "../types/grid"

export default function Navbar() {
  const { solveSudoku, restartGame } = useContext(GridContext) as Grid
  return (
    <nav className="px-4 py-2 border-b flex justify-between items-center bg-indigo-900 text-white">
      <h1 className="text-3xl font-semibold">Sudoku</h1>

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
