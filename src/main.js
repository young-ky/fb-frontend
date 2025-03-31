import { createApp } from 'vue'
import { createPinia } from 'pinia'

import i18n from '@/locales/i18n'

import App from './App.vue'
import router from './router/routes'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './assets/styles/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
