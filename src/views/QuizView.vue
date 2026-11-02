<script setup>
import { useRoute } from 'vue-router';
import { useGameStore } from '@/stores/game';
import { ref } from 'vue';

const answer = ref('')

const game = useGameStore()

function next()
{
  game.submitAnswer(answer.value)
  answer.value = ''
  game.buttonQuestion()
}

const route = useRoute()

</script>

<template>
  <div class="flex min-h-dvh w-full flex-col items-center justify-center gap-6 bg-green-600 p-4">
    <div class="rounded-xl bg-white/10 p-8 shadow-xl backdrop-blur-sm ring-1 ring-white/20">
      <div class="flex justify-between text-white mb-2">
      <p>Score: {{ game.score }}</p>
      <p>Steak: {{ game.streak }}</p>
    </div>
      <h1 class="mb-6 text-center text-2xl font-bold text-white">
        {{ game.currentQuestion?.question ?? 'question' }}
      </h1>
      <div class="flex flex-row">
        <input v-model="answer"
          class="w-full rounded-l-lg border  bg-emerald-500 px-4 py-2 text-white placeholder-white/50 outline-none transition border-emerald-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400"
          type="text" placeholder="Your answer...">
        <button @click="next()"
          class="cursor-pointer rounded-r-lg bg-emerald-500 px-6 py-2 text-lg font-semibold text-white transition hover:bg-emerald-600 hover:scale-105">Next</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>