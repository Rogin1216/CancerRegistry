import { defineStore } from 'pinia'
import axios from 'axios'

export const useTaskStore = defineStore('taskStore', {
    setup(){
        console.log("TASK STORE")
    },
    state: () => ({
        tasks: [
        ],
        responseData:[],
        name: 'rogin',
        count:0,
        username:'',
        password:'',
        localUser: localStorage.getItem('userName')
    }),
    getters:{
          async allPatients(){
            const response = await axios.get('http://192.168.7.66:8040/api/cancerPatientList')
            return response.data
        },
        async login(){
            const account = {
                username:this.username,
                password:this.password
              };
            console.log("login")
           let res =  await axios.post('http://192.168.7.66:8040/api/login', account)
              return res
        }
    },
    actions: {

    },
})

