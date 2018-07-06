import Vue from 'vue'
import router from './router'
import App from './app'

Vue.config.debug = true;//开启错误提示

new Vue({
        router,
        el: '#app',
        render: h => h(App)
})