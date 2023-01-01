<template>
    <div class="modal-backdrop">
        <div class="modal">
            <div class="container" id="modalOccupation" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Occupational/Environmental History</h5>
                                            <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                        <div class="container" id="container">
                                            <div class="row">
                                                <div class="col">
                                                    <label for=""><b>Exposure to:</b> </label>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="form-check">
                                                        <input class="form-check-input"  v-model="this.patStore.occupational.ExposureTo.AirContaminants" :false-value="''" :true-value="'Air Contaimants'" type="checkbox" id="E1" >
                                                        <label class="form-check-label" for="E1">Air contaminants</label>
                                                        </div>

                                                        <div class="form-check">
                                                        <input class="form-check-input"  v-model="this.patStore.occupational.ExposureTo.ToxicWaste" :false-value="''" :true-value="'Toxic Waste'" type="checkbox" id="E2" >
                                                        <label class="form-check-label" for="E2">Toxic waste</label>
                                                        </div>

                                                        <div class="form-check">
                                                        <input class="form-check-input" v-model="this.patStore.occupational.ExposureTo.Radiation" :false-value="''" :true-value="'Radiation'" type="checkbox" id="E3"  >
                                                        <label class="form-check-label" for="E3">Radiation</label>
                                                        </div>

                                                        <div class="form-check">
                                                        <input class="form-check-input"  v-model="this.patStore.occupational.ExposureTo.Pesticides" :false-value="''" :true-value="'Pesticides'" type="checkbox" id="E4"  >
                                                        <label class="form-check-label" for="E4">Pesticides</label>
                                                        </div>

                                                        <div class="form-check">
                                                        <input class="form-check-input"  v-model="this.patStore.occupational.ExposureTo.Chemicals" :false-value="''" :true-value="'Chemicals in Consumer Products'" type="checkbox" id="E5"  >
                                                        <label class="form-check-label" for="E5">Chemicals in consumer products</label>
                                                        </div>

                                                        <div class="form-check">
                                                        <input class="form-check-input"  v-model="this.patStore.occupational.ExposureTo.WeatherEvents" :false-value="''" :true-value="'Weather Events'" type="checkbox" id="E6"  >
                                                        <label class="form-check-label" for="E6">Weather events</label>
                                                        </div>

                                                        <div class="form-check">
                                                        <input class="form-check-input"  v-model="this.patStore.occupational.ExposureTo.None" :false-value="''" :true-value="'None'" type="checkbox" id="E7"  >
                                                        <label class="form-check-label" for="E7">None</label>
                                                        </div>

                                                        <div class="form-check form-check-inline">
                                                        <input class="form-check-input"  v-model="this.patStore.occupational.ExposureTo.Others" :false-value="''" :true-value="'Others'" type="checkbox" id="E8" >
                                                        <label class="form-check-label" for="E8">Others:</label>
                                                        <input type="text" class="form-control" v-model="this.patStore.occupational.ExposureToOthers">
                                                        </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col">
                                                    <label for=""><b>Longest Job Held:</b></label>
                                                    <div class="row">
                                                        <div class="col">
                                                            <input type="text" class="form-control" v-model="this.patStore.occupational.LongestJobHeld">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        
                                        </div>
                                        <div class="modal-footer">
                                            <button class="btn btn-secondary border-b border-teal font-semibold" @click="close">Close</button>
                                            <button type="button" @click="save" class="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
        </div>
        
    </div>
    </div>
</template>
  
  <script>
  import axios from 'axios';
  import { usePatStore } from '@/store/PatStore';
  import { storeToRefs } from 'pinia';
      export default {
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
                    section:'occupational',
                    data:{
                        ExposureTo:{
                            AirContaminants:null,
                            ToxicWaste:null,
                            Radiation:null,
                            Pesticides:null,
                            Chemicals:null,
                            WeatherEvents:null,
                            None:null,
                            Others:null,
                        },
                        ExposureToOthers: null,
                        LongestJobHeld: null
                    }
                }
            }
        },
          name: 'Modal',
          async created(){
            this.form.data= this.patStore.occupational 
            const res = await this.getCancerData(this.hpercode,'occupational')
                if(res.data.length != 0)this.occupational = JSON.parse(res.data[0].data )
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
            close() {
                this.$emit("close");
            }
          }
      };
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
        width: 500px;
        height: 560px;
        margin-top: 5%;
        margin-left: 40%;
    }
    #container{
        justify-content: flex-start;
        text-align: start;
    }
  </style>
<!-- 
 -->
