<style lang='sass'>
    .index-container{
        height: 100%;
        overflow: auto;
    }
    .hide-scroll{
        height: 100%;
        overflow: hidden;
    }
</style>
<template>
    <cnavbar></cnavbar>
    <div class="index-container">
        <crecomandswiper></crecomandswiper>
        <chotfood></chotfood>
        <cnews></cnews>
        <callmenus></callmenus>
        <chotfoodmaterial></chotfoodmaterial>
    </div>
    <csidebarmenu :sidebar-show='sidebarShow'></csidebarmenu>
</template>
<script>
    export default {
        data() {
            return {
                sidebarShow: false
            }
        },
        events: {
            'navbar': function(sidebarShow){
                this.sidebarShow = sidebarShow;
            }
        },
        methods: {
        }
    }
</script>