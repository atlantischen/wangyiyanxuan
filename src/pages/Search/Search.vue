<template>
  <div class="search_container">
    <div class="header">
      <div class="searchIpt">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" v-model="searchTxt" class="ipt" @input="IptChange" placeholder="请输入" />
      </div>
      <div class="quxiao" @click="$router.back()">取消</div>
    </div>
    <div class="search_content">
      <ul class="search_ul">
        <li v-for="(item,index) in searchArr" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
import {reqSearchAutoComplete} from '../../api'
export default {
  name: "Search",
  data(){
    return{
      searchTxt:'',
      searchArr:[]
    }
  },
  methods:{
   async IptChange(){
      console.log(this.searchTxt)
      const res =await reqSearchAutoComplete(this.searchTxt)
      this.searchArr=res.data
      
    }
  },
  async mounted(){
    this.IptChange()
  }
  
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.search_container
  width 100%
  font-family PingFangSC-Light,helvetica,'Heiti SC'
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
  .search_content
    .search_ul
      padding-left .4rem
      & li
        height 1.2rem
        font-size .37333rem
        line-height 1.2rem
        border-bottom 1px solid #f4f4f4
</style>
