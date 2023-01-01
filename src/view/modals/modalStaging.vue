<template>
    <div class="modal-backdrop">
        <div class="modal">
            <div class="container" id="modalLaterality" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-xl">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Staging(other than TNM)</h5>
                                            <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col">
                                                    <div class="mb-3">
                                                        <div class="row">
                                                            <div class="col">
                                                                <b>Sites of Distant Metastatis: </b>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" :true-value="'None'" :false-value="''" v-model="this.patStore.staging.site.none" id="None">
                                                                <label class="form-check-label" for="None">
                                                                    None
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" :true-value="'Distant Lymph Nodes'" :false-value="''" v-model="this.patStore.staging.site.distant" id="Distant_Lymph">
                                                                <label class="form-check-label" for="Distant_Lymph">
                                                                    Distant Lymph Nodes
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" :true-value="'Bone'" :false-value="''" v-model="this.patStore.staging.site.bone" id="Bone">
                                                                <label class="form-check-label" for="Bone">
                                                                    Bone
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" :true-value="'Liver'" :false-value="''" v-model="this.patStore.staging.site.liver" id="Liver">
                                                                <label class="form-check-label" for="Liver">
                                                                    Liver
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" :true-value="'Lung(Pluera)'" :false-value="''" v-model="this.patStore.staging.site.lung" id="Pleura">
                                                                <label class="form-check-label" for="Pleura">
                                                                    Lung(Pleura)
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" :true-value="'Brain'" :false-value="''" v-model="this.patStore.staging.site.brain" id="Brain">
                                                                <label class="form-check-label" for="Brain">
                                                                    Brain
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" :true-value="'Ovary'" :false-value="''" v-model="this.patStore.staging.site.ovary" id="Ovary">
                                                                <label class="form-check-label" for="Ovary">
                                                                    Ovary
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" :true-value="'Skin'" :false-value="''" v-model="this.patStore.staging.site.skin" id="Skin">
                                                                <label class="form-check-label" for="Skin">
                                                                    Skin
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" v-model="this.patStore.staging.site.other" id="Other">
                                                                <label class="form-check-label" for="Other">
                                                                    Other:
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <input type="text" class="form-control" v-model="this.patStore.staging.others">
                                                            </div>
                                                            <div class="col-auto">
                                                                <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" :true-value="'Unknown'" :false-value="''" v-model="this.patStore.staging.site.unknown" id="UnknownSites">
                                                                <label class="form-check-label" for="UnknownSites">
                                                                    Unknown
                                                                </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- <div class="row">
                                                            <div class="col">
                                                                <b>Number of Metastatistic sites: </b>
                                                            </div>
                                                        </div> -->
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
import { usePatStore } from '@/store/PatStore';
    export default{
        setup(){
            const patStore = usePatStore()
            return { patStore }
        },
        data(){
            return{
                form:{
                    enccode:this.$route.params.hpercode,
                    entryBy:'',
                    section:'staging',
                    data:{
                        site:{
                            none:null,
                            distant:null,
                            bone:null,
                            liver:null,
                            lung:null,
                            brain:null,
                            ovary:null,
                            skin:null,
                            other:null,
                            unknown:null
                        },
                        others:null
                    }
                }
            }
        },
        name: 'Modal',
        async created(){
            this.form.data = this.patStore.staging
            // const res = await this.getCancerData(this.hpercode,'staging')
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
                this.$router.go(0)
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
        height: 420px;
        margin-top: 5%;
        margin-left: 25%;
    }
  </style>