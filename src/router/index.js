import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import QuizView from '@/views/QuizView.vue'
import ResultsView from '@/views/ResultsView.vue'
import { useGameStore } from '@/stores/game'

const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/spel/:niveau', name: 'game', component: QuizView },
    { path: '/results', name: 'results', component: ResultsView }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to) => {
  const game = useGameStore()

  if (to.name === 'game' && game.finished) {
    return '/results'
  }

  if ((to.name === 'game' || to.name === 'results') && !game.started) {
    return '/'
  }

  const possible = ['1', '2', '3']
  if (to.name === 'game' && !possible.includes(to.params.niveau)) {
    return '/'
  }
})

export default router