import { describe, test, expect } from '@jest/globals'
import { diagonalDifference } from ".";

// Test case: Should return 0 when the input array is empty
describe('diagonalDifference', () => {
  test('should return 0 when input array is empty', () => {
    const input: number[][] = [];
    const expectedOutput = 0;
    const output = diagonalDifference(input);
    expect(output).toEqual(expectedOutput);
  });

  test('should return 2', () => {
    const input: number[][] = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];
    const expectedOutput = 2;
    const output = diagonalDifference(input);
    expect(output).toEqual(expectedOutput);
  })

  test('should return 15', () => {
    const input: number[][] = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]
    const expectedOutput = 15;
    const output = diagonalDifference(input);
    expect(output).toEqual(expectedOutput);
  })
});