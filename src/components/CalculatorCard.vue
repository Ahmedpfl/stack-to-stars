<script setup>
import { ref, onUnmounted } from 'vue';

const display = ref('')
const justCalculated = ref(false)
const keys = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+']

function clear() {
    display.value = ''
    justCalculated.value = false
}

function press(key) {
    if (key === '=') {
        if (display.value === '') return
        try {
            const result = Function('return ' + display.value)()
            if (!Number.isFinite(result)) throw new Error()
            display.value = String(Math.round(result * 10000) / 10000)
        } catch {
            display.value = 'Error'
        }
        justCalculated.value = true
        return
    }

    const isNumber = !'+-*/'.includes(key)
    if (display.value === 'Error' || (justCalculated.value && isNumber)) {
        display.value = ''
    }
    justCalculated.value = false
    display.value += key
}

const emit = defineEmits(['close'])

const x = ref(Math.max(16, window.innerWidth - 240))
const y = ref(120)
let offsetX = 0
let offsetY = 0

function startDrag(event) {
    offsetX = event.clientX - x.value
    offsetY = event.clientY - y.value
    window.addEventListener('pointermove', drag)
    window.addEventListener('pointerup', stopDrag)
}

function drag(event) {
    x.value = Math.min(Math.max(0, event.clientX - offsetX), window.innerWidth - 208)
    y.value = Math.min(Math.max(0, event.clientY - offsetY), window.innerHeight - 40)
}

function stopDrag() {
    window.removeEventListener('pointermove', drag)
    window.removeEventListener('pointerup', stopDrag)
}

onUnmounted(stopDrag)
</script>


<template>
    <Teleport to="body">
    <div class="fixed z-50 w-52 rounded-lg bg-emerald-500 p-1.5 shadow-xl ring-1 ring-white/20"
        :style="{ left: x + 'px', top: y + 'px' }">
        <div class="mb-1 flex cursor-move touch-none select-none items-center justify-between px-1 text-sm font-semibold text-white"
            @pointerdown="startDrag">
            <span>Calculator</span>
            <button @click="emit('close')" @pointerdown.stop class="cursor-pointer px-1 hover:text-white/70" aria-label="Close calculator">✕</button>
        </div>
        <input
            class="mb-1 w-full rounded bg-white px-2 py-1 text-right text-sm text-black outline-none"
            :value="display"
            readonly>
        <button @click="clear"
            class="mb-1 w-full cursor-pointer rounded bg-white px-2 py-1 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100">
            C
        </button>
        <div class="grid grid-cols-4 gap-1">
            <button v-for="key in keys" :key="key" @click="press(key)"
                class="cursor-pointer rounded bg-white px-2 py-1 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100">
                {{ key }}
            </button>
        </div>
    </div>
    </Teleport>
</template>
