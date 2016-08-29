<template>
    <div class="c-sidebar-menu" v-bind:class="{'show':sidebarShow==true,'hide':sidebarShow==false}">
        <div class="menu">
            <div class="menu-item menu-login">登录</div>
            <ul class="menu-item">
                <li>推荐食谱</li>
                <li>推荐食材</li>
            </ul>
        </div>
    </div>
    <div class="page-cover" v-bind:class="{'show':sidebarShow}" @click='hideSideBar'></div>
</template>
<script>
    import './c-sidebar-menu.scss';
    export default {
        props:[
            'sidebarShow'
        ],
        methods: {
            hideSideBar: function(){
                this.sidebarShow = false;
                this.$dispatch('navbar', this.sidebarShow);
            }
        }
    }
</script>