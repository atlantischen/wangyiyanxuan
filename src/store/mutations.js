import {
  RECEIVE_TABLIST,
  RECEIVE_CAGEGORYNAV,
  RECEIVE_POLICYDESCLIST,
  RECEIVE_CATEGORYHOTSELLMODULE,
  RECEIVE_FLASHSALEMODULE
} from './mutation-types'
export default {
  [RECEIVE_TABLIST](state, tablist) {
    state.tablist = tablist
  },
   [RECEIVE_CAGEGORYNAV](state, categoryNav) {
     state.categoryNav = categoryNav
   },
   [RECEIVE_POLICYDESCLIST](state, policyDescList) {
     state.policyDescList = policyDescList
   },
    [RECEIVE_CATEGORYHOTSELLMODULE](state, categoryHotSellModule) {
      state.categoryHotSellModule = categoryHotSellModule
    },
     [RECEIVE_FLASHSALEMODULE](state, flashSaleModule) {
       state.flashSaleModule = flashSaleModule
     },
  
}