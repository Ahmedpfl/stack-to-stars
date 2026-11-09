<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useGameStore } from '@/stores/game'
import { useHighscores } from '@/composables/useHighscores'
import HighscoreList from '@/components/HighscoreList.vue'

const router = useRouter()
const game = useGameStore()
const { scores, addScore } = useHighscores(game.level)

const name = ref('')
const saved = ref(false)

function saveScore() {
  if (name.value.trim() === '') return
  addScore(name.value, game.score)
  saved.value = true
}

function playAgain() {
  game.reset()
  router.push('/')
}
</script>

<template>
  <div class="flex min-h-dvh w-full flex-col items-center justify-center gap-6 bg-green-600 p-4">
    <div class="w-full max-w-md rounded-xl bg-white/10 p-8 text-center shadow-xl backdrop-blur-sm ring-1 ring-white/20">
      <h1 class="text-4xl font-bold text-white">Level {{ game.level }} complete!</h1>
      <p class="mt-6 text-lg text-white/70">Final score</p>
      <p class="text-6xl font-bold text-white">{{ game.score }}</p>
      <p v-if="game.streakBonus > 0" class="mt-2 text-yellow-300">
        Streak bonus: +{{ game.streakBonus }}
      </p>
      <div v-if="!saved" class="mt-6 flex flex-col gap-2 sm:flex-row">
        <input
          v-model="name"
          type="text"
          maxlength="20"
          placeholder="Your name"
          class="w-full min-w-0 rounded-lg border border-emerald-500 bg-emerald-500 px-4 py-2 text-white placeholder-white/50 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400"
          @keyup.enter="saveScore">
        <button
          @click="saveScore"
          class="cursor-pointer rounded-lg bg-emerald-500 px-6 py-2 text-lg font-semibold text-white transition hover:bg-emerald-600 hover:scale-105">
          Save
        </button>
      </div>
      <p v-else class="mt-6 text-white/70">Score saved!</p>
      <HighscoreList :scores="scores" />
      <button @click="playAgain"
        class="mt-8 cursor-pointer rounded-lg bg-emerald-500 px-6 py-2 text-lg font-semibold text-white transition hover:bg-emerald-600 hover:scale-105">
        Play again
      </button>
    </div>
  </div>
</template>

<style scoped></style>
