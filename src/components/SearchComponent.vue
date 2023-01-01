<template>
    <div id="app">
       <div class="panel panel-default">
       <div class="panel-heading">
        <div id="modal"></div>
             <strong>Patient lists</strong></div>
             <!-- store: {{ this.taskStore.resData }} -->
            <div class="col"> 
              
                  <!-- ref="paginator" 
                    class="paginate-langs" -->
                <table class="table table-hover border">
                    <thead class="thead-dark">
                        <tr>
                            <th class="align-middle">Search For:</th>
                             <th><div class="col"><input class="form-control" type="text" @keyup.enter="searchBtn" v-model.lazy="searchHpercode" placeholder="Hospital No." v-on:keyup.enter="onEnter"/></div></th>
                             <!-- <th><input class="form-control" type="text" v-model="searchHpercode" placeholder="hpercode"/></th> -->
                             <th><div class="col"><input class="form-control" type="text" @keyup.enter="searchBtn" v-model="searchFirst" placeholder="First Name" /></div></th>
                             <th><div class="col"><input class="form-control" type="text" @keyup.enter="searchBtn" v-model="searchFamily" placeholder="Family Name" /></div></th>
                             
                             <!-- <th>
                                <select v-model="selectGender" class="form-select">
                                  <option value="" hidden>Gender</option>
                                  <option value="M">M</option>
                                  <option value="F">F</option>
                                </select>
                            </th>
                             <th>
                                <select v-model="selectTsdesc" class="form-select">
                                    <option value="" hidden>Description</option>
                                    <option value="Adult Chemotherapy">Adult Chemotherapy</option>
                                    <option value="Radiotherapy">Radiotherapy</option>
                                  </select>
                              </th>  -->
                              <th>
                                <button @click="searchBtn" class="btn btn-success">Search</button>
                              </th>
                              <th>
                                <button class="btn btn-danger bg-gradient" @click="clearBtn">Clear Fields</button>
                             </th>
                        </tr>
                    </thead>
                    <thead class="thead-dark">
                      <tr>
                           
                           
                           
                      </tr>
                  </thead>
                    
                    <!-- <tbody>
                          <tr v-for="td in resultQuery" :key="td" @click="$emit('patientHpercode',td.hpercode)" >
                          <tr v-for ="td in paginated('page')" :key="td">
                            
                            <td>{{td.hpercode}}</td>
                            <td>{{td.hpercode}}</td>
                            <td>{{td.patfirst}}</td>
                            
                            <td>{{td.patsex}}</td>
                            <td>{{td.tsdesc}}</td>
                            
                            <td><router-link :to="`/Dashboard/patienttable/${td.hpercode}`" :hpercode="'hello'"><button class="btn btn-info bg-gradient text-white">Edit</button></router-link></td>
                          </tr>
                    </tbody>  -->
                    
                </table>
                <div class="tablesearch">
                  <div class="divInner" style="font-weight:bold">
                    <div class="div-table-row">
                      <div class="div-table-col">Hospital code</div>
                      <div class="div-table-col">First Name</div>
                      <div class="div-table-col">Last name</div>
                      <div class="div-table-col">Gender</div>
                      <!-- <div class="div-table-col d-flex justify-content-center">
                        <div class="form-check form-switch">
                            <input class="form-check-input" v-model="cancerPatient" :true-value="'Y'" :false-value="'N'" type="checkbox" id="flexSwitchCheckChecked" checked></div>
                      </div> -->

                      <!-- <div class="div-table-col">Desc</div> -->
                    </div>
                  </div>
                    <!-- <div class="div-table" v-for="td in resultQuery" :key="td" @click="$emit('patientHpercode',td.hpercode)"> -->
                      <div class="div-table" v-for="td in allPatient" :key="td" @click="$emit('patientHpercode',td.hpercode)">
                      <template v-if="td.isCancerPatient == 0">
                        <router-link :to="`/Dashboard/patienttable/${td.hpercode}`" :hpercode="'hello'">
                          <div class="div-table-row" style="color:black">
                            <div class="div-table-col" align="center">{{td.hpercode}}</div>
                            <div  class="div-table-col">{{td.patfirst}}</div>
                            <!-- <div  class="div-table-col">{{td.patmiddle}}</div> -->
                            <div  class="div-table-col">{{td.patlast}}</div>
                            <div  class="div-table-col">{{td.patsex}}</div>
                            <!-- <div  class="div-table-col">{{td.tsdesc}}</div> -->
                          </div>
                        </router-link>
                      </template>
                      <template v-if="td.isCancerPatient == 1">
                        <router-link :to="`/Dashboard/patienttable/${td.hpercode}`" :hpercode="'hello'">
                          <div class="div-table-row bg-warning text-black">
                            <div class="div-table-col" align="center">{{td.hpercode}}</div>
                            <div  class="div-table-col">{{td.patfirst}}</div>
                            <!-- <div  class="div-table-col">{{td.patmiddle}}</div> -->
                            <div  class="div-table-col">{{td.patlast}}</div>
                            <div  class="div-table-col">{{td.patsex}}</div>
                            <!-- <div  class="div-table-col">{{td.tsdesc}}</div> -->
                          </div>
                        </router-link>
                      </template>
                    </div>
                </div>
            </div>
    
       </div>
       </div>
     
    </template>
    
    <script>
    import axios from 'axios'
    import { useTaskStore } from '../store/TaskStore'

    export default {
      setup(){
        const taskStore = useTaskStore()
        return { taskStore }
      },
      props: {
          title: String
        },
      data() {
        return {
            cancerPatient:null,
            searchFamily: "",
            searchFirst: "",
            // searchMiddle: null,
            searchHpercode: "",
            selectGender: "",
            selectTsdesc: "",
            entries:[],
            allPatient:[],
            paginate:["entries"],
            patinfo:[],
            hpercode: '000000000434482',
        };
      },
      
      computed: {
        button(){
          // console.log(this.patinfo)
        },
        // resultQuery(){
        //   if(this.searchFamily || this.searchFirst || this.searchHpercode || this.selectGender || this.selectTsdesc){
        //     return this.entries.filter((td)=>{return this.searchFamily.toLowerCase().split(' ').every(v => td.patlast.toLowerCase().includes(v))})
        //                        .filter((td)=>{return this.searchFirst.toLowerCase().split(' ').every(v => td.patfirst.toLowerCase().includes(v))})
        //                        .filter((td)=>{return this.searchHpercode.toLowerCase().split(' ').every(v => td.hpercode.toLowerCase().includes(v))})
        //                        .filter((td)=>{return this.selectGender.toLowerCase().split(' ').every(v => td.patsex.toLowerCase().includes(v))})
        //                        .filter((td)=>{return this.selectTsdesc.toLowerCase().split(' ').every(v => td.tsdesc.toLowerCase().includes(v))})
        //   }
        //   else{
        //     return ;
        //   }
        // },
        filteredSearch(){
          return this.filterBtn()
        }
      },
      watch:{
        cancerPatient(){
          console.log("cancerPatient")
        },
        searchFamily(value){
          console.log(value)
        }
      },
      async created(){
        // console.log("state response ", this.taskStore.allPatients)

        this.entries = await this.taskStore.allPatients

        this.getPatHpercode().then(res=>{
          // console.log("pathpercode ", res)
        })
            // this.getAllPatientList().then(res =>{
            //   // console.log("created: ", res)
            //   // console.log("res.data ",res.data[0])
            //     this.entries = res.data
            //     // console.log(res.data)
            // })
      },
      methods:{

        // async getAllPatientList() {
        //         const response = await axios.get('http://192.168.7.188:8040/api/cancerPatientList')
        //         // this.test = response
        //         // return response.json()
        //         return response
        //     },
        async getPatHpercode(){
              const response = await axios.get('http://192.168.7.66:8040/api/patient/' + this.hpercode)
              return response
        },
        
        filterBtn(){
          console.log(this.selectGender + " " + this.selectTsdesc)
          // return this.entries
          return this.entries.filter((td)=>{return this.selectTsdesc.toLowerCase().split(' ').every(v => td.tsdesc.toLowerCase().includes(v))})
          //  console.log(this.entries.filter((td)=>{return this.selectGender.toLowerCase().split(' ').every(v => td.tsdesc.toLowerCase().includes(v))}))
        },
        async searchBtn(){
          const info ={
                hpercode:this.searchHpercode,
                patlast:this.searchFamily,
                patfirst:this.searchFirst,
            }
            const response = await axios.post('http://192.168.7.66:8040/api/patient', info)
            console.log("search ", response.data)
            this.allPatient = response.data
            return response
          // console.log("result", response)
        },
        clearBtn(){
          this.searchHpercode = "";
          this.searchFamily = "";
          this.searchFirst = "";
          this.selectGender = "";
          this.selectTsdesc = "";
          // console.log('clr', this.hpercode)
        }
      },
      watch: {
      },
      mounted(){
        let user = localStorage.getItem('Token');
        if(!user){
          this.$router.push({name:'Login'})
        }
      }
    };
    </script>
    <style>
    input{
      width: 40%;
    
    }
    .tablesearch{
      border: 1px solid rgb(167, 166, 166);
      border-radius: 30px;
      width: 802px;
    }
    .divInner{
      width: auto;
    }
    .div-table {
      display: table;         
      width: auto;         
         
      border-top: 1px solid rgb(167, 166, 166); 
       /* cellspacing:poor IE support for  this */
    }

    .div-table-row {
      display: table-row;
      width: auto;
      clear: both;
    }
    .div-table-col {
      float: left; /* fix for  buggy browsers */
      display: table-column;         
      width: 200px;    
   
  
    }
    </style>