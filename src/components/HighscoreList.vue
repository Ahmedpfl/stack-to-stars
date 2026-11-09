<script setup>
defineProps({
  scores: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="mt-8 w-full">
    <h2 class="mb-3 text-center text-xl font-bold text-white">Highscores</h2>
    <p v-if="scores.length === 0" class="text-center text-white/70">
      No highscores yet.
    </p>
    <ol v-else class="space-y-1">
      <li
        v-for="(entry, index) in scores"
        :key="index"
        class="flex justify-between gap-4 rounded-lg bg-white/10 px-4 py-2 text-white"
      >
        <span class="truncate">{{ index + 1 }}. {{ entry.name }}</span>
        <span class="font-semibold">{{ entry.score }}</span>
      </li>
    </ol>
  </div>
</template>
