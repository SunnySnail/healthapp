import '../html/index.html'

import Vue from 'vue'

import VueRouter from 'vue-router'
import indexPage from '../pages/indexPage.vue'
import searchPage from '../pages/searchPage.vue'
import foodRecipePage from '../pages/foodeRecipePage.vue'
import foodMaterialPage from '../pages/foodMaterialPage.vue'
import loginPage from '../pages/loginPage.vue'
import registerPage from '../pages/registerPage.vue'
import userInfoPage from '../pages/userInfoPage.vue'

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
    },
    '/foodrecipe/:hash': {
        component: foodRecipePage
    },
    '/foodmaterial/:hash': {
        component: foodMaterialPage
    },
    '/login': {
        component: loginPage
    },
    '/register': {
        component: registerPage
    },
    '/user': {
        component: userInfoPage
    },
    '*': {
        component: indexPage
    }
})
router.start(App, '#app');





