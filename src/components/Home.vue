<template>
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
</template>

<script>
import SearchArea from "./SearchArea.vue";
import ResultArea from "./ResultArea.vue";
export default {
  data() {
    return {
      results: []
    };
  },
  components: {
    "app-search": SearchArea,
    "app-result": ResultArea
  }
};
</script>

<style></style>
