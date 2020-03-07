import {
  RECEIVE_TABLIST
} from './mutation-types'
export default {
  [RECEIVE_TABLIST](state, tablist) {
    state.tablist = tablist
  },
  
}