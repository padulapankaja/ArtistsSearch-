import Vue from 'vue'
import App from './App.vue'
import Navbar from "./components/Navbar.vue"
import VueRouter from 'vue-router'
import Home from "./components/Home.vue"
import About from './components/About.vue'
Vue.component('app-navbar', Navbar); 
Vue.use(VueRouter);




const routers = [
  {
    path:'/', component:Home
  },
  {
    path:'/about', component:About
  },
];










new Vue({
  el: '#app',
  render: h => h(App)
})
