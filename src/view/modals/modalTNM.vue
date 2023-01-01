<template>
    <div class="modal-backdrop">
        <div class="modal">
            <div class="container" id="modalTNM" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">TNM Staging System</h5>
                                            <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col">
                                                    <div class="mb-3">
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="row justify-content-center mb-2">
                                                                    <div class="col-auto">
                                                                        <div class="form-check">
                                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                                <b>T</b>
                                                                            </label>
                                                                            <select class="form-select form-select-sm" aria-label=".form-select-sm example" v-model="this.patStore.tnm.T"> 
                                                                                <option selected>-- select --</option>
                                                                                <option value="T0">T0</option>
                                                                                <option value="T1">T1</option>
                                                                                <option value="T2">T2</option>
                                                                                <option value="T3">T3</option>
                                                                                <option value="TX">TX</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-auto">
                                                                        <div class="form-check">
                                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                                <b>N</b>
                                                                            </label>
                                                                            <select class="form-select form-select-sm" aria-label=".form-select-sm example" v-model="this.patStore.tnm.N">
                                                                                <option selected>-- select --</option>
                                                                                <option value="N0">N0</option>
                                                                                <option value="N1">N1</option>
                                                                                <option value="N2">N2</option>
                                                                                <option value="N3">N3</option>
                                                                                <option value="NX">NX</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-auto">
                                                                        <div class="form-check">
                                                                            <label class="form-check-label" for="flexCheckDefault">
                                                                                <b>M</b>
                                                                            </label>
                                                                            <select class="form-select form-select-sm" aria-label=".form-select-sm example" v-model="this.patStore.tnm.M">
                                                                                <option selected>-- select --</option>
                                                                                <option value="MX">MX</option>
                                                                                <option value="M0">M0</option>
                                                                                <option value="M1">M1</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <div class="row mb-2">
                                                                            <div class="col">
                                                                                <label for=""><b>Pathologic Stage: </b></label>
                                                                            </div>
                                                                        </div>
                                                                        <div class="row">   
                                                                            <div class="col">
                                                                                <div class="row">
                                                                                    <div class="col-auto">
                                                                                        <div class="form-check">
                                                                                        <input class="form-check-input" type="checkbox" :false-value="'N'" v-model="this.patStore.tnm.PathologicStage.stage1"  id="0">
                                                                                        <label class="form-check-label" for="0">
                                                                                            Stage 1
                                                                                        </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col">
                                                                                        <div class="row">
                                                                                            <div class="col-auto">
                                                                                                <div class="form-check">
                                                                                                <input class="form-check-input" type="checkbox"  v-model="this.patStore.tnm.PathologicStage.stage1a" :disabled="form.data.PathologicStage.stage1=='N'" id="1A">
                                                                                                <label class="form-check-label" for="1A">
                                                                                                    Stage 1A
                                                                                                </label>
                                                                                                </div>
                                                                                            </div>
                                                                                           
                                                                                        </div>
                                                                                        <div class="row">
                                                                                            <div class="col-auto">
                                                                                                <div class="form-check">
                                                                                                <input class="form-check-input" type="checkbox" v-model="this.patStore.tnm.PathologicStage.stage1b" :disabled="form.data.PathologicStage.stage1=='N'" id="1B">
                                                                                                <label class="form-check-label" for="1B">
                                                                                                    Stage 1B
                                                                                                </label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="row">
                                                                                            <div class="col-auto">
                                                                                                <div class="form-check">
                                                                                                <input class="form-check-input" type="checkbox" v-model="this.patStore.tnm.PathologicStage.stage1c" :disabled="form.data.PathologicStage.stage1=='N'" id="1C">
                                                                                                <label class="form-check-label" for="1C">
                                                                                                    Stage 1C
                                                                                                </label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col">
                                                                                <div class="row">
                                                                                    <div class="col-auto">
                                                                                        <div class="form-check">
                                                                                        <input class="form-check-input" type="checkbox" :false-value="'N'" v-model="this.patStore.tnm.PathologicStage.stage2" id="II">
                                                                                        <label class="form-check-label" for="II">
                                                                                            Stage II
                                                                                        </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col">
                                                                                        <div class="row">
                                                                                            <div class="col-auto">
                                                                                                <div class="form-check">
                                                                                                <input class="form-check-input" type="checkbox" v-model="this.patStore.tnm.PathologicStage.stage2a" :disabled="form.data.PathologicStage.stage2=='N'" id="IIA">
                                                                                                <label class="form-check-label" for="IIA">
                                                                                                    Stage IIA
                                                                                                </label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="row">
                                                                                            <div class="col-auto">
                                                                                                <div class="form-check">
                                                                                                <input class="form-check-input" type="checkbox" v-model="this.patStore.tnm.PathologicStage.stage2b" :disabled="form.data.PathologicStage.stage2=='N'" id="IIB">
                                                                                                <label class="form-check-label" for="IIB">
                                                                                                    Stage IIB
                                                                                                </label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="row">
                                                                                            <div class="col-auto">
                                                                                                <div class="form-check">
                                                                                                <input class="form-check-input" type="checkbox" v-model="this.patStore.tnm.PathologicStage.stage2c" :disabled="form.data.PathologicStage.stage2=='N'" id="IIC">
                                                                                                <label class="form-check-label" for="IIC">
                                                                                                    Stage IIC
                                                                                                </label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                
                                                                            </div>
                                                                            <div class="col">
                                                                                <div class="row">
                                                                                    <div class="col-auto">
                                                                                        <div class="form-check">
                                                                                        <input class="form-check-input" type="checkbox" :false-value="'N'" v-model="this.patStore.tnm.PathologicStage.stage3" id="III">
                                                                                        <label class="form-check-label" for="III">
                                                                                            Stage III
                                                                                        </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col">
                                                                                        <div class="row">
                                                                                            <div class="col-auto">
                                                                                                <div class="form-check">
                                                                                                <input class="form-check-input" type="checkbox" v-model="this.patStore.tnm.PathologicStage.stage3a" :disabled="form.data.PathologicStage.stage3=='N'" id="IIIA">
                                                                                                <label class="form-check-label" for="IIIA">
                                                                                                    Stage IIIA
                                                                                                </label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="row">
                                                                                            <div class="col-auto">
                                                                                                <div class="form-check">
                                                                                                <input class="form-check-input" type="checkbox" v-model="this.patStore.tnm.PathologicStage.stage3b" :disabled="form.data.PathologicStage.stage3=='N'" id="IIIB">
                                                                                                <label class="form-check-label" for="IIIB">
                                                                                                    Stage IIIB
                                                                                                </label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="row">
                                                                                            <div class="col-auto">
                                                                                                <div class="form-check">
                                                                                                <input class="form-check-input" type="checkbox" v-model="this.patStore.tnm.PathologicStage.stage3c" :disabled="form.data.PathologicStage.stage3=='N'" id="IIIC">
                                                                                                <label class="form-check-label" for="IIIC">
                                                                                                    Stage IIIC
                                                                                                </label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
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
                                            <button type="button" class="btn btn-primary" @click="save">Save changes</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { useTaskStore } from 'C:/xampp/htdocs/CancerRegistry/src/store/TaskStore.js'
