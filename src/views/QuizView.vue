<script setup>
import { ref } from 'vue';
import { useGameStore } from '@/stores/game';
import QuestionCard from '@/components/QuestionCard.vue';
import ButtonCard from '@/components/ButtonCard.vue';
import AnswerCard from '@/components/AnswerCard.vue';
import ProgressDots from '@/components/ProgressDots.vue';
import CalculatorCard from '@/components/CalculatorCard.vue';
import TimerBar from '@/components/TimerBar.vue';

const game = useGameStore()
const showCalculator = ref(false)

function next(answer) {
  game.submitAnswer(answer)
}

function continueGame() {
  game.lastResult = null
  game.hintUsed = false
  game.buttonQuestion()
}

</script>

<template>
  <div class="flex min-h-dvh w-full flex-col items-center justify-center bg-green-600 p-4">
    <div class="rounded-xl bg-white/10 p-8 shadow-xl backdrop-blur-sm ring-1 ring-white/20">
      <ProgressDots :current="game.index + 1" :total="game.levelQuestions.length" />
      <div class="flex justify-between text-white mb-2">
        <p>Score: {{ game.score }}</p>
        <p>
          Streak: {{ game.streak }}
          <span v-if="game.streakBonus > 0" class="text-white/70">(+{{ game.streakBonus }} bonus)</span>
        </p>
      </div>
      <Transition name="fade" mode="out-in">
        <div v-if="game.lastResult" key="answer">
          <AnswerCard :question="game.currentQuestion" :result="game.lastResult" @next="continueGame" />
        </div>
        <div v-else key="question">
          <TimerBar v-if="game.level === 3" :key="game.index" @timeup="next(0)" />
          <QuestionCard v-if="game.currentQuestion" :question="game.currentQuestion" />
          <ButtonCard @hint="game.hintButton()" @answer="next" @calculator="showCalculator = !showCalculator" />
        </div>
      </Transition>
    </div>
    <div class="rounded-b-xl bg-white/10 p-2 shadow-xl backdrop-blur-sm" v-if="game.hintUsed && !game.lastResult">
      <h1 class="text-center text-xl font-bold text-white">
        {{ game.currentQuestion.hint }}
      </h1>
    </div>
  <CalculatorCard v-if="showCalculator" @close="showCalculator = false" />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>