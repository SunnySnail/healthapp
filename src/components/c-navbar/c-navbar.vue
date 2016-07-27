<template>
    <div id="navbar" class="c-navbar">
        <div class="navbar-con">
            <div class="nav-menu"></div>
            <div class="nav-search">
                <span class="icon-search"></span>
                <a v-link="{ path: '/search' }">
                    <div class="nav-input"><span>搜索食材、菜谱</span></div>
                </a>
            </div>
            <div class="nav-login" v-link="'/login'" v-if='!status'></div>
            <div class="nav-user" v-link="'/user'" v-if='username' :style="{backgroundImage:'url('+iconHeader+')'}"></div>
        </div>
    </div>
</template>

<script>
import "./c-navbar.scss";
export default {
  data() {
    return {
      username: null,
      status: false,
      iconHeader: 'http://img4.imgtn.bdimg.com/it/u=331635439,506004189&fm=21&gp=0.jpg'
    }
  },
  ready() {
    this.$http.get('/api/user').then((response)=>{
      this.status = response.data.status;
      if(this.status){
        this.username = response.data.data.username;
      }else{
        return;
      }
    },(response)=>{
    })
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>