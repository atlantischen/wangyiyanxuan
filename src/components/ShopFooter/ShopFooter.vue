<template>
  <div>
    <van-tabbar v-model="active" route active-color="#D86460">
      <van-tabbar-item   icon="home-o" replace to="/home">首页</van-tabbar-item>
      <van-tabbar-item  icon="coupon-o" replace to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="orders-o" replace to="/buy">值得买</van-tabbar-item>
      <van-tabbar-item  icon="cart-o" replace to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item  icon="friends-o" replace to="/profile">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  name: "ShopFooter",
    data() {
    return {
      active: '0'
    }
  },
 
  
};
</script>

<style lang="stylus" rel="stylesheet/stylus"></style>
