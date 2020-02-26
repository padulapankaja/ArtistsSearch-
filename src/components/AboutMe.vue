<template>
  <div>
        <app-about> </app-about>

       <h3>About Your Selft </h3>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import axios from "axios"
import VueRouter from 'vue-router'
export default {
    beforeCreate() {
     console.log("This is cokis function in about me " +this.$cookie.get('Userdetails'));

     
     var _id = this.$cookie.get('Userdetails')
      console.log("Tjis is front end " + _id);
      
        axios
        .get(`http://localhost:9000/users/me?id=${_id}`, )
        .then(response => {

      console.log(response.data);
      })
        .catch(function(error) {
          console.log(error);
        });
  

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