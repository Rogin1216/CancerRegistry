<template>
<div class="container-fluid">
  <!-- <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px;"> -->
  <div id="wrapper">
    <ul class="navbar-nav bg-gradient-primary sidebar bg-dark" style="width:250px; height:100%;">
      <div id="logobg">
        <a href="" ><img src="../assets/bghmc-banner.png" alt="" id="bghmclogo"></a>
      </div>
      <div id="username">
        <label for=""><small><h6><i>{{this.taskStore.localUser}}</i></h6></small></label>
      </div>
      <div class="sidebar-nav">
        
        
        <router-link to="/Dashboard"><li>Dashboard</li></router-link>
        <router-link to="/SearchPatient"><li>Search For Patient</li></router-link>
        <router-link to="/Lists"><li>Lists of Cancer Patient
            
        </li></router-link>
        <router-link to="/"><li v-on:click="logout" style="color:#FF0000; bottom:0px;">Logout</li></router-link>
        <!-- <router-link to="/SearchPatient"><li><a href="#" class="active">Patient List</a></li></router-link> -->
        <!-- <li class="updateTab"><small>Update</small> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg></li> -->
      </div>
    </ul>
  </div>
  <div id="content">
    <!-- <div class="updateNews">news</div> -->
    <router-view ></router-view>
  </div>

</div>

    <!-- <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li>
                    <router-link to="/Dashboard/patienttable"><a href="#" class="active">Dashboard</a></router-link>
                </li>
                <li>
                    <router-link to="/Example"><a href="#" class="active">Example</a></router-link>
                </li>
            </ul>
    </div>
        <div>
          <router-view></router-view> 
        </div> -->

</template>
<script>
import { useTaskStore } from '../store/TaskStore'
    export default{
        setup(){
            const taskStore = useTaskStore()
            return { taskStore }
        },
        data(){
            return{
                username: localStorage.getItem('userName')
            }
        },
        methods:{
            logout(){
                console.log(localStorage)
                
                    localStorage.removeItem('Token');
                    localStorage.removeItem('userName');
                // localStorage.removeItem('Token');
                // this.$router.push({name:'/'})
            }
        },
        mounted(){
            let user = localStorage.getItem('Token');
            if(!user){
                console.log('mounted')
            }
        }
    }
</script>

<style scoped>
#username{
    color:black;
    background: #f7ec54;
}

.updateTab{
    background-color:thistle;
    border-radius: 0 100px/120px 0 0;
    margin-top:100%;
    bottom:0;
}
.updatetab:hover .updateNews{
    position: absolute;
    width: 200px;
    display:block;

}
.updateNews{
    display:none
}
 .container-fluid {
    height: 100%;
    overflow-y: hidden;
 }

ul{
  /* height: 100%; */
  /* border: 1px solid red; */
  position: fixed;
}

#logobg{
  width: 100%;
  padding: 10px;
    background: rgb(172, 172, 172);
}
#bghmclogo{
  width: 100%;
  height: 100%;

}

#wrapper {
    padding-left: 0;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
    /* background: blue; */
}

#sidebar-wrapper {
    z-index: 1000;
    position: fixed;
    /* left: 250px; */
    width: 0;
    height: 100%;
    /* margin-left: -250px; */
    /* margin-top: 2.7%; */
    overflow-y: auto;
    background: white;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
    border-right: 1px solid rgb(167, 166, 166)
}


/* Sidebar Styles */

.sidebar-nav {
    /* position: absolute; */
    top: 0;
    width: 250px;
    padding: 0;
    height:100%;
    list-style: none;
}

li {
    /* text-indent: 20px; */
    margin-top: 10%;
    line-height: 10%;
    color:white;

}
li::after{
    content: '';
  display: block;
  width: 0;
  height: 1px;
  background: yellow;
  transition: width .1s ease-in-out;
}
li:hover::after{
    width: 100%;
}

.sidebar-nav li {
    /* text-indent: 20px; */
    line-height: 50px;
    
}

.sidebar-nav li a {
    display: block;
    text-decoration: none;
    color: white;
    text-align: center;
    margin-left:10px;
}

.sidebar-nav li a:hover {
    text-decoration: none;
    /* color: #fff; */
    /* background: rgba(255,255,255,0.2); */
    border-left: 4px solid rgb(66, 243, 66);
    font-style: bold;
}

.sidebar-nav li a:active,
.sidebar-nav li a:focus {
    text-decoration: none;
    background: rgb(172, 172, 172);
}

.sidebar-nav > .sidebar-brand {
    height: 65px;
    font-size: 18px;
    line-height: 60px;
}

.sidebar-nav > .sidebar-brand a {
    color: #999999;
}

.sidebar-nav > .sidebar-brand a:hover {
    color: #fff;
    background: none;
}

@media(min-width:768px) {
    #wrapper {
        /* padding-left: 250px; */
        margin-left: -20px;
    }

    #wrapper.toggled {
        padding-left: 0;
    }

    #sidebar-wrapper {
        width: 200px;
    }

    #wrapper.toggled #sidebar-wrapper {
        width: 0;
    }

    #page-content-wrapper {
        padding: 20px;
        position: relative;
    }

    #wrapper.toggled #page-content-wrapper {
        position: relative;
        margin-right: 0;
    }
}

#content{
  width: auto;
  margin-left: 250px;
}



</style>