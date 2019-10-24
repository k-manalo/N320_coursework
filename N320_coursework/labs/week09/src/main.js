import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Home from "./components/Home.vue";
import Farm from "./components/Farm.vue";
//imports styles from App.Vue
//imports data from home
//imports gameData.plots and styles for farm and plots

Vue.use(VueRouter);
//enables vue in js

const router = new VueRouter({
  routes: [{ path: "/", component: Home }, { path: "/farm", component: Farm }]
});
//defines route that maps to home and farm components

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
//makes app aware of router
