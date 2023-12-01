export type Val = number | false
export interface Grid {
  vals: Val[]
  // currentButton: number | false
  // setCurrentButton: React.Dispatch<React.SetStateAction<Val>>
  currentBox: number | null
  setCurrentBox: React.Dispatch<React.SetStateAction<number | null>>
  restartGame: () => void
  updateGrid: (pos: number, val: Val) => void
  solveSudoku: () => void
  solved: Val[] | false | null
}
