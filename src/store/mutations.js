import {
  RECEIVE_TABLIST,
  RECEIVE_CAGEGORYNAV
} from './mutation-types'
export default {
  [RECEIVE_TABLIST](state, tablist) {
    state.tablist = tablist
  },
   [RECEIVE_CAGEGORYNAV](state, categoryNav) {
     state.categoryNav = categoryNav
   },
  
}