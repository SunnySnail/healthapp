<template>
    <div class="c-header" id="cHeader" >
        <span class='back' v-on:click="goBack()"></span>
        <p class="header-name">{{headerName}}</p>
        <p class="right-con" v-link="path">{{rightCon}}</p>
    </div>
</template>
<script>
    import './c-header.scss';
    export default {
        props:[
            'headerName',
            'rightCon',
            'path'
        ],
        methods: {
            goBack: function(){
                window.history.back();
            }
        }
    }
</script>