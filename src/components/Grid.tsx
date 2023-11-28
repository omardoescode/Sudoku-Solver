import { useEffect, useContext, useState } from "react"
import { GridRange } from "../lib/range"
import GridButton from "./GridButton"
import { GridContext } from "../context/grid"
import { Grid } from "../types/grid"
import { UNITS } from "../constants/grid_constants"
import { valid_unit } from "../lib/solve"

export default function GridBox() {
  // Implementing the logic of clicking the buttons and changing the values
  const { currentBox, updateGrid, vals, solved, setCurrentBox } = useContext(
    GridContext
  ) as Grid
  const [errorPositions, setErrorPositions] = useState<number[]>([])

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!solved && currentBox) {
        if ("123456789".includes(e.key)) {
          updateGrid(currentBox, parseInt(e.key))
        } else {
          switch (e.key) {
            case "Backspace":
              updateGrid(currentBox, false)
              break
            case "ArrowUp":
              if (currentBox && currentBox - 9 > 0)
                setCurrentBox(currentBox - 9)
              break
            case "ArrowDown":
              if (currentBox && currentBox + 9 < 82)
                setCurrentBox(currentBox + 9)
              break
            case "ArrowRight":
              if (currentBox && currentBox + 1 < 82)
                setCurrentBox(currentBox + 1)
              break
            case "ArrowLeft":
              if (currentBox && currentBox - 1 > 0)
                setCurrentBox(currentBox - 1)
              break
          }
        }
      }
    }
    document.body.addEventListener("keydown", handleKeyDown)

    return () => document.body.removeEventListener("keydown", handleKeyDown)
  }, [currentBox, setCurrentBox, solved, updateGrid])

  useEffect(() => {
    const errorUnits = UNITS.filter((unit) => !valid_unit(unit, vals)).flat()
    setErrorPositions(errorUnits)
  }, [vals])

  console.log(errorPositions)

  return (
    <div className="w-full">
      <div className="max-w-[800px] mx-auto">
        <div className="grid grid-cols-9 container mx-auto mt-10 auto-rows-fr">
          {GridRange.map((pos: number) => {
            const value = solved ? solved[pos - 1] : vals[pos - 1]
            return (
              <GridButton
                key={pos}
                pos={pos}
                val={value}
                isError={errorPositions.includes(pos)}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
