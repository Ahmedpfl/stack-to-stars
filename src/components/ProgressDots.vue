<script setup>
defineProps({
  current: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="mb-4 flex flex-col items-center gap-2">
    <p class="text-sm text-white/70">Question {{ current }} of {{ total }}</p>
    <div class="flex gap-2" role="progressbar" :aria-valuenow="current" aria-valuemin="1" :aria-valuemax="total">
      <span
        v-for="n in total"
        :key="n"
        class="h-2.5 w-2.5 rounded-full transition-colors"
        :class="n <= current ? 'bg-white' : 'bg-white/30'"
      />
    </div>
  </div>
</template>
