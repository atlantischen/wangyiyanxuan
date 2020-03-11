import axios from './ajax.js'
const BASE = "/api";
export const reqTabList = () => {
    return axios({
      method: 'GET',
      url: '/tablist',
    })
  }
export const reqCategoryNav = () => {
    return axios({
      method: 'GET',
      url: '/cagetorynav',
    })
  }
export const reqPolicyDescList = () => {
  return axios({
    method: 'GET',
    url: '/policyDescList',
  })
}
export const reqCategoryHotSellModule = () => {
  return axios({
    method: 'GET',
    url: '/categoryHotSellModule',
  })
}
export const reqFlashSaleModule = () => {
  return axios({
    method: 'GET',
    url: '/flashSaleModule',
  })
}
// 搜索
export const reqSearchAutoComplete = (keywordPrefix) => {
  return axios({
    method: 'POST',
    url: BASE +`/xhr/search/searchAutoComplete.json`,
    data:{
      keywordPrefix
    }
  })
}

//登录
export const reqSmsLogin = (account, code) => axios({
  method: "POST",
  url: '/login',
  data: {
    account,
    code
  }
})