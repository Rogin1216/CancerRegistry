<template>
    <div class="container ">
        <modalSearch v-show="modalOpen" @close="close"></modalSearch>
        <!-- <div class="panel-heading">
            <div id="modal"></div>
                 <strong>List</strong></div> -->
        
        
        <div class="row m-3">
            <div class="col-auto">
                <button @click="openModal" class="btn btn-success bg-gradient">Search Filter</button>
            </div>
            <div class="col-auto">
                
            </div>
            
        </div>
        <div class="row">
            <div class="col">
                <div class="d-inline">
                    <div class="tablesearch ">
                        <div class="divInner" style="font-weight:bold">
                          <div class="div-table-row">
                            <div class="div-table-col">Hospital code</div>
                            <div class="div-table-col">First Name</div>
                            <div class="div-table-col">Last name</div>
                            <div class="div-table-col">Gender</div>
                          </div>
                        </div>
                          <!-- <div class="div-table" v-for="td in resultQuery" :key="td" @click="$emit('patientHpercode',td.hpercode)"> -->
                            <div class="div-table" v-for="td in showTable" :key="td">
                                <template v-if="td.isCancerPatient == '1'">
                                    <div class="div-table-row"  @click="patHpercode(td.hpercode)">
                                        <div class="div-table-col" align="center">{{td.hpercode}}</div>
                                        <div  class="div-table-col">{{td.patfirst}}</div>
                                        <!-- <div  class="div-table-col">{{td.patmiddle}}</div> -->
                                        <div  class="div-table-col">{{td.patlast}}</div>
                                        <div  class="div-table-col">{{td.patsex}} </div>
                                        <div  class="div-table-col"></div>
                                        <!-- <div  class="div-table-col">{{td.tsdesc}}</div> -->
                                    </div>
                                </template>
                                <template v-else-if="td.isCancerPatient == '0'">
                                    <div class="div-table-row bg-secondary text-white"  @click="patHpercode(td.hpercode)">
                                        <div class="div-table-col" align="center">{{td.hpercode}}</div>
                                        <div  class="div-table-col">{{td.patfirst}}</div>
                                        <!-- <div  class="div-table-col">{{td.patmiddle}}</div> -->
                                        <div  class="div-table-col">{{td.patlast}}</div>
                                        <div  class="div-table-col">{{td.patsex}} </div>
                                        <div  class="div-table-col"></div>
                                        <!-- <div  class="div-table-col">{{td.tsdesc}}</div> -->
                                    </div>
                                </template>
                              <!-- </router-link> -->
                        </div>
                    </div>
                </div>
            </div>
            <template v-if="this.listStore.isCancerpatient=='Y'">
                <div class="col" style="border:1px solid #f0ad4e; border-radius:25px;height:530px;">
                    <div class="row p-1" style="background-color:#f0ad4e;border-radius:20px 20px 0 0">
                        <!--  -->
                            <div class="banner text-black" >
                            <label for="" class="bannerText me-2">Patient Info Details</label>
                                <!-- <router-link :to="`/Dashboard/patienttable/${this.listStore.patHpercode}`" target="_blank" :hpercode="'hello'" > -->
                                    <button @click="editBtn" class="btn btn-warning btn-sm" :disabled="this.listStore.patHpercode==''">
                                        
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                            </svg>
                                        
                                    </button>
                                    <!-- <label for="">{{}}</label> -->
                                <!-- </router-link> -->
                            </div>
                    </div>
                    <div class="row">
                        <div class="d-inline" v-if="this.listStore.patHpercode">
                            <!-- <span v-if="patHpercode">This is a secret message.</span> -->
                            <div class="patHeaderDetails" >
                                <div class="row">
                                    <div class="col d-flex justify-content-start">
                                        <div class="d-block">
                                            <label for="">First Name: {{ this.listStore.patHpercodeHeader[0].patfirst }}</label>
                                        </div>
                                        <div class="d-block">
                                            <label for="">Last Name: {{ this.listStore.patHpercodeHeader[0].patlast }}</label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <label for="">Gender: {{ this.listStore.patHpercodeHeader[0].patsex }}</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <b>Primary Cancer:</b>
                                        {{ this.listStore.resPrimary.SolidTumor.Anal }}
                                        {{ this.listStore.resPrimary.SolidTumor.Bone }}
                                        {{ this.listStore.resPrimary.SolidTumor.Breast }}
                                        {{ this.listStore.resPrimary.SolidTumor.Cervical }}
                                        {{ this.listStore.resPrimary.SolidTumor.Colon }}
                                        {{ this.listStore.resPrimary.SolidTumor.Esophageal }}
                                        {{ this.listStore.resPrimary.SolidTumor.Gastric }}
                                        {{ this.listStore.resPrimary.SolidTumor.HeadAndNeck }}
                                        {{ this.listStore.resPrimary.SolidTumor.Hepatobiliary }}
                                        {{ this.listStore.resPrimary.SolidTumor.Kidney }}
                                        {{ this.listStore.resPrimary.SolidTumor.Neuroendocrine }}
                                        {{ this.listStore.resPrimary.SolidTumor.NSCLC }}
                                        {{ this.listStore.resPrimary.SolidTumor.SCLC }}
                                        {{ this.listStore.resPrimary.SolidTumor.Lung }}
                                        {{ this.listStore.resPrimary.SolidTumor.Ovarian }}
                                        {{ this.listStore.resPrimary.SolidTumor.Pancreatic }}
                                        {{ this.listStore.resPrimary.SolidTumor.Prostate }}
                                        {{ this.listStore.resPrimary.SolidTumor.Rectal }}
                                        {{ this.listStore.resPrimary.SolidTumor.Skin }}
                                        {{ this.listStore.resPrimary.SolidTumor.SofTissue }}
                                        {{ this.listStore.resPrimary.SolidTumor.Testis }}
                                        {{ this.listStore.resPrimary.SolidTumor.Thyroid }}
                                        {{ this.listStore.resPrimary.SolidTumor.UrinaryBladder }}
                                        {{ this.listStore.resPrimary.SolidTumor.Uterine }}
                                        {{ this.listStore.resPrimary.SolidTumor.OthersInput }}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <b></b>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
            </template>
            <template v-if="this.listStore.isCancerpatient=='N'">
                <div class="col" style="border:1px solid #7c8184; border-radius:25px;height:530px;">
                    <div class="row p-1" style="background-color:#7c8184;border-radius:20px 20px 0 0">
                        <!--  -->
                            <div class="banner text-white" >
                            <label for="" class="bannerText me-2">Patient Info Details</label>
                                <!-- <router-link :to="`/Dashboard/patienttable/${this.listStore.patHpercode}`" target="_blank" :hpercode="'hello'" > -->
                                    <button @click="editBtn" class="btn btn-warning btn-sm" :disabled="this.listStore.patHpercode==''">
                                        
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                            </svg>
                                        
                                    </button>

                                    <!-- <label for="">{{}}</label> -->
                                <!-- </router-link> -->
                            </div>
                    </div>
                    <div class="row">
                        <div class="d-inline" v-if="this.listStore.patHpercode">
                            <!-- <span v-if="patHpercode">This is a secret message.</span> -->
                            <div class="patHeaderDetails" >
                                <div class="row">
                                    <div class="col d-flex justify-content-start">
                                        <div class="d-block">
                                            <label for="">First Name: {{ this.listStore.patHpercodeHeader[0].patfirst }}</label>
                                        </div>
                                        <div class="d-block">
                                            <label for="">Last Name: {{ this.listStore.patHpercodeHeader[0].patlast }}</label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <label for="">Gender: {{ this.listStore.patHpercodeHeader[0].patsex }}</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <b>Primary Cancer:</b>
                                        {{ this.listStore.resPrimary.SolidTumor.Anal }}
                                        {{ this.listStore.resPrimary.SolidTumor.Bone }}
                                        {{ this.listStore.resPrimary.SolidTumor.Breast }}
                                        {{ this.listStore.resPrimary.SolidTumor.Cervical }}
                                        {{ this.listStore.resPrimary.SolidTumor.Colon }}
                                        {{ this.listStore.resPrimary.SolidTumor.Esophageal }}
                                        {{ this.listStore.resPrimary.SolidTumor.Gastric }}
                                        {{ this.listStore.resPrimary.SolidTumor.HeadAndNeck }}
                                        {{ this.listStore.resPrimary.SolidTumor.Hepatobiliary }}
                                        {{ this.listStore.resPrimary.SolidTumor.Kidney }}
                                        {{ this.listStore.resPrimary.SolidTumor.Neuroendocrine }}
                                        {{ this.listStore.resPrimary.SolidTumor.NSCLC }}
                                        {{ this.listStore.resPrimary.SolidTumor.SCLC }}
                                        {{ this.listStore.resPrimary.SolidTumor.Lung }}
                                        {{ this.listStore.resPrimary.SolidTumor.Ovarian }}
                                        {{ this.listStore.resPrimary.SolidTumor.Pancreatic }}
                                        {{ this.listStore.resPrimary.SolidTumor.Prostate }}
                                        {{ this.listStore.resPrimary.SolidTumor.Rectal }}
                                        {{ this.listStore.resPrimary.SolidTumor.Skin }}
                                        {{ this.listStore.resPrimary.SolidTumor.SofTissue }}
                                        {{ this.listStore.resPrimary.SolidTumor.Testis }}
                                        {{ this.listStore.resPrimary.SolidTumor.Thyroid }}
                                        {{ this.listStore.resPrimary.SolidTumor.UrinaryBladder }}
                                        {{ this.listStore.resPrimary.SolidTumor.Uterine }}
                                        {{ this.listStore.resPrimary.SolidTumor.OthersInput }}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <b></b>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <div class="row m-3">
            <div class="col">
                <Paginate :page-count="pagesCount" :click-handler="changePage" :container-class="'pagination'"
                    :page-class="'page-item'" :prev-text="'Prev'" :next-text="'Next'" :page-range="3" :margin-pages="1">
                </Paginate>
            </div>
        </div>
        
        
        
    </div>
