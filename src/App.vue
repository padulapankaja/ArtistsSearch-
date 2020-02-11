<template>
  <div id="app">
  
    <app-navbar> </app-navbar>
    <!-- <app-home></app-home> -->
    <router-view></router-view>

  
  </div>
</template>

<script>

import Home from "../src/components/Home.vue"
import About from '../src/components/About.vue'

export default {
 components: {
      'app-home' :Home,
      About,
      
    }
};
</script>

<style >

</style>
