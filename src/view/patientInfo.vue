<template>
    <!-- <div class="d-flex" v-if="!patbody || patbody.length == 0"> -->

    <!-- <div class="d-flex" v-if="!patOtherdata || patOtherData.length == ''"> -->
    <div class="d-flex">
        <div v-for="pat in patinfo" :key="pat" id="page-content-wrapper">
            
            <div>
                <!-- MODALS -->
                <transition name="fade"><modalPersonalHistory v-show="modalOpen" @close="close"/></transition>
                <transition name="fade"><modalOccupational v-show="modalOpen1" @close="close"></modalOccupational></transition>
                <transition name="fade"><modalMedicalCondition v-show="modalOpen2" @close="close"></modalMedicalCondition></transition>
                <transition name="fade"><modalFemaleSubject v-show="modalOpen3" @close="close"></modalFemaleSubject></transition>
                <transition name="fade"><modalCancerData v-show="modalOpen4" @close="close"></modalCancerData></transition>
                <transition name="fade"><modalPrimarySite v-show="modalOpen5" @close="close"></modalPrimarySite></transition>
                <transition name="fade"><modalPrimaryConcurrent v-show="modalOpen6" @close="close"></modalPrimaryConcurrent></transition>
                <transition name="fade"><modalTestBaseline v-show="modalOpen7" @close="close"></modalTestBaseline></transition>
                <transition name="fade"><modalLaterality v-show="modalOpen8" @close="close"></modalLaterality></transition>
                <transition name="fade"><modalHistology v-show="modalOpen9" @close="close"></modalHistology></transition>
                <transition name="fade"><modalTNM v-show="modalOpen10" @close="close"></modalTNM></transition>
                <transition name="fade"><modalStaging v-show="modalOpen11" @close="close"></modalStaging></transition>
                <transition name="fade"><modalFamily v-show="modalOpen12" @close="close"></modalFamily></transition>
                <transition name="fade"><modalTreatment v-show="modalOpen13" @close="close"></modalTreatment></transition>
                <transition name="fade"><modalPlan v-show="modalOpen14" @close="close"></modalPlan></transition>
                <transition name="fade"><modalInfections v-show="modalOpen15" @close="close"></modalInfections></transition>
                <transition name="fade"><modalSurvivalStatus v-show="modalOpen16" @close="close"></modalSurvivalStatus></transition>
                <transition name="fade"><modalBiomarker v-show="modalOpen17" @close="close"></modalBiomarker></transition>
            </div>

            <div class="container-fluid px-4 containertop ">
                <div class="p-2 bg-success rounded-bottom text-white"><i class="bi bi-person-fill"> </i><label for=""><i>{{pat.patlast}}, {{pat.patfirst}} {{pat.patmiddle}}</i></label></div>
                
                <div class="row g-3 my-1">
                    <ul class="nav justify-content-center nav-tabs " id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">General data</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="family-tab" data-bs-toggle="tab" data-bs-target="#family" type="button" role="tab" aria-controls="contact" aria-selected="false">Family History</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Cancer Data</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="bioMarker-tab" data-bs-toggle="tab" data-bs-target="#bioMarker" type="button" role="tab" aria-controls="bioMarker" aria-selected="false">Biomarker Data</button>
                        </li>
                        <!-- <li class="nav-item" role="presentation">
                            <button class="nav-link" id="infection-tab" data-bs-toggle="tab" data-bs-target="#infection" type="button" role="tab" aria-controls="contact" aria-selected="false">Infection</button>
                        </li> -->
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="treatment-tab" data-bs-toggle="tab" data-bs-target="#treatment" type="button" role="tab" aria-controls="treatment" aria-selected="false">Treatment Plan</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="status-tab" data-bs-toggle="tab" data-bs-target="#status" type="button" role="tab" aria-controls="status" aria-selected="false">Survival Status</button>
                        </li>
                    </ul>
                <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div class="container-fluid " id="col">
