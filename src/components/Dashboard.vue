<template>
  <div class="container-fluid">
      <div class="container">
        <div class="row mb-3">
          <div class="col">
            <div class="h-100 bg-white shadow mt-4 rounded">
              <div class="d-flex p-2">
                <div class="ms-5">
                  <!-- <LineGraph name="chartVol" endpoint="chemoVolPerYear" title="Volume /Year"/> -->
                  <!-- <Census endpoint="chemoVolPerYear" title="Volume /Year" name="chartVol"/> -->
                  <CensusWeeklyPerSite/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col" style="height: 900px;">
            <div>
              <div class="h-100 bg-white shadow mt-4 rounded">
                <div class="d-flex p-2">
                  <div class="ms-5">
                    <!-- <LineGraph name="chartVol" endpoint="chemoVolPerYear" title="Volume /Year"/> -->
                    <Census endpoint="chemoVolPerYear" title="Volume /Year" name="chartVol"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col" style="height:900px;">
            <div>
              <div class="h-100 bg-white shadow mt-4 rounded">
                <div class="d-flex p-">
                  <div class="ms-5 ">
                    <!-- <LineGraph name="chartPatient" endpoint="newOldCancerPatientsPerYear" title="Patient /Year"/> -->
                    <Census endpoint="newOldCancerPatientsPerYear" title="Patient /Year" name="chartPatient"/>
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
import Census from './Census.vue';
import LineGraph from '../view/Charts/Bar_Graph.vue'
import CensusWeeklyPerSite from './CensusWeeklyPerSite.vue'
export default {
  name: 'Dashboard',
  components: {
    Census,
    LineGraph,
    CensusWeeklyPerSite
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