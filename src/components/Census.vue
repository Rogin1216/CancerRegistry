<template>
    <div class="container-fluid ">
        <div class="row">
            <div class="d-flex align-items-center">
                <div class="p-2"><input class="form-control" type="text" v-model="yearinput" placeholder="Year"></div>
                <div class="p-2"><button @click="fetch" class="btn btn-success">Go</button></div>
            </div>
        </div>
        <div class="col">
            <div class="border">
                <BarGraph :key="yearprops" :name="name" :endpoint="endpoint" :title="title" :year="this.yearprops"/>
            </div>
        </div>
        <div class="col">
            
            <div class="row">
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Jan</th>
                                <th>Feb</th>
                                <th>March</th>
                                <th>April</th>
                                <th>May</th>
                                <th>June</th>
                                <th>July</th>
                                <th>Aug</th>
                                <th>Sept</th>
                                <th>Oct</th>
                                <th>Nov</th>
                                <th>Dec</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in ChemoVolResult" :key="data">
                                <td>{{data.type}}</td>
                                <td>{{data.January}}</td>
                                <td>{{data.February}}</td>
                                <td>{{data.March}}</td>
                                <td>{{data.April}}</td>
                                <td>{{data.May}}</td>
                                <td>{{data.June}}</td>
                                <td>{{data.July}}</td>
                                <td>{{data.August}}</td>
                                <td>{{data.September}}</td>
                                <td>{{data.October}}</td>
                                <td>{{data.November}}</td>
                                <td>{{data.December}}</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
            
        </div>
        
    </div>
</template>
<script>
import BarGraph from '../view/Charts/Bar_Graph.vue'

import axios from 'axios';
    export default{
        name: 'Child',
        components:{
    BarGraph
},
        props:[
            'title',
            'endpoint',
            'name'
    ],
        data(){
            return{
                ChemoVolResult: [],
                yearinput:2022,
                yearprops:2021,
                hpercode:'000000000434482',
                patinfo:[],
                awesome:true,

            }
        },
    methods:{
        async fetch() {
            this.yearprops = this.yearinput
            // console.log("YEAR ", this.yearprops)

            const chemoVolYear = {
                year:this.yearprops
            }
            // console.log("YEAR ", chemoVolYear)
            const response = await axios.post(`http://192.168.7.66:8040/api/${this.endpoint}`, chemoVolYear)
            // console.log("endpoint:",this.endpoint)
            //console.log(response.data);
            this.ChemoVolResult = JSON.parse(JSON.stringify(response.data))
            // console.log("input: ",this.ChemoVolResult)
            // console.log("YEAR ", this.chemoVolYear[0])
            return JSON.parse(JSON.stringify(response.data))
        },
    },
    mounted(){
        this.fetch()
    }
    }
</script>