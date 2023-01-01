<template>
    <div class="modal-backdrop">
        <div class="modal">
            <div class="container" id="modalOccupation" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add Family</h5>
                        <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <!-- <div v-for="i in count" :key="i"> -->
                                <div>
                                <!-- <button @click="add">add</button>
                                <button @click="remove">remove</button> -->
                                
                                <div class="row">
                                    <div class="col">
                                        <div class="mb-3">
                                            <div class="row">
                                                <div class="col">
                                                    <div class="input-group mb-3">
                                                        <!-- count: {{ this.count }} -->
                                                        <label for="" class="form-control">Name: </label>

                                                        <!-- <input type="text" class="form-control"  v-model="form.data.info['name '+i] "> -->
                                                        <input type="text" class="form-control"  v-model="form.data.fam.name ">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="input-group mb-3">
                                                        <label for="" class="form-control">Type of Cancer: </label>
                                                        <input type="text" class="form-control"  v-model="form.data.fam.toc ">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="input-group mb-3">
                                                        <label for="" class="form-control">Consanguinity: </label>
                                                        <input type="text" class="form-control"  >
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <div class="input-group mb-3">
                                                        <label for="" class="form-control">Age at Diagnosis: </label>
                                                        <input type="text" class="form-control"  >
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
                        <button type="button" class="btn btn-success" @click="addFamily">Add</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
    export default{
        data(){
            return{
                count:1,
                form:{
                    enccode:this.$route.params.hpercode,
                    entryBy:'',
                    section:'familyHistory',
                    family:[],
                    data:{
                        fam:{
                            name:'',
                            toc:''
                        },
                        // info:{
                        //     name:'',
                        //     toc:''
                        // }
                        // name:'',
                        // toc:''
                    }
                }
            }
        },
        name: 'Modal',
        methods: {
            add(){
                this.count++
            },
            remove(){
                this.count--
            },
            async created(){
                // const res = await this.getCancerData(this.form.enccode,'familyHistory')
                
                //     if(res.data.length != 0)this.form.data = JSON.parse(res.data[0].data )
            },
            async addFamily(){
                const res = await this.getCancerData(this.form.enccode,'familyHistory')
                // console.log("res.data: ", res.data)
                this.form.family.push(res.data[0].data)
                console.log("append first ", this.form.data.fam)
                // this.form.family.push(this.form.data.info)
                // console.log("append second ", this.form.family)
// 
                // console.log("res.data[0].data: ", res.data[0].data)
                // console.log("saved data ",this.form.data.info)
                
                // console.log("JSON.parse(res.data[0].data): ",JSON.parse(res.data[0].data) )
                
                

            },
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
        width: 800px;
        height: 460px;
        margin-top: 5%;
        margin-left: 25%;
    }
  </style>