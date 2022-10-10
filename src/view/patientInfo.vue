<template>
    <!-- <div class="d-flex" v-if="!patbody || patbody.length == 0"> -->

    <!-- <div class="d-flex" v-if="!patOtherdata || patOtherData.length == null"> -->
    <div class="d-flex">
        <div v-for="pat in patinfo" :key="pat" id="page-content-wrapper">
            <div v-for="patbody in patOtherData" :key="patbody">
            <div>
                <!-- MODALS -->
                <modalPersonalHistory v-show="modalOpen" @close="close"/>
                <modalOccupational v-show="modalOpen1" @close="close"></modalOccupational>
                <modalMedicalCondition v-show="modalOpen2" @close="close"></modalMedicalCondition>
                <modalFemaleSubject v-show="modalOpen3" @close="close"></modalFemaleSubject>
                <modalCancerData v-show="modalOpen4" @close="close"></modalCancerData>
                <modalPrimarySite v-show="modalOpen5" @close="close"></modalPrimarySite>
                <modalPrimaryConcurrent v-show="modalOpen6" @close="close"></modalPrimaryConcurrent>
                <modalTestBaseline v-show="modalOpen7" @close="close"></modalTestBaseline>
                <modalLaterality v-show="modalOpen8" @close="close"></modalLaterality>
                <modalHistology v-show="modalOpen9" @close="close"></modalHistology>
                <modalTNM v-show="modalOpen10" @close="close"></modalTNM>
                <modalStaging v-show="modalOpen11" @close="close"></modalStaging>
                <modalFamily v-show="modalOpen12" @close="close"></modalFamily>
                <modalTreatment v-show="modalOpen13" @close="close"></modalTreatment>
                <modalPlan v-show="modalOpen14" @close="close"></modalPlan>
                <modalInfections v-show="modalOpen15" @close="close"></modalInfections>
            </div>
            

            <div class="container-fluid px-4 containertop ">
                <div class="p-2 bg-success rounded-bottom text-white"><i class="bi bi-person-fill"></i><label for=""><i>{{pat.patlast}}, {{pat.patfirst}} {{pat.patmiddle}}</i></label></div>
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
                    </ul>
                <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div class="container-fluid " id="col">
