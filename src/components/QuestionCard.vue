<script setup>
defineProps({
  question: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="mb-6 text-center text-white">
    <h1 class="text-xl font-bold sm:text-2xl">
      {{ question.question }}
    </h1>
    <p class="mt-2 text-white/70">
      Answer in {{ question.unit }}
    </p>
  </div>
</template>
