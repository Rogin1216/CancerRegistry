<template>
    <div>
        <div class="">
            <span>Show # of entries:</span>
            <select v-model="currentEntries" @change="paginateEntries">
                <option v-for="se in showEntries" :key="se" :value="se">{{se}}</option>
            </select>
            <!-- <span> entries</span> -->
        </div>

        <div class="search-wrapper panel-heading col-sm-2">
            <input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
        </div> 

        <div>
            <table class="table table-sm table-responsive-sm table-bordered">
            <thead> 
                <tr>
                    <th v-for="th in tableHeader" :key="th">
                        <div>
                        <span>{{th.text}}</span>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="td in table" :key="td">
                    <td>{{td.patlast}}</td>
                </tr>
                <!-- <tr v-for="td in tableData" :key="td">
                    <td>{{td.hpercode}}</td>
                    <td>{{td.patlast}}, {{td.patfirst}} {{td.patmiddle}}</td>
                    <td>{{td.patsex}}</td>
                    <td>{{td.tsdesc}}</td>
                </tr> -->
            </tbody>
        </table>
        </div>
    </div>
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
            searchTerm: ""
        }
    },
    components: {
        patListTBL
    },
    computed: {
        showPagination(){
            return array.pagination(this.allPages, this.currentPage, 3)
        },
        table(){
            if(this.searchQuery){
                return this.entries.filter((td)=>{
                    return this.searchQuery.toLowerCase().split(' ').every(v => td.patlast.toLowerCase().includes(v))
                })
            }else{
                return this.entries;
            }
        },
        tableData(){
            return this.entries || []
        },
        tableHeader(){
            return this.columns || []
        }
    },
    created(){
        this.getAllPatientList().then(res =>{
            this.entries = res.data
            // this.filteredEntries = array.paginate(this.entries)(1, this.currentEntries)
            this.filteredEntries = $array.paginate(this.entries, this.currentPage, this.currentEntries)
            this.allPages = array.paginate(this.entries, this.currentEntries)
        })
        
    },
    methods: {
        async getAllPatientList() {
            const response = await axios.get('http://192.168.7.188:8040/api/cancerPatientList')
            // return response.json()
            return response
        },
        paginateEntries(){
            // this.filteredEntries = array.paginate(this.entries)(1, this.currentEntries)
            this.filteredEntries = $array.paginate(this.entries, this.currentPage, this.currentEntries)
        },
        paginateEvent(pagi) {
            this.currentPage = pagi
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