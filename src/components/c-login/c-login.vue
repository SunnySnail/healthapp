<template>
    <cheader header-name='登录' right-con='注册' path='/register'></cheader>
    <div class="c-login" id="cLogin">
        <p class="login-tips">轻松登录，享受美食</p>
        <div id="loginForm">
            <input type="hidden" name="_token" id="token" value="{{csrf_token()}}">
            </span><input class="username" type="text" placeholder="账号" v-model="username">
            <input class="password" type="password" placeholder="密码" v-model="password">
            <input class="button" type="button" value="登录" v-on:click="submit()">
        </div>
        <div class="tips"></div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import './c-login.scss'

    export default{
        data() {
            return {
                username: null,
                password: null,
                notBlank: null
            }
        },
        methods: {
            submit: function(){
                var tips = this.checkIsBlank();
                if(tips){
                    this.showTips(tips);
                    return;
                }
                if(this.notBlank){
                    this.login();
                }
            },
            login: function(){
                var vm = this;
                $.ajax({
                    url: '/api/user/login',
                    type: 'POST',
                    dataType: 'json',
                    headers: {
                        'X-XSRF-TOKEN': document.querySelector('#token').getAttribute('value'),
                        'Content-type': 'application/json'
                    },
                    data: {
                        account: vm.username,
                        password: vm.password
                    }
                })
                .done(function(response){
                    if(response.status){
                        router.go('/index');
                    }else{
                        vm.showTips(response.reason);
                    }
                })
                // Vue.http.headers.common['X-XSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');
                // this.$http.post('/api/user/login',
                //     {
                //         account: this.username,
                //         password: this.password
                //     })
                // .then((response)=>{
                //     if(response.data.status){
                //         router.go('/index');
                //     }else{
                //         this.showTips(response.data.reason);
                //     }
                // }, (response)=>{
                // })
            },
            checkIsBlank: function(){
                if(this.username == null) return '用户名不能为空';
                if(this.password == null) return '密码不能为空';
                else this.notBlank = true;
            },
            csrf_token: function(){
                return decodeURIComponent(document.cookie.split('XSRF-TOKEN=')[1]);
            },
            showTips: function(tips){
                if(tips){
                    let $tips = $('.tips');
                    $tips.text(tips).addClass('show');
                    setTimeout(function(){
                        $tips.removeClass('show');
                    },1000);
                }else{
                    return;
                }
            }
        }
    }
</script>