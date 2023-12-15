import { useCallback, useContext } from "react"
import { GridContext } from "../context/grid"
import { Grid, Val } from "../types/grid"
import range from "../lib/range"
// import NumbersBar from "./NumbersBar"

interface ButtonProps {
  pos: number
  val: Val
  isError: boolean
}

export default function GridButton({ pos, val, isError }: ButtonProps) {
  const { currentBox, setCurrentBox, vals, solved } = useContext(
    GridContext
  ) as Grid

  const handleClick = useCallback(() => {
    setCurrentBox(pos)
  }, [setCurrentBox, pos])

  return (
    <button
      className={`dark:text-white text-4xl font-medium border aspect-square hover:border-4 hover:!border-indigo-900 relative outline-none
      ${range(1, 9).includes(pos) ? "border-t-black dark:border-t-white" : ""} 
      ${
        range(73, 81).includes(pos) ? "border-b-black dark:border-b-white" : ""
      } 
      ${
        range(46, 54).includes(pos) ? "border-b-black dark:border-b-white" : ""
      } 
      ${
        range(19, 27).includes(pos) ? "border-b-black dark:border-b-white" : ""
      } 
      
      ${pos % 9 === 0 ? "border-r-black dark:border-r-white" : ""}
      ${pos % 9 === 1 ? "border-l-black dark:border-l-white" : ""}
      ${pos % 9 === 3 ? "border-r-black dark:border-r-white" : ""}
      ${pos % 9 === 6 ? "border-r-black dark:border-r-white" : ""}

      ${currentBox === pos ? "border-4 !border-indigo-900" : ""}
      ${
        solved && solved[pos - 1] !== vals[pos - 1]
          ? "text-purple-500 dark:text-indigo-400"
          : "text-black"
      }
      ${isError ? "bg-red-500 text-white" : ""}
      ${pos === 1 ? "rounded-tl-md" : ""}
      ${pos === 9 ? "rounded-tr-md" : ""}
      ${pos === 73 ? "rounded-bl-md" : ""}
      ${pos === 81 ? "rounded-br-md" : ""}
       `}
      onClick={handleClick}
    >
      {val ? val : ""}
      {/* {currentBox && currentBox === pos && type === "Creating" && (
        <NumbersBar pos={pos} />
      )} */}
    </button>
  )
}
