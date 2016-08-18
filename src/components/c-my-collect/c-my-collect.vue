<template>
    <cheader header-name='我的收藏' right-con='回到首页' path='/index'></cheader>
    <div id="myCollect" class="c-my-collect">
        <div class="my-collect-tab">
            <span class="my-collect-recipe" v-bind:class="{'active':isRecipe}" v-on:click='changeTab(1)'>菜谱</span>
            <span class="my-collect-material" v-bind:class="{'active':isMaterial}" v-on:click='changeTab(2)'>食材</span>
        </div>
        <ul class="my-collect-con my-collect-foodrecipe-con" v-if='isRecipe'>
            <li class="my-collect-item" v-for='item in foodList' v-link="'/foodrecipe/'+item.hash" transition="item">
                <div class="pic bg-box" v-lazyload:background-image="'/images/'+item.image_hash+'.jpg'"
                    data-hash={{item.hash}}></div>
                <div class="food-desc">
                    <p class="item-title">{{item.name}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
        <ul class="my-collect-con my-collect-foodmaterial-con" v-else='isMaterial'>
            <li class="my-collect-item" v-for='item in foodMaterialList' v-link="'/foodmaterial/'+item.hash" transition="item">
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
            foodList: [],
            foodMaterialList: [],
            recipeLock: 1,
            recipePage: 1,
            materialPage: 1,
            materialLock: 1,
            isRecipe: true,
            isMaterial: false,
            lazyload: {
                loading: '../../images/placeholder.png'
            }
        }
    },
    methods: {
        changeTab: function(type){
            switch(type){
                case 1:
                    this.isRecipe = true;
                    this.isMaterial = false;
                    break;
                case 2:
                    this.isRecipe = false;
                    this.isMaterial = true;
                    break;
            }
        },
        getRecipeData: function(page){
            this.$http.get('/api/user/like/food_recipe?page='+page).then(
            (response)=>{
                var data  = response.data.data;
                if(data.length > 0){
                    var len = data.length;
                    for(var i=0; i<len; i++){
                        this.foodList.push(data[i]);
                    }
                    this.recipePage++;
                    this.recipeLock = 1;
                }
            }, (response)=>{
                alert("error");
            })
        },
        getMaterialData: function(page){
            this.$http.get('/api/user/like/food_material?page='+page).then(
            (response)=>{
                var data  = response.data.data;
                if(data.length > 0){
                    var len = data.length;
                    for(var i=0; i<len; i++){
                        this.foodMaterialList.push(data[i]);
                    }
                    this.materialPage++;
                    this.materialLock = 1;
                }
            }, (response)=>{
                alert("error");
            })
        }
    },
    created() {
        this.getRecipeData(this.recipePage);
        this.getMaterialData(this.materialPage);
    },
    ready() {
        var vm = this;
        $(window).on('scroll', function(){
            if(vm.isRecipe){
                if(vm.recipeLock){
                    vm.recipeLock = 0;
                    vm.getRecipeData(vm.recipePage);
                }
            }else if(vm.isMaterial){
                if(vm.materialLock){
                    vm.materialLock = 0;
                    vm.getMaterialData(vm.materialPage);
                }
            }
        })
    }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>