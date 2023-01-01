import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'
// import Patienttable from '../view/p'
import patienttable from '../view/patient_table.vue'
import Example from '../components/Census.vue'
import patientinfo from '../view/patientInfo.vue'
import SearchComponent from '../components/SearchComponent.vue'
import Lists from '../components/Lists.vue'

// const routes = [
//     {
//         path:'/Dashboard',
//         name: 'Dashboard',
//         component: Dashboard
//     },
//     {
//         path:'/',
//         name: 'Login',
//         component: Login
//     },
//     {
//         // path:'/Dashboard/patienttable/:hpercode',
//         path:'/Dashboard/patienttable',
//         name: 'patienttable',
//         component: patienttable
//     },
//     {
//         path:'/Dashboard/patienttable/:hpercode',
//         // path:'/Dashboard/patienttable',
//         name: 'patienttable/hpercode',
//         component: patientinfo
//     },
//     {
//         path:'/Example',
//         name: 'exampleView',
//         component: Example
//     },
//     {
//         path:'/SearchPatient',
//         name:'SearchPatient',
//         component: SearchComponent
//     }
// ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes:[
        {
            path:'/Dashboard',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path:'/',
            name: 'Login',
            component: Login
        },
        {
            // path:'/Dashboard/patienttable/:hpercode',
            path:'/Dashboard/patienttable',
            name: 'patienttable',
            component: patienttable
        },
        {
            path:'/Dashboard/patienttable/:hpercode',
            // path:'/Dashboard/patienttable',
            name: 'patienttable/hpercode',
            component: patientinfo
        },
        {
            path:'/Example',
            name: 'exampleView',
            component: Example
        },
        {
            path:'/SearchPatient',
            name:'SearchPatient',
            component: SearchComponent
        },
        {
            path:'/Lists',
            name:'Lists',
            component: Lists
        }
    ],
    mode: 'hash'
})

export default router 