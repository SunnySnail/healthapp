<template>
    <cheader :header-name='foodRecipe.name' right-con='回到首页' path='/index'></cheader>
    <div class="c-foodrecipe-introduce">
        <div class="pic bg-box" v-lazyload:background-image="hostname+'/pictures/'+foodRecipe.image_hash+'.jpg'"></div>
        <p class="food-name">{{foodRecipe.name}}</p>
        <div class="tags-con">
            <span class="tag" v-for="item in foodRecipe.tags">{{item}}</span>
        </div>
        <ul class="food-info">
            <li class="detail-info taste-info">{{foodRecipe.taste?foodRecipe.taste:"其他"}}</li>
            <li class="detail-info method-info">{{foodRecipe.method?foodRecipe.method:"其他"}}</li>
            <li class="detail-info difficulty-info">{{foodRecipe.difficulty?foodRecipe.difficulty:"中等水平"}}</li>
            <li class="detail-info cook-time-info">{{foodRecipe.cook_time?foodRecipe.cook_time:"未知"}}</li>
        </ul>
        <div class="food-material-con">
            <div class="con-title">食材列表</div>
            <ul>
                <li v-for='pitem in foodRecipe.primaries' :class='{arrow: pitem.hash}' v-link="'/foodmaterial/'+pitem.hash">{{pitem.name}}</li>
                <li v-for='aitem in foodRecipe.accessories' :class='{arrow: aitem.hash}' v-link="'/foodmaterial/'+aitem.hash">{{aitem.name}}</li>
            </ul>
        </div>
        <div class="food-steps">
            <div class="con-title">菜谱步骤</div>
            <ul>
                <li v-for='step in foodRecipe.procedure'>
                    <p class='step-desc' v-if="step.indexOf('.jpg')<0">{{step}}</p>
                    <div class='step-pic bg-box' v-if="step.indexOf('.jpg')>0" v-lazyload:background-image="hostname+'/pictures/'+step"></div>
                </li>
            </ul>
        </div>
    </div>
    <cfooddetailfooter type='recipe' :hash='$route.params.hash'></cfooddetailfooter>
</template>
<script>
    import './c-foodrecipe-introduce.scss';
    export default {
        data(){
            return {
                hostname: 'http://cdn.ilive.icampus.us',
                foodRecipe: {
                    id: null,
                    image_hash: '',
                    name: null,
                    tags: null,
                    method: null,
                    difficulty: null,
                    amount: 0,
                    taste: null,
                    cook_time: null,
                    primaries: [],
                    accessories: [],
                    procedure: null
                }
            }
        },
        created(){
            var vm = this,
                hash = vm.$route.params.hash;
            $.ajax({
                url: '/api/food_recipe/'+hash,
                type: 'get',
                dataType: 'json'
            })
            .done(function(response){
                vm.foodRecipe = response.data;
                vm.foodRecipe.tags = vm.foodRecipe.tags.split(",");
                vm.foodRecipe.procedure = vm.foodRecipe.procedure.split("\n");
            })
        }
    }
</script>