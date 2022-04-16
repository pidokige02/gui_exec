import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Counter from '../views/Counter.vue'
import Temperature from '../views/Temperature.vue'
import Booking from '../views/Booking.vue'
import Timer from '../views/Timer.vue'
import Crud from '../views/Crud.vue'
import Circle from '../views/Circle.vue'
import Cells from '../views/Cells.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/counter',
    name: 'counter',
    component: Counter
  },
  {
    path: '/temperature',
    name: 'temperature',
    component: Temperature
  },
  {
    path: '/booking',
    name: 'booking',
    component: Booking
  },
  {
    path: '/timer',
    name: 'timer',
    component: Timer
  },
  {
    path: '/crud',
    name: 'crud',
    component: Crud
  },
  {
    path: '/circle',
    name: 'circle',
    component: Circle
  },
  {
    path: '/cells',
    name: 'cells',
    component: Cells
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
