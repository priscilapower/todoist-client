import { createApp } from 'vue';
import App from './App.vue';
import VueToast from 'vue-toast-notification';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'vue-toast-notification/dist/theme-default.css';

createApp(App).use(VueToast).mount('#app')
