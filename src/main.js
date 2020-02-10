import Vue from 'vue'
import App from './App.vue'
import Navbar from "./components/Navbar.vue"
import VueRouter from 'vue-router'
import Home from "../src/components/Home.vue"
import About from './components/About.vue'


Vue.component('app-navbar', Navbar);
Vue.use(VueRouter);




const routers = [
  {
    path: '/', component: Home
  },
  {
    path: '/about', component: About
  },
];


const router = new VueRouter({
  routers 
});








new Vue({
  el: '#app',router,

  render: h => h(App)
})
