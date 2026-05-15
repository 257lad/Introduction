import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import axios from 'axios'

const token = localStorage.getItem('token')

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'
// axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'

// axios.interceptors.request.use(
//     (config) => {
//         // if(token) config.headers.Authorization = 'Bearer ' + token
//         return config
//     },
//     (error) => {

//     }
// )

axios.interceptors.response.use(

)

window.axios = axios

createApp(App).use(router).mount('#app')
