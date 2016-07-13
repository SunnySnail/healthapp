<template>
    <div id="search" class="c-search">
        <div class="navbar-con">
            <div class="nav-menu"></div>
            <div class="nav-search">
                <span class="icon-search"></span>
                <div class="nav-input"><span>搜索食材、菜谱{{name}}</span></div>
            </div>
            <div class="nav-login"></div>
        </div>
    </div>
</template>

<script>
// require("./c-navbar.scss");
export default {
  data() {
    return {
      name: '搜索'
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>