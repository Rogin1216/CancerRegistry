<template> 
    <div class="">
        <span>Show </span>
        <select v-model="currentEntries" @change="paginateEntries">
            <option v-for="se in showEntries" :key="se" :value="se">{{se}}</option>
        </select>
        <span> entries</span>
    </div>
    <div class="search-wrapper  col-sm-2">
        <!-- <input class="form-control" type="text" v-model="searchQuery" placeholder="Search" /> -->
        <input class="form-control" type="search" v-model="searchInput" @keyup="searchEvent" placeholder="Search" />
    </div>  
    <div>
        <patListTBL :columns="columns" :entries="filteredEntries"/>
    </div>

    <div class="border border-danger">
        <ul class="list-group list-group-horizontal">
            <li class="list-group-item"  v-for="pagi in showPagination" :key="pagi">
                <a href="" @click.prevent="paginateEvent(pagi)">{{pagi}}</a>
            </li>
        </ul>
    </div>

    <!-- <div>
        Show {{showInfo.from}} to {{showInfo.to}} of {{ showInfo.of}} entries
    </div> -->
</template>
<script>
// import { array } from 'alga-js/array'
import * as array from 'alga-js/array'

import patListTBL from '../components/Tables/patient_lists_table.vue'
import axios from 'axios'
import { $array } from 'alga-js'
export default{
    name: 'DataTable',
    data(){
        return{
            columns: [
                { name: 'hpercode', text: 'Hpercode'},
                { name: 'patlast', text: 'Name'},
                // { name: 'patfirst', text: 'First Name'},
                // { name: 'patmiddle', text: 'Middle Name'},
                { name: 'patsex', text: 'Sex'},
                { name: 'tsdesc', text: 'tsdesc'},
            ],
            entries: [],
            showEntries: [5, 10, 15, 25, 50, 100],
            currentEntries:10,
            filteredEntries: [],
            currentPage: 1,
            allPages: 5,
            searchInput: "",
            searchEntries: []
        }
    },
    components: {
        patListTBL
    },
    computed: {
        showPagination(){
            return array.pagination(this.allPages, this.currentPage, 3)
        },
        // resultQuery(){
        //     if(this.searchQuery){
        //         return this.filteredEntries.filter(())
        //     }
        // }
    },
    created(){
        this.getAllPatientList().then(res =>{
            this.entries = res.data
            // this.filteredEntri es = array.paginate(this.entries)(1, this.currentEntries)
            this.filteredEntries = $array.paginate(this.entries, this.currentPage, this.currentEntries)
            this.allPages = array.paginate(this.entries, this.currentEntries)
        })
        
    },
    methods: {
        async getAllPatientList() {
            const response = await axios.get('http://192.168.7.66:8040/api/cancerPatientList')
            // return response.json()
            return response
        },
        paginateEntries(){
            if(this.searchInput.length >= 3){
                this.searchEntries = $array.search(this.searchEntries)(this.entries)
                this.filteredEntries = $array.paginate(this.searchEntries, this.currentPage, this.currentEntries)
                this.allPages = array.paginate(this.searchEntries, this.currentEntries)
            }else{
                this.searchEntries =[]
                this.filteredEntries = $array.paginate(this.entries, this.currentPage, this.currentEntries)
                this.allPages = array.paginate(this.entries, this.currentEntries)
            }   
            // this.filteredEntries = array.paginate(this.entries)(1, this.currentEntries)
            // this.filteredEntries = $array.paginate(this.entries, this.currentPage, this.currentEntries)
        },
        paginateEvent(pagi) {
            this.currentPage = pagi
            this.paginateEntries()
        },
        searchEvent() {
            this.currentPage = 1
            this.paginateEntries()
        }
    }
    //   methods: {
//     // update async
//     async cancerPatientList() {
//       let a = await axios.get('http://192.168.7.188:8040/api/cancerPatientList')
//       this.patient = a.data
//       console.log("xxx", this.patient[0])
//     }
}

</script>