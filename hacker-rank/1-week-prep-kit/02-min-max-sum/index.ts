function miniMaxSum(arr: number[]): void {
  arr.sort()
  let [maxSum, minSum] = [0, 0]
  arr.forEach((num: number, index: number) => {
    if (index < (arr.length - 1)) minSum += num
    if (index > 0) maxSum += num
  }) 
  console.log(minSum, maxSum)
}