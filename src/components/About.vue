<template>
  <div>
    <app-about> </app-about>
    <div class="container">
      <h3 class="mt-4" style="color:white">News</h3>

      <div class=" col-md-6 " v-for="actor in NewsObject" :key="actor.id" >
        <h4>This is news : {{actor.source.name}} </h4>
      </div>

    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import axios from "axios";
import VueRouter from "vue-router";
export default {
  
  mounted() {
    console.log(
      "This is cokis function in about me " + this.$cookie.get("Userdetails")
    );

    var _id = this.$cookie.get("Userdetails");
    console.log("Tjis is front end " + _id);

    axios
      .get(
        "http://newsapi.org/v2/top-headlines?" +
          "country=us&" +
          "apiKey=6098d12e2a4c451c918d4ea9e597d453"
      )
      .then(response => {
        console.log(response.data);
       // app.NewsObject = response.data.articles;

        console.log(
          "----------------------------------------------------------------@@@@@@@@@@@@@@@@@@@@@@@@@"
        );
        console.log(app.NewsObject);
        this.NewsObject = response.data.articles;
        console.log(
          "----------------------------------------------------------------@@@@@@@@@@@@@@@@@@@@@@@@@"
        );
          // this.$set(this.NewsObject, response.data.articles, true);
          console.log(this.NewsObject);
      })
      .catch(function(error) {
        console.log(error);
      });



  },

  data() {
    return {
      NewsObject: [],
    };
  },

  components: {
    "app-about": Navbar
  },




};
</script>

<style>


</style>
