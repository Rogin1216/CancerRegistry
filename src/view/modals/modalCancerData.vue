<template>
    <div class="modal-backdrop">
        <div class="modal">
            <div class="container" id="modalOccupation" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Cancer Data</h5>
                            <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="container" id="container">
                                <div class="row">
                                    <div class="col-auto ">
                                        <b>Referred from region/province</b>
                                        <div class="col">
                                            <input type="text" class="form-control" id="" placeholder="" v-model="this.patStore.cancerData.ReferredFromRegion">
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="row">
                                            <div class="col">
                                                <div class="row">
                                                    <div class="col">
                                                        <b>Name of Referring Health Facility:</b>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <input type="text" class="form-control" id="" placeholder="" v-model="this.patStore.cancerData.NameOfReferringHealthFacility">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <div class="row">
                                                    <div class="col">
                                                        <b>Doctor/Health Care Professional:</b>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col">
                                                        <input type="text" class="form-control" id="" placeholder="" v-model="this.patStore.cancerData.DoctorHealthCareProf">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="row">
                                            <div class="col col-lg ">
                                                <b>Reason for Referral</b>
                                                <div class="row">
                                                    <div class="col col-lg-5">
                                                        <input class="form-check-input" type="radio" v-model="this.patStore.cancerData.ReasonForReferral" value="Financial Contstraint"
                                                             id="reasFin">
                                                        <label for="reasFin">Financial Constraint</label>
                                                        <div class="row">
                                                            <div class="col">
                                                            
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <input class="form-check-input" type="radio" v-model="this.patStore.cancerData.ReasonForReferral" value="Seek advice/2nd opinion"
                                                                              id="reasOp">
                                                                        <label for="reasOp">Seek advice/2<sup>nd</sup>
                                                                            opinion</label>
                                                                        
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

                                <div class="row">
                                    <div class="col mt-2">
                                        <b>Date of Consultation/Admission:</b>
                                        <div class="row">
                                            <div class="col">
                                                <input type="date" class="form-control" id="" placeholder="" v-model="this.patStore.cancerData.DateOfConsultation">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col mt-2">
                                        <b>Chief Complaint:</b>
                                        <div class="row">
                                            <div class="col">
                                                <input type="text" class="form-control" id="" placeholder="" v-model="this.patStore.cancerData.ChiefComplaint">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col mt-2">
                                        <b>Date of Diagnosis(Clinical):</b>
                                        <input type="date" class="form-control" id="" placeholder="" v-model="this.patStore.cancerData.ClinicalDate">
                                    </div>
                                    <div class="col mt-2">
                                        <b>Date of Diagnosis(Pathologic):</b>
                                        <input type="date" class="form-control" id="" placeholder="" v-model="this.patStore.cancerData.PathologicDate">
                                        <div class="row">
                                            <!-- <div class="col">
                                                <b>Type of Diagnosis</b>
                                                <div class="row">
                                                    <div class="col">
                                                        <input class="form-check-input" type="radio"  value="New"
                                                            v-model="TypeOfDiagnosis" id="diagNew">
                                                        <label for="diagNew">New</label>

                                                    </div>

                                                    <div class="col">
                                                        <input class="form-check-input" type="radio" value="Retreatment"
                                                            v-model="TypeOfDiagnosis" id="diagRetreat">
                                                        <label for="diagRetreat">Retreatment</label>
                                                    </div>
                                                    <div class="col">
                                                        <input class="form-check-input" type="radio" value="Not Treated"
                                                            v-model="TypeOfDiagnosis" id="diagNotTreat">
                                                        <label for="diagNotTreat">Not treated</label>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col">
                                                            <input class="form-check-input" type="radio" value="Unknown Treatment"
                                                                v-model="TypeOfDiagnosis" id="diagUnkwn">
                                                            <label for="diagUnkwn">Unknown Treatment</label>
                                                            <div class="row">
                                                                <div class="col">
                                                                    <input class="form-check-input" type="radio"
                                                                        value="Incomplete" v-model="TypeOfDiagnosis" id="diagInc">
                                                                    <label for="diagInc">Incomplete treatment, now
                                                                        Stable</label>
                                                                    <div class="row">
                                                                        <div class="col">
                                                                            <input class="form-check-input" type="radio"
                                                                                value="Completed" v-model="TypeOfDiagnosis" id="diagCom">
                                                                            <label for="diagCom">Completed First
                                                                                treatment now recurrent</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col">
                                        <b>Previous diagnosis of cancer:</b>
                                        <div class="row">
                                            <div class="col">
                                                <input class="form-check-input" type="radio" value="N"
                                                    v-model="this.patStore.cancerData.PreviousDiagnosis" id="diagCancNo">
                                                <label for="diagCancNo">NO</label>
                                                <div class="row">
                                                    <div class="col">
                                                        <input class="form-check-input" type="radio" value="Y"
                                                            v-model="this.patStore.cancerData.PreviousDiagnosis" id="diagCancYes">
                                                        <label for="diagCancYes">YES</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col col-lg-9">
                                        <label for="">if YES:</label>
                                        <div class="row">
                                            <div class="col">
                                                <i>Primary site</i>
                                                <div class="row">
                                                    <div class="col ">
                                                        <input type="text" class="form-control" id="" placeholder="" v-model="this.patStore.cancerData.PrimarySite">
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- <div class="col">
                                                <i>Date of Diagnosis</i>
                                                <div class="row">
                                                    <div class="col">
                                                        <input type="date" class="form-control" id="" placeholder="" v-model="DateofDiagnosis">
                                                    </div>
                                                </div>
                                            </div> -->
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <i>Treatment recieved</i>
                                        
                                        <div class="row">
                                            <div>
                                                <input class="form-check-input" type="checkbox" :true-value="'Chemotherapy'"
                                                    v-model="this.patStore.cancerData.TreatmentRecieved.Chemotherapy" id="diagCancChemo">
                                                <label for="diagCancChemo">Chemotherapy</label>
                                            </div>
                                            <Transition name="slide-fade">
                                                <div class="ms-4" id="append" v-if="this.patStore.cancerData.TreatmentRecieved.Chemotherapy">
                                                    <div>
                                                        Protocol: <input type="text" v-model="this.patStore.cancerData.Chemotherapy.protocol"> 
                                                    </div>
                                                    <div>
                                                        # of cycles: <input type="text" v-model="this.patStore.cancerData.Chemotherapy.cycles">
                                                    </div>
                                                    <div>
                                                        Date: <input type="date" v-model="this.patStore.cancerData.Chemotherapy.date">
                                                    </div>
                                                </div>
                                            </Transition>
                                        </div>
                                        <div class="row">
                                            <div>
                                                <input class="form-check-input" type="checkbox" :true-value="'Surgery'"
                                                    v-model="this.patStore.cancerData.TreatmentRecieved.Surgery" id="diagCancSurg">
                                                <label for="diagCancSurg">Surgery</label>
                                            </div>
                                            <Transition name="slide-fade">
                                                <div class="ms-4" id="append" v-if="this.patStore.cancerData.TreatmentRecieved.Surgery">
                                                    <div>
                                                        Procedure: <input type="text" v-model="this.patStore.cancerData.Surgery.procedure"> 
                                                    </div>
                                                    <div>
                                                        Date: <input type="date" v-model="this.patStore.cancerData.Surgery.date">
                                                    </div>
                                                </div>
                                            </Transition>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                
                                                <input class="form-check-input" type="checkbox" :true-value="'Radiation'"
                                                    v-model="this.patStore.cancerData.TreatmentRecieved.Radiation" id="diagCancRad">
                                                <label for="diagCancRad">Radiation</label>
                                            </div>
                                            <Transition name="slide-fade">
                                                <div class="ms-4" id="append" v-if="this.patStore.cancerData.TreatmentRecieved.Radiation">
                                                    <div>
                                                        Site: <input type="text" v-model="this.patStore.cancerData.Radiation.site"> 
                                                    </div>
                                                    <div>
                                                        Date started: <input type="date" v-model="this.patStore.cancerData.Radiation.dateStarted">
                                                    </div>
                                                </div>
                                            </Transition>
                                        </div>
                                        <div class="row">
                                            <div>
                                                
                                                <input class="form-check-input" type="checkbox" :true-value="'Hormonal'"
                                                    v-model="this.patStore.cancerData.TreatmentRecieved.Hormonal" id="diagCancHorm">
                                                <label for="diagCancHorm">Hormonal</label>
                                            </div>
                                            <Transition name="slide-fade">
                                                <div class="ms-4" id="append" v-if="this.patStore.cancerData.TreatmentRecieved.Hormonal">
                                                    <div>
                                                        Medication: <input type="text" v-model="this.patStore.cancerData.Hormonal.medication"> 
                                                    </div>
                                                    <div>
                                                        Duration: <input type="text" v-model="this.patStore.cancerData.Hormonal.duration">
                                                    </div>
                                                    <div>
                                                        Date started: <input type="date" v-model="this.patStore.cancerData.Hormonal.dateStarted">
                                                    </div>
                                                </div>
                                            </Transition>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <input class="form-check-input" type="checkbox" :true-value="'None'"
                                                    v-model="this.patStore.cancerData.TreatmentRecieved.none" id="diagCancNone">
                                                <label for="diagCancNone">None</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <input class="form-check-input" type="checkbox" :true-value="'Others'"
                                                    v-model="this.patStore.cancerData.TreatmentRecieved.others" id="Others">
                                                <label for="Others">Others</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <i>Status</i>
                                        <div class="row">
                                            <div class="col">
                                                <input class="form-check-input" type="radio" value="Remission"
                                                    v-model="this.patStore.cancerData.Status" id="diagCancRemi">
                                                <label for="diagCancRemi">Remission</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <input class="form-check-input" type="radio" value="Stable disease"
                                                    v-model="this.patStore.cancerData.Status" id="diagCancProg">
                                                <label for="diagCancProg">Stable disease</label>
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
                section:'cancerData',
                data:{
                    ReferredFromRegion:null,
                    NameOfReferringHealthFacility:null,
                    DoctorHealthCareProf:null,
                    ReasonForReferral:null,
                    DateOfConsultation:null,
                    ChiefComplaint:null,
                    ClinicalDate:null,
                    PathologicDate:null,
                    PreviousDiagnosis:null,
                    PrimarySite:null,
                    TreatmentRecieved:{
                        Chemotherapy:null,
                        Surgery:null,
                        Radiation:null,
                        Hormonal:null,
                        none:null,
                        others:null,
                    },
                    Chemotherapy:{
                        protocol:null,
                        cycles:null,
                        date:null,
                    },
                    Surgery:{
                        procedure:null,
                        date:null
                    },
                    Radiation:{
                        site:null,
                        dateStarted:null
                    },
                    Hormonal:{
                        medication:null,
                        duration:null,
                        dateStarted:null
                    },
                    Status:null
                }
               }
            }
        },
        name: 'Modal',
        async created(){
            this.form.data = this.patStore.cancerData
            const res = await this.getCancerData(this.form.enccode,'cancerData')
            console.log("res10", JSON.parse(res.data[0].data))
                // if(res.data.length != 0)this.cancerData = JSON.parse(res.data[0].data )

            // this.getCancerData(this.form.enccode,'cancerData').then(response =>{
            //     if(JSON.parse(response.data[0].data) != null)
            //         this.this.patStore.cancerData = JSON.parse(response.data[0].data);
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
            close() {
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
        /* justify-content: center; */
        justify-content: flex-start;
        align-items: center;

    }
    #append{
        transition: 0.3s
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
        height: 710px;
        margin-top: 5%;
        margin-left: 20%;
    }

    #container {
        /* border: 1px solid black; */
        justify-content: flex-start;
        text-align: start;
    }
    
    .slide-fade-enter {
        transition: all .2s ease;
      }
      .slide-fade-leave-active {
        transition: all .4s ease;
      }
      .slide-fade-enter-from, .slide-fade-leave-to
      /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
      }
</style>