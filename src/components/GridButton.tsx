import { useCallback, useContext } from "react"
import { GridContext } from "../context/grid"
import { Grid, Val } from "../types/grid"
import range from "../lib/range"
import NumbersBar from "./NumbersBar"

interface ButtonProps {
  pos: number
  val: Val
}

export default function GridButton({ pos, val }: ButtonProps) {
  const { currentBox, setCurrentBox, vals, solved, type } = useContext(
    GridContext
  ) as Grid

  const handleClick = useCallback(() => {
    setCurrentBox(pos)
  }, [setCurrentBox, pos])

  return (
    <button
      className={`text-4xl font-medium border aspect-square hover:border-4 hover:border-indigo-900 relative
      ${range(1, 9).includes(pos) && "border-t-black"} 
      ${range(73, 81).includes(pos) && "border-b-black"} 
      ${range(46, 54).includes(pos) && "border-b-black"} 
      ${range(19, 27).includes(pos) && "border-b-black"} 
      
      ${pos % 9 === 0 && "border-r-black"}
      ${pos % 9 === 1 && "border-l-black"}
      ${pos % 9 === 3 && "border-r-black"}
      ${pos % 9 === 6 && "border-r-black"}

      ${currentBox === pos ? "border-4 border-indigo-900" : ""}
      ${
        solved && solved[pos - 1] !== vals[pos - 1]
          ? "text-purple-500"
          : "text-black"
      }
       `}
      onClick={handleClick}
    >
      {val ? val : ""}
      {currentBox && currentBox === pos && type === "Creating" && (
        <NumbersBar />
      )}
    </button>
  )
}
