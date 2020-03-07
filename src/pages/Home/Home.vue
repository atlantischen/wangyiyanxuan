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
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {};
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
    .icon-sousuo
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
</style>
