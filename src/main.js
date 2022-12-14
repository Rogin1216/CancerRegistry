import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue3EasyDataTable from 'vue3-easy-data-table'
// import vTitle from 'vuejs-title'
import VTooltip from 'v-tooltip'
import Paginate from 'vuejs-paginate-next'
// import VuePaginate from 'vue-paginate'
// import JwPagination from 'jw-vue-pagination'
// import PrimeVue from 'primevue/config'
// import 'alga-css/dist/alga.min.css'
// import 'alga-css/dist/alga-animate.min.css'

createApp(App)
.use(router)
.use(VueAxios, axios)
.use(createPinia())
// .use(vTitle)
.use(VTooltip)
// .use(require('vue-moment'))
// .component('VuePaginate', VuePaginate)
.component('EasyDataTable', Vue3EasyDataTable)
.component('Paginate', Paginate)
// .component('jw-pagination', JwPagination)

.mount('#app')
import 'bootstrap/dist/js/bootstrap.bundle';
import "bootstrap/dist/js/bootstrap.js";
import 'primeicons/primeicons.css';
import '@fortawesome/fontawesome-free';