<template>
<!-- <head>
  <link rel="stylesheet" href="css/style.css">
  <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
  <title>Sign in</title>
</head> -->
  <!-- <router-view></router-view> -->
  <div class="main">
    <img class="bghlogo" src="../assets/bghmc-logo.png" alt="">
    <p class="sign">Cancer Registry</p>
    <v-form @submit="login" class="form1">
      <div>
        <input class="un " v-model="this.taskStore.username" type="text" placeholder="HOMIS">
        <input class="pass" @keyup.enter="login" v-model="this.taskStore.password" type="password" placeholder="Password">
      </div>
      <div>
        <v-btn type="submit" v-on:click="login" class="submit">Sign in</v-btn>
        
        <!-- <router-link to="/"><a v-on:click="login" class="submit">Sign in</a></router-link> -->
      </div>
    </v-form>       
  </div>
</template>
<script>
// import { reactive } from '@vue/reactivity'
import axios from 'axios'
import setAuthHeader from '@/utils/setAuthHeader';
import { useTaskStore } from '../store/TaskStore'

export default{
  setup(){
        const taskStore = useTaskStore()
        return { taskStore }
      },
// ---------------------------------
  data() {
    return{
      form:{
        username:'',
        password:'',
      },
      status:'',
      loading: false,
      
    }
  },
  methods: {

    async login(){
      const account = {
        username:this.taskStore.username,
        password:this.taskStore.password
      };
      this.loading = true;

      let res = await this.taskStore.login
      console.log(res.status)
      // let res = await axios
      //       .post('http://192.168.7.188:8040/api/login', account)
      //       // .then(res=>{
      //       //   this.loading=false;
      //       // })
      //       .catch(function (error) {
      //                 console.log(error.toJSON());
      //                 alert(error);
      //                 // alert("Something is wrong, please try again later")
      //               });

                    
            if(res.status==200){
              // alert(res.status)
              localStorage.setItem('Token', res.data)
              this.$router.push({name:'Dashboard'})
              localStorage.setItem('userName', this.taskStore.username);
            }


    }




    //   login(){
    //   // console.log(this.form.username)
    //   const account = {
    //     username:this.form.username,
    //     password:this.form.password
    //   };
    //   axios
    //         .post('http://192.168.7.188:8040/api/login', account)
    //         .then(response =>{
    //           console.log(response.status)
    //           document.cookie =`Token =${response.data}`,
    //           localStorage.setItem('Token', response.data)
    //           setAuthHeader(response.data)
    //         })
    //         .catch(function (error) {
    //                   console.log(error.toJSON());
    //                 });
    // }
    // -----------------------------------


    // handleSubmit(){
    //   this.$emit('submitted', this.form.username)
    //   console.log('asdfsda')
    // },
    // submitButton(){
    //   console.log('Submit')
    // },

  },
  mounted(){
    let user = localStorage.getItem('Token');
    if(user){
      this.$router.push({name:'Dashboard'})
    }
  }
}
</script>
<style>
        body {
        background-color: #ffffff;
        font-family: 'Ubuntu', sans-serif;
    }
    
    .main {
        background-color: #FFFFFF;
        width: 400px;
        height: 400px;
        margin: 7em auto;
        border-radius: 1.5em;
        box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
        
    }
    .bghlogo{
        width: 150px;
        height: 150px;
        margin-left: -75px;
        margin-top: -75px;
        position: fixed;
    }
    
    .sign {
        padding-top: 100px;
        color: #0630f0;
        font-family: 'Ubuntu', sans-serif;
        font-weight: bold;
        font-size: 23px;
        margin-top: 30px;
    }
    
    .un {
    width: 76%;
    color: rgb(38, 50, 56);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    background: rgba(136, 126, 126, 0.04);
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.02);
    /* margin-bottom: 30px; */
    /* margin-left: 46px; */
    text-align: center;
    margin-bottom: 27px;
    font-family: 'Ubuntu', sans-serif;
    }
    
    form.form1 {
        padding-top: 20px;
        margin: auto;
    }
    
    .pass {
    width: 76%;
    color: rgb(38, 50, 56);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    background: rgba(136, 126, 126, 0.04);
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.02);
    margin-bottom: 50px;
    /* margin-left: 46px; */
    text-align: center;
    margin-bottom: 27px;
    font-family: 'Ubuntu', sans-serif;
    }
    
   
    .un:focus, .pass:focus {
        border: 2px solid rgba(0, 0, 0, 0.18) !important;
        
    }
    
    .submit {
      cursor: pointer;
        border-radius: 5em;
        color: #fff;
        background: #47b027;
        border: 0;
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 10px;
        padding-top: 10px;
        font-family: 'Ubuntu', sans-serif;
        margin-left: auto;
        font-size: 13px;
        box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);

    }
  .submit:hover {background-color: #3a9120}
    
    .forgot {
        text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
        color: #E1BEE7;
        padding-top: 15px;
    }
    
    a {
        text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
        color: #E1BEE7;
        text-decoration: none
    }
    
    @media (max-width: 600px) {
        .main {
            border-radius: 0px;
        }
    }
</style>