<!-- asdfsadf -->
                            <div  class="col p-3 mb-3 bg-white justify-content-around align-items-center rounded border">
                                
                                <div class="d-inline">
                                    <div class="form-check form-switch">
                                        
                                        <!-- <button v-tooltip="'You have new messages.'">Tooltip</button> -->
                                        <!-- <div v-title="'Somethings...'"></div> -->
                                        <label class="form-check-label" for="flexSwitchCheckChecked">Cancer Patient {{this.tag}}</label>
                                        <input class="form-check-input" v-model="patStatus.data.cancerPatient" :true-value="'Y'" :false-value="'N'" type="checkbox" id="flexSwitchCheckChecked">
                                    </div>
                                </div>
                                
                                <div class="d-inline">
                                    <label for=""><i class="bi bi-person-lines-fill"></i> Patient Details: </label> 
                                </div>
                                    <div class="row ">
                                        <div class="input-group input-group mb-3">
                                                <!-- <label for="" class="form-control">Full Name: <h6><b>{{pat.patlast}}, {{pat.patfirst}} {{pat.patmiddle}}</b></h6></label> -->
                                                <label for="" class="form-control">Sex: <h6><b id="boldtext">{{pat.patsex}}</b></h6> </label>
                                                <label for="" class="form-control">Civil Status: <h6><b id="boldtext">{{ pat.patcstat }}</b></h6></label>
                                        </div>
                                     </div>
                                    <div class="row">
                                        <div class="input-group input-group mb-3 ">
                                            <label for="" class="form-control">Address: <small> <h6><b id="boldtext">{{pat.address}}</b></h6></small> </label>
                                            
                                            <label for="" class="form-control">Contact No: <h6><b id="boldtext">{{pat.pattel}}</b></h6></label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-group mb-3">
                                            <label for="" class="form-control">Age: <h6><b id="boldtext">{{pat.age}}</b></h6> </label>
                                            <label for="" class="form-control">Nationality: <h6><b id="boldtext">{{pat.natdesc}}</b></h6> </label>
                                            <label for="" class="form-control">Religion:  <h6><b id="boldtext">{{pat.reldesc}}</b></h6></label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-group">
                                            <label for="" class="form-control">Height: <h6><b id="boldtext">{{pat.height}}</b></h6></label>
                                            <label for="" class="form-control">Weight: <h6><b id="boldtext">{{pat.weight}}</b></h6></label>
                                            <label for="" class="form-control">BSA:</label>
                                        </div>
                                    </div>
                            </div>
                            <!-- <button class="btn" @click="openModal">Open Modal</button> -->
                            <div class="d-flex justify-content-around mb-3">
                                <div class="col p-3 me-3 bg-white align-items-center rounded  cursor-pointer" id="card" @click="openModal">
                                        <label for=""><i class="bi bi-person-badge-fill"></i> Personal and Social History:
                                             <!-- {{ this.patStore.count }} -->
                                            <!-- <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalPersonalHistory">
                                            
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                            </svg>

                                                </button> -->
                                        </label>
                                        
                                        
                                            <div class="row">
                                                <div class="col">
                                                    <div class="row">
                                                        <div class="input-group mb-3">
                                                            <!-- <span class="input-group-text">$</span> -->
                                                            <label for="" class="form-control">Smoke History: <b id="boldtext"><label for=""></label>{{ this.patStore.personalHistory.SmokingHistory }}</b></label>
                                                            <label for="" class="form-control">Pack/Year: <b id="boldtext">{{ this.patStore.personalHistory.PackPerYear }}</b> </label>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="row">
                                                        <div class="input-group mb-3">
                                                        <label for="" class="form-control">Second hand smoke (SHS):  <b id="boldtext">{{ this.patStore.personalHistory.SecondHandSmoker }}</b></label>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="input-group input-group mb-3">
                                                            <!-- <span class="input-group-text">$</span> -->
                                                            <label for="" class="form-control">Alcohol intake: <b id="boldtext"> {{ this.patStore.personalHistory.AlcoholIntake }}</b></label>
                                                            <label for="" class="form-control">Drinks/Day: <b id="boldtext">{{ this.patStore.personalHistory.DrinksAday }}</b></label>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="input-group input-group mb-3">
                                                            <!-- <span class="input-group-text">$</span> -->
                                                            <label for="" class="form-control">Coital Debut: <b id="boldtext"> {{ this.patStore.personalHistory.Coitaldebut }} </b></label>
                                                            <label for="" class="form-control"># of partner: <b id="boldtext">{{ this.patStore.personalHistory.NumberOfPartner }}</b> </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="row">
                                                        <div class="input-group input-group mb-3">
                                                            <!-- <span class="input-group-text">$</span> -->
                                                                    <label for="" class="form-control">Average Monthly Family Income: <b id="boldtext">{{ this.patStore.personalHistory.AvgMonthlyFamIncome }}</b></label>
                                                            </div>
                                                    </div>
                                                    <!-- <div class="row">
                                                        <div class="input-group input-group mb-3">
                                                           
                                                                    <label for="" class="form-control">Means of Health Expenditure: <b id="boldtext">35,000</b></label>
                                                            </div>
                                                    </div> -->
                                                    <div class="row">
                                                        <div class="input-group input-group mb-3">
                                                            <!-- <span class="input-group-text">$</span> -->
                                                                    <label for="" class="form-control">Vaccines: <b id="boldtext">{{ this.patStore.personalHistory.primary1st }} {{ this.patStore.personalHistory.primary2nd }} {{ this.patStore.personalHistory.booster1st }} {{ this.patStore.personalHistory.booster2nd }}</b></label>
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>

                                    <div class="col-md-3 p-3 me-3 bg-white  justify-content-around align-items-center rounded cursor-pointer" id="card" @click="openModal1">
                                    <label for=""><i class="bi bi-briefcase-fill"></i>  Occupational/Environmental History:  
                                                <!-- <button type="button" class="btn btn-warning btn-sm"> -->
                                            <!-- <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalOccupation">
                                            <i class="fa-solid fa-pencil"></i>
                                                </button> -->
                                            <!-- </button> -->
                                            </label> 
                                            
                                            <div class="row ">
                                                <div class="input-group input-group mb-3">
                                                <!-- <span class="input-group-text">$</span> -->
                                                        <label for="" class="form-control">Exposure to: <b id="boldtext">{{ this.patStore.occupational.ExposureTo.AirContaminants }} {{ this.patStore.occupational.ExposureTo.ToxicWaste }} {{ this.patStore.occupational.ExposureTo.Radiation }} {{ this.patStore.occupational.ExposureTo.Pesticides }} {{ this.patStore.occupational.ExposureTo.Chemicals }} {{ this.patStore.occupational.ExposureTo.WeatherEvents }} {{ this.patStore.occupational.ExposureTo.None }} {{ this.patStore.occupational.ExposureTo.Others }}</b></label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="input-group input-group mb-3 ">
                                                    <label for="" class="form-control">Longest job held: <b id="boldtext">{{ this.patStore.occupational.LongestJobHeld }}</b> <small></small> </label>
                                                </div>
                                            </div>
                                    </div>
                                    <div class="col-md-3 p-3  bg-white   justify-content-around align-items-center rounded cursor-pointer" id="card" @click="openModal2">
                                    <label for=""><i class="bi bi-capsule"></i> Other Medical Condition:  
                                                <!-- <button type="button" class="btn btn-warning btn-sm"> -->
                                            <!-- <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalMedicalCondition">
                                            <i class="fa-solid fa-pencil"></i>
                                                </button> -->
                                            <!-- </button> -->
                                            </label> 
                                            
                                            <div class="row">
                                                <div class="input-group input-group mb-3 ">
                                                    <label for="" class="form-control"><small></small>Condition: <b id="boldtext">{{ this.patStore.medicalCondition.Condition }}</b></label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="input-group input-group mb-3 ">
                                                    <label for="" class="form-control"><small></small>Medication: <b id="boldtext">{{ this.patStore.medicalCondition.Medication }}</b> </label>
                                                </div>
                                            </div>
                                    </div>
                            </div>
                            <div class="col p-3 mb-3 bg-white   justify-content-around align-items-center rounded cursor-pointer" id="card" @click="openModal3">
                                <label for=""><i class="bi bi-gender-female"></i> For Female Subjects: </label>
                                <!-- <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalFemaleSubject">
                                            <i class="fa-solid fa-pencil"></i>
                                                </button> -->
                                <br>
                                
                                <div class="row">
                                    <div class="col-8">
                                        Gynecological History
                                        <div class="row">
                                            <div class="col">
                                                <div class="input-group input-group mb-3 ">
                                                    <label for="" class="form-control">Age of Menarche: <b id="boldtext">{{ this.patStore.forFemaleSubjects.AgeOfMenarche }}</b></label>
                                                </div>
                                                <div class="input-group input-group mb-3 ">
                                                    <label for="" class="form-control">Menstrual Status: <b id="boldtext">{{ this.patStore.forFemaleSubjects.MenstrualStatus }}</b></label>
                                                    <label for="" class="form-control">Age of Menopause: <b id="boldtext">{{ this.patStore.forFemaleSubjects.AgeOfMenopause }}</b></label>
                                                    <label for="" class="form-control">Cause: <b id="boldtext">{{ this.patStore.forFemaleSubjects.Cause }}</b></label>
                                                </div>
                                                <div class="input-group input-group mb-3 ">
                                                    <label for="" class="form-control">Contraceptive use (Duration) : <b id="boldtext">{{ this.patStore.forFemaleSubjects.ContraCeptiveUse }}</b></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col">
                                        OB history
                                        <div class="row">   
                                            <div class="col">
                                                <div class="input-group input-group mb-3 ">
                                                    <label for="" class="form-control">Age if 1<sup>st</sup> birth: <b id="boldtext">{{ this.patStore.forFemaleSubjects.Age1stLiveBirth }}</b></label>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            
                                            <div class="col">
                                                <div class="input-group input-group mb-3 ">
                                                    <label for="" class="form-control">Pregnancy Stage: <b id="boldtext">{{ this.patStore.forFemaleSubjects.PregnancyStage }}</b></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    
                            </div>

                            <!-- <div class="col p-3  bg-white   justify-content-around align-items-center rounded cursor-pointer" id="card" @click="openModal15">
                            <label for=""><i class="fa-solid fa-viruses"></i> Infections(if applicable): </label>
                            <br>
                                <div class="col-8">
                                    <div class="row">
                                        <div class="col">
                                            <div class="input-group input-group mb-3 ">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> -->

                            <div class="d-flex justify-content-around mb-3">
                            <!-- <div class="col p-3 me-3 bg-white   justify-content-around align-items-center rounded cursor-pointer" id="card" data-bs-toggle="modal" data-bs-target="#modalFamilyCancer">
                                <label for=""><i class="fa-solid fa-people-group"></i> Family History of Cancer: </label>
                                <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalFamilyCancer">
                                            <i class="fa-solid fa-pencil"></i>
                                                </button>
                                <br>
                                
                                
                                    <div class="col-8">
                                        <div class="row">
                                            <div class="col">
                                                <div class="input-group input-group mb-3 ">
                                                    <label for="" class="form-control"><small></small> </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                               
                                    
                            </div> -->
                            <!-- <div class="col p-3  bg-white   justify-content-around align-items-center rounded cursor-pointer" id="card" data-bs-toggle="modal" data-bs-target="#modalInfections">
                                <label for=""><i class="fa-solid fa-viruses"></i> Infections(if applicable): </label>
                                <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalInfections">
                                            <i class="fa-solid fa-pencil"></i>
                                                </button>
                                <br>
                                
                                
                                    <div class="col-8">
                                        <div class="row">
                                            <div class="col">
                                                <div class="input-group input-group mb-3 ">
                                                    <label for="" class="form-control"><small></small> </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                            </div> -->
                            </div>
                            </div>  
                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div class="container-fluid" id="col">
                                <div class="col p-3 mb-3 bg-white   justify-content-around align-items-center rounded cursor-pointer"  id="card" @click="openModal4">
                                <div class="row">
                                    <div class="input-group input-group mb-3">
                                        <label for="" class="form-control">Referred from region/province: <b id="boldtext">{{ this.patStore.cancerData.ReferredFromRegion }}</b></label>
                                        <label for="" class="form-control">Name of Referring Health Facility: <b id="boldtext">{{ this.patStore.cancerData.NameOfReferringHealthFacility }}</b></label>
                                    </div>
                                    <div class="input-group input-group mb-3">
                                        <label for="" class="form-control">Doctor/Health Care Professional: <b id="boldtext">{{ this.patStore.cancerData.DoctorHealthCareProf }}</b></label>
                                        <label for="" class="form-control">Reason for Referral: <b id="boldtext">{{ this.patStore.cancerData.ReasonForReferral }}</b></label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-group input-group mb-3">
                                        <label for="" class="form-control">Date of Consultation/Admission: <b id="boldtext">{{ this.patStore.cancerData.DateOfConsultation }}</b></label>
                                        <label for="" class="form-control">Chief Complaint: <b id="boldtext">{{ this.patStore.cancerData.ChiefComplaint }}</b></label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-group input-group mb-3">
                                        <label for="" class="form-control">Date of Diagnosis(Clinical): <b id="boldtext">{{ this.patStore.cancerData.ClinicalDate }}</b></label>
                                        <label for="" class="form-control">Date of Diagnosis(Pathologic): <b id="boldtext">{{ this.patStore.cancerData.PathologicDate }}</b></label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-group input-group mb-3">
                                        <label for="" class="form-control">Treatment Recieved: <b id="boldtext">{{ this.patStore.cancerData.TreatmentRecieved.Chemotherapy }} {{ this.patStore.cancerData.TreatmentRecieved.Surgery }} {{ this.patStore.cancerData.TreatmentRecieved.Radiation }} {{ this.patStore.cancerData.TreatmentRecieved.Hormonal }}</b></label>
                                        <label for="" class="form-control">Status: <b id="boldtext">{{ this.patStore.cancerData.Status }}</b></label>
                                        
                                    </div>
                                </div>
                                </div>

                                <div class="d-flex justify-content-around mb-3">
                                    
                                            <div class="col  p-3 me-3 bg-white rounded cursor-pointer" id="card" @click="openModal5">
                                                <label for="">Primary Current Cancer Site/Diagnosis:</label>
                                                <div class="input-group input-group mb-3">
                                                    <label for="" class="form-control">Solid Tumor: <b id="boldtext">{{ this.patStore.primarySite.SolidTumor.Anal }} {{ this.patStore.primarySite.SolidTumor.AnalSite }} {{ this.patStore.primarySite.SolidTumor.Bone }} {{ this.patStore.primarySite.SolidTumor.BoneSite }} {{ this.patStore.primarySite.SolidTumor.Breast }} {{ this.patStore.primarySite.SolidTumor.BreastSite }} {{ this.patStore.primarySite.SolidTumor.Cervical }} {{ this.patStore.primarySite.SolidTumor.CervicalSite }} {{ this.patStore.primarySite.SolidTumor.Colon }}</b></label>
                                                    <label for="" class="form-control">Histology: <b id="boldtext">{{ this.patStore.primarySite.Histology.WellDifferentiated }}</b></label>
                                                </div>
                                                <div class="input-group input-group mb-3">
                                                    <label for="" class="form-control">Malignancies: <b id="boldtext">{{ this.patStore.primarySite.Malignancies.ALL }}</b></label>
                                                </div>
                                                <!-- <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalInfections"><i class="fa-solid fa-pencil"></i></button> -->
                                            </div>
                                            <div class="col  p-3 me-3 bg-white rounded cursor-pointer" id="card" @click="openModal6">
                                                <label for="">Concurrent Cancer Site/Diagnosis:</label>
                                                <div class="input-group input-group mb-3">
                                                    <label for="" class="form-control">Solid Tumor: <b id="boldtext">{{ this.patStore.concurrentSite.SolidTumor.Anal }} </b></label>
                                                    <label for="" class="form-control">Histology: <b id="boldtext">{{ this.patStore.concurrentSite.Histology.WellDifferentiated }}</b></label>
                                                </div>
                                                <div class="input-group input-group mb-3">
                                                    <label for="" class="form-control">Malignancies: <b id="boldtext">{{ this.patStore.concurrentSite.Malignancies.ALL }}</b></label>
                                                </div>
                                                <!-- <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalInfections"><i class="fa-solid fa-pencil"></i></button> -->
                                            </div>
                                        
                                    <!-- <label for="">Primary Current Cancer Site/Diagnosis:</label>  -->
                                    <!-- <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalInfections">
                                                <i class="fa-solid fa-pencil"></i>
                                                    </button> -->
                                    
                                    <!-- <div class="col p-3 mb-3 bg-white   justify-content-around align-items-center rounded">
                                    <label for="">ConcurrentSite Cancer Site/Diagnosis:</label>  -->
                                    <!-- <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalInfections">
                                                <i class="fa-solid fa-pencil"></i>
                                                    </button> -->
                                    <!-- </div> -->
                                </div>

                                <!-- <div class="d-flex justify-content-around mb-3">
                                    <div class="col p-3 me-3 bg-white   justify-content-around align-items-center rounded cursor-pointer" @click="openModal7" id="card">
                                    <label for="">Test at Baseline:</label> 
                                    
                                    </div>
                                    <div class="col p-3 bg-white   justify-content-around align-items-center rounded cursor-pointer" @click="openModal8" id="card">
                                    <label for="">Laterality:</label> 
                                    
                                    </div>
                                </div> -->

                                <!-- <div class="col p-3 mb-3 bg-white   justify-content-around align-items-center rounded cursor-pointer" @click="openModal9" id="card">
                                    <label for="">Histology (Morphology)/Biopsy result</label>
                                    <div class="input-group mb-3">
                                        <label for="" class="form-control">Biopsy Type:</label>
                                        <label for="" class="form-control">Tissue Biopsied:</label>
                                    </div>
                                    <div class="input-group mb-3">
                                        <label for="" class="form-control">Histopathology:</label>
                                        <label for="" class="form-control">Carcinoma Type:</label>
                                    </div>
                                    <div class="input-group mb-3">
                                        <label for="" class="form-control">Neuroendocrine, tumor and grade:</label>
                                        <label for="" class="form-control">Mesenchymal(sarcoma etc):</label>
                                    </div>
                                    <div class="input-group mb-3">
                                        <label for="" class="form-control">Tumor size:(cms):</label>
                                        <label for="" class="form-control">Others:</label>
                                    </div>
                                    <div class="input-group mb-3">
                                        <label for="" class="form-control">Histoligical Grade:</label>
                                        <label for="" class="form-control">LVI: <input type="text">(-) <input type="text">(+)</label>
                                    </div>
                                </div> -->
                                <div class="d-flex justify-content-around mb-3">
                                    <div class="col p-3 me-3 mb-3 bg-white   justify-content-around align-items-center rounded cursor-pointer" @click="openModal10" id="card">
                                            <label for="">TNM Staging System</label>
                                        <div class="row">
                                            <div class="col">
                                                <div class="row d-flex justify-content-center">
                                                        <div class="col">
                                                        <label for="">T <b id="boldtext">{{this.patStore.tnm.T}}</b></label>
                                                        </div>
                                                        <div class="col">
                                                        <label for="">N <b id="boldtext">{{this.patStore.tnm.N}}</b></label>
                                                        </div>
                                                        <div class="col">
                                                        <label for="">M <b id="boldtext">{{this.patStore.tnm.M}}</b></label>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                Pathologic Stage:
                                                <div class="row"><div class="col">

                                                </div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col p-3 mb-3 bg-white   justify-content-around align-items-center rounded cursor-pointer" @click="openModal11" id="card">
                                        
                                            <!-- <label for="" class="d-block">Staging(Other than TNM): </label> -->
                                            <label for="" class="d-block">Number of Metastatistic Sites: </label>
                                            <b id="boldtext">{{ this.patStore.staging.site.none }} {{ this.patStore.staging.site.distant }} {{ this.patStore.staging.site.bone }} {{ this.patStore.staging.site.liver }} {{ this.patStore.staging.site.lung }} {{ this.patStore.staging.site.brain }} {{ this.patStore.staging.site.ovary }} {{ this.patStore.staging.site.skin }} {{ this.patStore.staging.others }} {{ this.patStore.staging.site.unknown }}</b>
                                            <!-- <label for="" class="d-block">Sites of Distant Metastatis: </label> -->
                                            
                                        
                                    </div>
                                </div>
                            </div>
                </div>
                <div class="tab-pane fade" id="bioMarker" role="tabpanel" aria-labelledby="bioMarker-tab">
                    <!-- <div class="col p-3 me-3 bg-white   justify-content-around align-items-center rounded cursor-pointer" id="card" @click="openModal17"> -->
                        <div class="col p-3 me-3 bg-white   justify-content-around align-items-center rounded cursor-pointer" id="card">
                                    <!-- <label for=""><i class="fa-solid fa-people-group"></i> Biomarker Data: </label>
                                    <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalFamilyCancer">
                                                <i class="fa-solid fa-pencil"></i>
                                                </button> -->
                                    <br>
                                    
                                    <!-- <div class="row"> -->
                                        <div class="col">
                                            <div class="row">
                                                <div class="col">
                                                    <div class="input-group input-group  ">
                                                        <table class="table table-hover">
                                                            <thead class="thead-dark">
                                                                <th></th>
                                                                <th>Biomarker Description</th>
                                                                <th>Biomarker Date</th>
                                                                <th>Level</th>
                                                                <th>Ref Range</th>
                                                                <th><button type="button" class="btn btn-outline-primary" @click="this.patLabHistory.data.counter++">Add</button><button class="btn btn-outline-danger" @click="this.patLabHistory.data.counter--">remove</button><button class="btn btn-outline-success" @click="save1">save</button></th>
                                                            </thead>
                                                            <tbody >
                                                                <tr v-for="patBio in this.patLabHistory.data.counter" :key="patBio">
                                                                        <td>Row {{patBio}}</td>
                                                                        <td><input type="text" v-model="patLabHistory.data.info['desc '+patBio]"></td>
                                                                        <td><input type="text" v-model="patLabHistory.data.info['date '+patBio]"></td>
                                                                        <td><input type="text" v-model="patLabHistory.data.info['level '+patBio]"></td>
                                                                        <td><input type="text" v-model="patLabHistory.data.info['range '+patBio]"></td>
                                                                </tr>
                                                                <tr>
                                                                    
                                                                </tr>
                                                                <!-- <tr v-for="patBio in patLabHistory" :key="patBio">
                                                                <template v-if="patBio.withinRange == 0">
                                                                        <td><label for="" class="text-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
                                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                                                                        </svg></label> {{patBio.bioMarkerDesc}}</td>
                                                                        <td>{{patBio.bioMarkerdate}}</td>
                                                                        <td>{{patBio.level}}</td>
                                                                        <td>{{patBio.ref_range}}</td>
                                                                </template>
                                                                </tr> -->
                                                            </tbody> 
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    <!-- </div> -->
                                </div>
                </div>
                <div class="tab-pane fade" id="family" role="tabpanel" aria-labelledby="family-tab">
                    <!-- <div class="col p-3 me-3 bg-white   justify-content-around align-items-center rounded cursor-pointer" id="card" @click="openModal12"> -->
                        <div class="col p-3 me-3 bg-white   justify-content-around align-items-center rounded cursor-pointer" id="card">
                        <br>
                        <div class="col">
                            <div class="row">
                                <div class="col">
                                    <div class="input-group input-group mb-3 ">
                                        <table class="table table-hover">
                                            <thead class="thead-dark">
                                                <th></th>
                                                <th>Name</th>
                                                <th>Type of Cancer</th>
                                                <th>Consanguinity</th>
                                                <th>Age at Diagnosis</th>
                                                
                                                <th><button type="button" class="btn btn-outline-primary" @click="addCount">Add</button><button type="button" class="btn btn-outline-danger" @click="removeCount">remove</button><button type="button" class="btn btn-outline-success" @click="save">Save</button></th>
                                                <th></th>
                                                <th></th>
                                            </thead>
                                            <tbody>
                                                
                                                <tr v-for="x in this.patFamHist.data.counter" :key="x">
                                                    <!-- <td><input type="text" v-model="patFamHist.name['name '+x]"></td>
                                                    <td><input type="text" v-model="patFamHist.toc['cancer '+x]"></td> -->
                                                    <td>Row {{x}}</td>
                                                    <td><input type="text" v-model="patFamHist.data.fam['name '+x]"></td>
                                                    <td><input type="text" v-model="patFamHist.data.fam['toc '+x]"></td>
                                                    <td><input type="text" v-model="patFamHist.data.fam['consanguinity '+x]"></td>
                                                    <td><input type="text" v-model="patFamHist.data.fam['ageDiagnosis '+x]"></td>
                                                </tr>
                                                <!-- <tr><input type="text" v-model="patFamHist.data.counter"></tr> -->

                                                
                                                <!-- <tr v-for="patFam in this.infoFam" :key="patFam" >
                                                <tr v-for ="td in paginated('page')" :key="td">
                                                    <td>{{patFam.name}}</td>

                                                    <td>{{patFam.tsdesc}}</td>
                                                    <td><router-link :to="`/Dashboard/patienttable/${td.hpercode}`" :hpercode="'hello'"><button class="btn btn-info">Edit</button></router-link></td>
                                                </tr> -->
                                            </tbody> 
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
                <!-- <div class="tab-pane fade" id="infection" role="tabpanel" aria-labelledby="infection-tab">
                    <div>
                        <div class="col p-3  bg-white   justify-content-around align-items-center rounded cursor-pointer" id="card" data-bs-toggle="modal" data-bs-target="#modalInfections">
                        <label for=""><i class="fa-solid fa-viruses"></i> Infections(if applicable): </label>
                        <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalInfections">
                                    <i class="fa-solid fa-pencil"></i>
                                        </button>
                        <br>
                        
                        
                            <div class="col-8">
                                <div class="row">
                                    <div class="col">
                                        <div class="input-group input-group mb-3 ">
                                            <label for="" class="form-control"><small></small> </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="tab-pane fade" id="treatment" role="tabpanel" aria-labelledby="treatment-tab">
                    <div>
                        <div class="row">
                            <!-- <div class="col-auto p-3 me-2 bg-white   justify-content-around align-items-center rounded cursor-pointer" id="card" @click="openModal13">
                                <div class="col" id="col">
                                    
                                        <div class="row ">
                                            <div class="input-group input-group mb-3">
                                                    <label for="" class="form-control">Treatment Purpose:</label>
                                            </div>
                                        </div>
                                        <div class="row ">
                                            <div class="input-group input-group mb-3">
                                                    <label for="" class="form-control">Primary Treatment in BGH:</label>
                                                    <label for="" class="form-control">Date:</label>
                                            </div>
                                        </div>
                                        <div class="row ">
                                            <div class="input-group input-group mb-3">
                                                    <label for="" class="form-control">Additional/Adjuvant Treatment/s:</label>
                                            </div>
                                        </div>
                                        <div class="row ">
                                            <div class="input-group input-group mb-3">
                                                    <label for="" class="form-control">Planned other additional Additional/Adjuvant Treatment/s:</label>
                                            </div>
                                        </div>
                                        <div class="row ">
                                            <div class="input-group input-group mb-3">
                                                    <label for="" class="form-control">Treatment/s received in other Hospital:</label>
                                            </div>
                                        </div>
                                    
                                </div>
                            </div> -->
                            <!-- <div class="col p-3 me-2 bg-white   justify-content-around align-items-center rounded cursor-pointer" id="card" @click="openModal14"> -->
                                <div class="col p-3 me-2 bg-white   justify-content-around align-items-center rounded cursor-pointer" id="card">
                                <div class="col" id="col">
                                    <div class="row mb-2">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col">
                                                    <div class="mb-3">
                                                        <div class="col">
                                                            <div class="row">
                                                                <div class="col">
                                                                    <label for="">Medical Treatment</label>
                                                                    <table class="table">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Date</th>
                                                                                <th>Chemo Protocol + # of cycles</th>
                                                                                <th>Status</th>
                                                                                <th><button @click="this.planStore.form.data.count++">add</button><button @click="this.planStore.form.data.count--">remove</button></th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr v-for="i in this.planStore.form.data.count" :key="i">
                                                                                <td>
                                                                                    <div class="d-block mb-4"><label for="">Start: </label><input type="date" v-model="this.planStore.form.data.medicalTreatment['startDate'+i]"></div>
                                                                                    <div class="d-block"><label for="">End: </label><input type="date" v-model="this.planStore.form.data.medicalTreatment['endDate'+i]"></div>
                                                                                </td>
                                                                                <td>
                                                                                    <div class="d-block">
                                                                                        Cycles:<input type="number" v-model="this.planStore.form.data.medicalTreatment['cycle'+i]">   
                                                                                    </div>
                                                                                    <div class="d-block">
                                                                                        <textarea name="" id="" cols="20" rows="2" v-model="this.planStore.form.data.medicalTreatment['chemoProtocol'+i]"></textarea>
                                                                                    </div>
                                                                                </td>
                                                                                <td colspan='2'>
                                                                                    <div class="d-block">
                                                                                        <select name="" id="" v-model="this.planStore.form.data.medicalTreatment['status'+i]">
                                                                                            <option value="Remission">Remission</option>
                                                                                            <option value="Stable">Stable</option>
                                                                                            <option value="Progress">Disease Progress</option>
                                                                                            <option value="RR">R/R</option>
                                                                                            <option value="Others">Others</option>
                                                                                        </select>
                                                                                    </div>
                                                                                    <div class="d-block">
                                                                                        <textarea name="" id="" cols="20" rows="2" v-model="this.planStore.form.data.medicalTreatment['statusOthers'+i]"></textarea>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col">
                                                                    <label for="">Surgery</label>
                                                                    <table class="table">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Date</th>
                                                                                <th>Type of Surgery</th>
                                                                                <th>Intent</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td><input type="date" v-model="this.planStore.form.data.Surgery.date"></td>
                                                                                <td>
                                                                                    <div class="d-block mb-2">
                                                                                        <select name="" id="" v-model="this.planStore.form.data.Surgery.type">
                                                                                            <option value="Chemotherapy">Chemotherapy</option>
                                                                                            <option value="Surgery">Surgery</option>
                                                                                            <option value="Radiation">Radiation</option>
                                                                                            <option value="Hormonal">Hormonal</option>
                                                                                            <option value="Others">Others</option>
                                                                                        </select>
                                                                                    </div>
                                                                                    <div class="d-block">
                                                                                        <textarea name="" id="" cols="20" rows="2" v-model="this.planStore.form.data.Surgery.typeRemarks"></textarea>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div class="d-block">
                                                                                        <select name="" id="" v-model="this.planStore.form.data.Surgery.typeOfTreatment">
                                                                                            <option value="Neoadjuvant">Neoadjuvant</option>
                                                                                            <option value="Adjuvant">Adjuvant</option>
                                                                                            <option value="Others">Others</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col">
                                                                    <label for="">Radiation</label>
                                                                    <table class="table">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Date</th>
                                                                                <th>Fractions</th>
                                                                                <th>Total Dose Recieved</th>
                                                                                <th>Site</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td><input type="date" v-model="this.planStore.form.data.Radiation.date"></td>
                                                                                <td>
                                                                                    <div class="d-block">
                                                                                        <textarea name="" id="" cols="20" rows="2" v-model="this.planStore.form.data.Radiation.fraction"></textarea>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div class="d-block">
                                                                                        Total: <input type="text" v-model="this.planStore.form.data.Radiation.dose">
                                                                                    </div>
                                                                                </td>
                                                                                <td><input type="text" v-model="this.planStore.form.data.Radiation.site"></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="row mb-2">
                                        <div class="col border rounded">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <label for=""><b>Surgery</b></label>
                                                </div>
                                                <div class="col">
                                                    <div class="d-block">
                                                        Date
                                                    </div>
                                                    <div class="d-block">
                                                        ---
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="d-block">
                                                        Type of Surgery
                                                    </div>
                                                    <div class="d-block">
                                                        ---
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="d-block">
                                                        Intent
                                                    </div>
                                                    <div class="d-block">
                                                        ---
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-2">
                                        <div class="col border rounded">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <label for=""><b>Radiation</b></label>
                                                </div>
                                                <div class="col">
                                                    <div class="d-block">
                                                        Date
                                                    </div>
                                                    <div class="d-block">
                                                        ---
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="d-block">
                                                        Fractions
                                                    </div>
                                                    <div class="d-block">
                                                        ---
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="d-block">
                                                        Total Dose
                                                    </div>
                                                    <div class="d-block">
                                                        ---
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="d-block">
                                                        Site
                                                    </div>
                                                    <div class="d-block">
                                                        ---
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> -->
                                    <div class="row">
                                        <div class="col d-flex justify-content-center">
                                            <button class="btn btn-success" @click="this.planStore.save">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2">
                            
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="status" role="tabpanel" aria-labledby="status-tab">
                    <div class="col p-3 me-3 bg-white   justify-content-around align-items-center rounded cursor-pointer" id="card" @click="openModal16">
                        <br>
                        <div class="col-8">
                            <div class="row">
                                <div class="col">
                                    <div class="input-group input-group mb-3 ">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col p-3 me-2 bg-white   justify-content-around align-items-center rounded cursor-pointer" id="card">
                        <div class="col" id="col">
                            Follow up
                            <div class="row ">
                                <div class="input-group input-group mb-3">
                                        <!-- <label for="" class="form-control">Attending Oncologist:</label> -->
                                </div>
                            </div>
                            <div class="row ">
                                <table class="table">
                                        <thead>
                                            <!-- <td>Enccode</td> -->
                                            <tr>
                                                <th>Date</th>
                                                <th>Disposition</th>
                                            </tr>
                                        </thead>
                                    
                                    <tbody>
                                        <tr v-for="x in patFollowup" :key="x">
                                            <!-- <td>{{x.enccode}}</td> -->
                                            <td>{{x.opddate}}</td>
                                            <td>{{x.opddisp}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
                </div>
            
        </div>
        
    </div>

</template>
<script>
    import axios from 'axios'
    import { ref } from 'vue'
    import "bootstrap-icons/font/bootstrap-icons.css";
    import modalPersonalHistory from './modals/modalPersonalHistory.vue'
    import modalOccupational from './modals/modalOccupational.vue'
    import modalMedicalCondition from './modals/modalMedicalCondition.vue'
    import modalFemaleSubject from './modals/modalFemaleSubject.vue'
    import modalCancerData from './modals/modalCancerData.vue'
    import modalPrimarySite from './modals/modalPrimarySite.vue'
    import modalPrimaryConcurrent from './modals/modalPrimaryConcurrent.vue'
    import modalTestBaseline from './modals/modalTestBaseline.vue'
    import modalLaterality from './modals/modalLaterality.vue'
    import modalHistology from './modals/modalHistology.vue'
    import modalTNM from './modals/modalTNM.vue'
    import modalStaging from './modals/modalStaging.vue'
    import modalFamily from './modals/modalFamilyCancer.vue'
    import modalTreatment from './modals/modalTreatment.vue'
    import modalPlan from './modals/modalPlan.vue'
    import modalInfections from './modals/modalInfections.vue'
    import modalSurvivalStatus from './modals/modalSurvivalStatus.vue'
    import modalBiomarker from './modals/modalBiomarker.vue'
    import { usePatStore } from '@/store/PatStore';
    import { storeToRefs } from 'pinia';
    import { usePlanStore } from '@/store/PlanStore'
    
    // var moment = require('moment');
    export default{
    setup(){
        const patStore = usePatStore()
        const planStore = usePlanStore()
        const { formStore } = storeToRefs(patStore)
        return { patStore, formStore, planStore }
    },
        // props: 'hpercode'
        components:{
    modalPersonalHistory,
    modalOccupational,
    modalMedicalCondition,
    modalFemaleSubject,
    modalCancerData,
    modalPrimarySite,
    modalPrimaryConcurrent,
    modalTestBaseline,
    modalLaterality,
    modalHistology,
    modalTNM,
    modalStaging,
    modalFamily,
    modalTreatment,
    modalPlan,
    modalInfections,
    modalSurvivalStatus,
    modalBiomarker
},
        data(){
            return {
                patStatus:{
                    enccode:this.$route.params.hpercode,
                    entryBy:'',
                    section:'isCancerPatient',
                    data:{
                        cancerPatient:null
                    },
                },

                hpercode:this.$route.params.hpercode,
                personalHistory:{
                    SmokingHistory: '',
                    PackPerYear:'',
                    SecondHandSmoker:'',
                    AlcoholIntake:'',
                    DrinksAday:'',
                    Coitaldebut:'',
                    NumberOfPartner:'',
                    AvgMonthlyFamIncome:'',
                    Vaccines:{
                        v1:'',
                        v2:'',
                        v3:'',
                        v4:'',
                    }
                },
                occupational:{
                    ExposureTo:{
                            AirContaminants:'',
                            ToxicWaste:'',
                            Radiation:'',
                            Pesticides:'',
                            Chemicals:'',
                            WeatherEvents:'',
                            None:'',
                            Others:'',
                        },
                        ExposureToOthers: '',
                        LongestJobHeld: ''
                },
                medicalConditions:{
                    Condition:'',
                    Medication:'',
                },
                forFemaleSubjects:{
                        AgeOfMenarche:'',
                        MenstrualStatus:'',
                        AgeOfMenopause:'',
                        Cause:'',
                        ContraCeptiveUse:'',
                        Age1stLiveBirth:'',
                        PregnancyStage:''
                },
                cancerData:{
                    ReferredFromRegion:'',
                    NameOfReferringHealthFacility:'',
                    DoctorHealthCareProf:'',
                    ReasonForReferral:'',
                    DateOfConsultation:'',
                    ChiefComplaint:'',
                    ClinicalDate:'',
                    PathologicDate:'',
                    PreviousDiagnosis:'',
                    PrimarySite:'',
                    TreatmentRecieved:{
                        Chemotherapy:'',
                        Surgery:'',
                        Radiation:'',
                        Hormonal:'',
                        none:'',
                        others:'',
                    },
                    Chemotherapy:{
                        protocol:'',
                        cycles:'',
                        date:'',
                    },
                    Surgery:{
                        procedure:'',
                        date:''
                    },
                    Radiation:{
                        site:'',
                        dateStarted:''
                    },
                    Hormonal:{
                        medication:'',
                        duration:'',
                        dateStarted:''
                    },
                    Status:''
                },
                primarySite:{
                    SolidTumor:{
                            Anal:'',
                            AnalSite:'',
                            Bone:'',
                            BoneSite:'',
                            Breast:'',
                            BreastSite:'',
                            Cervical:'',
                            CervicalSite:'',
                            Colon:'',
                            ColonSite:'',
                            Esophageal:'',
                            EsophagealSite:'',
                            Gastric:'',
                            GastricSite:'',
                            HeadAndNeck:'',
                            HeadAndNeckSite:'',
                            Hepatobiliary:'',
                            HepatobiliarySite:'',
                            Kidney:'',
                            KidneySite:'',
                            Neuroendocrine:'',
                            NeuroendocrineSite:'',
                            NSCLC:'',
                            SCLC:'',
                            Lung:'',
                            Ovarian:'',
                            OvarianSite:'',
                            Pancreatic:'',
                            PancreaticSite:'',
                            Protstate:'',
                            ProstateSite:'',
                            Rectal:'',
                            RectalSite:'',
                            Skin:'',
                            SkinSite:'',
                            SoftTissue:'',
                            SoftTissueSite:'',
                            Testis:'',
                            TestisSite:'',
                            Thyroid:'',
                            ThyroidSite:'',
                            UrinaryBladdder:'',
                            UrinaryBladderSite:'',
                            Uterine:'',
                            UterineSite:'',
                            Others:'',
                            OthersInput:'',
                        },
                        Histology:{
                            WellDifferentiated:'',
                            ModeratleyDifferentiated:'',
                            PoorlyDifferentiated:'',
                            Undifferentiated:''
                        },
                        Malignancies:{
                            ALL:'',
                            Bcell: '',
                            Tcell: '',
                            MixedLineage: '',
                            ALLOthers:'',
                            AML:'',
                            AMLSpecify:'',
                            Blymph:'',
                            BlymphSpecify:'',
                            Hodgkin:'',
                            MPN:'',
                            MPNSpecify:'',
                            MDS:'',
                            Mylona:'',
                            MylonaSpecify:'',
                            CML:'',
                            PV:'',
                            ET:'',
                            MF:'',
                            Tlymph:'',
                            TlymphSpecify:'',
                            OthersSpecify:''
                        },
                },
                concurrentSite:{
                    SolidTumor:{
                            Anal:'',
                            AnalSite:'',
                            Bone:'',
                            BoneSite:'',
                            Breast:'',
                            BreastSite:'',
                            Cervical:'',
                            CervicalSite:'',
                            Colon:'',
                            ColonSite:'',
                            Esophageal:'',
                            EsophagealSite:'',
                            Gastric:'',
                            GastricSite:'',
                            HeadAndNeck:'',
                            HeadAndNeckSite:'',
                            Hepatobiliary:'',
                            HepatobiliarySite:'',
                            Kidney:'',
                            KidneySite:'',
                            Neuroendocrine:'',
                            NeuroendocrineSite:'',
                            NSCLC:'',
                            SCLC:'',
                            Lung:'',
                            Ovarian:'',
                            OvarianSite:'',
                            Pancreatic:'',
                            PancreaticSite:'',
                            Protstate:'',
                            ProstateSite:'',
                            Rectal:'',
                            RectalSite:'',
                            Skin:'',
                            SkinSite:'',
                            SoftTissue:'',
                            SoftTissueSite:'',
                            Testis:'',
                            TestisSite:'',
                            Thyroid:'',
                            ThyroidSite:'',
                            UrinaryBladdder:'',
                            UrinaryBladderSite:'',
                            Uterine:'',
                            UterineSite:'',
                            Others:'',
                            OthersInput:'',
                        },
                        Histology:{
                            WellDifferentiated:'',
                            ModeratleyDifferentiated:'',
                            PoorlyDifferentiated:'',
                            Undifferentiated:''
                        },
                        Malignancies:{
                            ALL:'',
                            Bcell: '',
                            Tcell: '',
                            MixedLineage: '',
                            ALLOthers:'',
                            AML:'',
                            AMLSpecify:'',
                            Blymph:'',
                            BlymphSpecify:'',
                            Hodgkin:'',
                            MPN:'',
                            MPNSpecify:'',
                            MDS:'',
                            Mylona:'',
                            MylonaSpecify:'',
                            CML:'',
                            PV:'',
                            ET:'',
                            MF:'',
                            Tlymph:'',
                            TlymphSpecify:'',
                            OthersSpecify:''
                        },
                },
                tnm:{
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
                },
                staging:{
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
                },
                patinfo:[],
                patOtherData: [],
                // patFamHist: {
                //     name:{},
                //     toc:{},
                // },
                patFamHist: {
                    enccode:this.$route.params.hpercode,
                    entryBy:'',
                    section:'familyHistory',
                    count:3,
                    data:{
                        counter: 1,
                        fam:{
                        },
                    },
                },
                infoFam:[],
                patientheader: [],
                patLabHistory: {
                    enccode:this.$route.params.hpercode,
                    entryBy:'',
                    section:'biomarker',
                    data:{
                        counter: 1,
                        info:{
                        },
                    },
                },
                patFollowup: [],
                modalOpen: false , modalOpen1:false , modalOpen2:false ,modalOpen3: false, modalOpen4: false, modalOpen5: false, modalOpen6: false, modalOpen7: false, modalOpen8: false, modalOpen9: false, modalOpen10: false, modalOpen11: false, modalOpen12:false, modalOpen13:false, modalOpen14: false, modalOpen15: false, modalOpen16: false, modalOpen17: false
            }
        },
        computed:{
           async cancerPatient(){
            // console.log(this.patStatus.data.cancerPatient)
            const json = {
                    json: JSON.stringify(this.patStatus)
                }
                const response = await axios.post("http://192.168.7.66:8040/api/saveCancerDataJSON",json)
                this.close()
                return response;
           },
           tag(){
            this.patStatus.data.cancerPatient
            return 
           }
        },

        watch:{
            async 'patStatus.data.cancerPatient'(){
                const json = {
                    json: JSON.stringify(this.patStatus)
                }
                const response = await axios.post("http://192.168.7.66:8040/api/saveCancerDataJSON",json)
                
                console.log(json)
                return response
            }
        },
        methods:{
            
            async patStat(){
                // console.log("status",this.patStatus.data.cancerPatient)
                // const json = {
                //     json: JSON.stringify(this.patStatus)
                // }
                // const response = await axios.post("http://192.168.7.66:8040/api/saveCancerDataJSON",json)
                // this.close()
                // return response;
            },
            addCount(){
                this.patFamHist.data.counter++
            },
            removeCount(){
                this.patFamHist.data.counter--
            },

            async save(){
                console.log("stringify ",JSON.stringify(this.patFamHist))
                // console.log(JSON.stringify())
                const json = {
                    json: JSON.stringify(this.patFamHist)
                }

                const response = await axios.post("http://192.168.7.66:8040/api/saveCancerDataJSON",json)
                this.close()
                return response;
            },
            async save1(){
                console.log(this.patLabHistory)
                // console.log(JSON.stringify())
                const json = {
                    json: JSON.stringify(this.patLabHistory)
                }
                const response = await axios.post("http://192.168.7.66:8040/api/saveCancerDataJSON",json)
                this.close()
                return response;
            },
            savePat(){
                console.log("savePat")
            },
            async getCancerData(enccodeID, sectionName){
                const enccode = {
                   enccode: enccodeID,
                   section: sectionName
                }
                // console.log(enccode)
                const response = await axios.post("http://192.168.7.66:8040/api/spCancerGetDataPerSection",enccode)
                // console.log("ASYNC CANDER: ", JSON.parse(response[0].data))
                // console.log(enccode.section)
                // console.log(response.data.length)
                return response
            },
            async patdata(){
                this.getCancerData(this.hpercode, 'PersonalAndSocialistory').then(res => {
                    this.patStore.personalHistory = res
                })
                // console.log("personal history: ", this.patStore.personalHistory)

                return this.patStore.personalHistory
            },
            async getPatHpercode(){
                const response = await axios.post('http://192.168.7.66:8040/api/cancerRegisterHeader', {hpercode:this.hpercode}).catch(error => {})
                // console.log("header: ", response.data)

                return response
            },
            async getPatOtherData(){
                const response = await axios.post('http://192.168.7.66:8040/api/cancerPatientOtherData', {hpercode:this.hpercode})
                // console.log("body: ", response.data)
                return response
            },
            async getPatFamHistory(){
                const response = await axios.post('http://192.168.7.66:8040/api/cancerPatientFamilyHistory', {hpercode:this.hpercode})
                // console.log("fam: ", response.data)
                return response
            },
            async getPatlabHistory(){
                const response = await axios.post('http://192.168.7.66:8040/api/cancerPatientLabHistory', {hpercode:this.hpercode})
                // console.log("fam: ", response.data)
                return response
            },
            async getPatFollowup(){
                const response = await axios.post('http://192.168.7.66:8040/api/cancerPatientEncounters', {hpercode:this.hpercode})
                // console.log("fam: ", response.data)
                return response
            },
            
            getModal(){
                    const isOpen = false
                    return isOpen
            },
            openModal(){
                console.log('open modal')
                this.modalOpen = true;
            },
            openModal1(){
                console.log('open modal')
                this.modalOpen1 = true;
            },
            openModal2(){
                console.log('open modal')
                this.modalOpen2 = true;
            },
            openModal3(){
                console.log('open modal')
                this.modalOpen3 = true;
            },
            openModal4(){
                console.log('open modal')
                this.modalOpen4 = true;
            },
            openModal5(){
                console.log('open modal')
                this.modalOpen5 = true;
            },
            openModal6(){
                console.log('open modal')
                this.modalOpen6 = true;
            },
            openModal7(){
                console.log('open modal')
                this.modalOpen7 = true;
            },
            openModal8(){
                console.log('open modal')
                this.modalOpen8 = true;
            },
            openModal9(){
                console.log('open modal')
                this.modalOpen9 = true;
            },
            openModal10(){
                console.log('open modal')
                this.modalOpen10 = true;
            },
            openModal11(){
                console.log('open modal')
                this.modalOpen11 = true;
            },
            openModal12(){
                console.log('open modal')
                this.modalOpen12 = true;
            },
            openModal13(){
                console.log('open modal')
                this.modalOpen13 = true;
            },
            openModal14(){
                console.log('open modal')
                this.modalOpen14 = true;
            },
            openModal15(){
                console.log('open modal')
                this.modalOpen15 = true;
            },
            openModal16(){
                console.log('open modal')
                this.modalOpen16 = true;
            },
            openModal17(){
                console.log('open modal')
                this.modalOpen17 = true;
            },
            close(){
                this.modalOpen = false
                this.modalOpen1 = false
                this.modalOpen2 = false
                this.modalOpen3 = false
                this.modalOpen4 = false
                this.modalOpen5 = false
                this.modalOpen6 = false
                this.modalOpen7 = false
                this.modalOpen8 = false
                this.modalOpen9 = false
                this.modalOpen10 = false
                this.modalOpen11 = false
                this.modalOpen12 = false
                this.modalOpen13 = false
                this.modalOpen14 = false
                this.modalOpen15 = false
                this.modalOpen16 = false
                this.modalOpen17 = false
            }
        },
        beforeMount() {
            
        // console.log("Hello from beforeMount. Im ready to be mounted!")
        },
        async created(){
            // console.log("hpercode inside store", this.hpercode)
            this.planStore.form.enccode = this.$route.params.hpercode
            // console.log("lenght ",res1.data.length)
            // console.log("lenght ",res1.data)
            //     console.log(res1)
            const res1 = await this.getCancerData(this.hpercode,'PersonalAndSocialistory')
                if(res1.data.length != 0)this.patStore.personalHistory = JSON.parse(res1.data[0].data)
            const res2 = await this.getCancerData(this.hpercode,'occupational')
                if(res2.data.length != 0)this.patStore.occupational = JSON.parse(res2.data[0].data )
            const res3 = await this.getCancerData(this.hpercode,'medicalConditions')
                if(res3.data.length != 0)this.patStore.medicalCondition = JSON.parse(res3.data[0].data )
            const res4 = await this.getCancerData(this.hpercode,'forFemaleSubjects')
                if(res4.data.length != 0)this.patStore.forFemaleSubjects = JSON.parse(res4.data[0].data )
            const res5 = await this.getCancerData(this.hpercode,'familyHistory')
                if(res5.data.length != 0)this.patFamHist.data = JSON.parse(res5.data[0].data)
            const res6 = await this.getCancerData(this.hpercode,'cancerData')
                if(res6.data.length != 0)this.patStore.cancerData = JSON.parse(res6.data[0].data )
            const res7 = await this.getCancerData(this.hpercode,'primarySite')
                if(res7.data.length != 0)this.patStore.primarySite = JSON.parse(res7.data[0].data )
            const res8 = await this.getCancerData(this.hpercode,'concurrentSite')
                if(res8.data.length != 0)this.patStore.concurrentSite = JSON.parse(res8.data[0].data )
            const res9 = await this.getCancerData(this.hpercode,'tnm')
                if(res9.data.length != 0)this.patStore.tnm = JSON.parse(res9.data[0].data )
            const res10 = await this.getCancerData(this.hpercode,'staging')
                if(res10.data.length != 0)this.patStore.staging = JSON.parse(res10.data[0].data )
            const res11 = await this.getCancerData(this.hpercode,'biomarker')
                if(res11.data.length != 0)this.patLabHistory.data = JSON.parse(res11.data[0].data )
            const res12 = await this.getCancerData(this.hpercode,'isCancerPatient')
                if(res12.data.length != 0)
                {
                    if(JSON.parse(res12.data[0].data).cancerPatient='Y'){
                        this.patStatus.data.cancerPatient = 'Y'
                    }
                    this.patStatus.data = JSON.parse(res12.data[0].data )
                }
            const res13 = await this.getCancerData(this.hpercode, 'treatmentPlan')
                if(res13.data.length != 0)this.planStore.form.data = JSON.parse(res13.data[0].data)
            // console.log("res13 ",res13.data)
                
                
            this.getPatHpercode().then(res =>{
                // console.log(res.data)
                this.patinfo = res.data
                // console.log(this.patinfo)
            })
            // this.getPatOtherData().then(res =>{
            //     // console.log(res.data)
            //     this.patOtherData = res.data
            //     return
            // })
            // this.getPatFamHistory().then(res =>{
            //     // console.log(res.data)
            //     this.patFamHist = res.data
            // })
            // this.getPatlabHistory().then(res =>{
            //     // console.log(res.data)
            //     this.patLabHistory = res.data
            // })
            // this.getPatFollowup().then(res =>{
            //     // console.log(res.data)
            //     this.patFollowup = res.data
            // })
        },
        mounted(){
            // console.log("hpercode: " + this.hpercode)
            this.getModal()
            
        }
        //modals

    }
</script>
<style>
    :root{
    --main-bg-color:#d68f3e;
    --main-text-color:#d68f3e;
    --second-text-color:#f5c895;
    --second-bg-color:#f2cda2;
}
.primary-text{
    color: var(--main-text-color);
}
.second-text{
    color:var(--second-text-color);
}
.primary-bg{
    background-color: var(--main-bg-color);
}
.secondary-bg{
    background-color: var(--second-bg-color);
}
.rounded-full{
    border-radius: 100%;
}
#wrapper{
    overflow-x: hidden;
    /* background-image: linear-gradient(to right,#baf3d7,#c2f5de,#cbf7e4,#d4f8ea,#ddfaef); */
}
#sidebar-wrapper{
    min-height:100vh;
    margin-left:-15rem;
    transition: margin 0.25 ease-out;
}
#sidebar-wrapper .sidebar-heading{
    padding: 0.875rem 1.25rem;
    font-size: 1.2rem;
}
#sidebar-wrapper .list-group{
    width: 15rem;
}
#page-content-wrapper{
     min-width: 100vh;
}
#wrapper.toggled #sidebar-wrapper{
    margin-left: 0;
}
#menu-toggle{
    cursor: pointer;
}
.list-group-item{
    border: none;
    padding: 10px 30px;
}
.list-group-item.active{
    background-color:transparent;
    color:var(--main-text-color);
    font-weight:bold;
    border: none;
}
@media(min-width: 768px){
    #sidebar-wrapper{
        margin-left:0;
    }
    #page-content-wrapper{
        min-width: 0;
        width: 100%;
    }
    #wrapper.toggled #sidebar-wrapper{
        margin-left: -15rem;
    }
}
#dashboardTable{
    height: 50vh;
    overflow-y: auto;
}
#bghmclogo{
    height: 10vh;
    width: 10vh;
}
.cursor-pointer{
    cursor: pointer;
}
.stickynav{
    /* position: -webkit-sticky; */
    position: sticky;
    top:0%;
   
}
#chart{
    height: 50%;
    width: 50%;
}
.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
background: #0d6efd;
color: white;
}
.nav-link.active{
color: white;
}
#card{
    border-top: 5px solid #38bff5;
    transition: 0.3s;
}
#card:hover{
    border-top: 5px solid #38bff5;
    box-shadow:0 0 10px #38bff5;
    transition: 0.3s;
}
#col{
    justify-content: flex-start;
    text-align: start;
}
input{
  border: none;
  border-bottom: 1px solid;
  height: auto;
  width: 170px;
}
#boldtext{
    color: orangered;
}
.fade-enter-active,
.fade-leave-active {
  transition: .2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
