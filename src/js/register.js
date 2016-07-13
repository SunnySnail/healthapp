// 注册全局组件
import Vue from 'vue'
import vueResource from 'vue-resource'
import Swiper from '../components/c-swiper/vue-swiper.vue'

import Cnavbar from '../components/c-navbar/c-navbar.vue'
import Csearch from '../components/c-search/c-search.vue'
import ChotFood from '../components/c-hotfood/c-hotfood.vue'
import Cnews from '../components/c-news/c-news.vue'
import CallMenus from '../components/c-allmenus/c-allmenus.vue'
import CrecomandSwiper from '../components/c-recomand-swiper/c-recomand-swiper.vue'

Vue.config.debug = true;
Vue.use(vueResource);

Vue.component('swiper', Swiper);

Vue.component('cnavbar', Cnavbar);
Vue.component('csearch', Csearch);
Vue.component('chotfood', ChotFood);
Vue.component('cnews', Cnews);
Vue.component('callmenus', CallMenus);
Vue.component('crecomandswiper',CrecomandSwiper);


