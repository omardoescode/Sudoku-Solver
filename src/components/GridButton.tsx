import { useCallback, useContext, useEffect, useState } from "react"
import { GridContext } from "../context/grid"
import { Grid, Val } from "../types/grid"
import range from "../lib/range"

interface ButtonProps {
  pos: number
  val: Val
}

export default function GridButton({ pos, val }: ButtonProps) {
  const { currentBox, setCurrentBox, vals, solved } = useContext(
    GridContext
  ) as Grid

  const handleClick = useCallback(() => {
    // if (currentButton) {
    //   setVal(currentButton)
    //   updateGrid(pos, currentButton)
    //   setCurrentButton(false)
    // }
    setCurrentBox(pos)
  }, [setCurrentBox])

  return (
    <button
      className={`text-3xl border aspect-square
      ${range(1, 9).includes(pos) && "border-t-black"} 
      ${range(73, 81).includes(pos) && "border-b-black"} 
      ${range(46, 54).includes(pos) && "border-b-black"} 
      ${range(19, 27).includes(pos) && "border-b-black"} 
      
      ${pos % 9 === 0 && "border-r-black"}
      ${pos % 9 === 1 && "border-l-black"}
      ${pos % 9 === 3 && "border-r-black"}
      ${pos % 9 === 6 && "border-r-black"}

      ${currentBox === pos ? "border-4 border-black" : ""}
      ${
        solved && solved[pos - 1] !== vals[pos - 1]
          ? "text-blue-500"
          : "text-black"
      }
       `}
      onClick={handleClick}
    >
      {val ? val : ""}
    </button>
  )
}