</template>
<script>
import { useListStore } from '@/store/ListStore';
import modalSearch from '../view/modals/searchModal.vue'
import axios from 'axios'
export default{
    setup(){
        const listStore = useListStore()
        // const { formStore } = storeToRefs(patStore)
        return { listStore }
    },
    components:{
        modalSearch
    },
    data(){
        return{
            // result:this.listStore.list_allpatient,
            result:[],
            show:[],
            totalentry:null,
            perPage: 20,
            page: 1,
            currentPage: 1,
            modalOpen: false,
        }
    },
    computed:{
        showTable(){
            return this.listStore.show

        },
        pagesCount() {
        return Math.ceil(this.totalentry / this.perPage)
      },
      
    },
    

    async created(){
        
        // this.listStore.sample
        // this.listStore.list_allpatient = await this.listStore.allPatients
        this.result = await this.listStore.allPatients
        // console.log("result",this.result)
        // console.log("all pat ", this.listStore.allPatients)
        let start = (1 - 1) * this.perPage;
        let end = 1 * this.perPage;
        this.listStore.show = this.result.slice(start, end)
        this.totalentry = this.result.length
        },


    methods:{
        editBtn(){
          console.log("edit") 
          this.$router.replace('/Dashboard/patienttable/'+this.listStore.patHpercode); 
        },
        changePage(pageOfItems){
            let firstElem = Math.max((pageOfItems - 1) * this.perPage, 0)
            let lastElem = Math.max(pageOfItems * this.perPage, this.perPage)
            
            this.listStore.show = this.result.slice(firstElem, lastElem)
            // console.log("show ",this.listStore.show)
        },
        search(){
            console.log("searchModal")
        },
        openModal(){
                console.log('open modal')
                this.modalOpen = true;
            },
        async patHpercode(hpercode){
            
            this.listStore.patHpercode = hpercode
            // console.log(this.listStore.patHpercode)
            // this.listStore.getCancerData
            this.listStore.patListDetails()

            // this.listStore.patListDetails(hpercode)
            const response = await axios.post('http://192.168.7.66:8040/api/cancerRegisterHeader', {hpercode:this.listStore.patHpercode})
            this.listStore.patHpercodeHeader = response.data
            // console.log(response.data[0])
            // console.log(this.listStore.patHpercodeHeader)
            return response.data

            },
        close(){
            this.modalOpen = false
        }
    },
    mounted(){
    let user = localStorage.getItem('Token');
    if(!user){
      this.$router.push({name:'Login'})
      console.log('NOT LOGGED IN')
    }
    else{
      console.log('LOGGED IN')
    }
  }
}
</script>
<style>
.div-table-row{
    cursor:pointer;
}
.footer{
    position:absolute;
    left: 0;
    bottom: 10px;
    width: 100%;
    background-color: red;
    color: white;
    text-align: center;
}

</style>