export default function range(
  a: number,
  b: number,
  step: number = 1
): number[] {
  if (a === b) return [a]
  return [a].concat(range(a + step, b, step))
}

export const GridRange = range(1, 81)
