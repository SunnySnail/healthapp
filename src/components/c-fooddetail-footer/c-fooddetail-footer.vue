<template>
    <div class="c-fooddetail-footer" id="cFoodDetailFooter">
        <div class="footer-con">
            <div class="left">写评论</div>
            <div class="love" v-on:click='like()'>
                <span class="love-icon"></span>
                <p>喜欢</p>
            </div>
            <div class="collect" v-on:click='collect()'>
                <span class="collect-icon"></span>
                <p>收藏</p>
            </div>
            <div class="zan" v-on:click='zan()'>
                <span class="zan-icon"></span>
                <p>点赞</p>
            </div>
        </div>
    </div>
</template>
<script>
    import './c-fooddetail-footer.scss';
    import Vue from 'vue';
    export default {
        props:[
            'type',
            'hash'
        ],
        data(){
            return {
                isCollected: false
            }
        },
        methods: {
            toggle: function(url, className,classedName){
                Vue.http.options.emulateHTTP = true;
                var ele = $('.'+className);
                    if(!ele.hasClass(classedName)){
                    if(this.type == 'recipe'){
                        this.$http.post(url,{
                           recipe_hash: this.hash
                        }).then((response)=>{
                            if(response.data.status){
                                ele.addClass(classedName);
                            }
                        }, (response)=>{
                        })
                    }else if(this.type == 'material'){
                        this.$http.post(url,{
                           material_hash: this.hash
                        }).then((response)=>{
                            if(response.data.status){
                                ele.addClass(classedName);
                            }
                        }, (response)=>{
                        })
                    }
                }else{
                    // var data = {recipe_hash: this.hash};
                    // console.log(data);
                    // this.$http.delete(url,data).then((response)=>{
                    //     if(response.data.status){
                    //         ele.removeClass(classedName);
                    //     }
                    // }, (response)=>{})
                    // return;
                }
            },
            like: function(){
                this.checkLogin()
                // this.toggle(null,'love-icon','loved-icon');
            },
            collect: function(){
                this.checkLogin();
                if(this.type == 'recipe'){
                    this.toggle('/api/user/like/food_recipe', 'collect-icon','collected-icon');
                }else if(this.type == 'material'){
                    this.toggle('/api/user/like/food_material', 'collect-icon', 'collected-icon');
                }
            },
            zan: function(){
                this.checkLogin();
                // this.toggle('zan-icon', 'zaned-icon');
            },
            csrf_token: function(){
                var token = decodeURIComponent(document.cookie.split('XSRF-TOKEN=')[1]);
                 Vue.http.headers.common['X-XSRF-TOKEN'] = token;
            },
            checkLogin: function(){
                this.$http.get('/api/user').then((response)=>{
                    var data = response.data;
                    if(data.status){
                        var info = data.data;
                        this.username = info.username;
                        return true;
                    }else{
                        router.go('/login');
                        return false;
                    }
                },(response)=>{

                })
            },
            checkCollected: function(callback){
                if(this.type == 'recipe'){
                    this.$http.post('/api/user/like/food_recipe/isliked',{
                        recipe_hash: this.hash
                    }).then((response)=>{
                        var data = response.data.data;
                        if(data){
                            callback.call(this);
                        }
                    },(response)=>{
                        console.log('error');
                    })
                }else if(this.type == 'material'){
                    this.$http.post('/api/user/like/food_material/isliked',{
                        material_hash: this.hash
                    }).then((response)=>{
                        var data = response.data.data;
                        if(data){
                            callback.call(this);
                        }
                    },(response)=>{
                        console.log('error');
                    })
                }
            }
        },
        ready(){
            this.csrf_token();
            this.checkCollected(function(){
                $('.collect-icon').addClass('collected-icon');
            });
        }
    }
</script>