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

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
