<script setup>
import { ref } from 'vue'

const emit = defineEmits(['hint', 'answer'])

const answer = ref('')

function submit() {
  if (answer.value === '') return
  emit('answer', answer.value)
  answer.value = ''
}
</script>

<template>
  <div class="flex flex-row">
    <button @click="emit('hint')"
      class="cursor-pointer rounded-l-lg bg-emerald-500 px-6 py-2 text-lg font-semibold text-white transition hover:bg-emerald-600 hover:scale-105">Hint</button>
    <input v-model.number="answer" @keyup.enter="submit"
      class="w-full border  bg-emerald-500 px-4 py-2 text-white placeholder-white/50 outline-none transition border-emerald-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400"
      type="number" placeholder="Your answer...">
    <button @click="submit"
      class="cursor-pointer rounded-r-lg bg-emerald-500 px-6 py-2 text-lg font-semibold text-white transition hover:bg-emerald-600 hover:scale-105">Next</button>
  </div>
</template>
