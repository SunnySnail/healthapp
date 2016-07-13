import Vue from 'vue'
import VueRouter from 'vue-router'
import indexPage from '../pages/indexPage.vue'
import searchPage from '../pages/searchPage.vue'

Vue.use(VueRouter);
Vue.config.debug = true;
var App = Vue.extend({});

var router = new VueRouter();
router.map({
    '/index':{
        component: indexPage
    },
    '/search':{
        component: searchPage
    }
})
router.start(App, '#app');
