import { useContext } from "react"
import range from "../lib/range"
import { GridContext } from "../context/grid"
import { Grid } from "../types/grid"
import { FaEraser, FaSave } from "react-icons/fa"

export default function ValButtons() {
  const { updateGrid, currentBox, solved } = useContext(GridContext) as Grid
  const handleClick = (val: number | false) => {
    if (!solved && currentBox) {
      updateGrid(currentBox, val)
      // setCurrentBox(null)
    }
  }
  return (
    <div className="max-w-[800px] mx-auto mt-2">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <button
          className={`text-indigo-700 p-4 rounded-md border-0 text-2xl flex flex-col items-center transition hover:bg-indigo-100`}
          key={""}
          onClick={() => handleClick(false)}
        >
          <FaEraser />
          <span className="text-sm">erase</span>
        </button>
        <button
          className={`text-indigo-700 p-4 rounded-md border-0 text-2xl flex flex-col items-center transition hover:bg-indigo-100`}
          key={""}
          onClick={() => handleClick(false)}
        >
          <FaSave />
          <span className="text-sm">Save</span>
        </button>
      </div>
      <div className="grid grid-cols-9 container mx-auto mt-10 gap-2">
        <>
          {range(1, 9).map((val: number) => (
            <button
              className={`bg-indigo-600 text-white p-4 rounded-md border-0 text-2xl transition hover:bg-indigo-500`}
              key={val}
              onClick={() => handleClick(val)}
            >
              {val}
            </button>
          ))}
        </>
      </div>
    </div>
  )
}
