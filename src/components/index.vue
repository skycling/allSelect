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
      <van-col span="6">span: 1</van-col>
      <van-col span="6">span: 2</van-col>
      <van-col span="6">span: 3</van-col>
      <van-col span="6">span: 4</van-col>
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
  .index{
    font-size: 0.12rem;
    .swipe_img{
      width: 100%;
      height: 4rem;
      img{
        display: block;
        width: 100%;
        height: 100%; 
      }
    }
  }
</style> 

