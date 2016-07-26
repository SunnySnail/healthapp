<template>
    <cheader header-name='登录' right-con='注册' path='/register'></cheader>
    <div class="c-login" id="cLogin">
        <p class="login-tips">轻松登录，享受美食</p>
        <form name="loginform" id="loginForm" method="post">
            <input type="hidden" name="_token" id="token" value="{{csrf_token()}}">
            </span><input class="username" type="text" placeholder="账号" v-model="username">
            <input class="password" type="password" placeholder="密码" v-model="password">
            <input class="button" type="button" value="登录" v-on:click="submit()">
        </form>
        <div class="tips"></div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import './c-login.scss';
    export default{
        data() {
            return {
                username: null,
                password: null
            }
        },
        methods: {
            submit: function(){
                alert("submit");
                Vue.http.headers.common['X-XSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');
                this.$http.post('/api/user/login',
                    {
                        account: this.username,
                        password: this.password
                    })
                .then((response)=>{
                    alert("success");
                }, (response)=>{
                    alert("error");
                })
            },
            csrf_token: function(){
                return decodeURIComponent(document.cookie.split('XSRF-TOKEN=')[1]);
            }
        }
    }
</script>