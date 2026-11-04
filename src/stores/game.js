import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { getAccuracy, getPoints, getStreakBonus } from '@/utils/scoring'
import questions from '@/data/questions.json'

export const useGameStore = defineStore('game', () => {
  const router = useRouter()
  const level = ref(1)
  const levelQuestions = computed(() => questions.filter((q) => q.level === level.value))
  const index = ref(0)
  const currentQuestion = computed(() => levelQuestions.value[index.value])
  const isLastQuestion = computed(() => index.value === levelQuestions.value.length - 1)
  const hintUsed = ref(false)
  const score = ref(0)
  const streak = ref(0)
  const streakBonus = ref(0)
  const started = ref(false)
  const lastResult = ref(null)
  function startLevel(n) {
    hintUsed.value = false
    lastResult.value = null
    level.value = n
    index.value = 0
    score.value = 0
    streak.value = 0
    streakBonus.value = 0
    started.value = true
  }

  function reset() {
    started.value = false
    hintUsed.value = false
    lastResult.value = null
    level.value = 1
    index.value = 0
    score.value = 0
    streak.value = 0
    streakBonus.value = 0
  }
  function buttonQuestion() {
    if (isLastQuestion.value === false) {
      index.value++
    } else {
      router.push('/results')
    }
  }
  function submitAnswer(answer) {
    const accuracy = getAccuracy(currentQuestion.value.answer, Number(answer))
    const points = getPoints(accuracy)
    score.value += points

    if (accuracy >= 90) {
      streak.value += 1
    } else {
      streak.value = 0
    }

    const bonus = getStreakBonus(streak.value)
    score.value += bonus
    streakBonus.value += bonus

    lastResult.value = {
      guess: Number(answer),
      accuracy: accuracy,
      points: points,
      bonus: bonus
    }
  }

  function hintButton() {
    if (hintUsed.value === false) {
      score.value -= 25
    }
    hintUsed.value = true
  }

  return {
    started,
    reset,
    startLevel,
    level,
    index,
    score,
    streak,
    streakBonus,
    levelQuestions,
    currentQuestion,
    buttonQuestion,
    isLastQuestion,
    submitAnswer,
    hintButton,
    hintUsed,
    lastResult,
  }
})
