export function getAccuracy(correct, guess) {
  const difference = Math.abs(correct - guess)
  const percentOff = (difference / correct) * 100
  return Math.max(0, Math.round(100 - percentOff))
}

export function getPoints(accuracy) {
  if (accuracy >= 100) return 150
  if (accuracy < 50) return 0
  return (accuracy - 50) * 2
}