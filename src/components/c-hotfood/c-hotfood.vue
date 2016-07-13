<template>
    <div id="hotFood" class="c-hotfood">
        <div class="hot-food-title">最hot菜谱，等你来</div>
        <ul class="hot-food-con">
            <li class="hot-food-item" v-for='item in foodList'>
                <div class="pic" :style='{backgroundImage:"url(/images/"+item.image_hash+".jpg)"}'
                    data-hash='{{item.hash}}'></div>
                <div class="food-desc">
                    <p class="item-title">{{item.name}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import "./c-hotfood.scss";
export default {
    data(){
        return {
            foodList: null
        }
    },
    created() {
        this.$http.get('/api/hot/food_recipe').then((response)=>{
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