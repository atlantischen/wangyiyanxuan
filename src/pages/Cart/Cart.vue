<template>
  <div class="shopCart">
    <div class="header">
      <span class="cart">购物车</span>
      <span class="coupon">领券</span>
    </div>
    <ul class="servicePolicy">
      <li class="item">
        <i></i>
        <span>30天无忧退货</span>
      </li>
      <li class="item">
        <i></i>
        <span>48小时快速退款</span>
      </li>
      <li class="item">
        <i></i>
        <span>满88元免邮费</span>
      </li>
    </ul>
    <div class="defaultPage">
      <div class="cart_img" ></div>
      <div class="login_btn">登录</div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {};
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.shopCart
  background-color #f4f4f4
  height 100%
  font-family PingFangSC-Light,helvetica,'Heiti SC'
  .header
    background-color #fff
    height 1.17333rem
    padding 0 .26777rem
    display flex
    align-items center
    justify-content space-between
    .cart
      font-size .48rem
    .coupon
      font-size .4rem
      color #DD1A21
  .servicePolicy
    height .93333rem
    display flex
    align-content center
    justify-content space-between
    background-color #eee
    padding 0 .26777rem
    .item
      display flex
      align-items center
      font-size: .32rem;
      color: #666;
      i
        width .13333rem
        height .13333rem
        background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-de15fb68d3.png?imageView&type=webp')
        background-repeat no-repeat
        background-size cover
        margin-right .2rem
       
          
        
  .defaultPage
    position fixed
    bottom 6.5rem
    left 50%
    transform translate(-50%)
    .cart_img
      background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp')
      background-size 100%
      width 3.30667rem
      height 3.30667rem
      margin 0 auto
    .login_btn
      width 6.4rem
      height 1.22667rem
      background-color #DD1A21
      font-size .4rem
      line-height 1.22667rem
      text-align center
      border-radius .04rem
      color #fff

</style>
