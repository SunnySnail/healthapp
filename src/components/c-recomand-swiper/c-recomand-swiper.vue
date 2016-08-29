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
                <div class="slider-pic bg-box" v-lazyload:background-image="'/images/'+item.image_hash+'.jpg'"
                    data-hash={{item.hash}} v-link="'/foodrecipe/'+item.hash"></div>
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
        var vm = this;
        $.ajax({
            url: '/api/hot/food_recipe',
            type: 'get',
            dataType: 'json'
        })
        .done(function(response){
            vm.foodList = response.data;
            vm.num = vm.foodList.length;
        })
    }
}
</script>