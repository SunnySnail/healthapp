<template>
    <div id="allMenus" class="c-allmenus">
        <div class="all-menus-title">最quan菜谱，等你翻</div>
        <div class="all-menus-pics">
            <ul>
                <li class="menu-item" v-for='item in menusList'>
                    <div class="menu-item-pic" :style='{backgroundImage:"url("+item.image+")"}'></div>
                    <div class="menu-item-info">
                        <p class="menu-item-title">{{item.title}}</p>
                        <p class="menu-item-desc">{{item.desc}}</p>
                    </div>
                </li>
                <li class="menu-item"></li>
                <li class="menu-item"></li>
                <li class="menu-item"></li>
            </ul>
        </div>
    </div>
</template>

<script>
import "./c-allmenus.scss";
export default {
  data() {
    return {
        menusList:[
            {
                "image": "http://img5.imgtn.bdimg.com/it/u=2172072009,2424386016&fm=21&gp=0.jpg",
                "title": "家常菜",
                "desc": "人人都是美食家"
            },{
                "image": "http://img0.imgtn.bdimg.com/it/u=106526109,2227574691&fm=21&gp=0.jpg",
                "title": "早餐",
                "desc": "一日之计在于晨"
            },{
                "image": "http://img4.imgtn.bdimg.com/it/u=3577833347,4085399559&fm=21&gp=0.jpg",
                "title": "烘焙",
                "desc": "分类很全方子超多"
            },{
                "image": "http://img5.imgtn.bdimg.com/it/u=2781155050,740624581&fm=21&gp=0.jpg",
                "title": "妈妈派",
                "desc": "辅食亲子孕妇餐"
            }
        ]
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>