<template>
  <div>
    <div style="position: relative; height:33em; width:30em">
      <b>{{ title }}</b>
      <canvas :id="componentID" width="1" height="1"></canvas>
    </div>
  </div>
</template>
<script>
import { DOMDirectiveTransforms } from "@vue/compiler-dom";
import axios from "axios";
import Chart from "chart.js/auto";
import { array } from "alga-js";
export default {
  data() {
    return {
      chartResult: [],
      finalData: [],
      months: [],
      yearNow: this.year,
      row1: [],
      row2: [],
      temp: {},
    };
  },
  props: ["name", "endpoint", "title", "year"],
  computed: {
    componentID() {
      return Math.random()
        .toString(36)
        .replace("0.", this.name || "");
    },
  },
  methods: {
    async chartData() {
      //   console.log("chartData 1st");
      //console.log("yearnow: ",this.yearNow)
      let temp = {};
      const chemoVolYear = {
        year: this.yearNow,
      };
      // console.log(chemoVolYear)
      const res = await axios
        .post(`http://192.168.7.66:8040/api/${this.endpoint}`,  chemoVolYear)
        //.then((res) => {
          //temp = JSON.parse(JSON.stringify(res.data));
          return this.arrayedObject(JSON.parse(JSON.stringify(res.data)));
        //});

    },
    // chartDataArray(responseobj) {
    //   const arrayKey = [];
    //   const arrayValue = [];
    //   let arrayFinal = [];
    //   // console.log(this.row1[0]);
    //   //chartFirstRow = responseobj
    //   for (var key of Object.keys(responseobj)) {
    //     arrayKey.push(key);
    //     arrayValue.push(responseobj[key]);
    //   }
    //   //console.log(arrayKey);
    //   //console.log(arrayValue);
    //   arrayKey.splice(0, 2);
    //   arrayValue.splice(0, 2);
    //   arrayFinal = [arrayKey, arrayValue];
    //   //console.log(arrayFinal);
    //   return [arrayKey, arrayValue];
    // },

    arrayedObject(obj2) {
      const arrKeys = Object.keys(obj2[0]);
        
      const arrValues1 = arrKeys.map((arrItem) => {      
        return obj2[0][arrItem]
      });
      // console.log(arrValues1);
      const arrValues2 = arrKeys.map((arrItem) => {
        return obj2[1][arrItem]
      });
      const arrType = []
      arrType.push(arrValues1[0], arrValues2[0]) 
      arrKeys.splice(0, 2);
      arrValues1.splice(0, 2);
      arrValues2.splice(0, 2);
      //   const arrayedObject = [arrKeys, arrValues1, arrValues2];

      //   return arrayedObject;
      return [arrKeys, arrValues1, arrValues2, arrType];
    },
    
    async drawChart(arrayFinal) {
      
      
      const chartArrayData = await this.chartData();

      // console.log("arraydata", chartArrayData);
      
      //  console.log("drawChart");
      // console.log(this.row1[0]);
      const ctx = document.getElementById(this.componentID);
      //   console.log(labels);
      const labels = chartArrayData[0]

      const data = {
        labels: labels,
        datasets: [
          {
            
            label: chartArrayData[3][0],
            data: chartArrayData[1],
            backgroundColor: ["rgb(255, 99, 132)"],
            borderColor: ["rgb(255, 99, 132)"],
            borderWidth: 1,
          },
          {
            label: chartArrayData[3][1],
            data: chartArrayData[2],
            backgroundColor: ["rgba(9, 104, 234 )"],
            borderColor: ["rgba(9, 104, 234 )"],
            borderWidth: 1,
          },
        ],
      };
      let chartStatus = Chart.getChart("myChart");
      if (chartStatus != undefined) {
        chartStatus.destroy();
      }

      const myChart = new Chart(ctx, {
        type: "bar",
        data: data,
        options: {
          
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          maintainAspectRatio:{
            boolean:true
          }
        },
      });
    },
  },
  mounted() {
    this.drawChart();
  },

};
</script>