import React, { createContext, useCallback, useState } from "react"
import solve from "../lib/solve"

import { Val, Grid, Type } from "../types/grid"

export const GridContext = createContext<Grid | null>(null)

const GridProvider = ({ children }: { children: React.ReactNode }) => {
  const [vals, setVals] = useState<Val[]>(new Array(81).fill(false))
  const [solved, setSolved] = useState<Val[] | null | false>(null)
  const [currentBox, setCurrentBox] = useState<number | null>(null)
  const [type, setType] = useState<Type>("Creating")

  const updateGrid = useCallback(
    (pos: number, val: Val) => {
      setVals((prevVals) => {
        // prevVals[pos - 1] = val
        // return prevVals
        const before = prevVals.slice(0, pos - 1) // Use slice to create a new array
        const after = prevVals.slice(pos) // Use slice without the second parameter to get the rest of the array
        return [...before, val, ...after]
      })
    },
    [setVals]
  )

  const solveSudoku = useCallback(() => {
    if (vals.every((val) => val === false)) return
    const solution = solve(vals)
    console.log(solution)

    setSolved(solution)

    if (solution) {
      setType("Solved")
    } else {
      setType("Wrong Sudoko")
    }
  }, [vals])

  const restartGame = useCallback(() => {
    setSolved(null)
    setType("Creating")
    setVals(new Array(81).fill(false))
  }, [])

  return (
    <GridContext.Provider
      value={{
        type,
        vals,
        currentBox,
        setCurrentBox,
        updateGrid,
        solveSudoku,
        solved,
        restartGame,
      }}
    >
      {children}
    </GridContext.Provider>
  )
}

export default GridProvider
