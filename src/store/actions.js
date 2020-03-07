import {
  RECEIVE_TABLIST
} from './mutation-types'
import {
  reqTabList,
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
}