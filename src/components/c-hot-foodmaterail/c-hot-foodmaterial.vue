<template>
    <div id="allHotFoodmaterial" class="c-hot-foodmaterial">
        <div class="hot-foodmaterial-title">最chao食材，等你煮</div>
        <div class="hot-foodmaterial-con">
            <ul>
                <li class="hot-foodmaterial-item" v-for='item in hotFoodMaterialList' v-link="'/foodmaterial/'+item.hash">
                    <div class="hot-foodmaterial-item-pic bg-box" v-lazyload:background-image="hostname+'/pictures/'+item.image_hash+'.jpg'" data-hash={{item.hash}}></div>
                    <div class="hot-foodmaterial-item-info">
                        <p class="hot-foodmaterial-item-title">{{item.name}}</p>
                    </div>
                </li>
            </ul>
            <div class="check-all-foodmaterial-catalogue">查看全部食材分类</div>
        </div>
    </div>
</template>

<script>
import "./c-hot-foodmaterial.scss";
export default {
    data() {
        return {
            hostname: 'http://cdn.ilive.icampus.us',
            hotFoodMaterialList:null,
            catalogueList:[]
        }
    },
    created() {
        var page,
            vm = this;
        if(window.sessionStorage.page){
            page = window.sessionStorage.page;
        }else{
            page = Math.ceil(Math.random()*200);
            window.sessionStorage.setItem("page",page);
        }
        $.ajax({
            url: '/api/food_material',
            type: 'get',
            dataType: 'json',
            data: {
                page: page
            }
        })
        .done(function(response){
            vm.hotFoodMaterialList = response.data;
        })
    }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>