<template>
    <cheader header-name='我的收藏' right-con='回到首页' path='/index'></cheader>
    <div id="myCollect" class="c-my-collect">
        <div class="my-collect-tab">
            <span class="my-collect-recipe active">菜谱</span>
            <span class="my-collect-material">食材</span>
        </div>
        <ul class="my-collect-con">
            <li class="my-collect-item" v-for='item in foodList' v-link="'/foodrecipe/'+item.hash" transition="item">
                <div class="pic bg-box" v-lazyload:background-image="'/images/'+item.image_hash+'.jpg'"
                    data-hash={{item.hash}}></div>
                <div class="food-desc">
                    <p class="item-title">{{item.name}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import "./c-my-collect.scss";
export default {
    data(){
        return {
            foodList: null,
            lazyload: {
                loading: '../../images/placeholder.png'
            }
        }
    },
    created() {
        var page = 2;
        this.$http.get('/api/user/like/food_recipe?page='+page).then((response)=>{
            var data  = response.data;
            this.foodList = data.data;
        }, (response)=>{
            alert("error");
        })
    }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>