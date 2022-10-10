<template> 
<html>
  <body> 
    
    <NavigationBar/>
    <!-- <Login/> -->

  </body>
 
</html>
  <!-- <SideNavBar/> -->
</template>


<script>
import Login from './components/Login.vue'
import NavigationBar from './components/NavigationBar.vue';
import SideNavbar from './components/SideNavBar.vue'

export default {
  name: 'App',
  components: {
    Login,
    NavigationBar,
    SideNavbar
}

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html, body{
  height: 100%;
  background: #EFEFEF;
  /* border: 1px solid blue ; */
}
</style>
