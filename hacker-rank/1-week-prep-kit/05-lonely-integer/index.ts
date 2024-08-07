function lonelyinteger(a: number[]): number {
  const counts = a.reduce((acc: Record<string,number>, curr: number) => {
    acc[curr] = (acc[curr] || 0) + 1
    return acc
  }, {})

  for (const count in counts) {
    if (counts[count] === 1) return parseInt(count)
  }
  return -1
}

const arr = [1, 2, 3, 4, 3, 2, 1]
console.log(lonelyinteger(arr)) // Expected output: 4