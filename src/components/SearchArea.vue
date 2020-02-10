<template>
  <div class="container">
    <div class="col-md-8 ">
      <div class="form-group">
        <label for="exampleInputEmail1">Search</label>
        <input
          type="email"
          class="form-control"
          id="searchSong"
          aria-describedby="searchHelp"
          placeholder="Find my favourit artist"
          @input="searchPressd"
        />
        <small id="emailHelp" class="form-text text-muted"
          >Search any artist you want to know</small
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Config from "../config.js";
export default {
  data() {
    return {
      newSet: []
    };
  },

  methods: {
    searchPressd(event) {
      console.log("Key press works");
      var key = event.target.value;

   
        var queryParams = {
          query: key,
          type: "artist"
        };

        axios
          .get(Config.getUrl("search", queryParams), {
            headers: Config.getHeaders()
          })
          .then(response => {
            console.log(response.data);
            response.data.artists.items.map(data => {
              // console.log(data.name);
            });

            this.newSet = response.data.artists.items;


            console.log("This is New Set --------------------------------------------------------------------------------------------------------------/////////////////////////");
            console.log(this.newSet);
            console.log("This is New Set  end --------------------------------------------------------------------------------------------------------------/////////////////////////");
          })
          .catch(e => {
            this.error.push(e);
          });
  
  
      
      this.$emit("newDataSet", this.newSet);
    }
  }
};
</script>

<style></style>
