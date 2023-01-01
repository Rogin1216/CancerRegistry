<template>
    <div class="modal-backdrop">
        <div class="modal">
            <div class="container" id="modalLaterality" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-xl">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Biomarker Data</h5>
                                            <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="container">
                                                <div>
                                                    <!-- <button @click="add">add</button>
                                                    <button @click="remove">remove</button> -->
                                                    <div class="row">
                                                        <div class="col">
                                                            <div class="mb-3">
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <div class="input-group mb-3">
                                                                            <label for="" class="form-control">Biomarker Description: </label>
                                                                            <input type="text" class="form-control"  v-model="form.data">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <div class="input-group mb-3">
                                                                            <label for="" class="form-control">Biomarkerd Date: </label>
                                                                            <input type="text" class="form-control"  v-model="form.data.bioDate['date']">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <div class="input-group mb-3">
                                                                            <label for="" class="form-control">Level: </label>
                                                                            <input type="text" class="form-control"  v-model="form.data.bioLevel['level']">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <div class="input-group mb-3">
                                                                            <label for="" class="form-control">Ref Range: </label>
                                                                            <input type="text" class="form-control"  v-model="form.data.bioRange['range']" >
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
    export default{
        data(){
            return{
                count:1,
                form:{
                    enccode:this.$route.params.hpercode,
                    entryBy:'',
                    section:'bioMarker',
                    data:{
                        bioDesc:{},
                        bioDate:{},
                        bioLevel:{},
                        bioRange:{},
                    }
                }
            }
        },
        name: 'Modal',
        async created(){
            // const res = await this.getCancerData(this.form.enccode,'bioMarker')
            //     if(res.data.length != 0)this.form.data = JSON.parse(res.data[0].data )
            // this.getCancerData(this.form.enccode,'staging').then(response =>{
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
                console.log(JSON.stringify(this.form))
                
                
                const json = {
                    json: JSON.stringify(this.form)
                }
                const response = await axios.post("http://192.168.7.66:8040/api/saveCancerDataJSON",json)
                // this.$router.go(0)
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
        margin-left: 25%;
    }
  </style>