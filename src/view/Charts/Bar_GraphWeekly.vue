<template>
    <div>
        <div class="chart-container" style="display: inline-block; width: 60%; height: 10%;">
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
        // months: [],
        yearNow: this.year,
        row1: [],
        row2: [],
        temp: {},
      };
    },
    props: ["months", "year"],
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
        const yearnow = {
          year: this.yearNow,
        //   year: 2021,
        
        };
        // console.log(chemoVolYear)
        const res = await axios
          .post('http://192.168.7.66:8040/api/weeklyCensusPerSite',  yearnow)
          //.then((res) => {
            //temp = JSON.parse(JSON.stringify(res.data));
            return this.arrayedObject(JSON.parse(JSON.stringify(res.data)));
            // return console.log(this.arrayedObject(JSON.parse(JSON.stringify(res.data))));
        //   });
  
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
        // data per week <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        const arrKeys = Object.keys(obj2[1]);
          
        if(this.months=='January'){
                const arrValues1 = arrKeys.map((arrItem) => {      
            return obj2[0][arrItem]
            });
            // console.log(arrValues1);
            const arrValues2 = arrKeys.map((arrItem) => {
            return obj2[1][arrItem]
            });
            const arrValues3 = arrKeys.map((arrItem) => {
            return obj2[2][arrItem]
            });
            const arrValues4 = arrKeys.map((arrItem) => {
            return obj2[3][arrItem]
            });

            const arrType = []
            arrType.push(arrValues1[0], arrValues2[0], arrValues3[0], arrValues4[0]) 
            arrKeys.splice(0, 2);
            arrValues1.splice(0, 2);
            arrValues2.splice(0, 2);
            arrValues3.splice(0, 2);
            arrValues4.splice(0, 2);
            return [arrKeys, arrValues1, arrValues2, arrValues3, arrValues4, arrType];


        }
        else if(this.months=='February'){
            const arrValues1 = arrKeys.map((arrItem) => {      
          return obj2[4][arrItem]
        });
        // console.log(arrValues1);
        const arrValues2 = arrKeys.map((arrItem) => {
          return obj2[5][arrItem]
        });
        const arrValues3 = arrKeys.map((arrItem) => {
          return obj2[6][arrItem]
        });
        const arrValues4 = arrKeys.map((arrItem) => {
          return obj2[7][arrItem]
        });

        const arrType = []
        arrType.push(arrValues1[0], arrValues2[0], arrValues3[0], arrValues4[0]) 
        arrKeys.splice(0, 2);
        arrValues1.splice(0, 2);
        arrValues2.splice(0, 2);
        arrValues3.splice(0, 2);
        arrValues4.splice(0, 2);
        return [arrKeys, arrValues1, arrValues2, arrValues3, arrValues4, arrType];
        }
        else if(this.months=='March'){
            const arrValues1 = arrKeys.map((arrItem) => {      
          return obj2[8][arrItem]
        });
        // console.log(arrValues1);
        const arrValues2 = arrKeys.map((arrItem) => {
          return obj2[9][arrItem]
        });
        const arrValues3 = arrKeys.map((arrItem) => {
          return obj2[10][arrItem]
        });
        const arrValues4 = arrKeys.map((arrItem) => {
          return obj2[11][arrItem]
        });

        const arrType = []
        arrType.push(arrValues1[0], arrValues2[0], arrValues3[0], arrValues4[0]) 
        arrKeys.splice(0, 2);
        arrValues1.splice(0, 2);
        arrValues2.splice(0, 2);
        arrValues3.splice(0, 2);
        arrValues4.splice(0, 2);
        return [arrKeys, arrValues1, arrValues2, arrValues3, arrValues4, arrType];
        }
        else if(this.months=='April'){
            const arrValues1 = arrKeys.map((arrItem) => {      
          return obj2[12][arrItem]
        });
        // console.log(arrValues1);
        const arrValues2 = arrKeys.map((arrItem) => {
          return obj2[13][arrItem]
        });
        const arrValues3 = arrKeys.map((arrItem) => {
          return obj2[14][arrItem]
        });
        const arrValues4 = arrKeys.map((arrItem) => {
          return obj2[15][arrItem]
        });

        const arrType = []
        arrType.push(arrValues1[0], arrValues2[0], arrValues3[0], arrValues4[0]) 
        arrKeys.splice(0, 2);
        arrValues1.splice(0, 2);
        arrValues2.splice(0, 2);
        arrValues3.splice(0, 2);
        arrValues4.splice(0, 2);
        return [arrKeys, arrValues1, arrValues2, arrValues3, arrValues4, arrType];
        }
        else if(this.months=='May'){
            const arrValues1 = arrKeys.map((arrItem) => {      
          return obj2[16][arrItem]
        });
        // console.log(arrValues1);
        const arrValues2 = arrKeys.map((arrItem) => {
          return obj2[17][arrItem]
        });
        const arrValues3 = arrKeys.map((arrItem) => {
          return obj2[18][arrItem]
        });
        const arrValues4 = arrKeys.map((arrItem) => {
          return obj2[19][arrItem]
        });

        const arrType = []
        arrType.push(arrValues1[0], arrValues2[0], arrValues3[0], arrValues4[0]) 
        arrKeys.splice(0, 2);
        arrValues1.splice(0, 2);
        arrValues2.splice(0, 2);
        arrValues3.splice(0, 2);
        arrValues4.splice(0, 2);
        return [arrKeys, arrValues1, arrValues2, arrValues3, arrValues4, arrType];
        }
        else if(this.months=='June'){
            const arrValues1 = arrKeys.map((arrItem) => {      
          return obj2[20][arrItem]
        });
        // console.log(arrValues1);
        const arrValues2 = arrKeys.map((arrItem) => {
          return obj2[21][arrItem]
        });
        const arrValues3 = arrKeys.map((arrItem) => {
          return obj2[22][arrItem]
        });
        const arrValues4 = arrKeys.map((arrItem) => {
          return obj2[23][arrItem]
        });

        const arrType = []
        arrType.push(arrValues1[0], arrValues2[0], arrValues3[0], arrValues4[0]) 
        arrKeys.splice(0, 2);
        arrValues1.splice(0, 2);
        arrValues2.splice(0, 2);
        arrValues3.splice(0, 2);
        arrValues4.splice(0, 2);
        return [arrKeys, arrValues1, arrValues2, arrValues3, arrValues4, arrType];
        }
        else if(this.months=='July'){
            const arrValues1 = arrKeys.map((arrItem) => {      
          return obj2[24][arrItem]
        });
        // console.log(arrValues1);
        const arrValues2 = arrKeys.map((arrItem) => {
          return obj2[25][arrItem]
        });
        const arrValues3 = arrKeys.map((arrItem) => {
          return obj2[26][arrItem]
        });
        const arrValues4 = arrKeys.map((arrItem) => {
          return obj2[27][arrItem]
        });

        const arrType = []
        arrType.push(arrValues1[0], arrValues2[0], arrValues3[0], arrValues4[0]) 
        arrKeys.splice(0, 2);
        arrValues1.splice(0, 2);
        arrValues2.splice(0, 2);
        arrValues3.splice(0, 2);
        arrValues4.splice(0, 2);
        return [arrKeys, arrValues1, arrValues2, arrValues3, arrValues4, arrType];
        }
        else if(this.months=='August'){
            const arrValues1 = arrKeys.map((arrItem) => {      
          return obj2[28][arrItem]
        });
        // console.log(arrValues1);
        const arrValues2 = arrKeys.map((arrItem) => {
          return obj2[29][arrItem]
        });
        const arrValues3 = arrKeys.map((arrItem) => {
          return obj2[31][arrItem]
        });
        const arrValues4 = arrKeys.map((arrItem) => {
          return obj2[32][arrItem]
        });

        const arrType = []
        arrType.push(arrValues1[0], arrValues2[0], arrValues3[0], arrValues4[0]) 
        arrKeys.splice(0, 2);
        arrValues1.splice(0, 2);
        arrValues2.splice(0, 2);
        arrValues3.splice(0, 2);
        arrValues4.splice(0, 2);
        return [arrKeys, arrValues1, arrValues2, arrValues3, arrValues4, arrType];
        }
        else if(this.months=='September'){
            const arrValues1 = arrKeys.map((arrItem) => {      
          return obj2[33][arrItem]
        });
        // console.log(arrValues1);
        const arrValues2 = arrKeys.map((arrItem) => {
          return obj2[34][arrItem]
        });
        const arrValues3 = arrKeys.map((arrItem) => {
          return obj2[35][arrItem]
        });
        const arrValues4 = arrKeys.map((arrItem) => {
          return obj2[36][arrItem]
        });

        const arrType = []
        arrType.push(arrValues1[0], arrValues2[0], arrValues3[0], arrValues4[0]) 
        arrKeys.splice(0, 2);
        arrValues1.splice(0, 2);
        arrValues2.splice(0, 2);
        arrValues3.splice(0, 2);
        arrValues4.splice(0, 2);
        return [arrKeys, arrValues1, arrValues2, arrValues3, arrValues4, arrType];
        }
        else if(this.months=='October'){
            const arrValues1 = arrKeys.map((arrItem) => {      
          return obj2[37][arrItem]
        });
        // console.log(arrValues1);
        const arrValues2 = arrKeys.map((arrItem) => {
          return obj2[38][arrItem]
        });
        const arrValues3 = arrKeys.map((arrItem) => {
          return obj2[39][arrItem]
        });
        const arrValues4 = arrKeys.map((arrItem) => {
          return obj2[40][arrItem]
        });

        const arrType = []
        arrType.push(arrValues1[0], arrValues2[0], arrValues3[0], arrValues4[0]) 
        arrKeys.splice(0, 2);
        arrValues1.splice(0, 2);
        arrValues2.splice(0, 2);
        arrValues3.splice(0, 2);
        arrValues4.splice(0, 2);
        return [arrKeys, arrValues1, arrValues2, arrValues3, arrValues4, arrType];
        }
        else if(this.months=='November'){
            const arrValues1 = arrKeys.map((arrItem) => {      
          return obj2[41][arrItem]
        });
        // console.log(arrValues1);
        const arrValues2 = arrKeys.map((arrItem) => {
          return obj2[42][arrItem]
        });
        const arrValues3 = arrKeys.map((arrItem) => {
          return obj2[43][arrItem]
        });
        const arrValues4 = arrKeys.map((arrItem) => {
          return obj2[44][arrItem]
        });

        const arrType = []
        arrType.push(arrValues1[0], arrValues2[0], arrValues3[0], arrValues4[0]) 
        arrKeys.splice(0, 2);
        arrValues1.splice(0, 2);
        arrValues2.splice(0, 2);
        arrValues3.splice(0, 2);
        arrValues4.splice(0, 2);
        return [arrKeys, arrValues1, arrValues2, arrValues3, arrValues4, arrType];
        }
        else if(this.months=='December'){
            const arrValues1 = arrKeys.map((arrItem) => {      
          return obj2[45][arrItem]
        });
        // console.log(arrValues1);
        const arrValues2 = arrKeys.map((arrItem) => {
          return obj2[46][arrItem]
        });
        const arrValues3 = arrKeys.map((arrItem) => {
          return obj2[47][arrItem]
        });
        const arrValues4 = arrKeys.map((arrItem) => {
          return obj2[48][arrItem]
        });

        const arrType = []
        arrType.push(arrValues1[0], arrValues2[0], arrValues3[0], arrValues4[0]) 
        arrKeys.splice(0, 2);
        arrValues1.splice(0, 2);
        arrValues2.splice(0, 2);
        arrValues3.splice(0, 2);
        arrValues4.splice(0, 2);
        return [arrKeys, arrValues1, arrValues2, arrValues3, arrValues4, arrType];
        }
      },
      
      async drawChart(arrayFinal) {
        
        
        const chartArrayData = await this.chartData();
  
        // console.log("arraydata", chartArrayData);
        
        //  console.log("drawChart");
        // console.log(this.row1[0]);
        const ctx = document.getElementById(this.componentID);
        //   console.log(labels);
        const labels = chartArrayData[0]

        // const datasets = [
        //     {
        //       axis: 'y',
        //       label: "Week " + chartArrayData[1][1],
        //       data: chartArrayData[1],
        //       backgroundColor: ["rgb(0, 255, 20)"],
        //       borderColor: ["rgb(0, 255, 20)"],
        //       borderWidth: 1,
        //     },
        // ]
        // if(chartArrayData==null){
        //     datasets.push({
        //         label: "Week " + chartArrayData[2][1],
        //       data: chartArrayData[2],
        //       backgroundColor: ["rgb(0, 0, 255)"],
        //       borderColor: ["rgb(0, 0, 255)"],
        //       borderWidth: 1,
        //     })
        // }
  
        const data = {
          labels: labels,
        //   datasets: datasets,
          datasets: 
          [

            {
                axis: 'y',
              label: "Week " + chartArrayData[1][1],
              data: chartArrayData[1],
              backgroundColor: ["rgb(0, 255, 20)"],
              borderColor: ["rgb(0, 255, 20)"],
              borderWidth: 1,
            },
            {
                axis: 'y',
              label: "Week " + chartArrayData[2][1],
              data: chartArrayData[2],
              backgroundColor: ["rgb(0, 0, 255)"],
              borderColor: ["rgb(0, 0, 255)"],
              borderWidth: 1,
            },
            {
                axis: 'y',
              label: "Week " + chartArrayData[3][1],
              data: chartArrayData[3],
              backgroundColor: ["rgb(255, 165, 0)"],
              borderColor: ["rgb(255, 165, 0)"],
              borderWidth: 1,
            },
            {
                axis: 'y',
              label: "Week " + chartArrayData[4][1],
              data: chartArrayData[4],
              backgroundColor: ["rgb(255, 0, 0)"],
              borderColor: ["rgb(255, 0, 0)"],
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
            indexAxis:'y',
            // scales: {
            //   y: {
            //     beginAtZero: true,
            //   },
            // },
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