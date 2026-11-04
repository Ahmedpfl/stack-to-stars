<script setup>
import { useGameStore } from '@/stores/game';
import QuestionCard from '@/components/QuestionCard.vue';
import ButtonCard from '@/components/ButtonCard.vue';
import AnswerCard from '@/components/AnswerCard.vue';
import ProgressDots from '@/components/ProgressDots.vue';

const game = useGameStore()

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
      <template v-if="game.lastResult">
        <AnswerCard :question="game.currentQuestion" :result="game.lastResult" @next="continueGame" />
      </template>
      <template v-else>
        <QuestionCard v-if="game.currentQuestion" :question="game.currentQuestion" />
        <ButtonCard @hint="game.hintButton()" @answer="next" />
      </template>
    </div>
    <div class="rounded-b-xl bg-white/10 p-2 shadow-xl backdrop-blur-sm" v-if="game.hintUsed && !game.lastResult">
      <h1 class="text-center text-xl font-bold text-white">
        {{ game.currentQuestion.hint }}
      </h1>
    </div>
  </div>
</template>

<style scoped></style>