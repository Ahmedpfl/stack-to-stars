<script setup>
import { useRouter } from 'vue-router'
import { useQuizStore } from '@/stores/Quiz'
import { ref, watch } from 'vue'

const router = useRouter()
const quiz = useQuizStore()
const level = ref(1)

function startQuiz(niveau) {
  quiz.start()
  router.push(`/spel/${niveau}`)
}

watch(level, function(current) {
  if(current >= 4) level.value = 1; 
});

</script>

<template>
  <div
    class="flex min-h-dvh w-full flex-col items-center justify-center gap-6 bg-green-600 p-4">
    <div class="rounded-xl bg-white/10 p-8 shadow-xl backdrop-blur-sm ring-1 ring-white/20">
      <h1 class="text-4xl font-bold text-white mb-6 text-center">Stack to the Stars</h1>
      <div class="flex justify-center">
        <button @click="level++" class="cursor-pointer rounded-l-lg bg-emerald-500 px-6 py-2 text-lg font-semibold text-white transition hover:bg-emerald-600 hover:scale-105">
          lvl {{ level }}
        </button>
        <button class="cursor-pointer rounded-r-lg bg-emerald-500 px-6 py-2 text-lg font-semibold text-white transition hover:bg-emerald-600 hover:scale-105"
          @click="startQuiz(level)">
          Press to start
        </button>
      </div>
    </div>
  </div>

</template>

<style scoped></style>
