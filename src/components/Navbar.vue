<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">Music App</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
          <router-link class="router_Link" to="/home">Home <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
         <router-link to="/about" class="router_Link">About <span class="sr-only">(current)</span></router-link>
      </li>
    
    </ul>
    <div class=" my-2 my-lg-0">
        <router-link to="/login" class="router_Link"> <i class="fa fa-id-badge mr-2"></i>Login <span class="sr-only">(current)</span></router-link>  
 
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>
.bg-primary {
    background-color: #B58900 !important;
}
.router_Link{
  color: #ffffff;
    text-decoration: none;
    background-color: transparent;
    margin-left: 10px;
    line-height: 30px;
}
.router_Link:hover{
    color: #ffffff !important;
    text-decoration: none !important;
    background-color: transparent !important;
    margin-left: 10px ;
    line-height: 30px;
}
</style>