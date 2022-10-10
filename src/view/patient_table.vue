<template>
<div id="app">
   <div class="panel panel-default">
   <div class="panel-heading">
    <div id="modal"></div>
         <strong>Cancer patient lists</strong></div>
         
            <!-- <div class="row">
              <div class="search-wrapper panel-heading col-auto">
                     <input class="form-control" type="text" v-model="searchHpercode" placeholder="hpercode" />
                </div> 
                 <div class="search-wrapper panel-heading col-auto">
                     <input class="form-control" type="text" v-model="searchFamily" placeholder="Family Name" />
                </div>   
                                   
            </div> -->
            
        <div class="col border border-secondary"> 
          <paginate name="page" 
                :list="resultQuery" 
                :per="10" 
              >
              <!-- ref="paginator" 
                class="paginate-langs" -->
            <table class="table table-hover">
                <thead class="thead-dark">
                    <tr>
                         <th><div class="col"><input class="form-control" type="text" v-model="searchHpercode" placeholder="hpercode" /></div></th>
                         <!-- <th><input class="form-control" type="text" v-model="searchHpercode" placeholder="hpercode"/></th> -->
                         <th><div class="col"><input class="form-control" type="text" v-model="searchFamily" placeholder="Family Name" /></div></th>
                         <th><div class="col"><input class="form-control" type="text" v-model="searchFirst" placeholder="First Name" /></div></th>
                         <th><div class="col"><button class="form-control" v-on:click="button" placeholder="button">click</button></div></th>
                    </tr>
                </thead>
                
                <tbody>
                      <tr v-for="td in resultQuery" :key="td" @click="$emit('patientHpercode',td.hpercode)" >
                      <!-- <tr v-for ="td in paginated('page')" :key="td"> -->
                        <td>{{td.hpercode}}</td>
                        <td>{{td.patlast}}</td>
                        <td>{{td.patfirst}}</td>
                        <!-- <td>{{td.patmiddle}}</td> -->
                        <td>{{td.patsex}}</td>
                        <td>{{td.tsdesc}}</td>
                        <td><router-link :to="`/Dashboard/patienttable/${td.hpercode}`" :hpercode="'hello'"><button class="btn btn-info">Edit</button></router-link></td>
                      </tr>
                </tbody> 
                
            </table>
            </paginate>
            <paginate-list for="page" :show-step-links="true">
            </paginate-list>
            <!-- <div class="card-footer pb-0 pt-3">
                <jw-pagination :pageSize=20 :items="exampleItems" @changePage="onChangePage"></jw-pagination>
            </div> -->
        </div>

   </div>
   </div>
 
</template>

<script>
import axios from 'axios'

export default {
  props: {
      title: String
    },
  data() {
    return {
        searchFamily: null,
        searchFirst: null,
        // searchMiddle: null,
        searchHpercode: null,
        entries:[],
        paginate:["entries"],
        patinfo:[],
        hpercode: '000000000434482',
    };
  },
  
  computed: {
    button(){
      console.log(this.patinfo)
    },
    resultQuery(){
      if(this.searchFamily){
        return this.entries.filter((td)=>{
            return this.searchFamily.toLowerCase().split(' ')
                                  .every(v => td.patlast.toLowerCase().includes(v))
      })
      }
      else if(this.searchFirst){
        return this.entries.filter((td)=>{
            return this.searchFirst.toLowerCase().split(' ')
                                  .every(v => td.patfirst.toLowerCase().includes(v))
      })
      }
      // else if(this.searchMiddle){
      //   return this.entries.filter((td)=>{
      //       return this.searchMiddle.toLowerCase().split(' ')
      //                             .every(v => td.patfirst.toLowerCase().includes(v))
      // })
      // }
      else if(this.searchHpercode){
        return this.entries.filter((td)=>{
            return this.searchHpercode.toLowerCase().split(' ')
                                  .every(v => td.hpercode.toLowerCase().includes(v))
      })
      }
      else{
        return ;
      }
    }
  },
  created(){
        this.getAllPatientList().then(res =>{
            this.entries = res.data
        })
        // this.getPatHpercode().then(res =>{
        //     this.patinfo = res.data
        // })
  },
  methods:{
    async getAllPatientList() {
            const response = await axios.get('http://192.168.7.188:8040/api/cancerPatientList')
            // return response.json()
            return response
        },
    async getPatHpercode(){
          const response = await axios.get('http://192.168.7.188:8040/api/patient/' + this.hpercode)
          return response
    }
        // onChangePage(resultQuery){
        //   console.log(resultQuery)
        //   this.resultQuery = resultQuery;
        // }
        
  },
  
};
</script>
<style>
input{
  width: 40%;

}
</style>