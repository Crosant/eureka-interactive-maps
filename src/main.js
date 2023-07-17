import * as Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/index.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faCaretUp, faCaretDown, faCaretLeft, faCaretRight, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'

library.add(faPlus, faCaretUp, faCaretDown, faCaretLeft, faCaretRight, faTimes)

//Vue.component('font-awesome-icon', FontAwesomeIcon)
//const app = createApp(App)
//Vue.config.productionTip = false
//app.component('font-awesome-icon', FontAwesomeIcon)

router.afterEach((to) => {
    Vue.nextTick(() => {
        let title = ''
        if (to.meta && to.meta.title) {
            title = to.meta.title + ' | '
        }
        document.title = title + 'FFXIV Interactive Eureka Maps'
    })
})
/*new Vue({
    router,
    render: h => h(App),
}).$mount('#app')*/
createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')