import '../html/index.html'

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueTouch from 'vue-touch'
import VueAnimatedList from 'vue-animated-list'

import indexPage from '../pages/indexPage.vue'
import searchPage from '../pages/searchPage.vue'
import foodRecipePage from '../pages/foodeRecipePage.vue'
import foodMaterialPage from '../pages/foodMaterialPage.vue'
import loginPage from '../pages/loginPage.vue'
import registerPage from '../pages/registerPage.vue'
import userInfoPage from '../pages/userInfoPage.vue'
import myCollectPage from '../pages/myCollectPage.vue'
import myInfoPage from '../pages/myInfoPage.vue'

Vue.use(VueRouter);
Vue.use(VueTouch);
Vue.use(VueAnimatedList)

Vue.config.debug = true;
var App = Vue.extend({});

window.router = new VueRouter();
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
    '/mycollect': {
        component: myCollectPage
    },
    'myinfo': {
        component: myInfoPage
    },
    '*': {
        component: indexPage
    }
})
router.start(App, '#app');





