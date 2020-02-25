<template>
  <div>
        <app-about> </app-about>

       <h3>About Your Selft </h3>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
    beforeCreate() {
     console.log("This is cokis function in about me " +this.$cookie.get('Userdetails'));
  },
components: {
     "app-about" : Navbar,
  
    methods:{

      beforeMount(){
              console.log("This is cokis function in about me" +this.$cookie.get('Userdetails'));
              
          }
    }

  }
}
</script>

<style>

</style>