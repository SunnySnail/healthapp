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
    import Vue from 'vue'
    import VueRouter from 'vue-router'

    Vue.use(VueRouter);
    var router = new VueRouter();
    import './c-register.scss'
    export default{
        data() {
            return {
                username: null,
                password: null,
                confirmPassword: null,
                email: null,
                notBlank: false,
                notSamePassword: false,
                notHasUser: false,
                notHasEmail: false,
                validEmail: false,
            }
        },
        methods: {
            submit: function(){
                var tips1 = this.checkIsBlank();
                if(tips1){
                    this.showTips(tips1);
                    return;
                }
                var tips2 = this.checkSamePassword();
                if(tips2){
                    this.showTips(tips2);
                    return;
                }
                var tips3 = this.checkIsValidEmail();
                if(tips3){
                    this.showTips(tips3);
                    return;
                }
                this.checkHasUser();
                this.checkHasEmail();
            },
            register: function(){
                if(this.notBlank && this.notHasUser && this.notHasEmail && this.notSamePassword && this.validEmail){
                    Vue.http.headers.common['X-XSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');
                    this.$http.post('/api/user',
                        {
                            username:this.username,
                            password:this.password,
                            email: this.email,
                        }).then((response)=>{
                            alert("success");
                            router.go('/index');
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
                        if(response.data.status){
                            this.notHasUser = true;
                            this.register();
                        }else{
                            this.showTips("用户名已被注册");
                        }
                    }, (response)=>{
                })
            },
            checkHasEmail: function(){
                Vue.http.headers.common['X-XSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');
                this.$http.post('/api/user/validity',
                    {
                        email:this.email
                    }).then((response)=>{
                        if(response.data.status){
                            this.notHasEmail = true;
                            this.register();
                        }else{
                             this.showTips("邮箱已被注册");
                        }
                    }, (response)=>{
                })
            },
            checkSamePassword: function(){
                if(this.password !== this.confirmPassword) return "密码和确认密码不一致";
                else this.notSamePassword = true;
            },
            checkIsValidEmail: function(){
                let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
                if(reg.test(this.email)){
                    this.validEmail = true;
                }else{
                    return '邮箱不是有效邮箱';
                }
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