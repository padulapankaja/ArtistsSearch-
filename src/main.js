import Vue from 'vue'
import App from './App.vue'
import Navbar from "../src/components/Navbar.vue"
import VueRouter from 'vue-router'
import Home from "../src/components/Home.vue"
import About from '../src/components/About.vue'


Vue.use(VueRouter);
Vue.component('app-navbar', Navbar);





const routers = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];


const router = new VueRouter({
  routers
});








new Vue({
  router,
  el: '#app',

  render: h => h(App)
})
