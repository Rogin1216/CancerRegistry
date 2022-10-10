<template>
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
            <tr v-for="td in tableData" :key="td">
                <td>{{td.hpercode}}</td>
                <td>{{td.patlast}}, {{td.patfirst}} {{td.patmiddle}}</td>
                <!-- <td>{{td.patlast}}</td> -->
                <td>{{td.patsex}}</td>
                <td>{{td.tsdesc}}</td>
             </tr>
        </tbody>
    </table>
</template>
<script>
import axios from 'axios'
export default{
    name:'table',
    props: {
        entries: Array,
        columns: Array
    },
    computed: {
        tableData(){
            return this.entries || []
        },
        tableHeader(){
            return this.columns || []
        }
    }
//     data () {
//     return {
//       patient:[]
//     }
//   },

//   methods: {
//     // update async
//     async cancerPatientList() {
//       let a = await axios.get('http://192.168.7.188:8040/api/cancerPatientList')
//       this.patient = a.data
//       console.log("xxx", this.patient[0])
//     }

  }
    // mounted() {
    //   this.cancerPatientList()
    //   let xxx = axios.get('http://192.168.7.188:8040/api/cancerPatientList').then(response => {this.patient = response.data})
    //   console.log(this.xxx)
    // axios
    //   .get('http://192.168.7.188:8040/api/cancerPatientList')
    //   .then(response => {
    //       this.patient = response.data
    //       console.log(this.patient)
    //     // console.log('PATIENT_LIST')
    //   })
      // .then(response => {
      //   console.log(response.data[0])
      // })
    //   .then(() => this.patient.data.forEach(element => {
    // }))
      // console.log(this.patient)
//   }
// }
</script>