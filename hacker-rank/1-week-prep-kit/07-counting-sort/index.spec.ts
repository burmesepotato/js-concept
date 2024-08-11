import { describe, it, expect } from '@jest/globals'
import { countingSort } from '.'

describe('countingSort', () => {
  it('should return expectedOutput on given input', () => {
    const input = [1, 1, 3, 2, 1]
    const expectedOutput = [0, 3, 1, 1, 0]
    expect(countingSort(input)).toEqual(expectedOutput)
  })

  it('should return empty array when input is empty', () => {
    const input: number[] = []
    expect(countingSort(input)).toEqual([])
  })
})