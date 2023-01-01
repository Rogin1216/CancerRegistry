<template>
    <div class="container-fluid">
        <div class="row">
            <div class="d-flex align-items-center">
                <div class="p-2"><input class="form-control" type="text" v-model="year"></div>
                <div class="p-2">
                    <select class="form-select" name="" id="" v-model="month">
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                    <!-- <select  class="form-select" name="" id="" v-model="month">
                        <option ></option>
                        
                    </select> -->
                </div>
                <div class="p-2">
                    <select class="form-select" name="" id="" v-model="week">
                        <option value=""></option>
                        <option value="1">week 1</option>
                        <option value="2">week 2</option>
                        <option value="3">week 3</option>
                        <option value="4">week 4</option>
                    </select>
                </div>
                <div class="p-2"><button @click="fetch" class="btn btn-success">Go</button></div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <!-- <BarGraphCensus :key="yearprops" :key="week" :year="this.yearprops" :month="this.month" :week="this.week"/> -->
                <BarGraphCensus :key="(yearprops, monthsprops)" :year="this.yearprops" :months="this.month" :week="this.week"/>
            </div>
        </div>
        <div class="row">
            <div id="tableID">
                <table class="table table-sm">
                    <thead>
                        <tr id="td">
                            <th>Month</th>
                            <th>Week</th>
                            <th>Anal</th>
                            <th>Bone</th>
                            <th>Breast</th>
                            <th>Cervical</th>
                            <th>Colon</th>
                            <th>Esophagal</th>
                            <th>Gastric</th>
                            <th>Head and Neck</th>
                            <th>Hepatobiliary</th>
                            <th>Kidney</th>
                            <th>Neuroendocrine</th>
                            <th>Lung NSCLC</th>
                            <th>Lung SCLC</th>
                            <th>Ovarian</th>
                            <th>Pancreatic</th>
                            <th>Prostate</th>
                            <th>Rectal</th>
                            <th>Skin</th>
                            <th>Soft Tissue</th>
                            <th>Testis</th>
                            <th>Thyroid</th>
                            <th>Urinary Bladder</th>
                            <th>Uterine</th>
                            <th>Others</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr v-for="data in resultQuery" :key="data">
                            
                            <td>{{data.monthdesc}}</td>
                            <td>{{data.week}}</td>
                            <td>{{data.ANAL}}</td>
                            <td>{{data.BONE}}</td>
                            <td>{{data.BREAST}}</td>
                            <td>{{data.CERVICAL}}</td>
                            <td>{{data.COLON}}</td>
                            <td>{{data.ESOPHAGAL}}</td>
                            <td>{{data.GASTRIC}}</td>
                            <td></td>
                            <td>{{data.HEPATOBILIARY}}</td>
                            <td>{{data.KIDNEY}}</td>
                            <td>{{data.NEUROENDOCRINE}}</td>
                            <td></td>
                            <td></td>
                            <td>{{data.OVARIAN}}</td>
                            <td>{{data.PANCREATIC}}</td>
                            <td>{{data.PROSTRATE}}</td>
                            <td>{{data.RECTAL}}</td>
                            <td>{{data.SKIN}}</td>
                            <td></td>
                            <td>{{data.TESTIS}}</td>
                            <td>{{data.THYROID}}</td>
                            <td></td>
                            <td>{{data.UTERINE}}</td>
                            <td>{{data.OTHERS}}</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import BarGraphCensus from '../view/Charts/Bar_GraphWeekly.vue'
import axios from 'axios'

export default{
    components:{
        BarGraphCensus
    },
    data(){
        return{
            year: '2022',
            yearprops: 2022,
            monthsprops: 'January',
            month: 'January',
            week: '',
            WeeklyResult: []
        }
    },
    computed:{
        resultQuery(){
            if(this.year){
                return this.WeeklyResult.filter((data)=>{
                    const yearRes =  this.year.toLowerCase().split(' ').every(v => data.year.toLowerCase().includes(v))
                    const monthRes =  this.month.toLowerCase().split(' ').every(v => data.monthdesc.toLowerCase().includes(v))
                    const weekRes =  this.week.toLowerCase().split(' ').every(v => data.week.toLowerCase().includes(v))
                    // return this.month.toLowerCase().split(' ').every(v => data.monthdesc.toLowerCase().includes(v))
                    return yearRes && monthRes && weekRes
                })
            }
        }
    },
    // created(){
    //     this.fetch()
    // },
    methods:{
        async fetch(){
            this.yearprops = this.year
            this.monthsprops = this.month
            const yearnow = {year:this.year}
            const response = await axios.post('http://192.168.7.66:8040/api/weeklyCensusPerSite', yearnow)
            this.WeeklyResult = JSON.parse(JSON.stringify(response.data))
            return JSON.parse(JSON.stringify(response.data))
        }
    },
    getKey(yearprops,monthsprops){
        yearprops = this.yearprops;
        monthsprops = this.monthsprops;
        return yearprops && monthsprops
    },
    mounted(){
        this.fetch()
    }
}
</script>
<style>
#td{
    font-size: 10px;
}
#tableID{
    overflow-x: 100px;
}
</style>