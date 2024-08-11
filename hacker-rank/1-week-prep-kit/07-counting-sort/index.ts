export function countingSort(arr: number[]): number[] {
  const countArr = arr.reduce((newArr: number[], num: number) => {
    newArr[num] += 1
    return newArr
  }, Array(arr.length).fill(0))
  return countArr
}
