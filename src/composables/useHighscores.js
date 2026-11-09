import { ref } from 'vue'

const MAX_SCORES = 5

function loadScores(storageKey) {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || []
  } catch {
    return []
  }
}

export function useHighscores(level) {
  const storageKey = `highscores-${level}`
  const scores = ref(loadScores(storageKey))

  function addScore(name, score) {
    const entry = {
      name: name.trim(),
      score: Number(score),
    }

    scores.value = [...scores.value, entry]
      .sort((a, b) => b.score - a.score)
      .slice(0, MAX_SCORES)

    localStorage.setItem(storageKey, JSON.stringify(scores.value))
  }

  return {
    scores,
    addScore,
  }
}
