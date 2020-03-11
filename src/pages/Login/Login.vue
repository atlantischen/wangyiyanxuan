<template>
  <div class="container">
    <div class="header">
      <i
        class="iconfont icon-Homehomepagemenu"
        @click="$router.push('/home')"
      ></i>
      <div class="header_img">
        <img
          src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp"
          alt=""
        />
      </div>
      <div class="header_icon">
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-gouwuche2"></i>
      </div>
    </div>
    <form class="login_form">
      <div class="login_message">
        <input
          type="text"
          v-model="account"
          placeholder="请输入账号"
          name="account"
          v-validate="'required'"
        />
        <span style="color:red">{{ errors.first("account") }}</span>
      </div>
      <div class="login_pwd">
        <input
          type="password"
          v-model="code"
          placeholder="请输入密码"
          name="code"
          v-validate="'required'"
        />
        <span style="color:red">{{ errors.first("code") }}</span>
      </div>
      <button class="login_btn" @click.prevent="sendCode">登录</button>
    </form>
  </div>
</template>

<script type="text/javascript">
import { reqSmsLogin } from "../../api";
export default {
  data() {
    return {
      account: "",
      code: "",
      user: {}
    };
  },
  methods: {
    async sendCode() {
      const { account, code } = this;
      const names = ['account','code']
      const result = await reqSmsLogin(account, code);
      if (result.code === 0) {
        this.user = result.data;
         //表单整体校验
        const success = await this.$validator.validateAll(names)
        if(success){
          this.$router.push({ name: "profile", params: { user: this.user } });
        } 
      }
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.container
  width 100%
  height 100%
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
  .login_form
    text-align center
    .login_message,.login_pwd
      height 1.68rem
      padding 0 0.39rem
      box-sizing border-box
      line-height 1.28rem
      border 1px solid #F2F5F4
      display flex
      align-items center
      margin-bottom .2rem
      position relative
      & input
        width 80%
        height 0.6rem
        font-size 0.4rem
      & span
        position absolute
        bottom 4px
        font-size .4rem
        line-height 20px
    .login_btn
      background #DD1A21
      font-size 0.4rem
      height 1.28rem
      border-radius 3px
      color #fff
      width 80%
</style>
