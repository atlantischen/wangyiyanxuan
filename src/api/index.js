import axios from 'axios'
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