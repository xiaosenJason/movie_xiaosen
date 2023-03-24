import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.js';


createApp(App).use(router).mount('#app')
