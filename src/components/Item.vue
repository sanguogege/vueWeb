<template>
  <div class="items_box">
    <div class="items_item" v-for="item in axero" :key="item.value" :value="item.value">
      <h3 class="item_title">
        <router-link :to="item.id">{{item.title}}</router-link>
      </h3>
      <router-link class="item_img" :to="item.id">
          <i><router-link :to="item.tipUrl">{{item.tip}}</router-link></i>
        <img :src="item.imgUrl" alt />
      </router-link>
      <p class="item_cnt">{{item.text}}</p>
      <p class="item_tips">
        <time>{{item.data}}</time>
        <span class="item_tip">【<router-link :to="item.tipUrl">{{item.tip}}</router-link>】</span>
        <span class="item_more"><router-link :to="item.id">阅读更多</router-link></span>
      </p>
    </div>
  </div>
</template>

<script>

import { IndexGet } from '@/request/api';

export default {
  name: "item",
  data: function() {
    return {
      axero: [
        {
          title: "我是一个前端",
          imgUrl:
            "http://www.yangqq.com/d/file/news/life/2018-06-29/75842f4d1e18d692a66c38eb172a40ab.jpg",
          data: "2019-8-5",
          id: "/note/1234",
          tip: "css心得",
          tipUrl: "note",
          type: "top",
          text:
            "就拿我自己来说吧，有时候会很矛盾，设计好的作品，不把它分享出来，会觉得待在自己电脑里面实在是没有意义。干脆就发布出去吧。我也害怕收到大家不好的评论，有些评论，可能说者无意，但是对于每一个用心的站长来说，都会受很深就拿我自己来说吧，有时候会很矛盾，设计好的作品，不把它分享出来，会觉得待在自己电脑里面实在是没有意义。干脆就发布出去吧。我也害怕收到大家不好的评论，有些评论，可能说者无意，但是对于每一个用心的站长来说，都会受很深 "
        },
        {
          title: "我是一个前端",
          imgUrl:
            "http://www.yangqq.com/d/file/news/life/2018-06-29/75842f4d1e18d692a66c38eb172a40ab.jpg",
          data: "2019-8-5",
          id: "/note/1234",
          tip: "就s心得",
          tipUrl: "note",
          type: "top",
          text:
            "就拿我自己来说吧，有时候会很矛盾，设计好的作品，不把它分享出来，会觉得待在自己电脑里面实在是没有意义。干脆就发布出去吧。我也害怕收到大家不好的评论，有些评论，可能说者无意，但是对于每一个用心的站长来说，都会受很深 "
        },
        {
          title: "我是一个前端",
          imgUrl:
            "http://www.yangqq.com/d/file/news/life/2018-06-29/75842f4d1e18d692a66c38eb172a40ab.jpg",
          data: "2019-8-5",
          id: "/note/1234",
          tip: "扣税",
          tipUrl: "note",
          type: "top",
          text:
            "就拿我自己来说吧，有时候会很矛盾，设计好的作品，不把它分享出来，会觉得待在自己电脑里面实在是没有意义。干脆就发布出去吧。我也害怕收到大家不好的评论，有些评论，可能说者无意，但是对于每一个用心的站长来说，都会受很深 "
        },
        {
          title: "我是一个前端",
          imgUrl:
            "http://www.yangqq.com/d/file/news/life/2018-06-29/75842f4d1e18d692a66c38eb172a40ab.jpg",
          data: "2019-8-5",
          id: "/note/1234",
          tip: "爱生活",
          tipUrl: "note",
          type: "top",
          text:
            "就拿我自己来说吧，有时候会很矛盾，设计好的作品，不把它分享出来，会觉得待在自己电脑里面实在是没有意义。干脆就发布出去吧。我也害怕收到大家不好的评论，有些评论，可能说者无意，但是对于每一个用心的站长来说，都会受很深 "
        }
      ]
    };
  },
  mounted() {
    IndexGet({                    
          type: 0,                    
          sort: 1                
      }).then(res => {
          // 获取数据成功后的其他操作
          console.log("xxx")                
      }) 
  }
};
</script>

<style>
.items_box {
  width: 960px;
  background-color: #fff;
  margin-top: 20px;
  padding: 20px;
}

.items_item {
height: 180px;;
  overflow: hidden;
  border-bottom: #dcdada 1px dashed;
  padding-bottom: 20px;
  position: relative;
  margin-bottom: 20px;
}

.item_title {
    height: 30px;
    line-height: 30px;
  margin: 0 0 10px 0;
  font-size: 18px;
  overflow: hidden;
  color: #333;
  font-weight: bold;
}

.item_img {
    position: relative;
  float: left;
  display: block;
  width: 200px;
  height: 140px;
  margin-right: 20px;
  border-radius: 3px;
  overflow: hidden;
}

.item_img i {
    position: absolute;
    display: block;
    width: 100px;
    font-size: 14px;
    font-style: normal;
    top: 0;
    left: 0;
    background: rgba(18,182,221,.8);
    padding: 3px 5px;
    z-index: 9;
}

.item_img i a {
    display: block;
    color: #FFF;
}

.item_img img {
  width: 200px;
  height: 140px;
}

.item_cnt {
    display: -webkit-box;
    height: 90px;
    line-height: 30px;
    text-align: justify;
    font-size: 16px;
    color: #666;
    overflow: hidden;
}

.item_tips {
    height: 30px;
    margin-top: 10px;
    overflow: hidden;
    color: #999;
    padding-top: 10px;
}

.item_tips time {
    float: left;
    display: block;
    height: 20px;
}

.item_tips .item_tip {
    float: left;
    display: block;
    height: 20px;
}

.item_tips .item_tip a {
    color: #096;
}

.item_tips .item_more {
    float: right;
    display: block;
    height: 30px;
    line-height: 30px;
    display: block;
    padding: 0 10px;
    background: #12b7de;
    border-radius: 3px;
}

.item_tips .item_more a{
    color: #fff;
}
</style>
