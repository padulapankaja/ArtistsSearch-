<template>
  <div id="app">
    <app-navbar> </app-navbar>
    <app-home> </app-home>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
export default {
  components: {
    'app-home':Home,
  },

  name: "app",
  data() {
    return {};
  }
};
</script>

<style scoped></style>
