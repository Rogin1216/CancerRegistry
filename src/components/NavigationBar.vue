<template>
<div class="container-fluid">
  <!-- <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px;"> -->
  <div id="wrapper">
    <ul class="navbar-nav bg-gradient-primary sidebar bg-dark" style="width:15%; height:100%;">
      <div id="logobg">
        <a href="" ><img src="../assets/bghmc-banner.png" alt="" id="bghmclogo"></a>
      </div>
      <div class="sidebar-nav">
        <router-link to="/Dashboard"><li>Dashboard</li></router-link>
        <router-link to="/SearchPatient"><li>Search</li></router-link>
        <router-link to="/"><li v-on:click="logout" style="color:#FF0000; bottom:0px;">Logout</li></router-link>
        <!-- <router-link to="/SearchPatient"><li><a href="#" class="active">Patient List</a></li></router-link> -->
      </div>

    </ul>
    <div id="content" class="">
      <router-view></router-view>
    </div>

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
    export default{
        methods:{
            logout(){
                console.log(localStorage)
                
                    localStorage.removeItem('Token');

                
                // localStorage.removeItem('Token');
                // this.$router.push({name:'/'})
            }
        },
        
    }
</script>

<style scoped>
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
  margin-left: 15%;
}



</style>