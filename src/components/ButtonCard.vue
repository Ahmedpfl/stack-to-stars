<script setup>
import { ref } from 'vue'

const emit = defineEmits(['hint', 'answer', 'calculator'])

const answer = ref('')

function submit() {
    if (answer.value === '') return
    emit('answer', answer.value)
    answer.value = ''
}
</script>

<template>
    <div class="grid grid-cols-3 gap-2 sm:flex sm:gap-0">
        <button @click="emit('calculator')"
            class="flex cursor-pointer items-center justify-center rounded-lg bg-emerald-500 py-2 text-lg font-semibold text-white transition hover:bg-emerald-600 sm:rounded-none sm:rounded-l-lg sm:pl-3 sm:pr-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
            </svg>
        </button>
        <button @click="emit('hint')"
            class="cursor-pointer rounded-lg bg-emerald-500 px-3 py-2 text-base font-semibold text-white transition hover:bg-emerald-600 sm:rounded-none sm:px-6 sm:text-lg">Hint</button>
        <input v-model.number="answer" @keyup.enter="submit"
            class="order-first col-span-3 w-full min-w-0 rounded-lg border bg-emerald-500 px-3 py-3 text-lg sm:order-none sm:flex-1 sm:rounded-none sm:py-2 text-white placeholder-white/50 outline-none transition border-emerald-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 sm:px-4 sm:text-lg"
            type="number" placeholder="Your answer...">
        <button @click="submit"
            class="cursor-pointer rounded-lg bg-emerald-500 px-3 py-2 text-base font-semibold text-white transition hover:bg-emerald-600 sm:rounded-none sm:rounded-r-lg sm:px-6 sm:text-lg">Next</button>
    </div>
</template>
