import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import routes from './routes'
import './main.css'
//@ts-ignore
import JwPagination from 'jw-vue-pagination';
//@ts-ignore
Vue.component('jw-pagination', JwPagination);

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
