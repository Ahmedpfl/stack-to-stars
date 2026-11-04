<script setup>
import { useRouter } from 'vue-router'
import { useGameStore } from '@/stores/game'

const router = useRouter()
const game = useGameStore()

function playAgain() {
  game.reset()
  router.push('/')
}
</script>

<template>
  <div class="flex min-h-dvh w-full flex-col items-center justify-center gap-6 bg-green-600 p-4">
    <div class="rounded-xl bg-white/10 p-8 text-center shadow-xl backdrop-blur-sm ring-1 ring-white/20">
      <h1 class="text-4xl font-bold text-white">Level {{ game.level }} complete!</h1>
      <p class="mt-6 text-lg text-white/70">Final score</p>
      <p class="text-6xl font-bold text-white">{{ game.score }}</p>
      <p v-if="game.streakBonus > 0" class="mt-2 text-yellow-300">
        Streak bonus: +{{ game.streakBonus }}
      </p>
      <button @click="playAgain"
        class="mt-8 cursor-pointer rounded-lg bg-emerald-500 px-6 py-2 text-lg font-semibold text-white transition hover:bg-emerald-600 hover:scale-105">
        Play again
      </button>
    </div>
  </div>
</template>

<style scoped></style>
