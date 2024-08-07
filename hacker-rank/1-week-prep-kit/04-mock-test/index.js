function findMedian(arr) {
    arr.sort(function (a, b) { return a - b; });
    var medianIndex = Math.floor(arr.length / 2);
    return arr[medianIndex];
}
console.log(findMedian([1, 3, 5])); // Expected output: 3
console.log(findMedian([3, 1, 2])); // Expected output: 2
console.log(findMedian([7, 5, 3, 1, 9])); // Expected output: 5
console.log(findMedian([11, 13, 15, 17, 19])); // Expected output: 15
console.log(findMedian([9, 1, 5, 7, 3])); // Expected output: 5
console.log(findMedian([21, 19, 17, 15, 13])); // Expected output: 17
console.log(findMedian([3, 8, 5, 2, 7, 6, 1])); // Expected output: 5
console.log(findMedian([-1, -3, -2, -5, -4])); // Expected output: -3
console.log(findMedian([0, 2, 4, 1, 3, 5, 6])); // Expected output: 3
console.log(findMedian([5, 9, 1, 3, 7, 11, 13])); // Expected output: 7
console.log(findMedian([31, 17, 9, 13, 25, 21, 19])); // Expected output: 19
