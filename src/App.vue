<template>
  <div id="app">
    <router-view></router-view>
    <ShopFooter/>
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

<style>

</style>
