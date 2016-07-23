<template>
    <div id="hotFood" class="c-hotfood">
        <div class="hot-food-title">最hot菜谱，等你来</div>
        <ul class="hot-food-con">
            <li class="hot-food-item" v-for='item in foodList' v-link="'/foodrecipe/'+item.hash">
                <div class="pic bg-box" v-lazy:background-image="'/images/'+item.image_hash+'.jpg'"
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
import "./c-hotfood.scss";
export default {
    data(){
        return {
            foodList: null
        }
    },
    created() {
        var page;
        if(!window.sessionStorage.page){
            page = Math.ceil(Math.random()*100);
            window.sessionStorage.setItem("page",page);
        }
        page = window.sessionStorage.page;
        this.$http.get('/api/food_recipe?page='+page).then((response)=>{
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