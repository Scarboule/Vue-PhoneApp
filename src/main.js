import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faPhone)
library.add(faPlus)
library.add(faXmark)
library.add(faArrowRight)
createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')