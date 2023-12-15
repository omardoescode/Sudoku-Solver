import { UNITS } from "../constants/grid_constants"
import { Val } from "../types/grid"
export default function solve(bd: Val[]): Val[] | false {
  function solve__bd(bd: Val[]): Val[] | false {
    if (solved(bd)) return bd
    return solve__lobd(next_boards(bd))
  }

  function solve__lobd(lobd: Val[][]): false | Val[] {
    if (lobd.length === 0) return false
    const first_try = solve(lobd[0])
    if (first_try !== false) return first_try
    return solve__lobd(lobd.slice(1))
  }

  return solve__bd(bd)
}

export function solved(bd: Val[]): boolean {
  return bd.every((val) => val !== false)
}

export function next_boards(bd: Val[]) {
  return keep_only_valid(fill_with_1_9(find_blank(bd), bd))
}

export function find_blank(bd: Val[]): number {
  if (bd.length === 0) throw Error("There are no blank square")
  if (bd[0] === false) return 1
  return 1 + find_blank(bd.slice(1))
}

export function fill_with_1_9(pos: number, bd: Val[]) {
  const before = bd.slice(0, pos - 1) // Use slice to create a new array
  const after = bd.slice(pos) // Use slice without the second parameter to get the rest of the array

  return Array.from({ length: 9 }, (_, index) => {
    const val = index + 1
    return [...before, val, ...after]
  })
}

export function keep_only_valid(lobd: Val[][]) {
  return lobd.filter(valid_board)
}
export function valid_board(bd: Val[]) {
  return valid_units(UNITS, bd)
}

export function valid_units(units: number[][], bd: Val[]) {
  return units.every((unit) => valid_unit(unit, bd))
}
export function valid_unit(unit: number[], bd: Val[]) {
  return no_duplicates(keep_only_values(read_unit(unit, bd)))
}
export function read_unit(unit: number[], bd: Val[]): Val[] {
  return unit.map((pos) => bd[pos - 1])
}
export function keep_only_values(lovf: Val[]): number[] {
  return lovf.filter((val) => val !== false) as number[]
}
export function no_duplicates(lov: number[]): boolean {
  if (lov.length === 0) return true
  for (let i = 1; i < lov.length; i++) {
    if (lov[0] === lov[i]) return false
  }

  return no_duplicates(lov.slice(1))
}
