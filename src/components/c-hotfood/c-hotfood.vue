<template>
    <div id="hotFood" class="c-hotfood">
        <div class="hot-food-title">最hot菜谱，等你来</div>
        <ul class="hot-food-con">
            <li class="hot-food-item" v-for='item in foodList' v-link="'/foodrecipe/'+item.hash">
                <div class="pic bg-box" v-lazyload:background-image="hostname+'/pictures/'+item.image_hash+'.jpg'"
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
            foodList: null,
            hostname: 'http://cdn.ilive.icampus.us',
            lazyload: {
                loading: '../../images/placeholder.png'
            }
        }
    },
    created() {
        var page,
            vm = this;
        if(!window.sessionStorage.page){
            page = Math.ceil(Math.random()*100);
            window.sessionStorage.setItem("page",page);
        }
        page = window.sessionStorage.page;
        $.ajax({
            url: '/api/food_recipe',
            type: 'get',
            dataType: 'json',
            data: {
                page: page
            }
        })
        .done(function(response){
            vm.foodList = response.data;
        })
    }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>