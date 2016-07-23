// 注册全局组件
import Vue from 'vue'
import vueResource from 'vue-resource'
import Swiper from '../components/c-swiper/vue-swiper.vue'
import lazyload from 'vue-lazyload'

import Cnavbar from '../components/c-navbar/c-navbar.vue'
import Csearch from '../components/c-search/c-search.vue'
import ChotFood from '../components/c-hotfood/c-hotfood.vue'
import Cnews from '../components/c-news/c-news.vue'
import CallMenus from '../components/c-allmenus/c-allmenus.vue'
import CrecomandSwiper from '../components/c-recomand-swiper/c-recomand-swiper.vue'
import ChotFoodMaterial from '../components/c-hot-foodmaterail/c-hot-foodmaterial.vue'
import CfoodRecipeIntroduce from '../components/c-foodrecipe-introduce/c-foodrecipe-introduce.vue'
import Cheader from '../components/c-header/c-header.vue'
import CfoodMaterialIntroduce from "../components/c-foodmaterial-introduce/c-foodmaterial-introduce.vue"
import Clogin from '../components/c-login/c-login.vue'

Vue.config.debug = true;
Vue.use(vueResource);
Vue.use(lazyload, {
    // error: '../images/error.png',
    loading: '../images/placeholder.png'
})

Vue.component('swiper', Swiper);

Vue.component('cnavbar', Cnavbar);
Vue.component('csearch', Csearch);
Vue.component('chotfood', ChotFood);
Vue.component('cnews', Cnews);
Vue.component('callmenus', CallMenus);
Vue.component('crecomandswiper',CrecomandSwiper);
Vue.component('chotfoodmaterial', ChotFoodMaterial);
Vue.component('cfoodrecipeintroduce', CfoodRecipeIntroduce);
Vue.component('cheader', Cheader);
Vue.component('cfoodmaterialintroduce', CfoodMaterialIntroduce);
Vue.component('clogin', Clogin);


