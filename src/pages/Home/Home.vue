<template>
  <div class="container">
    <div class="header">
      <a class="logo" href="/"></a>
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品，共24243款好物</span>
      </div>
      <div class="login">登录</div>
    </div>
    <div class="content">
      <div class="tab">
        <div class="tabLeft">
          <van-tabs
            line-width="50"
            scrollspy
            sticky
            :border="false"
            activeNames
          >
            <van-tab v-for="index in tabList" :title="index" :key="index">
            </van-tab>
          </van-tabs>
        </div>
        <div class="tabRight">
          <van-icon
            class="arrow"
            @click="isShow"
            :name="showPull ? 'arrow-down' : 'arrow-up'"
            size=".5rem"
          />
        </div>
      </div>
      <div class="swiper">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/3ba8ff890bd557b870733aa78f8d3466.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
                alt=""
              />
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/6420135fe97bdf81cb7c12112885fcc9.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
                alt=""
              />
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/3fa2995d5c384d08ae45664562115254.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
                alt=""
              />
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/be01331fb46a63943357fcb2f2c54e3a.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
                alt=""
              />
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/3c94dee964a791515434c3d13559a82f.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
                alt=""
              />
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/be9724fb7bdeac5846517baba68f9996.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
                alt=""
              />
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/8fc4b255f4595573f0f622a14e10fdb4.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
                alt=""
              />
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/1f5bb4a08cc1c485d16b1638b75e885b.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
                alt=""
              />
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="indexServic">
        <ul class="g-grow">
          <li>
            <a href="">
              <i class="item1"></i>
              <span>网易自营品牌</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="item2"></i>
              <span>30天无忧退货</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="item3"></i>
              <span>48小时快速退款</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="tablist">
        <ul class="tabUl">
          <li class="tabLi" v-for="(list,index) in tablist" :key="index">
            <a href="">
              <div class="tabImg">
                <img
                  :src="list.picUrl"
                  :alt="list.text"
                />
              </div>
              <span>{{list.text}}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="BigPromotion">
        <div class="BigPromotionTop"></div>
        <div class="BigPromotionBottom"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
import {mapState} from 'vuex'
import Swiper from "swiper";

// 引入Swiper的样式
import "swiper/css/swiper.css";
import { Collapse, CollapseItem, Icon, Tab, Tabs } from "vant";
Vue.use(Collapse)
  .use(CollapseItem)
  .use(Icon);
Vue.use(Tab);
Vue.use(Tabs);
export default {
  data() {
    return {
      activeNames: ["1"],
      tabList: [
        "推荐",
        "居家生活",
        "服饰鞋包",
        "美食酒水",
        "个人清洁",
        "母婴亲子",
        "运动旅游",
        "家电数码",
        "全球特色"
      ],
      border: false,
      showPull: true
    };
  },
  methods: {
    isShow() {
      this.showPull = !this.showPull;
    }
  },
  computed: {
    ...mapState(['tablist'])
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      autoplay: true,
      pagination: {
        el: ".swiper-pagination"
        // type:'custom'
      }
    });
    this.$store.dispatch("getTabList");
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.header
  display flex
  align-items center
  padding .21333rem .4rem
  .logo
    background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp')
    background-size: cover
    width 1.84rem
    height .53333rem
    margin-right .26667rem
  .search
    font-size: .37333rem
    background-color: #ededed
    display flex
    justify-content center
    align-items center
    height .74667rem
    width 6rem
    border-radius .10667rem
    color #666;
    .icon-sousuo

      vertical-align middle
      margin-right .13333rem
  .login
    width .98667rem
    height  .53333rem
    line-height .53333rem
    text-align center
    color #DD1A21
    border 1px solid #DD1A21
    border-radius .10667rem
    margin-left .21333rem
    font-size .32rem






























.content
  .tab
    display flex
    .tabLeft
      width 90%
    .tabRight
      width 10%
      text-align center

  .swiper
    width 100%
    height 5rem
    .swiper-container
      height 100%
      --swiper-theme-color: #D86460;
      & img
        width 100%
        height 100%


.indexServic
  width 100%
  .g-grow
    height .96rem
    width 100%
    display flex
    align-items center
    flex-flow row nowrap
    padding 0 .4rem
    box-sizing border-box
    li
      flex 1
      float left
      a
        height .6rem
        display inline-block
        align-items center
        justify-content center
        display flex
        .item1
          width .42667rem
          height .42667rem
          background-image url('https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png')
          background-size 100% 100%
        .item2
          width .42667rem
          height .42667rem
          background-image url('https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png')
          background-size 100% 100%
        .item3
          width .42667rem
          height .42667rem
          background-image url('https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png')
          background-size 100% 100%
        span
          font-size .3rem
          margin-left .10667rem
          color #333
          line-height .42667rem
          font-family PingFangSC-Light,helvetica,'Heiti SC';


.tablist
  width 100%
  .tabUl
    width 100%
    display flex
    flex-wrap wrap
    .tabLi a
      display flex
      flex-direction column
      width 1.46667rem
      height 2.08rem
      margin .13333rem .26667rem 0
      .tabImg
        width 1.46667rem
        height  1.46667rem
        & img
          width 1.46667rem
          height  1.46667rem
      & span
        margin-top .13333rem
        text-align center
        font-size .32rem
        line-height .48rem
        color #333333
        white-space nowrap
</style>
