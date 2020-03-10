<template>
  <div class="container">
    <div class="header">
      <div class="searchIpt">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" class="ipt" placeholder="请输入">
      </div>
      <div class="quxiao" @click="$router.back()">取消</div>
    </div>
    <div class="search_content">

    </div>
  </div>
</template>

<script type="text/javascript">

export default {
  name: "Search"
  
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.container
  width 100%
  .header
    padding 0 .4rem
    height 1.16rem
    display flex
    align-items center
    .searchIpt
      height .74677rem
      width 100%
      box-sizing border-box
      padding 0 .26667rem
      background-color #f4f4f4
      display flex
      align-items center
      .iconfont
        margin-right .3rem
      .ipt
        width 80% 
        height 100% 
        font-size .37333rem
        background-color #f4f4f4
    .quxiao
      font-size .37333rem 
      margin-left .4rem
      white-space nowrap 
      
</style>
