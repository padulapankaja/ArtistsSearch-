import Vue from 'vue'
import App from './App.vue'
import Navbar from "../src/components/Navbar.vue"
import Home from "../src/components/Home.vue"
import About from '../src/components/About.vue'
import Login from '../src/components/SignIn.vue'
import SignUp from '../src/components/SignUp.vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);
// Vue.component('app-navbar', Navbar);


const routes =[
  { path: '/',  component: Login },
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/signup', component: SignUp },
  { path : '*', component: Login }

];


const router = new VueRouter({
  routes : routes
})




new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
