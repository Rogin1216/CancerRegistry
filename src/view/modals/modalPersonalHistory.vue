<template>
    <div class="modal-backdrop"  >
        <div class="modal">
            <div class="container">
                <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Personal and Social History </h5>
                                            <!-- <button @click="increment">count </button>:{{ this.patStore.count }} -->
                                            <button type="button" class="btn-close" @click="close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="container" id="container">
                                                <div class="row">
                                                    <div class="col">
                                                    <label for=""><b>Smoking history</b></label>
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="form-check form-check-inline">
                                                                    <input class="form-check-input"  v-model="this.patStore.personalHistory.SmokingHistory" type="radio" id="smokeYes" value="Y">
                                                                    <label class="form-check-label" for="smokeYes">Yes</label>
                                                                </div>
                                                                <div class="form-check form-check-inline">
                                                                    <input class="form-check-input" v-model="this.patStore.personalHistory.SmokingHistory" type="radio" id="smokeNo" value="N">
                                                                    <label class="form-check-label" for="smokeNo">No</label>
                                                                </div>
                                                                <div class="form-check form-check-inline">
                                                                    <input class="form-check-input" :disabled="this.patStore.personalHistory.SmokingHistory=='N'" v-model="this.patStore.personalHistory.CurrentSmoker" type="checkbox" id="smokeStopped" value="Stop">
                                                                    <label class="form-check-label" for="smokeStopped">Stopped</label>
                                                                </div>
                                                            </div>
                                                            <div class="row form-inline">
                                                                <div class="form-group mx-sm-1 mb-2">
                                                                    <input type="text" class="form-control" v-model="this.patStore.personalHistory.PackPerYear" id="" placeholder="Pack/year">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <label for=""><b>Second Hand Smoker (SHS)</b></label>
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="form-check form-check-inline">
                                                                    <input class="form-check-input" v-model="this.patStore.personalHistory.SecondHandSmoker" type="radio" id="shsYes" value="Y">
                                                                    <label class="form-check-label" for="shsYes">Yes</label>
                                                                </div>
                                                                <div class="form-check form-check-inline">
                                                                    <input class="form-check-input" v-model="this.patStore.personalHistory.SecondHandSmoker" type="radio" id="shsNo" value="N">
                                                                    <label class="form-check-label" for="shsNo">No</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <label for=""><b>Alcohol Intake</b></label>
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="form-check form-check-inline">
                                                                    <input class="form-check-input" v-model="this.patStore.personalHistory.AlcoholIntake" type="radio" id="alcoholYes" value="Y">
                                                                    <label class="form-check-label" for="alcoholYes">Yes</label>
                                                                </div>
                                                                <div class="form-check form-check-inline">
                                                                    <input class="form-check-input" v-model="this.patStore.personalHistory.AlcoholIntake" type="radio" id="alcoholNo" value="N">
                                                                    <label class="form-check-label" for="alcoholNo">No</label>
                                                                </div>
                                                                <div class="form-check form-check-inline">
                                                                    <input class="form-check-input" :disabled="this.patStore.personalHistory.AlcoholIntake=='N'" v-model="this.patStore.personalHistory.CurrentDrinker" type="checkbox" id="alcoholStopped">
                                                                    <label class="form-check-label" for="alcoholStopped">Stopped</label>
                                                                </div>
                                                            </div>
                                                            <div class="row form-inline">
                                                                <div class="form-group mx-sm-1 mb-2">
                                                                    <input type="text" class="form-control" v-model="this.patStore.personalHistory.DrinksAday" id="" placeholder="drinks/day">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <label for=""><b>Sexual History</b></label>
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="form-check form-check-inline">
                                                                    <!-- <input type="checkbox" class="form-check-input" id="coital" v-model="Coitaldebut"> -->
                                                                    <label for="coital" class="form-check-label">Coital Debut Age</label>
                                                                    <input type="text" v-model="this.patStore.personalHistory.Coitaldebut" id="coital" class="form-control">
                                                                    
                                                                </div>
                                                                <div class="form-check form-check-inline">
                                                                    
                                                                        <input type="text" class="form-control" v-model="this.patStore.personalHistory.NumberOfPartner" id="" placeholder="# of sexual partner">
                                                                    
                                                                    
                                                                </div>
                                                            </div>
                                                            <!-- <div class="col">
                                                                <div class="form-check form-check-inline">
                                                                    <input class="form-check-input" v-model="SexualHistory" type="radio" id="sexYes" value="Y">
                                                                    <label class="form-check-label"  for="sexYes">Yes</label>
                                                                </div>
                                                                <div class="form-check form-check-inline">
                                                                    <input class="form-check-input" v-model="SexualHistory" type="radio" id="sexNo" value="N">
                                                                    <label class="form-check-label" for="sexNo">No</label>
                                                                </div>
                                                            </div> -->
                                                        </div>
                                                        <div class="row form-inline">
                                                            <div class="col">
                                                                <div class="form-group mx-sm-1 mb-2">
                                                                    <input type="checkbox" class="form-check-input" id="NA" v-model="this.patStore.personalHistory.NotApplicable">
                                                                    <label for="NA" class="form-check-label">N/A</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <label for=""><b>Average Montly Family Income:</b></label>
                                                        <div class="row">
                                                            <div class="form-group mx-sm-1 mb-2">
                                                                <!-- <input type="text" class="form-control" v-model="AvgMonthlyFamIncome" id="" placeholder=""> -->
                                                                <select name="" class="form-select" id="" v-model="this.patStore.personalHistory.AvgMonthlyFamIncome">
                                                                    <option value="10,00php - 40,000php">10,000php - 40,000php</option>
                                                                    <option value="40,000php - 70,000php">40,000php - 70,000php</option>
                                                                    <option value="70,000php - 150,000php">70,000php - 150,000php</option>
                                                                    <option value="150,000php - 300,000php">150,000php - 300,000php</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- <div class="row">
                                                    <div class="col">
                                                        <label for=""><b>Means of Health Expenditure:</b></label>
                                                        <div class="row">
                                                            <div class="form-group mx-sm-1 mb-2">
                                                                <input type="text" class="form-control" v-model="MeansOfHealthExpenditure" id="" placeholder="">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> -->
                                                <div class="row">
                                                    <div class="col-auto">
                                                        <label for=""><b>Vaccine:</b></label>
                                                        <div class="row">
                                                            <div class="col-auto">
                                                                <div class="d-inline me-2">
                                                                    <input type="checkbox" class="form-check-input" id="1" v-model="this.patStore.personalHistory.Vaccines.v1" :true-value="'HepV'" >
                                                                    <label for="1">HPV</label>
                                                                </div>
                                                                <div class="d-inline me-2">
                                                                    <input type="checkbox" class="form-check-input" id="2" v-model="this.patStore.personalHistory.Vaccines.v2" :true-value="'HepB'" >
                                                                    <label for="2">HepB</label>
                                                                </div>
                                                                <div class="d-inline me-2">
                                                                    <input type="checkbox" class="form-check-input" id="3" v-model="this.patStore.personalHistory.Vaccines.v3" :true-value="'Pneumonial'" >
                                                                    <label for="3">Pneumonial</label>
                                                                </div>
                                                                <div class="d-inline me-2">
                                                                    <input type="checkbox" class="form-check-input" id="4" v-model="this.patStore.personalHistory.Vaccines.v4" :true-value="'Flu'" >
                                                                    <label for="4">Flu</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- <div>
                                                            <div class="d-block">
                                                                <div class="d-inline p-1">
                                                                    <input type="checkbox" class="form-check-input" id="1" v-model="Vaccines.v1" :true-value="'HepV'" >
                                                                    <label for="1">HPV</label>
                                                                </div>
                                                                <div class="d-inline p-1">
                                                                    <input type="checkbox" class="form-check-input" id="2" v-model="Vaccines.v2" :true-value="'HepB'" >
                                                                    <label for="2">HepB</label>
                                                                </div>
                                                            </div>
                                                            <div class="d-block">
                                                                <div class="d-inline p-1">
                                                                    <input type="checkbox" class="form-check-input" id="3" v-model="Vaccines.v3" :true-value="'CDC'" >
                                                                    <label for="3">CDC</label>
                                                                </div>
                                                                <div class="d-inline p-1">
                                                                    <input type="checkbox" class="form-check-input" id="4" v-model="Vaccines.v4" :true-value="'Pfizer'" >
                                                                    <label for="4">Pfizer</label>
                                                                </div>
                                                                <div class="d-inline p-1">
                                                                    <input type="checkbox" class="form-check-input" id="5" v-model="Vaccines.v5" :true-value="'AstraZeneca'" >
                                                                    <label for="5">AstraZeneca</label>
                                                                </div>
                                                            </div>
                                                            <div class="d-block">
                                                                <div class="d-inline p-1">
                                                                    <input type="checkbox" class="form-check-input" id="6" v-model="Vaccines.v6" :true-value="'Moderna'" >
                                                                    <label for="6">Moderna</label>
                                                                </div>
                                                                <div class="d-inline p-1">
                                                                    <input type="checkbox" class="form-check-input" id="7" v-model="Vaccines.v7" :true-value="'Sinovac'" >
                                                                    <label for="7">Sinovac</label>
                                                                </div>
                                                                <div class="d-inline p-1">
                                                                    <input type="checkbox" class="form-check-input" id="8" v-model="Vaccines.v8" :true-value="'Gamaleya'" >
                                                                    <label for="8">Gamaleya</label>
                                                                </div>
                                                                <div class="d-inline p-1">
                                                                    <input type="checkbox" class="form-check-input" id="9" v-model="Vaccines.v9" :true-value="'J & J'" >
                                                                    <label for="9">J & J</label>
                                                                </div>
                                                            </div>
                                                        </div> -->
                                                        
                                                    </div>
                                                    
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <label for=""><b>Sars Covid:</b></label>
                                                        <div class="row">
                                                            <div class="col">
                                                                Primary
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <select class="form-select" aria-label="Default select example" v-model="this.patStore.personalHistory.primary1st">
                                                                            <option selected>---</option>
                                                                            <option value="Pfizer">Pfizer</option>
                                                                            <option value="AstraZeneca">AstraZeneca</option>
                                                                            <option value="Moderna">Moderna</option>
                                                                            <option value="Sinovac">Sinovac</option>
                                                                            <option value="Gamaleya">Gamaleya</option>
                                                                            <option value="JJ">J & J</option>
                                                                          </select>
                                                                    </div>
                                                                    <div class="col">
                                                                        <select class="form-select" aria-label="Default select example" v-model="this.patStore.personalHistory.primary2nd">
                                                                            <option selected>---</option>
                                                                            <option value="Pfizer">Pfizer</option>
                                                                            <option value="AstraZeneca">AstraZeneca</option>
                                                                            <option value="Moderna">Moderna</option>
                                                                            <option value="Sinovac">Sinovac</option>
                                                                            <option value="Gamaleya">Gamaleya</option>
                                                                            <option value="JJ">J & J</option>
                                                                          </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                Booster
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <select class="form-select" aria-label="Default select example" v-model="this.patStore.personalHistory.booster1st">
                                                                            <option selected>---</option>
                                                                            <option value="Pfizer">Pfizer</option>
                                                                            <option value="AstraZeneca">AstraZeneca</option>
                                                                            <option value="Moderna">Moderna</option>
                                                                            <option value="Sinovac">Sinovac</option>
                                                                            <option value="Gamaleya">Gamaleya</option>
                                                                            <option value="JJ">J & J</option>
                                                                          </select>
                                                                    </div>
                                                                    <div class="col">
                                                                        <select class="form-select" aria-label="Default select example" v-model="this.patStore.personalHistory.booster2nd">
                                                                            <option selected>---</option>
                                                                            <option value="Pfizer">Pfizer</option>
                                                                            <option value="AstraZeneca">AstraZeneca</option>
                                                                            <option value="Moderna">Moderna</option>
                                                                            <option value="Sinovac">Sinovac</option>
                                                                            <option value="Gamaleya">Gamaleya</option>
                                                                            <option value="JJ">J & J</option>
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
                                            <button class="btn btn-secondary border-b border-teal font-semibold" @click="close">Close</button>
                                            <button type="button" @click="save" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
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
                    section:'PersonalAndSocialistory',
                    sectionCode:'01',
                    data:{
                        SmokingHistory:'N',
                        CurrentSmoker: null,
                        PackPerYear: null,
                        SecondHandSmoker: null,
                        AlcoholIntake: 'N',
                        CurrentDrinker: null,
                        DrinksAday: null,
                        Coitaldebut: null,
                        NotApplicable: null,
                        NumberOfPartner: null,
                        AvgMonthlyFamIncome:null,
                        Vaccines:
                            {
                                v1:null,
                                v2:null,
                                v3:null,
                                v4:null
                            },
                        primary1st: null,
                        primary2nd: null,
                        booster1st: null,
                        booster2nd: null
                    }
                }
            }
        },
          name: 'Modal', 

        async created(){
            this.form.data= this.patStore.personalHistory 
            // this.patStore.first
            
            // const res10 = await this.getCancerData(this.form.enccode,'PersonalAndSocialistory')
            //     if(res10.data.length != 0)this.this.patStore.personalHistory = JSON.parse(res10.data[0].data )
            const res10 = await this.getCancerData(this.form.enccode,'PersonalAndSocialistory')
            console.log("res10", JSON.parse(res10.data[0].data))
            // console.log("patstore", this.patStore.personalHistory)
                // if(res10.data.length != 0)this.patStore.personalHistory = JSON.parse(res10.data[0].data )

            // this.getCancerData(this.form.enccode, 'PersonalAndSocialistory').then(response => {
            //     // console.log("modal personal:", response.data[0].data)

                // if(JSON.parse(response.data[0].data) != null)
                //     this.this.patStore.personalHistory = JSON.parse(response.data[0].data);
            // })
        },
        computed:{
            patHpercode(){
                // console.log("computed ", this.$route.params.hpercode)
                // this.formStore.enccode = this.$route.params.hpercode
                // console.log("store enccode:",this.formStore.enccode )
            }
        },
        methods: {
            increment(){
                // console.log("increment")
                this.patStore.countIncrease
                // this.count++
                console.log("Count ", this.patStore.count)
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
                // console.log("getters:", this.patStore.savePersonals)
                // console.log(this.countincrement)
                // this.formStore.enccode = this.$route.params.hpercode
                // console.log(this.formStore.enccode)
                // // this.patStore.count
                // this.formStore.enccode = this.$route.params.hpercode
                // console.log("store enccode:",this.formStore.enccode )
                console.log(this.form)
                console.log(JSON.stringify(this.form))
                
                const json = {
                    json: JSON.stringify(this.form)
                }
                const response = await axios.post("http://192.168.7.66:8040/api/saveCancerDataJSON",json)
                // this.formStore.enccode=''
                // this.$router.go(0)
                this.close()
                return response;
            },

            close() {
                
                this.$emit("close");
            },
          },

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
        width: 550px;
        height: 780px;
        margin-top: 5%;
        margin-left: 40%;
        
    }
    #container{
        justify-content: flex-start;
        text-align: start;
        transition: 0.3s;
    }
  </style>
