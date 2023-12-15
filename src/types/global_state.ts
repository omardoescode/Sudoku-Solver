export enum Theme {
  LIGHT = "LIGHT",
  DARK = "DARK",
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
  setName: React.Dispatch<React.SetStateAction<string>>
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
  name: string
  theme: Theme
}
