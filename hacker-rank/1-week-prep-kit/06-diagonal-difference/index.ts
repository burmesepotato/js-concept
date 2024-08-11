export function diagonalDifference(arr: number[][]): number {
  const firstDiagonal = arr.reduce((sum, subArr, index) => sum + subArr[index], 0)
  const secondDiagonal = arr.reduce((sum, subArr, index) => sum + subArr[arr.length - 1 - index], 0)
  
  return Math.abs(firstDiagonal - secondDiagonal)
}
