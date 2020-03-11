import {
  RECEIVE_TABLIST,
  RECEIVE_CAGEGORYNAV,
  RECEIVE_POLICYDESCLIST,
  RECEIVE_CATEGORYHOTSELLMODULE,
  RECEIVE_FLASHSALEMODULE
} from './mutation-types'
import {
  reqTabList,
  reqCategoryNav,
  reqPolicyDescList,
  reqCategoryHotSellModule,
  reqFlashSaleModule
} from '../api'
export default {
  // 获取tablelist
  async getTabList({
    commit
  }) {
    const result = await reqTabList()
    if (result.code === 0) {
      const tablist = result.data.kingKongList
      commit(RECEIVE_TABLIST, tablist)
    }
  },

  async getCategoryNav({
    commit
  }) {
    const result = await reqCategoryNav()
    if (result.code === 0) {
      const categoryNav = result.data
      commit(RECEIVE_CAGEGORYNAV, categoryNav)
    }
  },

  async getPolicyDescList({
    commit
  }) {
    const result = await reqPolicyDescList()
    if (result.code === 0) {
      const policyDescList = result.data
      commit(RECEIVE_POLICYDESCLIST, policyDescList)

    }
  },
  async getCategoryHotSellModule({
    commit
  }) {
    const result = await reqCategoryHotSellModule()
    if (result.code === 0) {
      const categoryHotSellModule = result.data
      commit(RECEIVE_CATEGORYHOTSELLMODULE, categoryHotSellModule)

    }
  },
  async getFlashSaleModule({
    commit
  }) {
    const result = await reqFlashSaleModule()
    if (result.code === 0) {
      const flashSaleModule = result.data
      commit(RECEIVE_FLASHSALEMODULE, flashSaleModule)
    }
  },

}