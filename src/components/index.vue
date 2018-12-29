<template>
  <div class="index">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <div class="swipe_img"><img src="./image/photo1.jpg" />></div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="swipe_img"><img src="./image/photo2.jpg" /></div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="swipe_img"><img src="./image/photo3.jpg" /></div>
      </van-swipe-item> 
    </van-swipe>  
    <van-row>
     <ul class="content">
       <li> 
         <router-link  :to='{path:"/allSelect"}'>
           <span><van-icon size="20px" color="#3991e5" name="shop-collect" />全选</span>
         </router-link></li>
       <li><span><van-icon size="20px" color="#3991e5" name="hot" /></span></li>
       <li><span><van-icon size="20px" color="#3991e5" name="gift-card" /></span></li>
       <li><span><van-icon size="20px" color="#3991e5" name="service" /></span></li>
       <li><span><van-icon size="20px" color="#3991e5" name="fire" /></span></li>
       <li><span><van-icon size="20px" color="#3991e5" name="star" /></span></li>
       <li><span><van-icon size="20px" color="#3991e5" name="like" /></span></li>
       <li><span><van-icon size="20px" color="#3991e5" name="medel" /></span></li> 
     </ul>
    </van-row>
    <van-row>
      <div class="indeVue">vue，一些方法功能的实现。</div>
    </van-row> 
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="fire-o">内容</van-tabbar-item>
      <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script> 
import {flex} from './flexible.js'   
  export default {
    name: 'index',
    data() {
      return {   
        active: 0
      }
    },
    computed: { 
    },
    created() {  
    	this.fit();			
	},
    methods: { 
      //适配
	    fit(){
        flex();
      },  
    },
    watch: {
       
    },
    mounted() {  
    }
  }
</script>

<style lang='less' scoped>
ul,li{
  list-style: none;
} 
a{ text-decoration:none;color: #314050;} 
  .index{
    overflow: hidden;
    font-size: .12rem;
    .swipe_img{
      width: 100%;
      height: 4rem;
      img{
        display: block;
        width: 100%;
        height: 100%; 
      }
    }
    .content{
      width: 100%;
      white-space: nowrap;
      li{
        float: left;
        width: 25%;
        height: 2rem; 
        line-height: 2rem;
        text-align: center;
        color: #314050;
        span{
          display: block;
          width: 100%;
          height: 100%;
          border: #cccccc 0.01rem solid; 
        }
      }
    }
    .indeVue{
      font-size: .28rem;
      color: #ffffff;
      width: 96%;
      margin: .2rem auto;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      background: rgb(44, 212, 235);
      border-radius: 5px;
      box-shadow: 0px 6px 12px -4px rgba(44, 212, 235, 0.8);
    }
  }
</style> 

