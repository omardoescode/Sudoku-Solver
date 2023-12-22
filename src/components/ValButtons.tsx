import { useContext } from "react"
import range from "../lib/range"
import { GridContext } from "../context/grid"
import { Grid } from "../types/grid"
import { Button } from "./ui/button"
import { Eraser } from "lucide-react"

export default function ValButtons() {
  const { updateGrid, currentBox, solved } = useContext(GridContext) as Grid
  const handleClick = (val: number | false) => {
    if (!solved && currentBox) {
      updateGrid(currentBox, val)
    }
  }

  return (
    <div className="max-w-[800px] mx-auto mt-2">
      <div className="container box-border mx-auto inline-flex items-center justify-center">
        <Button
          className=""
          variant={"outline"}
          onClick={() => handleClick(false)}
        >
          <Eraser />
        </Button>
      </div>
      <div className="grid grid-cols-9 container mx-auto gap-1 md:gap-2 w-full box-border">
        <>
          {range(1, 9).map((val: number) => (
            <Button
              variant={"outline"}
              className={`text-indigo-700 hover:text-white p-4 rounded-md border-0 text-4xl flex flex-col items-center transition dark:text-white`}
              key={val}
              onClick={() => handleClick(val)}
            >
              {val}
            </Button>
          ))}
        </>
      </div>
    </div>
  )
}
