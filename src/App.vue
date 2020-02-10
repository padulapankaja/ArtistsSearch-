<template>
  <div id="app">
  
    <app-navbar> </app-navbar>
  <router-view keep-alive></router-view>

  
  </div>
</template>

<script>

import Home from "../src/components/Home.vue"
import About from '../src/components/About.vue'

export default {
 components: {
      Home,
      About,
      
    }
};
</script>

<style >

</style>
