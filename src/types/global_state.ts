export enum Theme {
  LIGHT = "LIGHT",
  DARK = "DARK",
  SYSTEM = "SYSTEM",
}
export enum Type {
  ASKING_NAME,
  HOMEPAGE,
  CREATING,
  SOLVING,
  SOLVED,
  WRONG_SUDOKU,
}

export interface Globals {
  type: Type
  setType: React.Dispatch<React.SetStateAction<Type>>
  name: string
  theme: Theme
}
