<template>
<div>
<app-navbar></app-navbar>
  <form>
    <fieldset>
      <center>
        <div class="container row text-left">
          <legend class="mb-4">Legend</legend>
          <app-search @newDataSet="results = $event"></app-search>
          <div class="col-md-12">
            
            <app-result :resList="results"> </app-result>
          </div>
        </div>
      </center>
    </fieldset>
  </form>
</div>
</template>

<script>
import SearchArea from "./SearchArea.vue";
import ResultArea from "./ResultArea.vue";
import Navbar from "./Navbar.vue";

export default {
  data() {
    return {
      results: []
    };
  },
  components: {
    "app-search": SearchArea,
    "app-result": ResultArea,
    "app-navbar" : Navbar,
  }
};
</script>

<style></style>