import { usePatStore } from '@/store/PatStore';

    export default{
        setup(){
            const patStore = usePatStore()
        const taskStore = useTaskStore()
        return { taskStore, patStore}
      },
        data(){
            return{
                form:{
                    enccode:this.$route.params.hpercode,
                    entryBy:'',
                    section:'tnm',
                    data:{
                        T:null,
                        N:null,
                        M:null,
                        PathologicStage:{
                            stage1:'N',
                            stage1a:null,
                            stage1b:null,
                            stage1c:null,
                            stage2:'N',
                            stage2a:null,
                            stage2b:null,
                            stage2c:null,
                            stage3:'N',
                            stage3a:null,
                            stage3b:null,
                            stage3c:null
                        },
                    }
                }
            }
        },
        name: 'Modal',
        async created(){
            this.form.data= this.patStore.tnm
            const res = await this.getCancerData(this.form.enccode,'tnm')
                // if(res.data.length != 0)this.form.data = JSON.parse(res.data[0].data )
            // this.getCancerData(this.form.enccode,'tnm').then(response =>{
            //     if(JSON.parse(response.data[0].data) != null)
            //         this.form.data = JSON.parse(response.data[0].data);
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
                // console.log("getters:", this.patStore.savePersonals)
                // console.log(this.countincrement)
                // this.formStore.enccode = this.$route.params.hpercode
                // console.log(this.formStore.enccode)
                // // this.patStore.count
                // this.formStore.enccode = this.$route.params.hpercode
                // console.log("store enccode:",this.formStore.enccode )
                // // console.log(this.formStore.enccode)
                console.log(JSON.stringify(this.form))
                const json = {
                    json: JSON.stringify(this.form)
                }
                const response = await axios.post("http://192.168.7.66:8040/api/saveCancerDataJSON",json)
                console.log(response)
                // this.formStore.enccode=''
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
        width: 900px;
        height: 450px;
        margin-top: 5%;
        margin-left: 30%;
    }
  </style>