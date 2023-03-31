import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import microApp from '@micro-zoe/micro-app'
import './assets/main.css'

microApp.start()

const app = createApp(App)

app.use(router)

app.mount('#app')
