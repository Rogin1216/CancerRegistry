<template>
    <div class="modal-backdrop">
        <div class="modal">
            <div class="container" id="modalOccupation" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-xl">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">For Female Subjects:</h5>
                                            <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-8">
                                                    <div class="mb-3">
                                                        Gynecological History
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="input-group mb-3">
                                                                    <label for="" class="form-control">Age of Menarche: </label>
                                                                    <input type="number" class="form-control" v-model="this.patStore.forFemaleSubjects.AgeOfMenarche" >
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="input-group mb-3">
                                                                    <label for="" class="form-control">Menstrual Status: </label>
                                                                    
                                                                    <select class="form-select" name="" id="" v-model="this.patStore.forFemaleSubjects.MenstrualStatus">
                                                                        <option :true-value="'Premonopausal'">Premonopausal</option>
                                                                        <option :true-value="'PostMenopausal'">Postmenopausal</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="input-group mb-3">
                                                                    <label for="" class="form-control">Age of Menopause: </label>
                                                                    <input type="text" class="form-control" v-model="this.patStore.forFemaleSubjects.AgeOfMenopause" :true-value="'50'">
                                                                    <label for="" class="form-control">Cause: </label>
                                                                    
                                                                    <select name="" id="" class="form-select" v-model="this.patStore.forFemaleSubjects.Cause">
                                                                        <option selected value="N/A"></option>
                                                                        <option value="Surgical">Surgical</option>
                                                                        <option value="Natural">Natural</option>
                                                                        <option value="Others">Others</option>
                                                                    </select>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="input-group mb-3">
                                                                    <label for="" class="form-control">Contraceptive use (Duration): </label>
                                                                    <input type="text" class="form-control" v-model="this.patStore.forFemaleSubjects.ContraCeptiveUse">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="mb-3">
                                                        OB history
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="input-group mb-3">
                                                                    <label for="" class="form-control">Age of 1<sup>st</sup> birth: </label>
                                                                    <input type="number" class="form-control" v-model="this.patStore.forFemaleSubjects.Age1stLiveBirth">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="input-group mb-3">
                                                                    <label for="" class="form-control">Pregnancy Stage: </label>
                                                                    <select class="form-select" name="" id="" v-model="this.patStore.forFemaleSubjects.PregnancyStage">
                                                                        <option :true-value="'1st Trimester'">1st trimester</option>
                                                                        <option :true-value="'2nd Trimester'">2nd trimester</option>
                                                                        <option :true-value="'3rd Trimester'">3rd trimester</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
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
                    section:'forFemaleSubjects',
                    data:{
                        AgeOfMenarche:null,
                        MenstrualStatus:null,
                        AgeOfMenopause:null,
                        Cause:null,
                        ContraCeptiveUse:null,
                        Age1stLiveBirth:null,
                        PregnancyStage:null
                    }
                }
            }
        },
        name: 'Modal',
        async created(){
            this.form.data= this.patStore.forFemaleSubjects 

            const res = await this.getCancerData(this.hpercode,'forFemaleSubjects')
                if(res.data.length != 0)this.forFemaleSubjects = JSON.parse(res.data[0].data )
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
        width: 1200px;
        height: 490px;
        margin-top: 5%;
        margin-left: 20%;
    }
  </style>