<template>
  <div class="profile_container">
    <div class="header">
      <i class="iconfont icon-Homehomepagemenu" @click="$router.push('/home')"></i>
      <div class="header_img">
        <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp" alt="">
      </div> 
      <div class="header_icon">
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-gouwuche2"></i>
      </div>
    </div>
    <div class="login_content">
      <div class="loginWrap">
        <img src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
      </div>
      <div class="btnWrap">
        <div class="phone_btn" @click="$router.push('/login')">
          <i class="iconfont icon-shouji"></i>
          <span>账号密码快捷登录</span>
        </div>
        <div class="email_btn">
          <i class="iconfont icon-youxiang"></i>
          <span>邮箱账号登录</span>
        </div>
      </div>
      <div class="thirdWrap">
        <div class="itemWrap">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </div>
         <div class="itemWrap">
          <i class="iconfont icon-QQ"></i>
          <span>QQ</span>
        </div>
         <div class="itemWrap">
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </div>
      </div>
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
.profile_container
  width 100%
  height 100%
  background-color #F2F5F4
  .header
    height 1.1733rem
    padding 0 .26667rem
    display flex
    align-items center
    border-bottom 1px solid #D9D9D9
    .header_img
      flex 7
      text-align center
      & img
        width 1.84rem
        height .633rem   
    & i
      flex 1
      font-size 26px
    .header_icon  
      .icon-gouwuche2
        margin-left .2rem
  .login_content
    .loginWrap
      padding-top 2.13333rem
      padding-bottom 3.0933rem
      text-align center
      & img
        width 3.57333rem
        height 1.2rem
    .btnWrap
      font-size .37333rem  
      padding  0 .53333rem
      .phone_btn, .email_btn
        width 100%
        height 1.25333rem
        line-height 1.25333rem 
        text-align center
        box-sizing border-box
        border-radius .1rem
      .phone_btn
        background-color #DD1A21 
        color #fff
        margin-bottom .5rem
      .email_btn
        background-color #fff
        color #DD1A21
        border 1px solid #DD1A21
    .thirdWrap
      position absolute
      width 100%
      left 0
      bottom 1.06667rem
      height .53333rem
      text-align center
      display flex  
      justify-content center 
      .itemWrap
        font-size .37333rem
        color #7F7F7F 
        height .53333rem
        border-right 1px solid #979797
        padding 0 .53333rem
        &:last-child
          border-right none
       
         


</style>
q