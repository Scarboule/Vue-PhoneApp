import { createRouter, createWebHashHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import ContactsView from '../views/ContactsView.vue'
import HistoryView from '../views/HistoryView.vue'
import CallView from '../views/CallView.vue'
import NewContactView from '../views/NewContactView.vue'

const routes = [
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView
  },
  {
    path: '/new-contact',
    name: 'new-contact',
    component: NewContactView
  },
  {
    path: '/history',
    name: 'history',
    component: HistoryView
  },
  {
    path: '/call',
    name: 'call',
    component: CallView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
