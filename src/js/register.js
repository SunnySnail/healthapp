import Vue from 'vue'

// 注册全局组件
import vueResource from 'vue-resource'
import Swiper from '../components/c-swiper/vue-swiper.vue'
import VueImageLazyload from 'vue-image-lazyload'

import Cnavbar from '../components/c-navbar/c-navbar.vue'
import Csearch from '../components/c-search/c-search.vue'
import ChotFood from '../components/c-hotfood/c-hotfood.vue'
import Cnews from '../components/c-news/c-news.vue'
import CallMenus from '../components/c-allmenus/c-allmenus.vue'
import CrecomandSwiper from '../components/c-recomand-swiper/c-recomand-swiper.vue'
import ChotFoodMaterial from '../components/c-hot-foodmaterail/c-hot-foodmaterial.vue'
import CfoodRecipeIntroduce from '../components/c-foodrecipe-introduce/c-foodrecipe-introduce.vue'
import Cheader from '../components/c-header/c-header.vue'
import CfoodDetailFooter from '../components/c-fooddetail-footer/c-fooddetail-footer.vue'
import CfoodMaterialIntroduce from "../components/c-foodmaterial-introduce/c-foodmaterial-introduce.vue"
import Clogin from '../components/c-login/c-login.vue'
import Cregister from '../components/c-register/c-register.vue'
import CuserInfo from '../components/c-userinfo/c-userinfo.vue'
import CmyCollect from '../components/c-my-collect/c-my-collect.vue'

Vue.use(vueResource);
Vue.use(VueImageLazyload, {
    loading: '../images/placeholder.png',
    try: 0
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
Vue.component('cregister', Cregister);
Vue.component('cuserinfo', CuserInfo);
Vue.component('cfooddetailfooter', CfoodDetailFooter);
Vue.component('cmycollect', CmyCollect);