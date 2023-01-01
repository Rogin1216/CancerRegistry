<template>
    <div class="modal-backdrop">
        <div class="modal">
            <div class="container" id="modalOccupation" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Other Medical Conditions</h5>
                                            <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col">
                                                    <div class="mb-3">
                                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" v-model="this.patStore.medicalCondition.Condition" placeholder="CONDITION:">
</textarea>
                                                        </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="mb-3">
                                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" v-model="this.patStore.medicalCondition.Medication" placeholder="MEDICATION:">
</textarea>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" @click="close">Close</button>
                                            <button type="button" @click="save" class="btn btn-primary">Save changes</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { usePatStore } from '@/store/PatStore';
import { storeToRefs } from 'pinia';
    export default{
        name: 'Modal',
        setup(){
            const patStore = usePatStore()
            const { count , formStore} = storeToRefs(patStore)
            return { patStore, count, formStore }
        }, 
        data(){
            return{
                form:{
                    enccode:this.$route.params.hpercode,
                    entryBy:'',
                    section:'medicalConditions',
                    data:{
                        Condition:null,
                        Medication:null,
                    }
                }
            }
        },
        async created(){
            this.form.data= this.patStore.medicalCondition 

            const res = await this.getCancerData(this.form.enccode,'medicalConditions')
            console.log("res10", JSON.parse(res.data[0].data))
                // if(res.data.length != 0)this.medicalConditions = JSON.parse(res.data[0].data )
            // this.getCancerData(this.form.enccode,'medicalConditions').then(response =>{

            //     if(JSON.parse(response.data[0].data) != null)
            //         this.this.patStore.medicalCondition = JSON.parse(response.data[0].data);

            // })
        },
        methods: {
            async getCancerData(enccodeID, sectionName){
                const enccode = {
                   enccode: enccodeID,
                   section: sectionName
                }
                const response = await axios.post("http://192.168.7.66:8040/api/spCancerGetDataPerSection",enccode)
                return response
            },
            async save(){
                console.log(JSON.stringify(this.form))
                const json = {
                    json: JSON.stringify(this.form)
                }
                const response = await axios.post("http://192.168.7.66:8040/api/saveCancerDataJSON",json)
                
                this.close()
                return response;
            },
            close(){
                this.$emit("close")
            }
        }
    }
</script>

<style scoped>
    .modal-backdrop {
        /* position: fixed; */
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        
        }
      .modal {
        /* background-color: rgba(0, 0, 0, 0.7); */
        background: #FFFFFF;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        width: 400px;
        height: 500px;
        margin-top: 5%;
        margin-left: 45%;
    }
  </style>