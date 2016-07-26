<template>
    <cheader header-name='注册' right-con='登录' path='/login'></cheader>
    <div class="c-register" id="cRegister">
        <p class="register-tips">轻松注册，享受美食</p>
        <form name="registerform" id="registerForm" method="post">
            <input type="hidden" name="_token" id="token" value="{{csrf_token()}}">
            </span><input class="username" type="text" placeholder="账号" v-model="username">
            <input class="password" type="password" placeholder="密码" v-model="password">
            <input class="confirm-password" type="password" placeholder="确认密码" v-model="confirmPassword">
            <input class="email" type="text" placeholder="邮箱" v-model="email">
            <input class="button" type="button" value="注册" v-on:click="submit()">
        </form>
        <div class="tips"></div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import './c-register.scss';
    export default{
        data() {
            return {
                username: null,
                password: null,
                confirmPassword: null,
                email: null,
                notBlank: false
            }
        },
        methods: {
            submit: function(){
                if(!this.notBlank){
                    var tips = this.checkIsBlank();
                    this.showTips(tips);
                }
                if(this.notBlank){
                    Vue.http.headers.common['X-XSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');
                    this.$http.post('/api/user',
                        {
                            username:this.username,
                            password:this.password,
                            email: this.email,
                        }).then((response)=>{
                            alert("success");
                        }, (response)=>{
                    })
                }
            },
            csrf_token: function(){
                return decodeURIComponent(document.cookie.split('XSRF-TOKEN=')[1]);
            },
            checkIsBlank: function(){
                if(this.username == null) return '用户名不能为空';
                if(this.password == null) return '密码不能为空';
                if(this.confirmPassword == null) return '确认密码不能为空';
                if(this.email == null) return '邮箱不能为空';
                else this.notBlank = true;
            },
            checkHasUser: function(){
                Vue.http.headers.common['X-XSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');
                this.$http.post('/api/user/validity',
                    {
                        username:this.username
                    }).then((response)=>{
                        console.log(response.data);
                        if(response.data.status){
                            return true;
                        }else{
                            return "用户名已被注册";
                        }
                    }, (response)=>{
                })
            },
            showTips: function(tips){
                var $tips = document.querySelector('.tips'),
                    text = document.createTextNode(tips);
                $tips.appendChild(text);
            }
        }
    }
</script>