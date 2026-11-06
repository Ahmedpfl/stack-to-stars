<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const emit = defineEmits(['timeup'])

const total = 20
const timeLeft = ref(total)
const percentage = computed(() => (timeLeft.value / total) * 100)

let interval = null

onMounted(() => {
  interval = setInterval(() => {
    timeLeft.value--

    if (timeLeft.value <= 0) {
      clearInterval(interval)
      interval = null
      emit('timeup')
    }
  }, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
  interval = null
})
</script>

<template>
  <div class="mb-4">
    <div class="mb-1 flex justify-between text-sm text-white/70">
      <span>Time left</span>
      <span>{{ timeLeft }}s</span>
    </div>
    <div class="h-2 w-full overflow-hidden rounded-full bg-white/20" role="timer" :aria-valuenow="timeLeft" aria-valuemin="0"
      :aria-valuemax="total">
      <div class="h-full rounded-full transition-all duration-1000 ease-linear"
        :class="timeLeft <= 5 ? 'bg-red-400' : 'bg-white'" :style="{ width: percentage + '%' }" />
    </div>
  </div>
</template>
