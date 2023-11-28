import { useContext } from "react"
import range from "../lib/range"
import Button from "./Button"
import { GridContext } from "../context/grid"
import { Grid } from "../types/grid"
import { FaEraser } from "react-icons/fa"

interface NumbersBarProps {
  pos: number
}
export default function NumbersBar({ pos }: NumbersBarProps) {
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
    <div
      className={`absolute -bottom-full rounded bg-indigo-200 p-2 shadow-lg flex items-center gap-1 z-10 ${
        (pos % 9) + 1 < 3
          ? "left-0"
          : (pos % 9) + 1 < 6
          ? "left-1/2"
          : "right-0"
      }`}
    >
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