<!-- asdfsadf -->
                            <div  class="col p-3 mb-3 bg-white shadow-sm  justify-content-around align-items-center rounded border-top border-info border-5">
                                <label for=""><i class="bi bi-person-lines-fill"></i> Patient Details: </label>
                                    <div class="row ">
                                        <div class="input-group input-group mb-3">
                                                <!-- <label for="" class="form-control">Full Name: <h6><b>{{pat.patlast}}, {{pat.patfirst}} {{pat.patmiddle}}</b></h6></label> -->
                                                <label for="" class="form-control">Sex: <h6><b>{{pat.patsex}}</b></h6> </label>
                                                <label for="" class="form-control">Civil Status: <h6><b></b></h6></label>
                                        </div>
                                     </div>
                                    <div class="row">
                                        <div class="input-group input-group mb-3 ">
                                            <label for="" class="form-control">Address: <small> <h6><b>{{pat.address}}</b></h6></small> </label>
                                            
                                            <label for="" class="form-control">Contact No: <h6><b>{{pat.pattel}}</b></h6></label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-group mb-3">
                                            <label for="" class="form-control">Age: <h6><b>{{pat.age}}</b></h6> </label>
                                            <label for="" class="form-control">Nationality: <h6><b>{{pat.natdesc}}</b></h6> </label>
                                            <label for="" class="form-control">Religion:  <h6><b>{{pat.reldesc}}</b></h6></label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-group">
                                            <label for="" class="form-control">Height: <h6><b>{{pat.height}}</b></h6></label>
                                            <label for="" class="form-control">Weight: <h6><b>{{pat.weight}}</b></h6></label>
                                            <label for="" class="form-control">BSA:</label>
                                        </div>
                                    </div>
                            </div>
                            <!-- <button class="btn" @click="openModal">Open Modal</button> -->
                            <div class="d-flex justify-content-around mb-3">
                                <div class="col p-3 me-3 bg-white shadow-sm align-items-center rounded border-top border-info border-5 cursor-pointer" id="card" @click="openModal">
                                        <label for=""><i class="bi bi-person-badge-fill"></i> Personal and Social History:
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
                                                            <label for="" class="form-control">Smoke History:</label>
                                                            <label for="" class="form-control">Pack/Year: {{patbody.patPackYr}}</label>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="row">
                                                        <div class="input-group mb-3">
                                                        <label for="" class="form-control">Second hand smoke (SHS):  </label>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="input-group input-group mb-3">
                                                            <!-- <span class="input-group-text">$</span> -->
                                                            <label for="" class="form-control">Alcohol intake:</label>
                                                            <label for="" class="form-control">Drinks/Day:</label>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="input-group input-group mb-3">
                                                            <!-- <span class="input-group-text">$</span> -->
                                                            <label for="" class="form-control">Sexual History:</label>
                                                            <label for="" class="form-control"># of partner: {{patbody.patNumSex}}</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div class="row">
                                                        <div class="input-group input-group mb-3">
                                                            <!-- <span class="input-group-text">$</span> -->
                                                                    <label for="" class="form-control">Average Monthly Family Income:</label>
                                                            </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="input-group input-group mb-3">
                                                            <!-- <span class="input-group-text">$</span> -->
                                                                    <label for="" class="form-control">Means of Health Expenditure:</label>
                                                            </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="input-group input-group mb-3">
                                                            <!-- <span class="input-group-text">$</span> -->
                                                                    <label for="" class="form-control">Vaccine:</label>
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>

                                    <div class="col-md-3 p-3 me-3 bg-white shadow-sm  justify-content-around align-items-center rounded border-top border-info border-5 cursor-pointer" id="card" @click="openModal1">
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
                                                        <label for="" class="form-control">Exposure to:</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="input-group input-group mb-3 ">
                                                    <label for="" class="form-control">Longest job held: <small>{{patbody.patLongJob}}</small> </label>
                                                </div>
                                            </div>
                                    </div>
                                    <div class="col-md-3 p-3  bg-white shadow-sm  justify-content-around align-items-center rounded border-top border-info border-5 cursor-pointer" id="card" @click="openModal2">
                                    <label for=""><i class="bi bi-capsule"></i> Other Medical Condition:  
                                                <!-- <button type="button" class="btn btn-warning btn-sm"> -->
                                            <!-- <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalMedicalCondition">
                                            <i class="fa-solid fa-pencil"></i>
                                                </button> -->
                                            <!-- </button> -->
                                            </label> 
                                            
                                            <div class="row">
                                                <div class="input-group input-group mb-3 ">
                                                    <label for="" class="form-control"><small></small>Condition: </label>
                                                    <label for="" class="form-control"><small></small>Medication: </label>
                                                </div>
                                            </div>
                                    </div>
                            </div>
                            <div class="col p-3 mb-3 bg-white shadow-sm  justify-content-around align-items-center rounded border-top border-info border-5 cursor-pointer" id="card" @click="openModal3">
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
                                                    <label for="" class="form-control">Age of Menarche:<small>{{patbody.femMenarAge}}</small> </label>
                                                </div>
                                                <div class="input-group input-group mb-3 ">
                                                    <label for="" class="form-control">Menstrual Status: </label>
                                                    <label for="" class="form-control">Age of Menopause: {{patbody.femMenopAge}}</label>
                                                    <label for="" class="form-control">Cause: </label>
                                                </div>
                                                <div class="input-group input-group mb-3 ">
                                                    <label for="" class="form-control">Contraceptive use (Duration) : {{patbody.femContra}}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col">
                                        OB history
                                        <div class="row">   
                                            <div class="col">
                                                <div class="input-group input-group mb-3 ">
                                                    <label for="" class="form-control"></label>
                                                    <label for="" class="form-control">Age if 1<sup>st</sup> birth: {{patbody.fem1stBirth}}</label>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            
                                            <div class="col">
                                                <div class="input-group input-group mb-3 ">
                                                    <label for="" class="form-control">Pregnancy Stage:</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    
                            </div>
                            <div class="col p-3  bg-white shadow-sm  justify-content-around align-items-center rounded border-top border-info border-5 cursor-pointer" id="card" @click="openModal15">
                            <label for=""><i class="fa-solid fa-viruses"></i> Infections(if applicable): </label>
                            <!-- <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalInfections">
                                        <i class="fa-solid fa-pencil"></i>
                                            </button> -->
                            <br>
                                <div class="col-8">
                                    <div class="row">
                                        <div class="col">
                                            <div class="input-group input-group mb-3 ">
                                                <!-- <label for="" class="form-control"><small></small> </label> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex justify-content-around mb-3">
                            <!-- <div class="col p-3 me-3 bg-white shadow-sm  justify-content-around align-items-center rounded border-top border-info border-5 cursor-pointer" id="card" data-bs-toggle="modal" data-bs-target="#modalFamilyCancer">
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
                            <!-- <div class="col p-3  bg-white shadow-sm  justify-content-around align-items-center rounded border-top border-info border-5 cursor-pointer" id="card" data-bs-toggle="modal" data-bs-target="#modalInfections">
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
                                <div class="col p-3 mb-3 bg-white shadow-sm  justify-content-around align-items-center rounded border-top border-info border-5 cursor-pointer"  id="card" @click="openModal4">
                                <div class="row">
                                    <div class="input-group input-group mb-3">
                                        <label for="" class="form-control">Referred from region/province: {{patbody.cancRefer}}</label>
                                        <label for="" class="form-control">Name of Referring Health Facility: {{patbody.cancRefFac}}</label>
                                    </div>
                                    <div class="input-group input-group mb-3">
                                        <label for="" class="form-control">Doctor/Health Care Professional: {{patbody.cancDocProf}}</label>
                                        <label for="" class="form-control">Reason for Referral:</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-group input-group mb-3">
                                        <label for="" class="form-control">Date of Consultation/Admission: <input type="date"></label>
                                        <label for="" class="form-control">Chief Complaint: {{patbody.cancComp}}</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-group input-group mb-3">
                                        <label for="" class="form-control">Date of Diagnosis(Clinical or Pathologic): <input type="date"></label>
                                        <label for="" class="form-control">Type of Diagnosis:</label>
                                    </div>
                                </div>
                                </div>

                                <div class="d-flex justify-content-around mb-3">
                                    <div class="col p-3 bg-white shadow-sm  justify-content-around align-items-center rounded border-top border-info border-5" >
                                    <div class="row">
                                        <div class="col shadow-sm p-3 me-3 bg-white rounded cursor-pointer" id="card" @click="openModal5">
                                            <label for="">Primary Current Cancer Site/Diagnosis</label> 
                                            <!-- <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalInfections"><i class="fa-solid fa-pencil"></i></button> -->
                                        </div>
                                        <div class="col shadow-sm p-3 me-3 bg-white rounded cursor-pointer" id="card" @click="openModal6">
                                            <label for="">Concurrent Cancer Site/Diagnosis</label> 
                                            <!-- <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalInfections"><i class="fa-solid fa-pencil"></i></button> -->
                                        </div>
                                    </div>
                                    <!-- <label for="">Primary Current Cancer Site/Diagnosis:</label>  -->
                                    <!-- <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalInfections">
                                                <i class="fa-solid fa-pencil"></i>
                                                    </button> -->
                                    </div>
                                    <!-- <div class="col p-3 mb-3 bg-white shadow-sm  justify-content-around align-items-center rounded border-top border-info border-5">
                                    <label for="">Concurrent Cancer Site/Diagnosis:</label>  -->
                                    <!-- <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalInfections">
                                                <i class="fa-solid fa-pencil"></i>
                                                    </button> -->
                                    <!-- </div> -->
                                </div>

                                <div class="d-flex justify-content-around mb-3">
                                    <div class="col p-3 me-3 bg-white shadow-sm  justify-content-around align-items-center rounded border-top border-info border-5 cursor-pointer" @click="openModal7" id="card">
                                    <label for="">Test at Baseline:</label> 
                                    <!-- <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalInfections">
                                                <i class="fa-solid fa-pencil"></i>
                                                    </button> -->
                                    </div>
                                    <div class="col p-3 bg-white shadow-sm  justify-content-around align-items-center rounded border-top border-info border-5 cursor-pointer" @click="openModal8" id="card">
                                    <label for="">Laterality:</label> 
                                    <!-- <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalInfections">
                                                <i class="fa-solid fa-pencil"></i>
                                                    </button> -->
                                    </div>
                                </div>

                                <div class="col p-3 mb-3 bg-white shadow-sm  justify-content-around align-items-center rounded border-top border-info border-5 cursor-pointer" @click="openModal9" id="card">
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
                                </div>
                                <div class="d-flex justify-content-around mb-3">
                                    <div class="col p-3 me-3 mb-3 bg-white shadow-sm  justify-content-around align-items-center rounded border-top border-info border-5 cursor-pointer" @click="openModal10" id="card">
                                            <label for="">TNM Staging System</label>
                                        <div class="row">
                                            <div class="col">
                                                <div class="row d-flex justify-content-center">
                                                        <div class="col">
                                                        <label for="">T</label>
                                                        </div>
                                                        <div class="col">
                                                        <label for="">N</label>
                                                        </div>
                                                        <div class="col">
                                                        <label for="">M</label>
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
                                    <div class="col p-3 mb-3 bg-white shadow-sm  justify-content-around align-items-center rounded border-top border-info border-5 cursor-pointer" @click="openModal11" id="card">
                                        
                                            <label for="" class="d-block">Staging(Other than TNM): </label>
                                            <label for="" class="d-block">Number of Metastatistic Sites: </label>
                                            <label for="" class="d-block">Sites of Distant Metastatis: </label>
                                            
                                        
                                    </div>
                                </div>
                            </div>
                </div>
                <div class="tab-pane fade" id="bioMarker" role="tabpanel" aria-labelledby="bioMarker-tab">
                    <div class="col p-3 me-3 bg-white shadow-sm  justify-content-around align-items-center rounded border-top border-info border-5 cursor-pointer" id="card">
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
                                                                <th>Biomarker Description</th>
                                                                <th>Biomarker Date</th>
                                                                <th>Level</th>
                                                                <th>Ref Range</th>
                                                            </thead>
                                                            <tbody >
                                                                <!-- <tr v-for="patBio in patLabHistory" :key="patBio">
                                                                        <td>{{patBio.bioMarkerDesc}}</td>
                                                                        <td>{{patBio.bioMarkerdate}}</td>
                                                                        <td>{{patBio.level}}</td>
                                                                        <td>{{patBio.ref_range}}</td>
                                                                </tr> -->
                                                                <tr v-for="patBio in patLabHistory" :key="patBio">
                                                                <template v-if="patBio.withinRange == 0">
                                                                        <td><label for="" class="text-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
                                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                                                                        </svg></label> {{patBio.bioMarkerDesc}}</td>
                                                                        <td>{{patBio.bioMarkerdate}}</td>
                                                                        <td>{{patBio.level}}</td>
                                                                        <td>{{patBio.ref_range}}</td>
                                                                </template>
                                                                <template  v-else> 
                                                                    <td>{{patBio.bioMarkerDesc}}</td>
                                                                    <td>{{patBio.bioMarkerdate}}</td>
                                                                    <td>{{patBio.level}}</td>
                                                                    <td>{{patBio.ref_range}}</td>
                                                                </template>
                                                                </tr>
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
                    <div class="col p-3 me-3 bg-white shadow-sm  justify-content-around align-items-center rounded border-top border-info border-5 cursor-pointer" id="card" @click="openModal12">
                        <br>
                        <div class="col-8">
                            <div class="row">
                                <div class="col">
                                    <div class="input-group input-group mb-3 ">
                                        <table class="table table-hover">
                                            <thead class="thead-dark">
                                                <th>Name</th>
                                                <th>Type of Cancer</th>
                                                <th>consanguinity</th>
                                                <th>age at diagnosis</th>
                                                <th></th>
                                            </thead>
                                            <tbody>
                                                <tr v-for="patFam in patFamHist" :key="patFam" >
                                                <!-- <tr v-for ="td in paginated('page')" :key="td"> -->
                                                    <td>{{patFam.familyMember}}</td>
                                                    <td>{{patFam.consanguinity}}</td>
                                                    <td>{{patFam.typeOfCancer}}</td>
                                                    <!-- <td>{{td.patmiddle}}</td> -->
                                                    <td>{{patFam.ageAtDiagnosis}}</td>
                                                    <!-- <td>{{patFam.tsdesc}}</td> -->
                                                    <!-- <td><router-link :to="`/Dashboard/patienttable/${td.hpercode}`" :hpercode="'hello'"><button class="btn btn-info">Edit</button></router-link></td> -->
                                                </tr>
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
                        <div class="col p-3  bg-white shadow-sm  justify-content-around align-items-center rounded border-top border-info border-5 cursor-pointer" id="card" data-bs-toggle="modal" data-bs-target="#modalInfections">
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
                            <div class="col-auto p-3 me-2 bg-white shadow-sm  justify-content-around align-items-center rounded border-top border-info border-5 cursor-pointer" id="card" @click="openModal13">
                                <div class="col" id="col">
                                    <!-- <div class="input-group input-group mb-3 "> -->
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
                                    <!-- </div> -->
                                </div>
                            </div>
                            <div class="col p-3 me-2 bg-white shadow-sm  justify-content-around align-items-center rounded border-top border-info border-5 cursor-pointer" id="card" @click="openModal14">
                                <div class="col" id="col">
                                    <div class="row ">
                                        <div class="input-group input-group mb-3">
                                                <label for="" class="form-control">Protocol:</label>
                                        </div>
                                    </div>
                                    <div class="row ">
                                        <div class="input-group input-group mb-3">
                                                <label for="" class="form-control">Radiation Therapy:</label>
                                        </div>
                                    </div>
                                    <div class="row ">
                                        <div class="input-group input-group mb-3">
                                                <label for="" class="form-control">Identify site:</label>
                                        </div>
                                    </div>
                                    <div class="row ">
                                        <div class="input-group input-group mb-3">
                                                <label for="" class="form-control">Setting:</label>
                                        </div>
                                    </div>
                                    <div class="row ">
                                        <div class="input-group input-group mb-3">
                                                <label for="" class="form-control">Dose:</label>
                                        </div>
                                    </div>
                                    <div class="row ">
                                        <div class="input-group input-group mb-3">
                                                <label for="" class="form-control">Surgery:</label>
                                        </div>
                                    </div>
                                    <div class="row ">
                                        <div class="input-group input-group mb-3">
                                                <label for="" class="form-control">Date:</label>
                                                <label for="" class="form-control">Surgeon:</label>
                                        </div>
                                    </div>
                                    <div class="row ">
                                        <div class="input-group input-group mb-3">
                                                <label for="" class="form-control">Planned Operation:</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col p-3 me-2 bg-white shadow-sm  justify-content-around align-items-center rounded border-top border-info border-5 cursor-pointer" id="card">
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
    
    // var moment = require('moment');
    export default{
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
    modalInfections
},
        data(){
            return {
                hpercode:this.$route.params.hpercode,
                patinfo:[],
                patOtherData: [],
                patFamHist: [],
                patientheader: [],
                patLabHistory: [],
                patFollowup: [],
                modalOpen: false , modalOpen1:false , modalOpen2:false ,modalOpen3: false, modalOpen4: false, modalOpen5: false, modalOpen6: false, modalOpen7: false, modalOpen8: false, modalOpen9: false, modalOpen10: false, modalOpen11: false, modalOpen12:false, modalOpen13:false, modalOpen14: false, modalOpen15: false
            }
        },
        
        methods:{
            async getPatHpercode(){
                const response = await axios.post('http://192.168.7.188:8040/api/cancerRegisterHeader', {hpercode:this.hpercode}).catch(error => {})
                console.log("header: ", response.data)
                return response
            },
            async getPatOtherData(){
                const response = await axios.post('http://192.168.7.188:8040/api/cancerPatientOtherData', {hpercode:this.hpercode})
                console.log("body: ", response.data)
                return response
            },
            async getPatFamHistory(){
                const response = await axios.post('http://192.168.7.188:8040/api/cancerPatientFamilyHistory', {hpercode:this.hpercode})
                // console.log("fam: ", response.data)
                return response
            },
            async getPatlabHistory(){
                const response = await axios.post('http://192.168.7.188:8040/api/cancerPatientLabHistory', {hpercode:this.hpercode})
                // console.log("fam: ", response.data)
                return response
            },
            async getPatFollowup(){
                const response = await axios.post('http://192.168.7.188:8040/api/cancerPatientEncounters', {hpercode:this.hpercode})
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
            }
        },
        beforeMount() {
        // console.log("Hello from beforeMount. Im ready to be mounted!")
        },
        created(){
            this.getPatHpercode().then(res =>{
                // console.log(res.data)
                this.patinfo = res.data
            })
            this.getPatOtherData().then(res =>{
                // console.log(res.data)
                this.patOtherData = res.data
                return
            })
            this.getPatFamHistory().then(res =>{
                // console.log(res.data)
                this.patFamHist = res.data
            })
            this.getPatlabHistory().then(res =>{
                // console.log(res.data)
                this.patLabHistory = res.data
            })
            this.getPatFollowup().then(res =>{
                // console.log(res.data)
                this.patFollowup = res.data
            })
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
#card:hover{
    border: 1px solid skyblue;
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
</style>
