import { useContext } from "react"
import range from "../lib/range"
import Button from "./Button"
import { GridContext } from "../context/grid"
import { Grid } from "../types/grid"
import { FaEraser } from "react-icons/fa"

export default function NumbersBar() {
  const { updateGrid, currentBox, setCurrentBox } = useContext(
    GridContext
  ) as Grid
  const handleClick = (val: number | false) => {
    if (currentBox) {
      updateGrid(currentBox, val)
      setCurrentBox(null)
    }
  }
  return (
    <div className="absolute -bottom-full rounded bg-indigo-200 p-2 shadow-lg flex items-center gap-1 z-10 -left-24">
      {range(1, 9).map((val) => (
        <Button
          className={"text-lg px-4 aspect-square"}
          key={val}
          onClick={() => handleClick(val)}
        >
          {val}
        </Button>
      ))}
      <Button
        className={"text-lg px-[13px] aspect-square"}
        onClick={() => handleClick(false)}
      >
        <FaEraser />
      </Button>
    </div>
  )
}
