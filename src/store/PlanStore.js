import { defineStore } from 'pinia'
import axios from 'axios'

export const usePlanStore = defineStore('planStore',{
    state:()=>({
        form:{
            // enccode:this.$route.params.hpercode,
            enccode:'',
            entryBy:'',
            section:'treatmentPlan',
            data:{
                count:1,
                medicalTreatment:{
                    cycle:0
                },
                Surgery:{
                    date:'',
                    type:'',
                    typeRemarks:'',
                    typeOfTreatment:'',
                },
                Radiation:{
                    date:'',
                    fraction:'',
                    dose:'',
                    site:''
                }
            },

        },
        
    }),
    getters:{
        test(){
            console.log('plan store')
        }
    },
    actions:{
        async save(){
            console.log(JSON.stringify(this.form))
            const json = {
                json: JSON.stringify(this.form)
            }
            const response = await axios.post("http://192.168.7.66:8040/api/saveCancerDataJSON",json)
            
            return response;
        },

    }
})