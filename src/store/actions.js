import {
  RECEIVE_TABLIST,
  RECEIVE_CAGEGORYNAV
} from './mutation-types'
import {
  reqTabList,
  reqCategoryNav
} from '../api'
export default {
  // 获取tablelist
  async getTabList({
    commit
  }) {
    const result = await reqTabList()
    // console.log(result)
    if (result.status === 200) {
      const tablist = result.data.data.kingKongList
      commit(RECEIVE_TABLIST, tablist)
          // console.log(tablist)
    }
  },

  async getCategoryNav({
    commit
  }) {
    const result = await reqCategoryNav()
    if (result.status === 200) {
      const categoryNav = result.data.data
      commit(RECEIVE_CAGEGORYNAV, categoryNav)
      
    }
  },
}