<template>
  <div class="menu-wrapper" ref="wrapper">
    <div class="container">
      <div class="header">
        <a class="logo" href="/"></a>
        <div class="search" @click="$router.push('search')">
          <i class="iconfont icon-sousuo"></i>
          <span>搜索商品，共24243款好物</span>
        </div>
        <div class="login">登录</div>
      </div>
      <div class="home_content">
        <div class="tab">
          <div class="tabLeft">
         
            <van-tabs :border="false" line-width="50">
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
            <li class="tabLi" v-for="(list, index) in tablist" :key="index">
              <a href="">
                <div class="tabImg">
                  <img :src="list.picUrl" :alt="list.text" />
                </div>
                <span>{{ list.text }}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="BigPromotion">
          <div class="BigPromotionTop">
            <a href="">
              <div class="image">
                <img
                  src="https://yanxuan-item.nosdn.127.net/b185affb7b7f74810d37d6bdf56925fa.png?imageView&thumbnail=168x0&quality=75"
                  alt=""
                />
              </div>
            </a>
          </div>
          <div class="BigPromotionBottom">
            <div class="BigPromotionBottom_top">
              <a href="" v-for="index in 2" :key="index"></a>
            </div>
            <div class="BigPromotionBottom_bottom">
              <div
                class="BigPromotionBottom_bottom_item"
                v-for="index in 3"
                :key="index"
              >
                <span>48H限时购</span>
                <span>女王专属7折起</span>
                <img
                  src="https://yanxuan-item.nosdn.127.net/0434f5cb29b2c6c6ade2f1c0487ae97c.png?quality=75&type=webp&imageView&thumbnail=160x160"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="freshmanModule">
          <div class="freshmanModule_title">
            <span>新人专享礼</span>
          </div>
          <div class="freshmanModule_content">
            <div class="freshmanModule_left">
              <div class="content_left">新人专享礼包</div>
              <div class="content_right">
                <img
                  src="https://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png"
                  alt=""
                />
              </div>
            </div>
            <div class="freshmanModule_right">
              <div class="inner_top">
                <div class="module_top">
                  <span class="span1">福利社</span>
                  <span class="span2">今日特价</span>
                </div>
                <div class="module_bottom">
                  <img
                    src="https://yanxuan-item.nosdn.127.net/2c0147161faaa160cf10b6770f1e290d.png?quality=75&type=webp&imageView&thumbnail=200x200"
                    alt=""
                  />
                  <div class="price">
                      <span class="price1">￥15.9</span>
                      <span class="price2">￥17.9</span>
                  </div>
                </div>
              </div>
              <div class="inner_bottom">
                <div class="module1">新人拼团</div>
                <div class="module2">1元起包邮</div>
              </div>
            </div>
          </div>
        </div>
        <div class="category">
          <h2 class="category_header">类目热销榜</h2>
          <div class="category_content">
            <div class="content_top">
              <div class="content_top_left" v-for="index in 2" :key="index">
                <span class="left1">热销榜</span>
                <img class="left2" src="https://yanxuan-item.nosdn.127.net/74662d24f6d217b520178c5a6d031457.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
              </div>
            </div>
            <div class="content_bottom">
              <ul>
                <li v-for="index in 8" :key="index">
                  <span >居家生活榜</span>
                  <img src="https://yanxuan-item.nosdn.127.net/644a27b8e168b8fe8e43ccaad934b24e.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flashsSaleModule">
          <div class="module_title">
            <span class="title1">限时购</span>
            <span class="hours">00</span>
            <span class="colon">:</span>
            <span class="mins">00</span>
            <span class="colon">:</span>
            <span class="secs">00</span>
            <span class="more">更多 &gt;</span>
          </div>
          <div class="module_content">
            <div class="detail" v-for="index in 6" :key="index">
              <div class="detail_img">
                <img src="https://yanxuan-item.nosdn.127.net/5dcf53ef74855d4f5f7c0554ce04a663.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
              </div>
              <span class="new_price">￥4899</span>
              <span class="old_price">￥6999</span>
            </div>
          </div>
        </div>
        <div class="newItemMoudle">
          <div class="newItemMoudle_title">
            <span class="newItemMoudle_news">新品收发</span>
            <span class="newItemMoudle_more">更多 &gt;</span>
          </div>
          <ul class="newItemMoudle_content">
            <li class="content_list" v-for="index in 6" :key="index">
              <div class="list_img">
                 <img src="https://yanxuan-item.nosdn.127.net/7e338fd0d5679ad6f73e6f277f9edd95.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
              </div>
              <span class="newItemMoudle_dec">复工装备随声防护日本空气净化除菌卡</span>
              <span class="newItemMoudle_price">￥79</span>
              <span class="newItemMoudle_discount">满99减10</span>
            </li>
          </ul>
        </div>
        <div class="ShopGuideModule">
          <ul class="ShopGuideModule_lists">
            <li class="ShopGuideModule_list" v-for="index in 4" :key="index">
              <span class="ShopGuideModule_title1">断货补单王</span>
              <span class="ShopGuideModule_title2">补仓疯狂中</span>
              <div class="ShopGuideModule_img">
                <img src="https://yanxuan-item.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
                <img src="https://yanxuan-item.nosdn.127.net/445689c4faa55f8186c500e68bff73d6.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
              </div>
            </li>
          </ul>
        </div>
        <div class="footer">
          <div class="footer_item">
            <a class="download" href="">下载APP</a>
            <a href="">电脑版</a>
          </div>
          <span>网易公司版权所有 © 1997-2020</span>
          <span>食品经营许可证：JY13301080111719</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
