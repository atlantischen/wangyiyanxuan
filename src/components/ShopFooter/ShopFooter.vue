<template>
  <div>
    <van-tabbar v-model="active"  active-color="#D86460">
      <van-tabbar-item  name="home" icon="home-o" replace to="/home">首页</van-tabbar-item>
      <van-tabbar-item name="search" icon="coupon-o" replace to="/category">分类</van-tabbar-item>
      <van-tabbar-item name="buy" icon="orders-o" replace to="/buy">值得买</van-tabbar-item>
      <van-tabbar-item name="friends" icon="cart-o" replace to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item name="setting" icon="friends-o" replace to="/profile">个人</van-tabbar-item>
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
      active: 'home'
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus"></style>
