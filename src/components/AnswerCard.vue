<script setup>
defineProps({
  question: {
    type: Object,
    required: true
  },
  result: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['next'])
</script>

<template>
  <div class="mb-6 text-center text-white">
    <h1 class="text-2xl font-bold">
      {{ question.question }}
    </h1>
    <p class="mt-2 text-white/70">
      Answer: {{ question.answer }} {{ question.unit }}
    </p>
    <p class="mt-2 text-white/70">
      Your answer: {{ result.guess }} {{ question.unit }}
    </p>
    <p class="mt-2 text-white/70">
      Your accuracy was: {{ result.accuracy }}%
    </p>
    <p class="mt-2 text-white/70">
      Points: {{ result.points }}
    </p>
    <p v-if="result.bonus > 0" class="mt-2 font-semibold text-yellow-300">
      Streak bonus: +{{ result.bonus }}
    </p>
    <p class="mt-4 italic">
      {{ question.fact }}
    </p>
    <button @click="emit('next')"
      class="mt-6 cursor-pointer rounded-lg bg-emerald-500 px-6 py-2 text-lg font-semibold text-white transition hover:bg-emerald-600 hover:scale-105">Next question</button>
  </div>
</template>