import { mapState } from "vuex";
import Swiper from "swiper";
import BScroll from "better-scroll";
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
      // activeNames: [""],
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
    ...mapState(["tablist"])
  },
  mounted() {
     // 这里代码都注释
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      autoplay: true,
      pagination: {
        el: ".swiper-pagination"
        // type:'custom'
      }
    });
     
    this.$nextTick(()=>{
      this.scroll = new BScroll(this.$refs.wrapper, {});
    })
    this.$store.dispatch("getTabList"); 
    
  
    
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.menu-wrapper
  height 100%
  .container
    background-color #EEEEEE 
    width 100%
    .header
      display flex
      align-items center
      background-color #fff
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
    .home_content
      width 100%
      .tab
        display flex
        width 100%
        height 1.17333rem
        .tabLeft
          width 90%
        .tabRight
          background-color #fff
          width 10%
          text-align center
      .swiper
        width 100%
        height 5rem
        .swiper-container
          .swiper-wrapper
            .swiper-slide
            img
              width 100%
              height 100%
      .indexServic
        width 100%
        .g-grow
          background-color #fff
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
                white-space: nowrap


      .tablist
        width 100%
        background-color #fff
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

      .BigPromotion
        background-color #cc3256
        .BigPromotionTop
          height 3.2rem
          width 100%
          & a
            display block
            position relative
            width 100%
            height 3.2rem
            background-image url('https://yanxuan.nosdn.127.net/c17a7a8392d68bb81e28993303185f30.gif?imageView&quality=75')
            background-size 100% 100%
            .image
              position absolute
              top 14%
              left 10%
              width 2.24rem
              height 2.24rem
              & img
                width 100%
                height 100%


        .BigPromotionBottom
          width 100%
          .BigPromotionBottom_top
            height 2.48rem;
            margin .26667rem .26667rem .10667rem .26667rem;
            display flex
            justify-content space-between
            & a
              display inline-block
              height 100%
              width 4.68rem
              background url('https://yanxuan.nosdn.127.net/48f036a0cbf8c6f649c3a057b2849ed8.png?quality=75&type=webp&imageView&thumbnail=375x0')
              background-size 100% 100%
          .BigPromotionBottom_bottom
            height 2.9rem
            display flex
            align-items center
            justify-content space-between
            margin .26667rem
            padding-bottom .26667rem
            .BigPromotionBottom_bottom_item
              display flex
              flex-direction column
              align-items center
              justify-content space-between
              background url('https://yanxuan.nosdn.127.net/00ce570b5344d3ab52e98427df5aaf3c.png?quality=75&type=webp&imageView&thumbnail=250x0')
              background-size 100% 100%
              flex-basis 32%
              & span
                font-size .26667rem;
                line-height .4rem;
                margin-top .1rem
              & img
                width 1.86667rem;
                height 1.86667rem

      .freshmanModule
        background-color #fff
        margin .2677rem 0
        .freshmanModule_title
          height 1.2rem
          width 100%
          line-height: 1.2rem
          text-align center
          font-family PingFangSC-Regular
          font-size .42667rem
          & span
            display inline-block
            position relative
            &::before
              content '';
              position absolute
              left -.6rem
              top 50%
              width .32rem
              height .04rem
              background #333
            &::after
              content '';
              position absolute
              right -.6rem
              top 50%
              width .32rem
              height .04rem
              background #333
        .freshmanModule_content
          display flex
          width 100%
          padding 0 .4rem .4rem .4rem
          box-sizing border-box
          .freshmanModule_left
            background-color #F9E9CF
            width 4.57333rem
            height 5.78667rem
            margin-right .05333rem
            border-radius .05333rem
            .content_left
              font-family PingFangSC-Medium
              font-size .42667rem
              padding .4rem 0 0 .4rem
            .content_right
              display flex
              align-items center
              justify-content center
              width 3.44rem;
              height 3.42667rem
              margin .49333rem auto;
              & img
                width 3.44rem
                height 3.42667rem
          .freshmanModule_right
            .inner_top
              background #FBE2D3
              border-radius 4px
              width 4.57333rem
              height 2.86667rem
              margin-bottom .05333rem
              position relative
              .module_top
                display flex
                flex-direction column
                padding .26667rem 0 0 0.4rem
                box-sizing border-box
                .span1 
                  font-family PingFangSC-Medium
                  font-size .42667rem
                  margin .1rem 0
                .span2
                  color #7F7F7F 
                  font-size .32rem;
              .module_bottom
                width 2.66667rem
                height 2.66667rem
                position absolute
                top 0
                right 0
                .price
                  width 1.16667rem
                  height 1.16667rem
                  opacity .8
                  background #F59524
                  color #fff
                  border-radius 50%
                  display flex
                  align-items center
                  justify-content center
                  flex-direction column
                  position absolute
                  top .2rem
                  right .2rem
                  .price1
                    padding-top .13333rem
                    font-size .32rem
                  .price2
                    font-size .26667rem
                    text-decoration line-through
                & img
                  width 2.66667rem
                  height 2.66667rem 
            .inner_bottom
              background #FFECC2
              border-radius 4px
              width 4.57333rem
              height 2.86667rem
              padding 0.26667rem 0 0 0.4rem
              box-sizing border-box
              .module1
                font-family PingFangSC-Medium
                font-size .42667rem
              .module2
                width max-content
                background #CBB693
                border-radius .05333rem
                color #fff
                font-size .29333rem 
                padding .1rem
                box-sizing border-box
                margin-top .1rem
              
      .category
        margin-bottom .2677rem
        .category_header
          width 100%
          height 1.33333rem
          line-height 1.33333rem
          padding 0 .4rem
          box-sizing border-box
          background #fff
          overflow hidden
          font-size .42667rem
          font-family PingFangSC-Regular
        .category_content 
          padding 0 .26667rem .26667rem .4rem
          box-sizing border-box
          background-color #fff
          .content_top
            display flex
            .content_top_left
              width 4.53333rem
              height 2.66667rem
              margin-right .13333rem
              margin-bottom .1333rem
              border-radius .0533rem
              background #F9F3E4
              display flex
              align-items center
              justify-content space-around
              .left1
                color  #333
                font-family PingFangSC-Medium
                font-size .37333rem
                position relative
                &::after
                  content '';
                  position absolute
                  bottom -.211rem
                  left 0
                  width .64rem
                  height .05rem
                  background #333

              .left2 
                width 2.66667rem
                height 2.66667rem 

          .content_bottom
            ul  
              display flex
              flex 1
              flex-wrap wrap
              justify-content space-around
            & li
              display flex
              flex-direction column
              align-items center
              justify-content center
              background #F5F5F5
              margin 0 .13333rem .13333rem 0
              width: 2.2rem;
              height: 2.4rem;
              & span
                text-align center
                font-size .32rem
                color #333
                font-family PingFangSC-Medium
              & img  
                width 1.6rem
                height 1.6rem
      .flashsSaleModule
        width 100%
        padding 0 .4rem
        box-sizing border-box
        background #fff
        margin-bottom .26667rem
        .module_title
          display flex
          align-items center
          position relative
          height 1.33333rem
          line-height 1.33333rem
          .title1
            font-size .42667rem
            font-family PingFangSC-Regular
            line-height initial
          .hours, .mins, .secs
            display inline-block
            font-size .32rem
            line-height .48rem
            width .48rem
            height .48rem
            text-align center
            background-color #333
            border-radius .05333rem
            color #fff
            margin 0 .13333rem; 
          .colon
            font-size .37333rem  
          .more
            position absolute
            right 0
            font-size .37333rem
            color #333
            line-height 1.33333rem  

        .module_content
          display flex
          flex-wrap wrap
          justify-content space-between
          .detail
            color #333
            text-align center
            // margin-right .26667rem
            // padding-bottom .4rem
            flex-basis 30%
            .detail_img 
              background-color #EEEE
              & img
                width 2.88rem
                height 2.88rem
            .new_price
              font-size .37333rem
              color #DD1A21
              margin-right .16rem
            .old_price
              font-size .32rem
              color #7F7F7F
              text-decoration line-through      
      .newItemMoudle
        margin-bottom .26667rem
        .newItemMoudle_title
          width 100%
          height 1.33333rem
          padding 0 .4rem
          box-sizing border-box
          background #fff
          display flex
          align-items center
          justify-content space-between
          .newItemMoudle_news
            font-size .42667rem
            font-family PingFangSC-Regular
          .newItemMoudle_more
            font-size .37333rem
            color #333
        .newItemMoudle_content
          background-color #fff
          display flex
          flex-wrap wrap
          justify-content space-between
          padding 0 0.4rem
          box-sizing border-box
          .content_list
            flex-basis 30%
            display flex
            flex-direction column
            .list_img
              width 2.88rem
              height 2.88rem
              background-color #EEE
              margin-bottom .3rem
            & img
              width 2.88rem
              height 2.88rem
            .newItemMoudle_dec
              font-size .32rem
              white-space normal
            .newItemMoudle_price
              font-size .42667rem
              line-height .64rem
              color #DD1A21
            .newItemMoudle_discount
              margin-bottom .06667rem
              height .4rem
              padding 0 .10667rem
              line-height .4rem
              color #DD1A21;
              background rgba(255,255,255,.9)
              border 1px solid #DD1A21
              border-radius .2rem
              font-size .24rem
              width  max-content


      .ShopGuideModule
        background-color #fff
        padding .13333rem .4rem .4rem .34667rem
        box-sizing border-box
        .ShopGuideModule_lists
          display flex
          flex-wrap wrap
          .ShopGuideModule_list
            width 4.57333rem
            height 3.52rem
            background-color #EEE
            margin .05333rem 0 0 .05333rem
            padding .26667rem 0 0 .26667rem
            box-sizing border-box
            border-radius .05333rem
            display flex
            flex-direction column
            .ShopGuideModule_title1
              font-size .42667rem
              font-family PingFangSC-Medium
              margin-bottom  .2rem
            .ShopGuideModule_title2
              font-size .32rem;
            .ShopGuideModule_img
              & img
                width 2rem
                height 2rem

      .footer
        padding .72rem .26667rem .37333rem
        background-color  #333
        box-sizing border-box
        display flex
        flex-direction column
        align-items center
        margin-bottom 50px
        .footer_item
          display flex
          margin-bottom .48rem
        & a
          font-size .32rem
          width 1.5rem
          border 1px solid #999
          padding .3rem .5rem
          color #fff
          text-align center
          // margin-left .6rem
        .download
          margin-right .6rem
          
        & span
          font-size .32rem
          line-height .42667rem
          color #999



</style>
