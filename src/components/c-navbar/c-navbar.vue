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
            <div class="nav-login"></div>
        </div>
    </div>
</template>

<script>
import "./c-navbar.scss";
export default {
  data() {
    return {
      name: 'xiaoyan!'
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>