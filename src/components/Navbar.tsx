import { useCallback, useContext } from "react"
import Button from "./Button"
import { GridContext } from "../context/grid"
import { Grid } from "../types/grid"

export default function Navbar() {
  const { solveSudoku, restartGame, type } = useContext(GridContext) as Grid
  return (
    <nav className="px-4 py-2 border-b flex justify-between items-center bg-indigo-900 text-white">
      <h1 className="text-3xl font-semibold">Sudoku Solver</h1>

      <ul className="flex items-center gap-2">
        <li
          className={`${
            type === "Wrong Sudoko" ? "text-red-300 font-bold" : "text-white"
          }`}
        >
          {type}
        </li>
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
