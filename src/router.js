import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
Vue.use(Router);
export default new Router({
    model:'history',
    routes:[
        {
            path:'/',
            component:home
        }
    ]
})