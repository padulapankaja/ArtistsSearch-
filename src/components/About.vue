<template>
  <div>
    <app-about> </app-about>
    <div class="container">
      <h3 class="mt-4" style="color:white">News</h3>



<div class="row" >
      <div
        class=" col-md-6 "
        v-for="actor in NewsObject.slice(0, 5)"
        :key="actor.id"
      >
        <img :src="actor.urlToImage" class="img-fluid" style="width:40%; border-radius:5px; height:40%;" />
        <p>Publisher : {{ actor.source.name }}</p>
        <p>Author : {{ actor.author }}</p>
        <p>Content : {{ actor.content }}</p>
        <p>Published At : {{ actor.publishedAt }}</p>
        <a :href="actor.url" target="_blank">This is news : View More </a>
      </div>

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

  beforeMount: function() {
    this.updateVisibleNews();
  },

  data() {
    return {
      NewsObject: [],
      nextId: 13,
      currentPage: 0,
      pageSize: 3,
      visibleNews: []
    };
  },

  components: {
    "app-about": Navbar
  },

  methods: {
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.updateVisibleNews();
    },
    updateVisibleNews() {
      this.visibleNews = this.NewsObject.slice(
        (this.currentPage = this.pageSize),
        (this.currentPage = this.pageSize) + this.pageSize
      );

      if (this.visibleNews.length == 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage - 1);
      }
    }
  }
};
</script>

<style></style>
