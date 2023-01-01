<template>
    <div class="m-3">
        <h3>Cancer Patient List</h3>
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th v-for="(col, ind) in columns" :key="ind" scope="col">{{ col.text }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(entry, index) in entries" :key="index">
                    <td>{{ entry.hpercode }}</td>
                    <td>{{ entry.patlast }}, {{ entry.patfirst }} {{ entry.patmiddle }}</td>
                    <!-- <td v-for="(column, ind) in columns" :key="ind">{{ entry[column.patfirst] }}</td> -->
                </tr>
            </tbody>
        </table>
    </div>

</template>
<script>
import axios from 'axios'
export default {
    data() {
        return{
            entries:[]
        }
    },
    created(){
        this.getAllPatientList().then(res =>{
            this.entries = res.data
        })
    },
    methods:{
        async getAllPatientList(){
            const response = await axios.get('http://192.168.7.66:8040/api/cancerPatientList')
            // return response.json()
            return response
        }
    }
}
</script>