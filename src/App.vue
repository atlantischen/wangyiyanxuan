<template>
  <div id="app">
    <router-view></router-view>
    <ShopFooter v-show="$route.meta.isShowFooter"/>
  </div>
</template>
<script>

import ShopFooter from './components/ShopFooter/ShopFooter'
export default {
  name: 'App',
  components:{
    ShopFooter
  }
  
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    height 100%
      

</style>
