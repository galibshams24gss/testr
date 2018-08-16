require("dotenv").config();

//import Vue from 'vue'
import Vue from 'vue/dist/vue.js';
import router from './router'
import firebase from 'firebase'
import App from './App'

import "chart.js";
import "hchs-vue-charts";
Vue.use(window.VueCharts);

import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: { key: "AIzaSyApFgcT90LEhZKr6o3mAH1H8CoroRmieRE" }
});

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

//import axios from 'axios';
//import VueAxios from 'axios';
//Vue.use(axios);

Vue.config.productionTip = false

var jsPDF = require('jspdf');
require('jspdf-autotable');

let app;
var config = {
    apiKey: "AIzaSyBbKqidWrdp_CCnDP3leeC9d2C9v8Ij7Eo",
    authDomain: "vprj-ced3d.firebaseapp.com",
    databaseURL: "https://vprj-ced3d.firebaseio.com",
    projectId: "vprj-ced3d",
    storageBucket: "vprj-ced3d.appspot.com",
    messagingSenderId: "1022732389166"
};

firebase.initializeApp(config);

window.firebase=firebase;

firebase.auth().onAuthStateChanged((user)=>{
  if(!app){
    app= new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    }).$mount('#app');
  }
});