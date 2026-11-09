import { describe, it, expect } from 'vitest'
import { getAccuracy, getPoints, getStreakBonus, STREAK_BONUS } from './scoring'

describe('getAccuracy', () => {
  it('returns 100 for an exact answer', () => {
    expect(getAccuracy(100, 100)).toBe(100)
  })

  it('gives partial credit based on how far off the guess is', () => {
    expect(getAccuracy(100, 75)).toBe(75)
    expect(getAccuracy(200, 150)).toBe(75)
  })

  it('treats guesses above the correct answer the same as below it', () => {
    expect(getAccuracy(100, 150)).toBe(50)
    expect(getAccuracy(100, 50)).toBe(50)
  })

  it('rounds the accuracy to a whole number', () => {
    expect(getAccuracy(3, 2)).toBe(67)
  })

  it('never returns a negative accuracy', () => {
    expect(getAccuracy(10, 1000)).toBe(0)
  })
})

describe('getPoints', () => {
  it('awards the maximum of 150 points for a perfect answer', () => {
    expect(getPoints(100)).toBe(150)
  })

  it('awards points on a linear scale above 50% accuracy', () => {
    expect(getPoints(75)).toBe(50)
    expect(getPoints(99)).toBe(98)
  })

  it('awards no points at or below 50% accuracy', () => {
    expect(getPoints(50)).toBe(0)
    expect(getPoints(49)).toBe(0)
    expect(getPoints(0)).toBe(0)
  })
})

describe('getStreakBonus', () => {
  it('awards no bonus when there is no streak', () => {
    expect(getStreakBonus(0)).toBe(0)
  })

  it('awards a bonus every third answer in a row', () => {
    expect(getStreakBonus(3)).toBe(STREAK_BONUS)
    expect(getStreakBonus(6)).toBe(STREAK_BONUS)
  })

  it('awards no bonus on other streak lengths', () => {
    expect(getStreakBonus(1)).toBe(0)
    expect(getStreakBonus(2)).toBe(0)
    expect(getStreakBonus(4)).toBe(0)
    expect(getStreakBonus(5)).toBe(0)
  })
})
