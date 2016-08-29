<template>
    <cheader :header-name='foodMaterial.name' right-con='回到首页' path='/index'></cheader>
    <div class="c-foodmaterial-introduce">
        <div class="pic" :style="{backgroundImage:'url('+hostname+'/pictures/'+foodMaterial.image_hash+'.jpg)'}"></div>
        <p class="food-name">{{foodMaterial.name}}</p>
        <div class="tags-con">
            <span class="tag" v-for="item in foodMaterial.tags">{{item}}</span>
        </div>
        <div class="material-con">
            <div class="material-info" v-if="foodMaterial.brief">
                <div class="info-name">{{foodMaterial.name}}简介</div>
                <div class="info-con">
                    <p v-for="bitem in foodMaterial.brief">{{bitem}}</p>
                </div>
            </div>
            <div class="material-info" v-if="foodMaterial.nutrient">
                <div class="info-name">营养价值</div>
                <div class="info-con">
                    <p v-for="nitem in foodMaterial.nutrient">{{nitem}}</p>
                </div>
            </div>
            <div class="material-info" v-if="foodMaterial.efficacy">
                <div class="info-name">食用功效</div>
                <div class="info-con">
                    {{foodMaterial.efficacy}}
                </div>
            </div>
            <div class="material-info" v-if="foodMaterial.taboos">
                <div class="info-name">食用禁忌</div>
                <div class="info-con">
                    {{foodMaterial.taboos}}
                </div>
            </div>
            <div class="material-info" v-if="foodMaterial.suit_mix">
                <div class="info-name">适宜搭配</div>
                <div class="info-con">
                    {{foodMaterial.suit_mix}}
                </div>
            </div>
            <div class="material-info" v-if="foodMaterial.avoid_mix">
                <div class="info-name">不适宜搭配</div>
                <div class="info-con">
                    {{foodMaterial.avoid_mix}}
                </div>
            </div>
            <div class="material-info" v-if="foodMaterial.choose">
                <div class="info-name">选购技巧</div>
                <div class="info-con">
                    {{foodMaterial.choose}}
                </div>
            </div>
            <div class="material-info" v-if="foodMaterial.store">
                <div class="info-name">储藏方式</div>
                <div class="info-con">
                    {{foodMaterial.store}}
                </div>
            </div>
            <div class="material-info" v-if="foodMaterial.tips">
                <div class="info-name">小贴士</div>
                <div class="info-con">
                    {{foodMaterial.tips}}
                </div>
            </div>
        </div>
    </div>
    <cfooddetailfooter type='material' :hash='$route.params.hash'></cfooddetailfooter>
</template>
<script>
    import './c-foodmaterial-introduce.scss';
    export default {
        data(){
            return {
                hostname: 'http://cdn.ilive.icampus.us',
                foodMaterial: {
                    id: null,
                    image_hash: null,
                    name: null,
                    tags: null,
                    amount_rec: null,
                    suit_crowds: null,
                    suit_ctcms: 0,
                    avoid_ctcms: null,
                    brief: null,
                    nutrient: null,
                    efficacy: null,
                    taboos: null, //禁忌
                    suit_mix: null, //适宜搭配
                    avoid_mix: null, //不适宜搭配
                    choose: null, //选购方法
                    store: null, //储藏方式
                    tips: null //小贴士
                }
            }
        },
        created(){
            var vm = this,
                hash = vm.$route.params.hash;
            function splitData(data){
                var newData = data.split('\n');
                return newData;
            }
            $.ajax({
                url: '/api/food_material/'+hash,
                type: 'get',
                dataType: 'json'
            })
            .done(function(response){
                vm.foodMaterial = response.data;
                vm.foodMaterial.tags = vm.foodMaterial.tags.split(',').slice(0,4);
                if(vm.foodMaterial.brief){
                    vm.foodMaterial.brief = splitData(vm.foodMaterial.brief);
                }
                if(vm.foodMaterial.nutrient){
                    vm.foodMaterial.nutrient = splitData(vm.foodMaterial.nutrient);
                }
            })
        }
    }
</script>