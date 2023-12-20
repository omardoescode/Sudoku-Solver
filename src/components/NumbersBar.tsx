import { useContext } from "react"
import range from "../lib/range"
import { Button } from "./ui/button"
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
      className={`absolute -bottom-full rounded bg-indigo-200 p-2 shadow-lg flex flex-row items-center gap-1 z-10 ${
        pos % 9 === 0
          ? "right-0"
          : pos % 9 <= 3
          ? "left-0"
          : pos % 9 <= 6
          ? "-translate-x-1/2 left-1/2"
          : "right-0"
      }`}
    >
      {range(1, 9).map((val) => (
        <Button
          className={"text-sm md:text-lg px-4 aspect-square flex-1 h-auto"}
          key={val}
          onClick={() => handleClick(val)}
        >
          {val}
        </Button>
      ))}
      <Button className={"text-lg flex-1"} onClick={() => handleClick(false)}>
        <FaEraser />
      </Button>
    </div>
  )
}
