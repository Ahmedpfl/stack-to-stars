import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useQuizStore = defineStore('quiz', () => {
  const started = ref(false)

  function start() {
    started.value = true
  }

  function reset() {
    started.value = false
  }

  return { started, start, reset }
})
