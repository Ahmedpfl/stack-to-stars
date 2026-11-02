import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import QuizView from '@/views/QuizView.vue'
import ResultsView from '@/views/ResultsView.vue'
import { useQuizStore } from '@/stores/Quiz'

const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/spel/:niveau', name: 'quiz', component: QuizView },
    { path: '/results', name: 'results', component: ResultsView }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to) => {
  const quiz = useQuizStore()

  if ((to.name === 'quiz' || to.name === 'results') && !quiz.started) {
    return '/'
  }

  const possible = ['1', '2', '3']
  if (to.name === 'quiz' && !possible.includes(to.params.niveau)) {
    return '/'
  }
})

export default router