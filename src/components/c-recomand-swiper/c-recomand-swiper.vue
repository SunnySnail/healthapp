<template>
    <div id="recomandSwiper" class="c-recomand-swiper">
        <swiper id="swiper_horizontal"
            direction="horizontal"
            :mousewheel-control="true"
            :performance-mode="true"
            :pagination-visible="true"
            :pagination-clickable="true"
            :slide-els-len=num>
            <div class='slider' v-for="item in foodList">
                <div class="slider-pic" :style="{backgroundImage:'url(/images/'+item.image_hash+'.jpg)'}" alt="">
            </div>
        </swiper>
    </div>
</template>

<script>
import "./c-recomand-swiper.scss";
export default {
    data(){
        return {
            foodList: null,
            num: 0
        }
    },
    created() {
        this.$http.get('/api/hot/food_recipe').then((response)=>{
            var data  = response.data;
            this.foodList = data.data;
            this.num = this.foodList.length;
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