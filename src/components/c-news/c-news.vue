<template>
    <div id="hotNews" class="c-news">
        <div class="hot-news-title">最In资讯，等你看</div>
        <ul class="hot-news-con">
            <li class="hot-news-item" v-for='item in newsList'>
                <div class="pic" :style='{backgroundImage:"url("+item.image+")"}'></div>
                <div class="news-desc">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import "./c-news.scss";
export default {
  data() {
    return {
        newsList: [
            {
                image: 'https://www.wenba.ca/uploads/article/20160303/2ddff1c86ab73e44510dca4d841713ce.jpg',
                title: '农场哪里租，看过来',
                desc: '等你来品尝'
            },
            {
                image: 'http://034882638.tw.tranews.com/images/Info/Y006200000001_1_1.jpg',
                title: '真好吃',
                desc: '等你来品尝哦'
            },
            {
                image: 'http://eulifejourney.com/wp-content/uploads/2014/05/IMG_0551.jpg',
                title: '美味食物，真好吃',
                desc: '等你来品尝哦哦'
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