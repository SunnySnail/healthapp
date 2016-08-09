<template>
    <div id="allHotFoodmaterial" class="c-hot-foodmaterial">
        <div class="hot-foodmaterial-title">最chao食材，等你煮</div>
        <div class="hot-foodmaterial-con">
            <ul>
                <li class="hot-foodmaterial-item" v-for='item in hotFoodMaterialList' v-link="'/foodmaterial/'+item.hash">
                    <div class="hot-foodmaterial-item-pic bg-box" v-lazyload:background-image="'/images/'+item.image_hash+'.jpg'" data-hash={{item.hash}}></div>
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
            hotFoodMaterialList:null,
            catalogueList:[]
        }
    },
    created() {
        var page = Math.ceil(Math.random()*200);
        this.$http.get('/api/food_material?page='+page).then((response)=>{
            var data  = response.data;
            this.hotFoodMaterialList = data.data;
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