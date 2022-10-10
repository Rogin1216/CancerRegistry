<template>
    <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <!-- <li class="logo">
                    <a class="logobrand" href="#">
                        Start Bootstrap
                    </a>
                </li> -->
                <li>
                    <router-link to="/Dashboard/patienttable"><a href="#" class="active">Dashboard</a></router-link>
                    <!-- <a href="#" class="active">Dashboard</a> -->
                </li>
                <li>
                    <!-- <a href="#">example</a> -->
                    <router-link to="/Example"><a href="#" class="active">Example</a></router-link>

                </li>
            </ul>
        </div>


</template>

<style scoped>
 body {
    overflow-x: hidden;
 }

/* Toggle Styles */

#wrapper {
    padding-left: 0;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}

#sidebar-wrapper {
    z-index: 1000;
    position: fixed;
    /* left: 250px; */
    width: 0;
    height: 100%;
    /* margin-left: -250px; */
    margin-top: 2.7%;
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
    margin: 0;
    padding: 0;
    list-style: none;
}

.sidebar-nav li {
    /* text-indent: 20px; */
    line-height: 50px;
}

.sidebar-nav li a {
    display: block;
    text-decoration: none;
    color: black;
    text-align: left;
    margin-left:10px;
}

.sidebar-nav li a:hover {
    text-decoration: none;
    /* color: #fff; */
    /* background: rgba(255,255,255,0.2); */
    border-left: 4px solid green;
    font-style: bold;
}

.sidebar-nav li a:active,
.sidebar-nav li a:focus {
    text-decoration: none;
    background: red;
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
        padding-left: 250px;
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

</style>