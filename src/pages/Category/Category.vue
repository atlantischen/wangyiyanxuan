<template>
  <div class="container">
    <div class="header">
      <div class="header_wrapper" @click="$router.push('/search')">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品，共23643款好物</span>
      </div>
    </div>
    <div class="content">
      <div class="tab_list">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            :title="item.name"
            v-for="(item, index) in categoryNav"
            :key="index"
            @click="currentIndex(index)"
          />
        </van-sidebar>
      </div>
      <div class="tab_right" v-if="categoryList" >
        <div class="banner"  >
          <img :src="categoryList.bannerUrl?categoryList.bannerUrl:'https://yanxuan.nosdn.127.net/2ac8dde0444ba9b06991c20087d37967.jpg?quality=75&type=webp&imageView&thumbnail=0x196'" alt="">
        </div>
        <ul class="cateList">
          <li class="cateItem" v-for="(item,index) in categoryList.subCateList" :key="index">
            <img
              :src="item.wapBannerUrl"
              alt=""
            />
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";

import { mapState } from "vuex";
import { Sidebar, SidebarItem } from "vant";
Vue.use(Sidebar);
Vue.use(SidebarItem);

export default {
  data() {
    return {
      activeKey: 0,
      index:0,
    };
  },
  mounted() {
    this.$store.dispatch("getCategoryNav");
  },
  computed: {
    ...mapState(["categoryNav"]),
    categoryList(){
      return this.categoryNav[this.index]
    }

  },
  methods: {
    currentIndex(index){
      this.index = index
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.container
  .header
    height 1.174rem
    padding 0 .4rem
    font-size .37333rem
    display flex
    align-items center
    color #666
    border-bottom 1px solid #ededed
    .header_wrapper
      height .74667rem
      width 100%
      background-color #ededed
      line-height .74667rem
      text-align center
      border-radius .10667rem
      .iconfont
        font-size 16px
        margin-right .15rem
        vertical-align bottom
  .content
    display flex
    .tab_list
      .van-sidebar-item
        padding .3333rem
    .tab_right
      padding .4rem .4rem .28rem
      .banner
        width 100%
        height 2.56rem
        margin-bottom .2rem
        & img
          width 100%
          height 100%
      .cateList
        display flex
        flex-wrap wrap
        // justify-content space-between
        .cateItem
          flex-basis 33%
          display flex
          flex-direction column
          align-items center
          & img
            width 1.92rem
            height 1.92rem
          & span
            height .96rem;
            font-size .32rem
            color #333;
            text-align center
            line-height .48rem
</style>
