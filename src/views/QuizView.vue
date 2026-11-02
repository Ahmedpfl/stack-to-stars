<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()

</script>

<template>
  <div class="flex min-h-dvh w-full flex-col items-center justify-center gap-6 bg-green-600 p-4">
    <div class="rounded-xl bg-white/10 p-8 shadow-xl backdrop-blur-sm ring-1 ring-white/20">
      <h1 class="mb-6 text-center text-2xl font-bold text-white">
        {{ question ?? 'question' }}
      </h1>
      <input
        class="w-full rounded-lg border  bg-emerald-500 px-4 py-2 text-white placeholder-white/50 outline-none transition border-emerald-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400"
        type="text" placeholder="Your answer...">
    </div>
  </div>
</template>

<style scoped></style>