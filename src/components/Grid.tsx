import { useEffect, useContext } from "react"
import { GridRange } from "../lib/range"
import GridButton from "./GridButton"
import { GridContext } from "../context/grid"
import { Grid } from "../types/grid"

export default function GridBox() {
  // Implementing the logic of clicking the buttons and changing the values
  const { currentBox, updateGrid, vals, solved } = useContext(
    GridContext
  ) as Grid

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!solved && currentBox) {
        if ("123456789".includes(e.key)) {
          updateGrid(currentBox, parseInt(e.key))
        } else if (e.key === "Backspace") {
          updateGrid(currentBox, false)
        }
      }
    }
    document.body.addEventListener("keydown", handleKeyDown)

    return () => document.body.removeEventListener("keydown", handleKeyDown)
  }, [currentBox])

  return (
    <div className="max-w-[800px] mx-auto">
      <div className="grid grid-cols-9 container mx-auto mt-10 auto-rows-fr">
        {GridRange.map((pos: number) => {
          const value = solved ? solved[pos - 1] : vals[pos - 1]
          return <GridButton key={pos} pos={pos} val={value} />
        })}
      </div>
    </div>
  )
}
