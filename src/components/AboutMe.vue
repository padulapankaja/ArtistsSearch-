<template>
  <div>
    <app-about> </app-about>

        <div class="container">
                <div class="_ttile">
                  <h3> About Your details </h3>
                </div>

        </div> 

  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import axios from "axios";
import VueRouter from "vue-router";
export default {
  data: {
    musicuser: {
      fname: "",
      lname: "",
      email: "",
      tel: "",
      dob: "",
      gender: ""
    }
  },

  mounted() {
    console.log(
      "This is cokis function in about me " + this.$cookie.get("Userdetails")
    );

    var _id = this.$cookie.get("Userdetails");
    console.log("Tjis is front end " + _id);

    axios
      .get(`http://localhost:9000/users/me?id=${_id}`)
      .then(response => {
        console.log(response.data);

        self.musicuser = response.data;
        console.log("----------------------------------------------//////-------------");
        console.log(musicuser);
        console.log("----------------------------------------------//////-------------");
        
      })
      .catch(function(error) {
        console.log(error);
      });



// 6098d12e2a4c451c918d4ea9e597d453

// http://newsapi.org/v2/top-headlines?' +
//           'country=us&' +
//           'apiKey=6098d12e2a4c451c918d4ea9e597d453'



  },


  components: {
    "app-about": Navbar,

    methods: {
      beforeMount() {
        console.log(
          "This is cokis function in about me" + this.$cookie.get("Userdetails")
        );
      }
    }
  }
};
</script>

<style></style>
