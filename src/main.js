import Vue from 'vue'
import App from './App.vue'
import Navbar from "../src/components/Navbar.vue"
import Home from "../src/components/Home.vue"
import About from '../src/components/About.vue'
import Login from '../src/components/SignIn.vue'
import SignUp from '../src/components/SignUp.vue'
import Profile from '../src/components/Profile.vue'
import AboutMe from '../src/components/AboutMe.vue';
import VueSession from 'vue-cookie'
import Vuex from "vuex"

import VueRouter from 'vue-router'


Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueSession);

// Vue.component('app-navbar', Navbar);

const store = new Vuex.Store(
  {
    state: {
      authenticated: false
    },
    mutations: {
      setAuthentication(state, status) {
        state.authenticated = status;
      }
    }
  }
);

const routes = [
  { path: '/', component: Login },
  {
    path: '/home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (store.state.authenticated == false) {
        next(false);
      } else {
        next();
      }
    }
  },
  {
    path: '/about', component: About,
    beforeEnter: (to, from, next) => {
      if (store.state.authenticated == false) {
        next(false);
      } else {
        next();
      }
    }
  },
  { path: '/signup', component: SignUp },
  {
    path: '/profile', component: Profile,
    beforeEnter: (to, from, next) => {
      if (store.state.authenticated == false) {
        next(false);
      } else {
        next();
      }
    }
  },
  {
    path: '/me', component: AboutMe,
      beforeEnter: (to, from, next) => {
      if (store.state.authenticated == false) {
        next(false);
      } else {
        next();
      }
    }
  },
  { path: '*', component: Login }

];


const router = new VueRouter({
  routes: routes
})




new Vue({
  el: '#app',
  store: store,
  router,
  render: h => h(App)
})
