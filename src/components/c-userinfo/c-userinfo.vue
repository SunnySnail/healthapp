<template>
    <cheader header-name='个人信息' right-con='回到首页' path='/index'></cheader>
    <div class="c-userinfo" id="userInfo">
        <div class="userintroduce-part">
            <div class="usericon bg-box" v-lazyload:background-image="iconHeader"></div>
            <p class="username">{{username}}</p>
            <p class="usersign">写句话，让人家认识你...</p>
        </div>
        <div class="list userlove-part" v-link="{path: '/mycollect'}">
            <p>我的收藏</p>
        </div>
        <div class="list userdetail-part" v-link="{path: '/myinfo'}">
            <p>我的资料</p>
        </div>
        <div class="list usertags-part">
            <p>贴标签</p>
        </div>
        <div class="list usersign-part">
            <p>我的个性签名</p>
        </div>
        <div class="list userphone-part">
            <p>绑定手机</p>
        </div>
        <div class="list userset-part">
            <p>设置</p>
        </div>
    </div>
</template>
<script>
    import './c-userinfo.scss'

    export default{
        data(){
            return {
                username: null,
                iconHeader: 'http://img4.imgtn.bdimg.com/it/u=331635439,506004189&fm=21&gp=0.jpg',
                info: null
            }
        },
        ready(){
            this.$http.get('/api/user').then((response)=>{
                var data = response.data;
                if(data.status){
                    var info = data.data;
                    this.username = info.username;
                }else{
                    router.go('/login');
                }
            },(response)=>{

            })
        }
    }
</script>