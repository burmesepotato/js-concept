function printRatio(count: number, total: number): void {
  console.log((count / total).toFixed(6))
}

function plusMinus(arr: number[]): void {
  // 1. Loop over array
  // 2. Check item and add count to each type
  // 3. Print ratio
  const counts = arr.reduce((count: number[], curr: number) => {
    if (curr > 0) count[0] = (count[0] || 0) + 1
    else if (curr < 0) count[1] = (count[1] || 0) + 1
    else count[2] = (count[2] || 0) + 1
    return count
  }, [0, 0, 0])

  counts.forEach((count: number) => {
    printRatio(count, arr.length)
  })
}
// Test cases
console.log("Test case 1: Mixed positive, negative and zero")
plusMinus([1, -2, 0, 1, -1]) 
// Expected Output:
// 0.400000
// 0.400000
// 0.200000

console.log("Test case 2: All positive")
plusMinus([1, 2, 3, 4, 5])
// Expected Output:
// 1.000000
// 0.000000
// 0.000000

console.log("Test case 3: All negative")
plusMinus([-1, -2, -3, -4, -5])
// Expected Output:
// 0.000000
// 1.000000
// 0.000000

console.log("Test case 4: All zeros")
plusMinus([0, 0, 0, 0, 0])
// Expected Output:
// 0.000000
// 0.000000
// 1.000000

console.log("Test case 5: Single element positive")
plusMinus([1])
// Expected Output:
// 1.000000
// 0.000000
// 0.000000

console.log("Test case 6: Single element negative")
plusMinus([-1])
// Expected Output:
// 0.000000
// 1.000000
// 0.000000

console.log("Test case 7: Single element zero")
plusMinus([0])
// Expected Output:
// 0.000000
// 0.000000
// 1.000000

console.log("Test case 8: No elements (empty array)")
plusMinus([])
// Expected Output:
// No output (as there are no elements to process)