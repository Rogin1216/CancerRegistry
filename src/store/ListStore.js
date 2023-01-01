import { defineStore } from 'pinia'
import axios from 'axios'
export const useListStore = defineStore('listStore',{
    state:()=>({
        name: 'Rogin',
        list_allpatient:[],
        show:[],
        hpercode:'',
        firstName:'',
        lastName:'',
        patHpercode:'',
        patHpercodeHeader:[],
        resPrimary:[],
        isCancerpatient:''
    }),
    getters:{
        sample(){

            console.log("getters")
        },
        async allPatients(){
            const response = await axios.get('http://192.168.7.66:8040/api/cancerPatientList')
            this.list_allpatient = response.data
            return response.data
        },
        async cancerHeader(){
            const response = await axios.post('http://192.168.7.66:8040/api/cancerRegisterHeader', {hpercode:this.patHpercode})
            this.patHpercodeHeader = response.data
            return response.data
        },
        async getCancerData(){
            const enccode = {
                // enccode: '000000000702732',
                // 000000000108035
                // 000000000172905 000000000101497
                // 000000000311742 000000000346351
                enccode: this.patHpercode,
                section: 'primarySite'
            }
            const response = await axios.post("http://192.168.7.66:8040/api/spCancerGetDataPerSection",enccode)
            // console.log("response ",response)
            // console.log(JSON.parse(response.data[0].data))
            // console.log("cnacer data ", this.resPrimary)
            return response
        },
        async getPatStatus(){
            const enccode = {
                enccode: this.patHpercode,
                section:'isCancerPatient'
            }
            const response = await axios.post("http://192.168.7.66:8040/api/spCancerGetDataPerSection",enccode)
            // console.log("cancer patient", response.data)
            return response
        }
        
        // const res7 = await this.getCancerData(this.hpercode,'primarySite')
        //         if(res7.data.length != 0)this.primarySite = JSON.parse(res7.data[0].data )
        //     const res8 = await this.getCancerData(this.hpercode,'concurrentSite')
    },
    actions:{
        // 
        async patListDetails(){
            // const res = this.getCancerData
            const res = await this.getCancerData
            const res1 = await this.getPatStatus
            // console.log('res',res)
            // console.log(JSON.parse(res1.data[0].data))
            // let x = JSON.parse(res1.data[0].data).cancerPatient
            // if(JSON.parse(res1.data[0].data).cancerPatient == 'Y' ){
            if(res1.data.length != 0){
                // this.isCancerpatient = JSON.parse(res1.data[0].data)
                this.isCancerpatient = 'Y'
                console.log("Y")
            }else if(res1.data.length == 0 || JSON.parse(res1.data[0].data).cancerPatient=='N'){
                this.isCancerpatient = 'N'
                console.log("N")

            }
            // }else if(res1.data.length != 0 ){
            //     // this.isCancerpatient = ''
            //     console.log("N")

            // }

            if(res.data.length != 0){
                // console.log(" NOT null")
                this.resPrimary = JSON.parse(res.data[0].data)
            }else{
                // console.log(" null")
                this.resPrimary.SolidTumor = ''
            }
            
            // this.resPrimary = JSON.parse(res.data[0].data)
            
            // console.log(this.resPrimary)
        }
    }
}) 