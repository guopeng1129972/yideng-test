/* jshint esversion: 6 */
import Vue from "vue";
import  App  from "./app.vue";
import  "./assets/images/bg.jpg";
import  "./assets/styles/test.css";
import  "./assets/styles/test-styleus.styl";


const root = document.createElement('div');
document.body.appendChild(root);
new Vue({
   render: (h) => h(App)
}).$mount(root);